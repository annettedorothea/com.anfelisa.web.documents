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
        let errors = App.container.state.errors;
        if (!errors) {
            errors = [];
        }
        errors.push(eventData.error);
        App.container.setState({
            errors
        });
        setTimeout(function () {
            let errors = App.container.state.errors;
            errors.shift();
            App.container.setState({
                errors
            });
        }, 7000);
    }

    static displayMessage(eventData) {
        let messages = App.container.state.messages;
        if (!messages) {
            messages = [];
        }
        messages.push(eventData.messageKey);
        App.container.setState({
            messages
        });
        setTimeout(function () {
            let messages = App.container.state.messages;
            messages.shift();
            App.container.setState({
                messages
            });
        }, 7000);
    }

    static initUser(eventData) {
        App.container.setState({
            username: eventData.username,
            password: eventData.password,
            role: eventData.role
        });
    }

    static saveInLocalStorage(eventData) {
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
