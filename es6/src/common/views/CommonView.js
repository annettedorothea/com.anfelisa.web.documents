import * as App from "../../app/App";
import {Texts} from "./Texts";

export default class CommonView {

    static updateHash(eventData) {
        window.location.hash = eventData.hash;
    };

    static initTexts(eventData) {
        App.container.setState({
            texts: Texts[eventData.language],
            language: eventData.language
        });
    }

    static displaySpinner(eventData) {
        App.container.setState({
            displaySpinner: true
        });
    }

    static hideSpinner(eventData) {
        App.container.setState({
            displaySpinner: false
        });
    }

    static displayError(eventData) {
        clearTimeout(CommonView.timer);
        App.container.setState({
            error: eventData.error
        });
        CommonView.timer = setTimeout(function () {
            App.container.setState({
                error: null
            });
        }, 7000);
    }

    static displayMessage(eventData) {
        clearTimeout(CommonView.timer);
        App.container.setState({
            messageKey: eventData.messageKey
        });
        CommonView.timer = setTimeout(function () {
            App.container.setState({
                messageKey: null
            });
        }, 7000);
    }

    static initUser(eventData) {
        App.container.setState({
            username: eventData.username,
            password: eventData.password,
            role: eventData.role
        });
        localStorage.setItem("username", eventData.username);
        localStorage.setItem("password", eventData.password);
    }

    static resetUser(eventData) {
        App.container.setState({
            username: undefined,
            password: undefined,
            role: undefined
        });
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }
}

/*                    S.D.G.                    */
