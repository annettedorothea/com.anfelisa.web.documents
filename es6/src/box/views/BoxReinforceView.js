import * as App from "../../app/App";

export default class BoxReinforceView {
	static render(eventData) {
        let data = eventData.data;
        data.index = 0;
        data.enableScoreButtons = false;
        data.displayImage = false;
        App.mergeState({
            route: "reinforce-card",
            data
        });
	};
	
	static displayNextItem(eventData) {
        App.deepMergeState({
            data: {
                index: eventData.index
            }
        });
	};
	
	static displayImage(eventData) {
        App.deepMergeState({
            data: {
                displayImage: true
            }
        });
	};
	
	static enableScoreButtons(eventData) {
        App.deepMergeState({
            data: {
                enableScoreButtons: true
            }
        });
	};
	
}

/*                    S.D.G.                    */
