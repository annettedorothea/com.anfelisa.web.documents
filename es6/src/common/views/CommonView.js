import * as App from "../../app/App";
import {Texts} from "./Texts";

export default class CommonView {

    static updateHash(eventData) {
        window.location.hash = eventData.hash;
    };

    static initTexts(eventData) {
        App.container.setState({
            texts: Texts,
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
        let state = App.container.state;
        const toast = {
            type: "error",
            text: state.texts.errors[eventData.error.errorKey][state.language]
        };
        App.container.setState({
            toast
        });
    }

    static displayMessage(eventData) {
        let state = App.container.state;
        const toast = {
            type: "info",
            text: state.texts.messages[eventData.messageKey][state.language]
        };
        App.container.setState({
            toast
        });
    }

    static clearToast(eventData) {
        App.container.setState({
            toast: undefined
        });
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
