import * as App from "../../app/App";

export default class DashboardView {
	static render(eventData) {
	    console.log("DashboardView.render", eventData);
        App.container.setState({
            route: "dashboard",
            data : eventData.data,

        });
	};
	
}

/*                    S.D.G.                    */
