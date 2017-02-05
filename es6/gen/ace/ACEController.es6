'use strict';

class ACEController {

    static init() {
        ACEController.timeLine = [];
        ACEController.timeLineLocalStorageChunks = [];
        ACEController.writeTimeLine = true;
        ACEController.listeners = {};
        ACEController.registerListener('TriggerAction', ACEController.triggerAction);
        ACEController.actionIsProcessing = false;
        ACEController.actionQueue = [];
        ACEController.uuidGenerator = new UUID();
        ACEController.LIVE = 1;
        ACEController.REPLAY = 2;
        ACEController.E2E = 3;
        ACEController.execution = ACEController.LIVE;
        ACEController.replayTimeLine = [];
        sessionStorage.clear();
    }

	static registerListener(eventName, listener) {
		if (!eventName.trim()) {
			throw new Error('cannot register listener for empty eventName');
		}
		if (!listener) {
			throw new Error('cannot register undefined listener for event ' + eventName);
		}
		var listenersForEventName;
		if (ACEController.listeners[eventName] === undefined) {
			ACEController.listeners[eventName] = [];
		}
		listenersForEventName = ACEController.listeners[eventName];
		listenersForEventName.push(listener);
	}

    static addItemToTimeLine(item) {
        let timestamp = new Date();
        item.timestamp = timestamp.getTime();
        if (ACEController.execution === ACEController.LIVE) {
            if (ACEController.writeTimeLine) {
                if (ACEController.timeLine.length > 100 && item.action && item.action.actionName === 'InitAction') {
                    let timestampInMillis  = timestamp.getTime();
                    try {
                        sessionStorage[timestampInMillis] = JSON.stringify(ACEController.timeLine, null, 2);
                        ACEController.timeLineLocalStorageChunks.push(timestampInMillis);
                        if (ACEController.timeLineLocalStorageChunks.length > 10) {
                            ACEController.timeLineLocalStorageChunks.shift();
                        }
                    } catch (exception) {
                        ACEController.writeTimeLine = false;
                    }
                    ACEController.timeLine = [];
                }
                ACEController.timeLine.push(JSON.parse(JSON.stringify(item)));
            }
        } else {
            ACEController.replayTimeLine.push(JSON.parse(JSON.stringify(item)));
        }
    }

    static getCompleteTimeline() {
        var completeTimeline = [];
        for(var i=0; i<ACEController.timeLineLocalStorageChunks.length; i++) {
            let timelineChunk = sessionStorage[ACEController.timeLineLocalStorageChunks[i]];
            completeTimeline.push.apply(completeTimeline, JSON.parse(timelineChunk));
        }
        completeTimeline.push.apply(completeTimeline, ACEController.timeLine);
        return completeTimeline;
    }

    static downloadTimeline() {
        let timelineJson = JSON.stringify(ACEController.getCompleteTimeline(), null, 2);

        let a = window.document.createElement('a');
        a.href = window.URL.createObjectURL(new Blob([timelineJson], {type: 'text/json'}));
        a.download = 'scenario.json';

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
    }

    static uploadTimeline(event) {
        ACEController.clearReplayResultDiv();

        var input = event.target;
        var reader = new FileReader();
        reader.onload = function () {
            let json = reader.result;
            ACEController.timeLine = JSON.parse(json);
            document.getElementById("uploadTimelineInputField").value = "";
        };
        reader.readAsText(input.files[0]);
    }

    static addActionToQueue(action) {
        if (ACEController.execution === ACEController.LIVE) {
            ACEController.actionQueue.push(action);
            if (ACEController.actionIsProcessing === false) {
                ACEController.actionIsProcessing = true;
                ACEController.applyNextActions();
            }
        }
    }

    static applyNextActions() {
        let action = ACEController.actionQueue.shift();
        if (action) {
            action.applyAction().then(() => {
            }, (error) => {
                ACEController.actionIsProcessing = false;
                throw error + " when applying action " + action.actionName;
            });
        } else if (action === undefined) {
            ACEController.actionIsProcessing = false;
            if (ACEController.execution !== ACEController.LIVE) {
                ACEController.finishReplay();
            }
        }
    }

    static triggerAction(action) {
        ACEController.addActionToQueue(action);
    }

    static clearReplayResultDiv() {
        if (document.getElementById("replayResultDiv")) {
            let table = document.getElementById("replayResultDiv");
            var rowCount = table.rows.length;
            while (--rowCount) {
                table.deleteRow(rowCount);
            }
            table.rows[0].className = '';
        }
    }

