'use strict';

class ACEController {

    static init() {
        ACEController.timeline = [];
        ACEController.listeners = {};
        ACEController.registerListener('TriggerAction', ACEController.triggerAction);
        ACEController.actionIsProcessing = false;
        ACEController.actionQueue = [];
        ACEController.uuidGenerator = new UUID();
        ACEController.LIVE = 1;
        ACEController.REPLAY = 2;
        ACEController.E2E = 3;
        ACEController.execution = ACEController.LIVE;
        ACEController.actualTimeline = [];
        ACEController.expectedTimeLine = [];
        ACEController.timelineSize = 200;
    }

    static registerListener(eventName, listener) {
        if (!eventName.trim()) {
            throw new Error('cannot register listener for empty eventName');
        }
        if (!listener) {
            throw new Error('cannot register undefined listener for event ' + eventName);
        }
        let listenersForEventName;
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
            ACEController.timeline.push(JSON.parse(JSON.stringify(item)));
            AppUtils.itemAddedToTimelineCallback(item);
            if (ACEController.timeline.length > ACEController.timelineSize) {
                let i;
                for (i = 1; i < ACEController.timeline.length; i++) {
                    if (ACEController.timeline[i].action && ACEController.timeline[i].action.isInitAction) {
                        break;
                    }
                }
                if (i < ACEController.timeline.length) {
                    for (let j = 0; j < i; j++) {
                        ACEController.timeline.shift();
                    }
                }
            }
        } else {
            ACEController.actualTimeline.push(JSON.parse(JSON.stringify(item)));
        }
    }

    static downloadTimeline() {
        let timelineJson = JSON.stringify(ACEController.timeline, null, 2);

        let a = window.document.createElement('a');
        a.href = window.URL.createObjectURL(new Blob([timelineJson], {type: 'text/json'}));
        a.download = 'scenario.json';

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
    }

    static initTimeline(timelineJson) {
        ACEController.expectedTimeLine = timelineJson;
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
                if (ACEController.execution !== ACEController.LIVE) {
                    const actualIndices = ACEController.getActionIndicesByUuid(action.actionData.uuid, ACEController.actualTimeline);
                    const expectedIndices = ACEController.getActionIndicesByUuid(action.actionData.uuid, ACEController.expectedTimeLine);
                    ReplayUtils.replayVerification(actualIndices.start, actualIndices.end, expectedIndices.start, expectedIndices.end);
                }
            }, (error) => {
                ACEController.actionIsProcessing = false;
                throw new Error(error + " when applying action " + action.actionName);
            });
        } else if (action === undefined) {
            ACEController.actionIsProcessing = false;
            if (ACEController.execution !== ACEController.LIVE) {
                ReplayUtils.finishReplay();
                ACEController.timeline = [];
                AppUtils.start();
            }
        }
    }

    static triggerAction(action) {
        ACEController.addActionToQueue(action);
    }

    static replay(pauseInMillis) {
        ACEController.startReplay(ACEController.REPLAY, pauseInMillis)
    }

    static e2e(pauseInMillis) {
        ACEController.startReplay(ACEController.E2E, pauseInMillis)
    }

    static startReplay(level, pauseInMillis) {
        ACEController.passed = undefined;
        ACEController.actualTimeline = [];
        ACEController.pauseInMillis = undefined;
        ACEController.execution = level;
        ACEController.pauseInMillis = pauseInMillis;

        if (ACEController.execution === ACEController.REPLAY) {
            ACEController.readTimelineAndCreateReplayActions();
        } else {
            ReplayUtils.resetDatabase().then(
                () => {
                    ACEController.readTimelineAndCreateReplayActions();
                },
                (error) => {
                    throw error;
                }
            );
        }

    }

    static readTimelineAndCreateReplayActions() {
        let actions = [];
        if (ACEController.expectedTimeLine.length === 0) {
            for (let i = 0; i < ACEController.timeline.length; i++) {
                let item = ACEController.timeline[i];
                ACEController.expectedTimeLine.push(item);
            }
        }
        for (let i = 0; i < ACEController.expectedTimeLine.length; i++) {
            let item = ACEController.expectedTimeLine[i];
            if (item.action) {
                let action = eval('new ' + item.action.actionName + '(item.action.actionParam)');
                action.actionData.uuid = item.action.actionData.uuid;
                actions.push(action);
            }
        }

        ACEController.actionQueue = actions;

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

    static getActionIndicesByUuid(uuid, timeline) {
        let start = -1;
        let end = -1;
        for (let i = 0; i < timeline.length; i++) {
            let item = timeline[i];
            if (item.action && item.action.actionData.uuid === uuid) {
                start = i;
            } else if (start !== -1 && item.action) {
                end = i - 1;
                break;
            }
        }
        if (start !== -1 && end === -1) {
            end = timeline.length;
        }
        return {
            start: start,
            end: end
        }
    }

}

ACEController.init();

/*       S.D.G.       */

