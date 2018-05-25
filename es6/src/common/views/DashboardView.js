import * as App from "../../app/App";

export default class DashboardView {
	static render() {
	    console.log("DashboardView.render");
        App.container.setState({
            route: "dashboard",
            data : undefined,

        });
	};
	
}

/*                    S.D.G.                    */
