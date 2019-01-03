import {mergeState, deepMergeState} from "../../app/App";

export default class BoxView {
    static render(eventData) {
        mergeState({
            route: "card",
            data: eventData
        });
    };

    static renderStatistics(eventData) {
        deepMergeState({
            data: eventData
        });
    };

    static displayNextItem(eventData) {
        deepMergeState({
            data: {
                index: eventData.index
            }
        });
    };

    static displayImage() {
        deepMergeState({
            data: {
                displayImage: true
            }
        });
    };

    static enableScoreButtons() {
        deepMergeState({
            data: {
                enableScoreButtons: true
            }
        });
    };

    static toggleScheduleNext(eventData) {
        deepMergeState({
            data: {
                scheduleNext: eventData.scheduleNext
            }
        });
    };

    static maxIntervalChanged(eventData) {
        deepMergeState({
            data: {
                editedMaxInterval: eventData.maxInterval
            }
        });
    };

    static editBox(eventData) {
        deepMergeState({
            data: {
                editedMaxInterval: eventData.maxInterval,
                editMaxInterval: true
            }
        });
    };

    static cancelEditBox() {
        deepMergeState({
            data: {
                editedMaxInterval: undefined,
                editMaxInterval: false
            }
        });
    };

}

/*                    S.D.G.                    */
