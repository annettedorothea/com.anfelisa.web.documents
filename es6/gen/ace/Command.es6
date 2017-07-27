'use strict';

class Command {
    constructor(commandParam, commandName) {
        this.commandParam = JSON.parse(JSON.stringify(commandParam));
        this.commandName = commandName;
        this.commandData = {};
    }

    execute() {
        throw "no execute method defined for " + this.commandName;
    }

    publishEvents() {
        throw "no publishEvents method defined for " + this.commandName;
    }

    executeCommand() {
        return new Promise((resolve, reject) => {
            if (ACEController.execution !== ACEController.REPLAY) {
                this.execute().then(() => {
                    ACEController.addItemToTimeLine({command: this});
                    this.publishEvents().then(() => {
                        ACEController.applyNextActions();
                        resolve();
                    }, (error) => {
                        reject(error + " when publishing events of command " + this.commandName);
                    });
                }, (error) => {
                    reject(error + " when executing command " + this.commandName);
                });
            } else {
                let timelineCommand = ACEController.getCommandByUuid(this.commandParam.uuid);
                this.commandData = timelineCommand.commandData;
                ACEController.addItemToTimeLine({command: this});
                this.publishEvents().then(() => {
                    setTimeout(ACEController.applyNextActions, ACEController.pauseInMillis);
                    resolve();
                }, (error) => {
                    reject(error + " when publishing events of command " + this.commandName);
                });
            }
        });
    }

    prepare() {
        if (ACEController.execution === ACEController.E2E) {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: 'api/database/prepare?uuid=' + this.commandParam.uuid,
                    type: 'put',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    success: function () {
                        resolve();
                    },
                    error: function (jqxhr, textStatus, error) {
                        reject(error);
                    }
                });
            });
        } else {
            return new Promise((resolve) => {
                resolve();
            });
        }
    }

    httpGet(url, queryParams) {
        return this.prepare().then(() => {
	        queryParams = this.addUuidToQueryParams(queryParams);
	        return new Promise((resolve, reject) => {
	            let authorization = basicAuth(this.commandParam.username, this.commandParam.password);
	            $.ajax({
	                url: url + this.queryParamString(url, queryParams),
	                type: 'get',
	                beforeSend : function(req) {
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
	                	reject(error);
	                }
	            });
            });
        }, (error) => {
            reject(error);
        });
    }

    httpPost(url, queryParams, data) {
        return this.prepare().then(() => {
	        queryParams = this.addUuidToQueryParams(queryParams);
	        data = this.addUuidToData(data);
	        let authorization = basicAuth(this.commandParam.username, this.commandParam.password);
	        return new Promise((resolve, reject) => {
	            $.ajax({
	                url: url + this.queryParamString(url, queryParams),
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
	                	reject(error);
	                }
	            });
	        });
        }, (error) => {
            reject(error);
        });
    }

    httpPut(url, queryParams, data) {
        return this.prepare().then(() => {
	        queryParams = this.addUuidToQueryParams(queryParams);
	        data = this.addUuidToData(data);
	        let authorization = basicAuth(this.commandParam.username, this.commandParam.password);
	        return new Promise((resolve, reject) => {
	            $.ajax({
	                url: url + this.queryParamString(url, queryParams),
	                type: 'put',
	                data: JSON.stringify(data),
	                beforeSend : function(req) {
	                    if (authorization !== undefined) {
	                        req.setRequestHeader('Authorization', authorization);
	                    }
	                },
	                headers: {
	                    'Accept': 'application/json',
	                    'Content-Type': 'application/json'
	                },
	                success: function () {
	                    resolve();
	                },
	                error: function (jqxhr, textStatus, error) {
	                	reject(error);
	                }
	            });
	        });
        }, (error) => {
            reject(error);
        });
    }

    httpDelete(url, queryParams, data) {
        return this.prepare().then(() => {
	        queryParams = this.addUuidToQueryParams(queryParams);
	        data = this.addUuidToData(data);
	        let authorization = basicAuth(this.commandParam.username, this.commandParam.password);
	        return new Promise((resolve, reject) => {
	            $.ajax({
	                url: url + this.queryParamString(url, queryParams),
	                type: 'delete',
	                data: JSON.stringify(data),
	                beforeSend : function(req) {
	                    if (authorization !== undefined) {
	                        req.setRequestHeader('Authorization', authorization);
	                    }
	                },
	                headers: {
	                    'Accept': 'application/json',
	                    'Content-Type': 'application/json'
	                },
	                success: function () {
	                    resolve();
	                },
	                error: function (jqxhr, textStatus, error) {
	                	reject(error);
	                }
	            });
	        });
        }, (error) => {
            reject(error);
        });
    }

    addUuidToQueryParams(queryParams) {
        if (!queryParams) {
            queryParams = [];
        }
        if (this.commandParam.uuid) {
            queryParams.push({
                key: "uuid",
                value: this.commandParam.uuid
            });
        }
        return queryParams;
    }

    addUuidToData(data) {
        if (!data) {
            data = {};
        }
        if (this.commandParam.uuid) {
            data.uuid = this.commandParam.uuid;
        }
        return data;
    }

    queryParamString(url, queryParams) {
        var queryString = "";
        if (queryParams && queryParams.length > 0) {
            for (var i = 0; i < queryParams.length; i++) {
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

}

/*       S.D.G.       */

