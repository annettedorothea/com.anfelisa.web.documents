import {deepMergeState, mergeState, getAppState} from "../../app/App";
import {Texts} from "./Texts";

export default class CommonView {

    static updateHash(eventData) {
        window.location.hash = eventData.hash;
    };

    static initTexts(eventData) {
        mergeState({
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

    static displaySpinner() {
        deepMergeState({
            displaySpinner: true
        });
    }

    static hideSpinner() {
        deepMergeState({
            displaySpinner: false
        });
    }

    static displayError(eventData) {
        const appState = getAppState();
        const text = appState.texts.errors[eventData.error.errorKey] && appState.texts.errors[eventData.error.errorKey][appState.language] ?
            appState.texts.errors[eventData.error.errorKey][appState.language] : appState.texts.errors["unknownError"][appState.language].replace("{0}", eventData.error.errorKey);
        deepMergeState({
            toast: {
                type: "error",
                text
            }
        });
    }

    static displayMessage(eventData) {
        const appState = getAppState();
        deepMergeState({
            toast: {
                type: "info",
                text: appState.texts.messages[eventData.messageKey][appState.language]
            }
        });
    }

    static clearToast() {
        deepMergeState({
            toast: undefined
        });
    }

    static initUser(eventData) {
        deepMergeState({
            username: eventData.username,
            password: eventData.password
        });
    }

    static initRole(eventData) {
        deepMergeState({
            role: eventData.role
        });
    }

    static saveInLocalStorage(eventData) {
        localStorage.setItem("username", eventData.username);
        localStorage.setItem("password", eventData.password);
    }

    static resetUser() {
        deepMergeState({
            username: undefined,
            password: undefined,
            role: undefined
        });
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    static deepMerge(eventData) {
        deepMergeState({
            data: eventData
        });
    }

}

/*                    S.D.G.                    */
