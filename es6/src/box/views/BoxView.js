import * as App from "../../app/App";

export default class BoxView {
	static render(eventData) {
        const data = eventData.data;
        App.container.setState({
            route: "card",
            data
        });
	};
	
}

/*                    S.D.G.                    */
