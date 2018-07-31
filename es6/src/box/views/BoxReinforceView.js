import * as App from "../../app/App";

export default class BoxReinforceView {
	static render(eventData) {
        App.mergeState({
            route: "reinforce-card",
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
