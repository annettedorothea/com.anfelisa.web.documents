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
                var timelineCommand = ACEController.getCommandByUuid(this.commandParam.uuid);
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

    httpGet(url, queryParams) {
        queryParams = this.addUuidToQueryParams(queryParams);
        queryParams = this.addSchemaToQueryParams(queryParams);
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url + this.queryParamString(url, queryParams),
                type: 'get',
                username: this.usernameString(),
                password: this.commandParam.password,
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
    }

    httpPost(url, queryParams, data) {
        queryParams = this.addUuidToQueryParams(queryParams);
        queryParams = this.addSchemaToQueryParams(queryParams);
        data = this.addUuidToData(data);
        data = this.addSchemaToData(data);
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url + this.queryParamString(url, queryParams),
                type: 'post',
                data: JSON.stringify(data),
                username: this.usernameString(),
                password: this.commandParam.password,
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
    }

    httpPut(url, queryParams, data) {
        queryParams = this.addUuidToQueryParams(queryParams);
        queryParams = this.addSchemaToQueryParams(queryParams);
        data = this.addUuidToData(data);
        data = this.addSchemaToData(data);
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url + this.queryParamString(url, queryParams),
                type: 'put',
                data: JSON.stringify(data),
                username: this.usernameString(),
                password: this.commandParam.password,
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
    }

    httpDelete(url, queryParams, data) {
        queryParams = this.addUuidToQueryParams(queryParams);
        queryParams = this.addSchemaToQueryParams(queryParams);
        data = this.addUuidToData(data);
        data = this.addSchemaToData(data);
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url + this.queryParamString(url, queryParams),
                type: 'delete',
                data: JSON.stringify(data),
                username: this.usernameString(),
                password: this.commandParam.password,
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

    addSchemaToQueryParams(queryParams) {
        if (!queryParams) {
            queryParams = [];
        }
        if (this.commandParam.schema) {
            queryParams.push({
                key: "schema",
                value: this.commandParam.schema
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

    addSchemaToData(data) {
        if (!data) {
            data = {};
        }
        if (this.commandParam.schema) {
            data.schema = this.commandParam.schema;
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

    usernameString() {
        var username = undefined;
        if (this.commandParam.schema) {
            username = this.commandParam.schema;
            if (this.commandParam.username) {
                username += "_";
            }
        }
        if (this.commandParam.username) {
            username += this.commandParam.username;
        }
        return username;
    }
    
}

/*       S.D.G.       */

