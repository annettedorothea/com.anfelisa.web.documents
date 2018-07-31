import * as App from "../../app/App";

export default class BoxView {
    static render(eventData) {
        App.mergeState({
            route: "card",
            data: eventData.data
        });
    };

    static renderStatistics(eventData) {
        App.deepMergeState({
            data: eventData.data
        });
    };

    static displayNextItem(eventData) {
        App.deepMergeState({
            data: {
                index: eventData.index
            }
        });
    };

    static displayImage() {
        App.deepMergeState({
            data: {
                displayImage: true
            }
        });
    };

    static enableScoreButtons() {
        App.deepMergeState({
            data: {
                enableScoreButtons: true
            }
        });
    };

    static toggleScheduleNext(eventData) {
        App.deepMergeState({
            data: {
                scheduleNext: eventData.scheduleNext
            }
        });
    };

}

/*                    S.D.G.                    */
