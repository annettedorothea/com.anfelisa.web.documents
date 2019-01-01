import * as App from "../../app/App";
import {Texts} from "./Texts";

export default class CommonView {

    static updateHash(eventData) {
        window.location.hash = eventData.hash;
    };

    static initTexts(eventData) {
        App.mergeState({
            texts: Texts,
            language: eventData.language,
            toast: undefined,
            username: undefined,
            password: undefined,
            role: undefined,
            displaySpinner: false,
            route: "",
            data: {
                username: "",
                saveInLocalStorage: false
            }
        });
    }

    static displaySpinner(eventData) {
        App.deepMergeState({
            displaySpinner: true
        });
    }

    static hideSpinner(eventData) {
        App.deepMergeState({
            displaySpinner: false
        });
    }

    static displayError(eventData) {
        const text = App.appState.texts.errors[eventData.error.errorKey] && App.appState.texts.errors[eventData.error.errorKey][App.appState.language] ?
            App.appState.texts.errors[eventData.error.errorKey][App.appState.language] : App.appState.texts.errors["unknownError"][App.appState.language].replace("{0}", eventData.error.errorKey);
        App.deepMergeState({
            toast: {
                type: "error",
                text
            }
        });
    }

    static displayMessage(eventData) {
        console.log("eventData.messageKey", eventData.messageKey);
        console.log("App.appState.language", App.appState.language);
        App.deepMergeState({
            toast: {
                type: "info",
                text: App.appState.texts.messages[eventData.messageKey][App.appState.language]
            }
        });
    }

    static clearToast() {
        App.deepMergeState({
            toast: undefined
        });
    }

    static initUser(eventData) {
        App.deepMergeState({
            username: eventData.username,
            password: eventData.password
        });
    }

    static initRole(eventData) {
        App.deepMergeState({
            role: eventData.role
        });
    }

    static saveInLocalStorage(eventData) {
        localStorage.setItem("username", eventData.username);
        localStorage.setItem("password", eventData.password);
    }

    static resetUser() {
        App.deepMergeState({
            username: undefined,
            password: undefined,
            role: undefined
        });
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

}

/*                    S.D.G.                    */
