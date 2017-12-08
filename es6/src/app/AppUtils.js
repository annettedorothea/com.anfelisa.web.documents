import uuid from "uuid";

class AppUtils {

    static start() {
        new InitAction().apply();
    }

    static timelineChanged(items) {
    }

    static httpGet(url, queryParams, commandParam) {
        return new Promise((resolve, reject) => {
            let authorization = AppUtils.basicAuth(commandParam.username, commandParam.password);
            const adjustedUrl = AppUtils.url(url);
            $.ajax({
                url: adjustedUrl + AppUtils.queryParamString(adjustedUrl, queryParams),
                type: 'get',
                beforeSend: function (req) {
                    if (authorization !== undefined) {
                        req.setRequestHeader('Authorization', authorization);
                    }
                },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                success: function (data) {
                    resolve(data);
                },
                error: function (jqxhr, textStatus, error) {
                    reject(`GET failed with ${jqxhr.status}: ${jqxhr.statusText} - ${jqxhr.responseText}`);
                }
            });
        });
    }

    static httpPost(url, queryParams, data, commandParam) {
        return new Promise((resolve, reject) => {
            let authorization = AppUtils.basicAuth(commandParam.username, commandParam.password);
            const adjustedUrl = AppUtils.url(url);
            $.ajax({
                url: adjustedUrl + AppUtils.queryParamString(adjustedUrl, queryParams),
                type: 'post',
                data: JSON.stringify(data),
                beforeSend : function(req) {
                    if (authorization !== undefined) {
                        req.setRequestHeader('Authorization', authorization);
                    }
                },
                headers: {
                    'Accept': 'text/plain',
                    'Content-Type': 'application/json'
                },
                success: function (data) {
                    resolve(data);
                },
                error: function (jqxhr, textStatus, error) {
                    reject(`POST failed with ${jqxhr.status}: ${jqxhr.statusText} - ${jqxhr.responseText}`);
                }
            });
        });
    }

    static httpPut(url, queryParams, data, commandParam) {
        return new Promise((resolve, reject) => {
            let authorization = AppUtils.basicAuth(commandParam.username, commandParam.password);
            const adjustedUrl = AppUtils.url(url);
            $.ajax({
                url: adjustedUrl + AppUtils.queryParamString(adjustedUrl, queryParams),
                type: 'put',
                data: JSON.stringify(data),
                beforeSend : function(req) {
                    if (authorization !== undefined) {
                        req.setRequestHeader('Authorization', authorization);
                    }
                },
                headers: {
                    'Accept': 'text/plain',
                    'Content-Type': 'application/json'
                },
                success: function (data) {
                    resolve(data);
                },
                error: function (jqxhr, textStatus, error) {
                    reject(`PUT failed with ${jqxhr.status}: ${jqxhr.statusText} - ${jqxhr.responseText}`);
                }
            });
        });
    }

    static httpDelete(url, queryParams, data, commandParam) {
        return new Promise((resolve, reject) => {
            let authorization = AppUtils.basicAuth(commandParam.username, commandParam.password);
            const adjustedUrl = AppUtils.url(url);
            $.ajax({
                url: adjustedUrl + AppUtils.queryParamString(adjustedUrl, queryParams),
                type: 'delete',
                data: JSON.stringify(data),
                beforeSend : function(req) {
                    if (authorization !== undefined) {
                        req.setRequestHeader('Authorization', authorization);
                    }
                },
                headers: {
                    'Accept': 'text/plain',
                    'Content-Type': 'application/json'
                },
                success: function (data) {
                    resolve(data);
                },
                error: function (jqxhr, textStatus, error) {
                    reject(`DELETE failed with ${jqxhr.status}: ${jqxhr.statusText} - ${jqxhr.responseText}`);
                }
            });
        });
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

    static  basicAuth(user, password) {
        if (user !== undefined && password !== undefined) {
            const wordArray = CryptoJS.enc.Utf8.parse(user + ':' + password);
            const hash = CryptoJS.enc.Base64.stringify(wordArray);
            return "anfelisaBasic " + hash;
        }
        return undefined;
    }

    static createUUID() {
        return uuid.v4();
	}

    static saveBug(description, reporter) {
        const data = {
            description: description,
            reporter: reporter,
            data: JSON.stringify(ACEController.timeline)
        };
        return AppUtils.httpPost('api/bug/create', null, data);
    }

    static deleteBug(id) {
        let queryParams = [
            {
                key: "id",
                value: id
            }
        ];
        return AppUtils.httpDelete('api/bug/delete', queryParams);
    }

    static resolveBug(id) {
        let queryParams = [
            {
                key: "id",
                value: id
            }
        ];
        return AppUtils.httpDelete('api/bug/resolve', queryParams);
    }

    static loadBugs() {
        return AppUtils.httpGet('api/bug/all');
    }


}

/*       S.D.G.       */

