import ACEController from "../../gen/ace/ACEController";
import InitAction from "../../src/common/actions/InitAction";
import uuid from "uuid";
import CryptoJS from "crypto-js";
import * as App from "./App";
import DisplayErrorAction from "../common/actions/DisplayErrorAction";
import DisplayErrorAndLogoutAction from "../common/actions/DisplayErrorAndLogoutAction";

export default class AppUtils {

    static start() {
        AppUtils.loadSettings().then((settings) => {
            AppUtils.settings = settings;
            new InitAction(localStorage.getItem("username"), localStorage.getItem("password"), "de", window.location.hash).apply();
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
        return AppUtils.settings.clientVersion;
    }

    static isDevelopment() {
        return AppUtils.settings.development;
    }

    static getAceScenariosApiKey() {
        return AppUtils.settings.aceScenariosApiKey;
    }

    static getAceScenariosBaseUrl() {
        return AppUtils.settings.aceScenariosBaseUrl;
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
        if (App.appState.username !== undefined && App.appState.password !== undefined) {
            const wordArray = CryptoJS.enc.Utf8.parse(App.appState.username + ':' + App.appState.password);
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
                new DisplayErrorAction(error).apply();
            } else {
                if (error.code === 401) {
                    error.errorKey = "unauthorized";
                    new DisplayErrorAndLogoutAction({error}).apply();
                } else if (error.code === 400) {
                    new DisplayErrorAction(error).apply();
                } else {
                    error = {
                        errorKey: error.text
                    };
                    new DisplayErrorAction(error).apply();
                }
            }
        } catch (e) {
            console.error(e);
        }
    }

    static deepCopy(object) {
        return JSON.parse(JSON.stringify(object));
    }

    static getMaxTimelineSize() {
        return 2000;
    }

    static getAppState() {
        const appState = AppUtils.deepCopy(App.appState);
        delete appState.texts;
        return appState;
    }

    static deepMerge(newState, appState) {
        for (let property in newState) {
            if (newState.hasOwnProperty(property)) {
                if (appState[property] === undefined) {
                    appState[property] = newState[property];
                } else if (newState[property] === undefined) {
                    appState[property] = undefined;
                } else if (newState[property] === null) {
                    appState[property] = null;
                } else if (Array.isArray(newState[property])) {
                    appState[property] = newState[property];
                } else if (typeof newState[property] === 'object') {
                    AppUtils.deepMerge(newState[property], appState[property]);
                } else {
                    appState[property] = newState[property];
                }
            }
        }
        return appState;
    }

    static merge(newState, appState) {
        for (let property in newState) {
            if (newState.hasOwnProperty(property)) {
                appState[property] = newState[property];
            }
        }
        return appState;
    }

}

/*       S.D.G.       */

