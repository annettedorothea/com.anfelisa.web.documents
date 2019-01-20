import ACEController from "../../gen/ace/ACEController";
import uuid from "uuid";
import CryptoJS from "crypto-js";
import * as AppState from "../../gen/ace/AppState";
import * as App from "./App";
import {Texts} from "./Texts"
import {displayError, displayErrorAndLogout, init} from "../../gen/common/ActionFunctions"

export default class AppUtils {

    static start() {
        AppUtils.loadSettings().then((settings) => {
            AppUtils.settings = settings;
            init();
        });
    }

    static loadSettings() {
        return new Promise((resolve, reject) => {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Accept", "application/json");

            const options = {
                method: 'GET',
                headers: headers,
                mode: 'cors',
                cache: 'no-cache'
            };

            const request = new Request("settings.json", options);

            fetch(request).then(function (response) {
                return response.json();
            }).then(function (data) {
                resolve(data);
            }).catch(function (error) {
                reject(error);
            });
        });
    }

    static getClientVersion() {
        return AppUtils.settings ? AppUtils.settings.clientVersion : "";
    }

    static isDevelopment() {
        return AppUtils.settings ? AppUtils.settings.development : false;
    }

    static getAceScenariosApiKey() {
        return AppUtils.settings ? AppUtils.settings.aceScenariosApiKey : "";
    }

    static getAceScenariosBaseUrl() {
        return AppUtils.settings ? AppUtils.settings.aceScenariosBaseUrl : "";
    }

    static createInitialAppState() {
        const initialAppState = {
            texts: Texts,
            message: null
        };
        AppState.setInitialState(initialAppState);
    }

    static renderNewState() {
        App.render(AppState.getState());
    }

    static httpGet(url, authorize, queryParams, adjustUrl = true) {
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

            let adjustedUrl = url;
            if (adjustUrl === true) {
                adjustedUrl = AppUtils.url(url);
            }
            const completeUrl = adjustedUrl + AppUtils.queryParamString(adjustedUrl, queryParams);
            const request = new Request(completeUrl, options);

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

    static httpChange(methodType, url, authorize, queryParams, data, adjustUrl = true) {
        return new Promise((resolve, reject) => {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Accept", "text/plain");
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

            let adjustedUrl = url;
            if (adjustUrl === true) {
                adjustedUrl = AppUtils.url(url);
            }
            const completeUrl = adjustedUrl + AppUtils.queryParamString(adjustedUrl, queryParams);
            const request = new Request(completeUrl, options);

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

    static httpPost(url, authorize, queryParams, data) {
        return AppUtils.httpChange("POST", url, authorize, queryParams, data);
    }

    static httpPut(url, authorize, queryParams, data) {
        return AppUtils.httpChange("PUT", url, authorize, queryParams, data);
    }

    static httpDelete(url, authorize, queryParams, data) {
        return AppUtils.httpChange("DELETE", url, authorize, queryParams, data);
    }

    static queryParamString(url, queryParams) {
        let queryString = "";
        if (queryParams && queryParams.length > 0) {
            for (let i = 0; i < queryParams.length; i++) {
                if (url.indexOf('?') < 0 && i === 0) {
                    queryString += '?'
                } else {
                    queryString += '&'
                }
                queryString += queryParams[i].key + "=" + queryParams[i].value;
            }
        }
        return queryString;
    }

    static url(url) {
        if (ACEController.execution !== ACEController.E2E) {
            return url;
        } else {
            return url.replace('api', 'replay');
        }
    }

    static basicAuth() {
        const username = AppState.get_state_State_loggedInUser_LoggedInUser_username();
        const password = AppState.get_state_State_loggedInUser_LoggedInUser_password();
        if (username !== undefined && password !== undefined) {
            const wordArray = CryptoJS.enc.Utf8.parse(username + ':' + password);
            const hash = CryptoJS.enc.Base64.stringify(wordArray);
            return "anfelisaBasic " + hash;
        }
        return undefined;
    }

    static createUUID() {
        return uuid.v4();
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
                    displayErrorAndLogout({error});
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
    }

    static deepCopy(object) {
        return object ? JSON.parse(JSON.stringify(object)) : undefined;
    }

    static getMaxTimelineSize() {
        return 2000;
    }

}

/*       S.D.G.       */

