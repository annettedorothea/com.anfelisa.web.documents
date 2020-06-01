import CryptoJS from "crypto-js";
import * as ReadAppState from "../../gen/ace/ReadAppState";
import * as WriteAppState from "../../gen/ace/WriteAppState";
import * as App from "./App";
import Utils from "../../gen/ace/Utils";
import {displayError, displayErrorAndLogout, displaySaveBugDialog, init} from "../../gen/common/ActionFunctions"
import {Texts} from "./Texts"

export default class AppUtils {

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
        WriteAppState.setInitialState(initialAppState);
    }

    static renderNewState() {
        App.render(ReadAppState.getState());
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
        const username = ReadAppState.get_state_State_loggedInUser_LoggedInUser_username();
        const password = ReadAppState.get_state_State_loggedInUser_LoggedInUser_password();
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

