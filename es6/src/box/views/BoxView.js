import * as App from "../../app/App";

export default class BoxView {
	static render(eventData) {
        let data = eventData.data;
        data.index = 0;
        data.enableScoreButtons = false;
        App.container.setState({
            route: "card",
            data
        });
	};
	
	static displayNextItem() {
	    let data = App.container.state.data;
        data.index++;
        console.log("displayNextItem", data);
        App.container.setState({
            data
        });
	};

	static enableScoreButtons() {
        let data = App.container.state.data;
        data.enableScoreButtons = true;
        App.container.setState({
            data
        });
	};

}

/*                    S.D.G.                    */