    static replay() {
        ACEController.startReplay(ACEController.REPLAY)
    }

    static e2e() {
        ACEController.startReplay(ACEController.E2E)
    }

    static startReplay(level) {
        ACEController.passed = undefined;
        ACEController.expectedTimeLine = [];
        ACEController.replayTimeLine = [];
        ACEController.pauseInMillis = undefined;

        ACEController.clearReplayResultDiv();

        var actions = [];
        var completeTimeLine = ACEController.getCompleteTimeline();
        for (let i = 0; i < completeTimeLine.length; i++) {
            let item = completeTimeLine[i];
            ACEController.expectedTimeLine.push(item);
            if (item.action) {
                var action = eval('new ' + item.action.actionName + '(item.action.actionParam)');
                action.actionData.uuid = item.action.actionData.uuid;
                actions.push(action);
            }
        }

        ACEController.actionQueue = actions;

        if (document.getElementById('pauseInMillisInput')) {
            ACEController.pauseInMillis = document.getElementById('pauseInMillisInput').value;
        }

        ACEController.execution = level;

        ACEController.applyNextActions();
    }

    static getCommandByUuid(uuid) {
        for (let i = 0; i < ACEController.expectedTimeLine.length; i++) {
            let item = ACEController.expectedTimeLine[i];
            if (item.command && item.command.commandParam.uuid === uuid) {
                return item.command;
            }
        }
    }

    static finishReplay() {
        ACEController.passed = true;
        if (document.getElementById("replayResultDiv")) {
            let table = document.getElementById("replayResultDiv");
            for (let i = 0; i < ACEController.expectedTimeLine.length; i++) {
                let expectedItem = ACEController.expectedTimeLine[i];
                let actualItem = undefined;
                if (i < ACEController.replayTimeLine.length) {
                    actualItem = ACEController.replayTimeLine[i];
                }

                let rowAbstract = table.insertRow(table.rows.length);
                rowAbstract.insertCell(0);
                let original = rowAbstract.insertCell(1);
                let actual= rowAbstract.insertCell(2);
                rowAbstract.insertCell(3);
                original.innerHTML = '<a onclick=\'toggleVisibilityOfRow("row_' + i + '")\'>' + ACEController.abstractText(expectedItem) + '</a>';
                actual.innerHTML = '<a onclick=\'toggleVisibilityOfRow("row_' + i + '")\'>' + ACEController.abstractText(actualItem) + '</a>';

                let row = table.insertRow(table.rows.length);
                row.id = "row_" + i;
                row.style = "display: none;";
                let originalExpectedItemCell = row.insertCell(0);
                let expectedItemCell = row.insertCell(1);
                let actualItemCell = row.insertCell(2);
                let originalActualItemCell = row.insertCell(3);
                originalExpectedItemCell.innerHTML = '<pre style="font-size: 10px;">' + JSON.stringify(expectedItem, null, 2) + '</pre>';
                expectedItemCell.innerHTML = '<pre style="font-size: 10px;">' + JSON.stringify(expectedItem, ACEController.verificationCleanupFunction, 2) + '</pre>';
                actualItemCell.innerHTML = '<pre style="font-size: 10px;">' + JSON.stringify(actualItem, ACEController.verificationCleanupFunction, 2) + '</pre>';
                originalActualItemCell.innerHTML = '<pre style="font-size: 10px;">' + JSON.stringify(actualItem, null, 2) + '</pre>';
                if (JSON.stringify(expectedItem, ACEController.verificationCleanupFunction) === JSON.stringify(actualItem, ACEController.verificationCleanupFunction)) {
                    row.className = 'success';
                    rowAbstract.className = 'success';
                } else {
                    row.className = 'danger';
                    rowAbstract.className = 'danger';
                    ACEController.passed = false;
                }
            }
            if (ACEController.passed) {
                table.rows[0].className = 'success';
            } else {
                table.rows[0].className = 'danger';
            }
        }

        ACEController.actionIsProcessing = false;
        ACEController.actionQueue = [];
        ACEController.execution = ACEController.LIVE;
    }

    static abstractText(item) {
        if (item.action) {
            return "A " + item.action.actionName;
        }
        if (item.command) {
            return "C " + item.command.commandName;
        }
        if (item.event) {
            var triggerActionName = item.event.eventName === 'TriggerAction' ? " " + item.event.eventParam.actionName : "";
            return "E " + item.event.eventName + triggerActionName;
        }
    }

}

ACEController.init();

/*       S.D.G.       */

