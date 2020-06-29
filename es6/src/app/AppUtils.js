import CryptoJS from "crypto-js";
import * as AppState from "../../gen/ace/AppState";
//import * as App from "./App";
import Utils from "../../gen/ace/Utils";
import {displayError, displayErrorAndLogout, displaySaveBugDialog, init} from "../../gen/common/ActionFunctions"
import {Texts} from "./Texts"

import EventListenerRegistrationAdmin from "../../gen/admin/EventListenerRegistration";
import ActionFactoryRegistrationAdmin from "../../gen/admin/ActionFactoryRegistration";

import EventListenerRegistrationCategory from "../../gen/category/EventListenerRegistration";
import ActionFactoryRegistrationCategory from "../../gen/category/ActionFactoryRegistration";

import EventListenerRegistrationCard from "../../gen/card/EventListenerRegistration";
import ActionFactoryRegistrationCard from "../../gen/card/ActionFactoryRegistration";

import EventListenerRegistrationBox from "../../gen/box/EventListenerRegistration";
import ActionFactoryRegistrationBox from "../../gen/box/ActionFactoryRegistration";

import EventListenerRegistrationCommon from "../../gen/common/EventListenerRegistration";
import ActionFactoryRegistrationCommon from "../../gen/common/ActionFactoryRegistration";

import EventListenerRegistrationProfile from "../../gen/profile/EventListenerRegistration";
import ActionFactoryRegistrationProfile from "../../gen/profile/ActionFactoryRegistration";

import EventListenerRegistrationRegistration from "../../gen/registration/EventListenerRegistration";
import ActionFactoryRegistrationRegistration from "../../gen/registration/ActionFactoryRegistration";

import EventListenerRegistrationLogin from "../../gen/login/EventListenerRegistration";
import ActionFactoryRegistrationLogin from "../../gen/login/ActionFactoryRegistration";

import EventListenerRegistrationPassword from "../../gen/password/EventListenerRegistration";
import ActionFactoryRegistrationPassword from "../../gen/password/ActionFactoryRegistration";

export default class AppUtils {

    static initEventListenersAndActionFactories() {
        EventListenerRegistrationAdmin.init();
        ActionFactoryRegistrationAdmin.init();

        EventListenerRegistrationCategory.init();
        ActionFactoryRegistrationCategory.init();

        EventListenerRegistrationCard.init();
        ActionFactoryRegistrationCard.init();

        EventListenerRegistrationBox.init();
        ActionFactoryRegistrationBox.init();

        EventListenerRegistrationCommon.init();
        ActionFactoryRegistrationCommon.init();

        EventListenerRegistrationProfile.init();
        ActionFactoryRegistrationProfile.init();

        EventListenerRegistrationRegistration.init();
        ActionFactoryRegistrationRegistration.init();

        EventListenerRegistrationLogin.init();
        ActionFactoryRegistrationLogin.init();

        EventListenerRegistrationPassword.init();
        ActionFactoryRegistrationPassword.init();
    }

    static start() {
        Utils.loadSettings().then((settings) => {
            Utils.settings = settings;
            init(location.hash, localStorage.getItem("username"), localStorage.getItem("password"));
        });
    }

    static createInitialAppState() {
        const initialAppState = {
            texts: Texts,
            message: null
        };
        AppState.setInitialAppState(initialAppState);
    }

    static renderNewState() {
        //App.render(AppState.getAppState());
    }

    static httpGet(url, authorize) {
        return new Promise((resolve, reject) => {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Accept", "application/json");
            if (authorize === true) {
                let authorization = AppUtils.basicAuth();
                if (authorization !== undefined) {
                    headers.append("Authorization", authorization);
                }
            }

            const options = {
                method: 'GET',
                headers: headers,
                mode: 'cors',
                cache: 'no-cache'
            };

            const request = new Request(url, options);

            let status;
            let statusText;
            fetch(request).then(function (response) {
                status = response.status;
                statusText = response.statusText;
                if (status >= 300) {
                    return response.text();
                } else {
                    return response.json();
                }
            }).then(function (data) {
                if (status >= 300) {
                    const error = {
                        code: status,
                        text: statusText,
                        errorKey: data
                    };
                    reject(error);
                } else {
                    resolve(data);
                }
            }).catch(function (error) {
                const status = {
                    code: error.name,
                    text: error.message
                };
                reject(status);
            });
        });
    }

    static httpChange(methodType, url, authorize, data) {
        return new Promise((resolve, reject) => {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Accept", "application/json");
            if (authorize === true) {
                let authorization = AppUtils.basicAuth();
                if (authorization !== undefined) {
                    headers.append("Authorization", authorization);
                }
            }

            const options = {
                method: methodType,
                headers: headers,
                mode: 'cors',
                cache: 'no-cache',
                body: JSON.stringify(data)
            };

            const request = new Request(url, options);

            let status;
            let statusText;
            fetch(request).then(function (response) {
                status = response.status;
                statusText = response.statusText;
                return response.text();
            }).then(function (data) {
                if (status >= 300) {
                    const error = {
                        code: status,
                        text: statusText,
                        errorKey: data
                    };
                    reject(error);
                } else {
                    resolve(data);
                }
            }).catch(function (error) {
                const status = {
                    code: error.name,
                    text: error.message
                };
                reject(status);
            });
        });
    }

    static httpPost(url, authorize, data) {
        return AppUtils.httpChange("POST", url, authorize, data);
    }

    static httpPut(url, authorize, data) {
        return AppUtils.httpChange("PUT", url, authorize, data);
    }

    static httpDelete(url, authorize, data) {
        return AppUtils.httpChange("DELETE", url, authorize, data);
    }

    static basicAuth() {
        const username = AppState.get_loggedInUser_username();
        const password = AppState.get_loggedInUser_password();
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
        try {
            if (typeof error !== "object") {
                error = {
                    errorKey: error
                };
                displayError(error)
            } else {
                if (error.code === 401) {
                    error.errorKey = "unauthorized";
                    displayErrorAndLogout(error);
                } else if (error.code === 400) {
                    displayError(error)
                } else {
                    error = {
                        errorKey: error.text
                    };
                    displayError(error)
                }
            }
        } catch (e) {
            console.error(e);
        }
        displaySaveBugDialog();
    }

    static deepCopy(object) {
        return object ? JSON.parse(JSON.stringify(object)) : undefined;
    }

}

/*       S.D.G.       */

