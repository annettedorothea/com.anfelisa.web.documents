'use strict';

class ReplayUtils {

    static replayVerification(actualIndex, expectedIndexStart, expectedIndexEnd) {
		const actualTimelineItems = ACEController.replayTimeline.slice(actualIndex);
		const expectedTimelineItems = ACEController.timeline.slice(expectedIndexStart, expectedIndexEnd);
    }

    static resetDatabase() {
        return new Promise((resolve) => {
            $.ajax({
                url: 'replay/database/reset',
                type: 'delete',
                headers: {
                    'Accept': 'text/plain',
                    'Content-Type': 'application/json'
                },
                success: function () {
                    resolve();
                },
                error: function (jqxhr, textStatus, error) {
                    reject(`reset database failed with ${jqxhr.status}: ${jqxhr.statusText} - ${jqxhr.responseText}`);
                }
            });
        });
    }

    static prepareAction(uuid) {
        if (ACEController.execution === ACEController.E2E) {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: 'replay/database/prepare?uuid=' + uuid,
                    type: 'put',
                    headers: {
                        'Accept': 'text/plain',
                        'Content-Type': 'application/json'
                    },
                    success: function () {
                        resolve();
                    },
                    error: function (jqxhr, textStatus, error) {
                        reject(error);
                    }
                });
            });
        } else {
            return new Promise((resolve) => {
                resolve();
            });
        }
    }

    static replay() {
        ReplayUtils.clearReplayResultDiv();
        ACEController.replay(ReplayUtils.readPauseInMillis())
    }

    static e2e() {
        ReplayUtils.clearReplayResultDiv();
        ACEController.e2e(ReplayUtils.readPauseInMillis())
    }

    static readPauseInMillis() {
        if (document.getElementById('pauseInMillisInput')) {
            return document.getElementById('pauseInMillisInput').value;
        }
        return 0;
    }

    static uploadTimeline() {
        ReplayUtils.clearReplayResultDiv();

        const input = event.target;
        const reader = new FileReader();
        reader.onload = function () {
            const json = reader.result;
            ACEController.initTimeline(JSON.parse(json));
            document.getElementById("uploadTimelineInputField").value = "";
        };
        reader.readAsText(input.files[0]);
	}

    static clearReplayResultDiv() {
        if (document.getElementById("replayResultDiv")) {
            let table = document.getElementById("replayResultDiv");
            let rowCount = table.rows.length;
            while (--rowCount) {
                table.deleteRow(rowCount);
            }
            table.rows[0].className = '';
        }
    }

    static finishReplay() {
        ACEController.passed = true;
        if (document.getElementById("replayResultDiv")) {
            let table = document.getElementById("replayResultDiv");
            for (let i = 0; i < ACEController.expectedTimeLine.length; i++) {
                let expectedItem = ACEController.expectedTimeLine[i];
                let actualItem = undefined;
                if (i < ACEController.actualTimeline.length) {
                    actualItem = ACEController.actualTimeline[i];
                }

                let rowAbstract = table.insertRow(table.rows.length);
                rowAbstract.insertCell(0);
                let original = rowAbstract.insertCell(1);
                let actual = rowAbstract.insertCell(2);
                rowAbstract.insertCell(3);
                original.innerHTML = '<a onclick=\'ReplayUtils.toggleVisibilityOfRow("row_' + i + '")\'>' + ReplayUtils.abstractText(expectedItem) + '</a>';
                actual.innerHTML = '<a onclick=\'ReplayUtils.toggleVisibilityOfRow("row_' + i + '")\'>' + ReplayUtils.abstractText(actualItem) + '</a>';

                let row = table.insertRow(table.rows.length);
                row.id = "row_" + i;
                row.style = "display: none;";
                let originalExpectedItemCell = row.insertCell(0);
                let expectedItemCell = row.insertCell(1);
                let actualItemCell = row.insertCell(2);
                let originalActualItemCell = row.insertCell(3);
                originalExpectedItemCell.innerHTML = '<pre style="font-size: 10px;">' + JSON.stringify(expectedItem, null, 2) + '</pre>';
                expectedItemCell.innerHTML = '<pre style="font-size: 10px;">' + JSON.stringify(expectedItem, ReplayUtils.itemStringifyReplacer, 2) + '</pre>';
                actualItemCell.innerHTML = '<pre style="font-size: 10px;">' + JSON.stringify(actualItem, ReplayUtils.itemStringifyReplacer, 2) + '</pre>';
                originalActualItemCell.innerHTML = '<pre style="font-size: 10px;">' + JSON.stringify(actualItem, null, 2) + '</pre>';
                if (JSON.stringify(expectedItem, ReplayUtils.itemStringifyReplacer) === JSON.stringify(actualItem, ReplayUtils.itemStringifyReplacer)) {
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
    }

    static abstractText(item) {
        if (item === undefined) {
            return "undefined";
        }
        if (item.action) {
            return "A " + item.action.actionName;
        }
        if (item.command) {
            return "C " + item.command.commandName;
        }
        if (item.event) {
            const triggerActionName = item.event.eventName === 'TriggerAction' ? " " + item.event.eventParam.actionName : "";
            return "E " + item.event.eventName + triggerActionName;
        }
    }

    static itemStringifyReplacer(key, value) {
        if (key === 'timestamp' || key === 'token' || key === 'id' || key === 'next' || key === 'last' || key === 'date' || key === 'day' || key === 'month' || key === 'year') {
            return undefined;
        } else {
            return value;
        }
    }

    static toggleVisibilityOfRow(elementId) {
        const div = document.getElementById(elementId);
        if (div.style.display !== 'none') {
            div.style.display = 'none';
        }
        else {
            div.style.display = 'table-row';
        }
    }

}

/*       S.D.G.       */

