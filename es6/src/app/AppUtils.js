import ACEController from "../../gen/ace/ACEController";
import InitAction from "../../src/common/actions/InitAction";
import uuid from "uuid";
import CryptoJS from "crypto-js";

export default class AppUtils {

    static start() {
        new InitAction({hash: window.location.hash}).apply();
    }

    static getClientVersion() {
        return "1.0.0";
    }

    static getApiKey() {
        return "dd3785a0-34ea-4152-8813-6f06b19b28f1";
    }

    static getAceScenariosBaseUrl() {
        return "http://ace.anfelisa.com/";
    }

    static httpGet(url, queryParams, commandParam) {
		return new Promise((resolve, reject) => {
		    let authorization = commandParam ? AppUtils.basicAuth(commandParam.username, commandParam.password) : undefined;
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
		
		    const adjustedUrl = AppUtils.url(url);
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

    static httpChange(methodType, url, queryParams, data, commandParam) {
		return new Promise((resolve, reject) => {
		    let authorization = commandParam ? AppUtils.basicAuth(commandParam.username, commandParam.password) : undefined;
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
		
		    const adjustedUrl = AppUtils.url(url);
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

    static httpPost(url, queryParams, data, commandParam) {
        return AppUtils.httpChange("POST", url, queryParams, data, commandParam);
    }

    static httpPut(url, queryParams, data, commandParam) {
        return AppUtils.httpChange("PUT", url, queryParams, data, commandParam);
    }

    static httpDelete(url, queryParams, data, commandParam) {
        return AppUtils.httpChange("DELETE", url, queryParams, data, commandParam);
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
    }

	static deepCopy(object) {
	    return JSON.parse(JSON.stringify(object));
	}

}

/*       S.D.G.       */

