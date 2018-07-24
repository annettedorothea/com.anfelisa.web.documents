import ACEController from "../../gen/ace/ACEController";
import InitAction from "../../src/common/actions/InitAction";
import uuid from "uuid";
import CryptoJS from "crypto-js";
import * as App from "./App";

export default class AppUtils {

    static start() {
    	const data = {
            username: localStorage.getItem("username"),
            password: localStorage.getItem("password"),
            language: "de",
            hash: window.location.hash
		};
        new InitAction(data).apply();
    }

    static getClientVersion() {
        return "1.0.0";
    }

    static getApiKey() {
        return "5081f590-d2da-4014-b8eb-3ce48efdc3c9";
    }

    static getAceScenariosBaseUrl() {
        return "http://ace.anfelisa.com/";
    }

    static httpGet(url, queryParams, commandData, adjustUrl = true) {
		return new Promise((resolve, reject) => {
		    let authorization = commandData ? AppUtils.basicAuth(commandData.username, commandData.password) : undefined;
		    const headers = new Headers();
		    headers.append("Content-Type", "application/json");
		    headers.append("Accept", "application/json");
		    if (authorization !== undefined) {
		        headers.append("Authorization", authorization);
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
		
		    fetch(request).then(function (response) {
		        if (response.status >= 300) {
		            const status = {
		                code: response.status,
		                text: response.statusText
		            };
		            reject(status);
		        } else {
		            return response.json();
		        }
		    }).then(function (data) {
		        resolve(data);
		    }).catch(function (error) {
		        const status = {
		            code: error.name,
		            text: error.message
		        };
		        reject(status);
		    });
		});
    }

    static httpChange(methodType, url, queryParams, data, commandData, adjustUrl = true) {
		return new Promise((resolve, reject) => {
		    let authorization = commandData ? AppUtils.basicAuth(commandData.username, commandData.password) : undefined;
		    const headers = new Headers();
		    headers.append("Content-Type", "application/json");
		    headers.append("Accept", "text/plain");
		    if (authorization !== undefined) {
		        headers.append("Authorization", authorization);
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
		
		    fetch(request).then(function (response) {
		        if (response.status >= 300) {
		            const status = {
		                code: response.status,
		                text: response.statusText
		            };
		            reject(status);
		        } else {
		            return response.text();
		        }
		    }).then(function (data) {
		        resolve(data);
		    }).catch(function (error) {
		        const status = {
		            code: error.name,
		            text: error.message
		        };
		        reject(status);
		    });
		});
    }

    static httpPost(url, queryParams, data, commandData) {
        return AppUtils.httpChange("POST", url, queryParams, data, commandData);
    }

    static httpPut(url, queryParams, data, commandData) {
        return AppUtils.httpChange("PUT", url, queryParams, data, commandData);
    }

    static httpDelete(url, queryParams, data, commandData) {
        return AppUtils.httpChange("DELETE", url, queryParams, data, commandData);
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

	static basicAuth(username, password) {
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
    }

	static deepCopy(object) {
	    return JSON.parse(JSON.stringify(object));
	}

	static getMaxTimelineSize() {
        return 2000;
    }

    static getAppState() {
        const appState = AppUtils.deepCopy(App.container.state);
        delete appState.texts;
        return appState;
    }

}

/*       S.D.G.       */

