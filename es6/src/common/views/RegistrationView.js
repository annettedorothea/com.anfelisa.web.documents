import * as App from "../../app/App";

export default class RegistrationView {

	static render(eventData) {
	    console.log("RegistrationView.render");
        App.container.setState({
            route: "registration",
            data: {
                displayUsernameSpinner: false,
                usernameAvailable: undefined
            }
        });
	};
	
	static usernameAvailable(eventData) {
	    let data = App.container.state.data;
	    data.usernameAvailable = true;
        App.container.setState({data});
	};
	
	static usernameNotAvailable(eventData) {
        let data = App.container.state.data;
        data.usernameAvailable = false;
        App.container.setState({data});
	};

    static displayUsernameSpinner() {
        let data = App.container.state.data;
        data.displayUsernameSpinner = true;
        App.container.setState({data});
    };

    static hideUsernameSpinner() {
        let data = App.container.state.data;
        data.displayUsernameSpinner = false;
        App.container.setState({data});
    };

}

/*                    S.D.G.                    */
