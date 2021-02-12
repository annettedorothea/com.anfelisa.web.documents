import CryptoJS from "crypto-js";
import * as AppState from "../../gen/ace/AppState";
import Utils from "../../gen/ace/Utils";
import {
    displayToast,
    displaySaveBugDialog,
    displayVersionMismatchDialog,
    displayVersionMismatchErrorDialog,
    init,
    routeChanged
} from "../../gen/common/ActionFunctions"
import {Texts} from "./Texts"

import EventListenerRegistrationAdmin from "../../gen/admin/EventListenerRegistration";
import EventFactoryRegistrationAdmin from "../../gen/admin/EventFactoryRegistration";

import EventListenerRegistrationCategory from "../../gen/category/EventListenerRegistration";
import EventFactoryRegistrationCategory from "../../gen/category/EventFactoryRegistration";

import EventListenerRegistrationCard from "../../gen/card/EventListenerRegistration";
import EventFactoryRegistrationCard from "../../gen/card/EventFactoryRegistration";

import EventListenerRegistrationBox from "../../gen/box/EventListenerRegistration";
import EventFactoryRegistrationBox from "../../gen/box/EventFactoryRegistration";

import EventListenerRegistrationCommon from "../../gen/common/EventListenerRegistration";
import EventFactoryRegistrationCommon from "../../gen/common/EventFactoryRegistration";

import EventListenerRegistrationProfile from "../../gen/profile/EventListenerRegistration";
import EventFactoryRegistrationProfile from "../../gen/profile/EventFactoryRegistration";

import EventListenerRegistrationRegistration from "../../gen/registration/EventListenerRegistration";
import EventFactoryRegistrationRegistration from "../../gen/registration/EventFactoryRegistration";

import EventListenerRegistrationLogin from "../../gen/login/EventListenerRegistration";
import EventFactoryRegistrationLogin from "../../gen/login/EventFactoryRegistration";

import EventListenerRegistrationPassword from "../../gen/password/EventListenerRegistration";
import EventFactoryRegistrationPassword from "../../gen/password/EventFactoryRegistration";

export function dumpAppState() {
    console.log(AppState.getAppState());
}

export default class AppUtils {

    static initEventListenersAndActionFactories() {
        EventListenerRegistrationAdmin.init();
        EventFactoryRegistrationAdmin.init();

        EventListenerRegistrationCategory.init();
        EventFactoryRegistrationCategory.init();

        EventListenerRegistrationCard.init();
        EventFactoryRegistrationCard.init();

        EventListenerRegistrationBox.init();
        EventFactoryRegistrationBox.init();

        EventListenerRegistrationCommon.init();
        EventFactoryRegistrationCommon.init();

        EventListenerRegistrationProfile.init();
        EventFactoryRegistrationProfile.init();

        EventListenerRegistrationRegistration.init();
        EventFactoryRegistrationRegistration.init();

        EventListenerRegistrationLogin.init();
        EventFactoryRegistrationLogin.init();

        EventListenerRegistrationPassword.init();
        EventFactoryRegistrationPassword.init();
    }

    static startApp() {
        window.onhashchange = () => {
            routeChanged();
            window.scrollTo(0, 0);
        };
        Utils.loadSettings().then(() => {
            init(location.hash, localStorage.getItem("username"), localStorage.getItem("password"));
        });
        setInterval(() => {
            const currentVersion = Utils.settings.clientVersion;
            AppUtils.loadActualClientVersion().then((actualClientVersion) => {
                if (actualClientVersion !== currentVersion) {
                    displayVersionMismatchDialog();
                }
            });
        }, 60 * 1000);
    }

    static loadActualClientVersion() {
        return AppUtils.httpRequest("GET", "settings.json").then((settings) => {
            return settings.clientVersion;
        });
    }

    static startReplay() {
        window.onhashchange = () => {
        };
    }

    static createInitialAppState() {
        const initialAppState = {
            texts: Texts,
            message: null
        };
        AppState.setInitialAppState(initialAppState);
    }

    static createHeaders(authorize) {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        if (authorize === true) {
            let authorization = AppUtils.basicAuth();
            if (authorization !== undefined) {
                headers.append("Authorization", authorization);
            }
        }
        return headers;
    }

    static addUuidToUrl(url, uuid) {
        if (uuid) {
            if (url.indexOf("?") < 0) {
                url += "?uuid=" + uuid;
            } else {
                url += "&uuid=" + uuid;
            }
        }
        return url;
    }

    static httpRequest(methodType, url, uuid, authorize, data) {
        return new Promise((resolve, reject) => {
            const options = {
                method: methodType,
                headers: AppUtils.createHeaders(authorize),
                mode: 'cors',
                cache: 'no-cache'
            };
            if (data && methodType !== "GET") {
                options.body = JSON.stringify(data);
            }
            url = AppUtils.addUuidToUrl(url, uuid);
            const request = new Request(url, options);

            fetch(request).then(function (response) {
                response.text().then((text) => {
                    if (response.status >= 300) {
                        const error = AppUtils.createError(text, response.statusText, response.status);
                        reject(error);
                    } else {
                        let data = {};
                        if (text.length > 0) {
                            data = JSON.parse(text);
                        }
                        resolve(data);
                    }
                });
            }).catch(function (error) {
                reject(AppUtils.createError(error, error));
            });
        });
    }

    static httpGet(url, uuid, authorize) {
        return AppUtils.httpRequest("GET", url, uuid, authorize, null);
    }

    static httpPost(url, uuid, authorize, data) {
        return AppUtils.httpRequest("POST", url, uuid, authorize, data);
    }

    static httpPut(url, uuid, authorize, data) {
        return AppUtils.httpRequest("PUT", url, uuid, authorize, data);
    }

    static httpDelete(url, uuid, authorize, data) {
        return AppUtils.httpRequest("DELETE", url, uuid, authorize, data);
    }

    static basicAuth() {
        const username = AppState.get_rootContainer_loggedInUser_username();
        const password = AppState.get_rootContainer_loggedInUser_password();
        if (username !== undefined && password !== undefined) {
            const wordArray = CryptoJS.enc.Utf8.parse(username + ':' + password);
            const hash = CryptoJS.enc.Base64.stringify(wordArray);
            return "anfelisaBasic " + hash;
        }
        return undefined;
    }

    static createUUID() {
        let d = new Date().getTime();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

    static displayUnexpectedError(error) {
        console.error(error);
        const currentVersion = Utils.settings.clientVersion;
        AppUtils.loadActualClientVersion().then((actualClientVersion) => {
            if (actualClientVersion !== currentVersion) {
                displayVersionMismatchErrorDialog();
            } else {
                if (typeof error !== "object") {
                    displayToast(AppUtils.createError("unknownError", error ));
                } else {
                    displayToast(error);
                }
                displaySaveBugDialog();
            }
        });
    }

    static createInfoMessage(textKey) {
        return {
            textKey,
            type: "info"
        }
    }

    static createError(textKey, text, code) {
        return {
            code,
            text,
            textKey: code && code === 401 ? "loginFailed" : textKey,
            type: "error"
        }
    }

    static isUnauthorized(message) {
        return (message && message.code && message.code === 401 );
    }

    static getMessageText(message, language) {
        if (message && language) {
            if (message.textKey && Texts.messages[message.textKey] && Texts.messages[message.textKey][language]) {
                return Texts.messages[message.textKey][language];
            }
            if (message.type === "error" && Texts.messages.unknownError && Texts.messages.unknownError[language]) {
                if (message.text && typeof message.text !== "object") {
                    return Texts.messages.unknownError[language].replace("{0}", message.text);
                }
                if (message.code && typeof message.code !== "object") {
                    return Texts.messages.unknownError[language].replace("{0}", message.code);
                }
                if (message.textKey && typeof message.textKey !== "object") {
                    return Texts.messages.unknownError[language].replace("{0}", message.textKey);
                }
            }
        }
        if (language) {
            return Texts.messages.unknown[language];
        }
        return "unknown message";
    }

    static deepCopy(object) {
        return object ? JSON.parse(JSON.stringify(object)) : undefined;
    }

    static stateUpdated(appState) {
        console.log("stateUpdated appState", appState);
        console.log("stateUpdated Utils.settings.mode", Utils.settings.mode);
        if (Utils.settings && Utils.settings.mode === "dev") {
            localStorage.setItem("appState", JSON.stringify(appState));
        }
    }

    static renderNewState(appState) {
    }
}

/*       S.D.G.       */

