'use strict';

/*
 uuid.js - Version 0.3
 JavaScript Class to create a UUID like identifier

 Copyright (C) 2006-2008, Erik Giberti (AF-Design), All rights reserved.

 This program is free software; you can redistribute it and/or modify it under
 the terms of the GNU General Public License as published by the Free Software
 Foundation; either version 2 of the License, or (at your option) any later
 version.

 This program is distributed in the hope that it will be useful, but WITHOUT ANY
 WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
 PARTICULAR PURPOSE. See the GNU General Public License for more details.

 You should have received a copy of the GNU General Public License along with
 this program; if not, write to the Free Software Foundation, Inc., 59 Temple
 Place, Suite 330, Boston, MA 02111-1307 USA

 The latest version of this file can be downloaded from
 http://www.af-design.com/resources/javascript_uuid.php

 HISTORY:
 6/5/06 	- Initial Release
 5/22/08 - Updated code to run faster, removed randrange(min,max) in favor of
 a simpler rand(max) function. Reduced overhead by using getTime()
 method of date class (suggestion by James Hall).
 9/5/08	- Fixed a bug with rand(max) and additional efficiencies pointed out
 by Robert Kieffer http://broofa.com/

 KNOWN ISSUES:
 - Still no way to get MAC address in JavaScript
 - Research into other versions of UUID show promising possibilities
 (more research needed)
 - Documentation needs improvement

 */

// On creation of a UUID object, set it's initial value
function UUID() {
    this.id = this.createUUID();
}

// When asked what this Object is, lie and return it's value
UUID.prototype.valueOf = function () {
    return this.id;
};
UUID.prototype.toString = function () {
    return this.id;
};

//
// INSTANCE SPECIFIC METHODS
//

UUID.prototype.createUUID = function () {
    //
    // Loose interpretation of the specification DCE 1.1: Remote Procedure Call
    // described at http://www.opengroup.org/onlinepubs/009629399/apdxa.htm#tagtcjh_37
    // since JavaScript doesn't allow access to internal systems, the last 48 bits
    // of the node section is made up using a series of random numbers (6 octets long).
    //
    var dg = new Date(1582, 10, 15, 0, 0, 0, 0);
    var dc = new Date();
    var t = dc.getTime() - dg.getTime();
    var h = '-';
    var tl = UUID.getIntegerBits(t, 0, 31);
    var tm = UUID.getIntegerBits(t, 32, 47);
    var thv = UUID.getIntegerBits(t, 48, 59) + '1'; // version 1, security version is 2
    var csar = UUID.getIntegerBits(UUID.rand(4095), 0, 7);
    var csl = UUID.getIntegerBits(UUID.rand(4095), 0, 7);

    // since detection of anything about the machine/browser is far to buggy,
    // include some more random numbers here
    // if NIC or an IP can be obtained reliably, that should be put in
    // here instead.
    var n = UUID.getIntegerBits(UUID.rand(8191), 0, 7) + UUID.getIntegerBits(UUID.rand(8191), 8, 15) + UUID.getIntegerBits(UUID.rand(8191), 0, 7) + UUID.getIntegerBits(UUID.rand(8191), 8, 15) + UUID.getIntegerBits(UUID.rand(8191), 0, 15); // this last number is two octets long
    return tl + h + tm + h + thv + h + csar + csl + h + n;
};

//
// GENERAL METHODS (Not instance specific)
//


// Pull out only certain bits from a very large integer, used to get the time
// code information for the first part of a UUID. Will return zero's if there
// aren't enough bits to shift where it needs to.
UUID.getIntegerBits = function (val, start, end) {
    var base16 = UUID.returnBase(val, 16);
    var quadArray = new Array();
    var quadString = '';
    var i = 0;
    for (i = 0; i < base16.length; i++) {
        quadArray.push(base16.substring(i, i + 1));
    }
    for (i = Math.floor(start / 4); i <= Math.floor(end / 4); i++) {
        if (!quadArray[i] || quadArray[i] == '') quadString += '0';else quadString += quadArray[i];
    }
    return quadString;
};

// Replaced from the original function to leverage the built in methods in
// JavaScript. Thanks to Robert Kieffer for pointing this one out
UUID.returnBase = function (number, base) {
    return number.toString(base).toUpperCase();
};

// pick a random number within a range of numbers
// int b rand(int a); where 0 <= b <= a
UUID.rand = function (max) {
    return Math.floor(Math.random() * (max + 1));
};

// end of UUID class file
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ACEController = function () {
    function ACEController() {
        _classCallCheck(this, ACEController);
    }

    _createClass(ACEController, null, [{
        key: 'init',
        value: function init() {
            ACEController.timeLine = [];
            ACEController.timeLineLocalStorageChunks = [];
            ACEController.writeTimeLine = true;
            ACEController.listeners = {};
            ACEController.registerListener('TriggerAction', ACEController.triggerAction);
            ACEController.actionIsProcessing = false;
            ACEController.actionQueue = [];
            ACEController.uuidGenerator = new UUID();
            ACEController.LIVE = 1;
            ACEController.REPLAY = 2;
            ACEController.E2E = 3;
            ACEController.execution = ACEController.LIVE;
            ACEController.replayTimeLine = [];
            sessionStorage.clear();
        }
    }, {
        key: 'registerListener',
        value: function registerListener(eventName, listener) {
            if (!eventName.trim()) {
                throw new Error('cannot register listener for empty eventName');
            }
            if (!listener) {
                throw new Error('cannot register undefined listener for event ' + eventName);
            }
            var listenersForEventName;
            if (ACEController.listeners[eventName] === undefined) {
                ACEController.listeners[eventName] = [];
            }
            listenersForEventName = ACEController.listeners[eventName];
            listenersForEventName.push(listener);
        }
    }, {
        key: 'addItemToTimeLine',
        value: function addItemToTimeLine(item) {
            var timestamp = new Date();
            item.timestamp = timestamp.getTime();
            if (ACEController.execution === ACEController.LIVE) {
                if (ACEController.writeTimeLine) {
                    if (ACEController.timeLine.length > 100 && item.action && item.action.actionName === 'InitAction') {
                        var timestampInMillis = timestamp.getTime();
                        try {
                            sessionStorage[timestampInMillis] = JSON.stringify(ACEController.timeLine, null, 2);
                            ACEController.timeLineLocalStorageChunks.push(timestampInMillis);
                            if (ACEController.timeLineLocalStorageChunks.length > 10) {
                                ACEController.timeLineLocalStorageChunks.shift();
                            }
                        } catch (exception) {
                            ACEController.writeTimeLine = false;
                        }
                        ACEController.timeLine = [];
                    }
                    ACEController.timeLine.push(JSON.parse(JSON.stringify(item)));
                }
            } else {
                ACEController.replayTimeLine.push(JSON.parse(JSON.stringify(item)));
            }
        }
    }, {
        key: 'getCompleteTimeline',
        value: function getCompleteTimeline() {
            var completeTimeline = [];
            for (var i = 0; i < ACEController.timeLineLocalStorageChunks.length; i++) {
                var timelineChunk = sessionStorage[ACEController.timeLineLocalStorageChunks[i]];
                completeTimeline.push.apply(completeTimeline, JSON.parse(timelineChunk));
            }
            completeTimeline.push.apply(completeTimeline, ACEController.timeLine);
            return completeTimeline;
        }
    }, {
        key: 'downloadTimeline',
        value: function downloadTimeline() {
            var timelineJson = JSON.stringify(ACEController.getCompleteTimeline(), null, 2);

            var a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(new Blob([timelineJson], { type: 'text/json' }));
            a.download = 'scenario.json';

            document.body.appendChild(a);
            a.click();

            document.body.removeChild(a);
        }
    }, {
        key: 'uploadTimeline',
        value: function uploadTimeline(event) {
            ACEController.clearReplayResultDiv();

            var input = event.target;
            var reader = new FileReader();
            reader.onload = function () {
                var json = reader.result;
                ACEController.timeLine = JSON.parse(json);
                document.getElementById("uploadTimelineInputField").value = "";
            };
            reader.readAsText(input.files[0]);
        }
    }, {
        key: 'addActionToQueue',
        value: function addActionToQueue(action) {
            if (ACEController.execution === ACEController.LIVE) {
                ACEController.actionQueue.push(action);
                if (ACEController.actionIsProcessing === false) {
                    ACEController.actionIsProcessing = true;
                    ACEController.applyNextActions();
                }
            }
        }
    }, {
        key: 'applyNextActions',
        value: function applyNextActions() {
            var action = ACEController.actionQueue.shift();
            if (action) {
                action.applyAction().then(function () {}, function (error) {
                    ACEController.actionIsProcessing = false;
                    throw error + " when applying action " + action.actionName;
                });
            } else if (action === undefined) {
                ACEController.actionIsProcessing = false;
                if (ACEController.execution !== ACEController.LIVE) {
                    ACEController.finishReplay();
                }
            }
        }
    }, {
        key: 'triggerAction',
        value: function triggerAction(action) {
            ACEController.addActionToQueue(action);
        }
    }, {
        key: 'clearReplayResultDiv',
        value: function clearReplayResultDiv() {
            if (document.getElementById("replayResultDiv")) {
                var table = document.getElementById("replayResultDiv");
                var rowCount = table.rows.length;
                while (--rowCount) {
                    table.deleteRow(rowCount);
                }
                table.rows[0].className = '';
            }
        }
    }, {
        key: 'replay',
        value: function replay() {
            ACEController.startReplay(ACEController.REPLAY);
        }
    }, {
        key: 'e2e',
        value: function e2e() {
            ACEController.startReplay(ACEController.E2E);
        }
    }, {
        key: 'startReplay',
        value: function startReplay(level) {
            ACEController.passed = undefined;
            ACEController.expectedTimeLine = [];
            ACEController.replayTimeLine = [];
            ACEController.pauseInMillis = undefined;

            ACEController.clearReplayResultDiv();

            var actions = [];
            var completeTimeLine = ACEController.getCompleteTimeline();
            for (var i = 0; i < completeTimeLine.length; i++) {
                var item = completeTimeLine[i];
                ACEController.expectedTimeLine.push(item);
                if (item.action) {
                    var action = eval('new ' + item.action.actionName + '(item.action.actionParam)');
                    action.actionData.uuid = item.action.actionData.uuid;
                    actions.push(action);
                }
            }

            ACEController.actionQueue = actions;

            if (document.getElementById('pauseInMillisInput')) {
                ACEController.pauseInMillis = document.getElementById('pauseInMillisInput').value;
            }

            ACEController.execution = level;

            ACEController.applyNextActions();
        }
    }, {
        key: 'getCommandByUuid',
        value: function getCommandByUuid(uuid) {
            for (var i = 0; i < ACEController.expectedTimeLine.length; i++) {
                var item = ACEController.expectedTimeLine[i];
                if (item.command && item.command.commandParam.uuid === uuid) {
                    return item.command;
                }
            }
        }
    }, {
        key: 'finishReplay',
        value: function finishReplay() {
            //App.completeReplay();
            ACEController.passed = true;
            if (document.getElementById("replayResultDiv")) {
                var table = document.getElementById("replayResultDiv");
                for (var i = 0; i < ACEController.expectedTimeLine.length; i++) {
                    var expectedItem = ACEController.expectedTimeLine[i];
                    var actualItem = undefined;
                    if (i < ACEController.replayTimeLine.length) {
                        actualItem = ACEController.replayTimeLine[i];
                    }

                    var rowAbstract = table.insertRow(table.rows.length);
                    rowAbstract.insertCell(0);
                    var original = rowAbstract.insertCell(1);
                    var actual = rowAbstract.insertCell(2);
                    rowAbstract.insertCell(3);
                    original.innerHTML = '<a onclick=\'toggleVisibilityOfRow("row_' + i + '")\'>' + ACEController.abstractText(expectedItem) + '</a>';
                    actual.innerHTML = '<a onclick=\'toggleVisibilityOfRow("row_' + i + '")\'>' + ACEController.abstractText(actualItem) + '</a>';

                    var row = table.insertRow(table.rows.length);
                    row.id = "row_" + i;
                    row.style = "display: none;";
                    var originalExpectedItemCell = row.insertCell(0);
                    var expectedItemCell = row.insertCell(1);
                    var actualItemCell = row.insertCell(2);
                    var originalActualItemCell = row.insertCell(3);
                    originalExpectedItemCell.innerHTML = '<pre style="font-size: 10px;">' + JSON.stringify(expectedItem, null, 2) + '</pre>';
                    expectedItemCell.innerHTML = '<pre style="font-size: 10px;">' + JSON.stringify(expectedItem, ACEController.verificationCleanupFunction, 2) + '</pre>';
                    actualItemCell.innerHTML = '<pre style="font-size: 10px;">' + JSON.stringify(actualItem, ACEController.verificationCleanupFunction, 2) + '</pre>';
                    originalActualItemCell.innerHTML = '<pre style="font-size: 10px;">' + JSON.stringify(actualItem, null, 2) + '</pre>';
                    if (JSON.stringify(expectedItem, ACEController.verificationCleanupFunction) === JSON.stringify(actualItem, ACEController.verificationCleanupFunction)) {
                        row.className = 'success';
                        rowAbstract.className = 'success';
                    } else {
                        row.className = 'danger';
                        rowAbstract.className = 'danger';
                        ACEController.passed = false;
                    }
                }
                if (ACEController.passed) {
                    table.rows[0].className = 'success';
                } else {
                    table.rows[0].className = 'danger';
                }
            }

            ACEController.actionIsProcessing = false;
            ACEController.actionQueue = [];
            ACEController.execution = ACEController.LIVE;
        }
    }, {
        key: 'abstractText',
        value: function abstractText(item) {
            if (item.action) {
                return "A " + item.action.actionName;
            }
            if (item.command) {
                return "C " + item.command.commandName;
            }
            if (item.event) {
                var triggerActionName = item.event.eventName === 'TriggerAction' ? " " + item.event.eventParam.actionName : "";
                return "E " + item.event.eventName + triggerActionName;
            }
        }
    }]);

    return ACEController;
}();

ACEController.init();

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Action = function () {
    function Action(actionParam, actionName) {
        _classCallCheck(this, Action);

        if (actionParam === undefined) {
            actionParam = {};
        }
        this.actionParam = JSON.parse(JSON.stringify(actionParam));
        this.actionName = actionName;
        this.actionData = {};
    }

    _createClass(Action, [{
        key: "captureActionParam",
        value: function captureActionParam() {}
    }, {
        key: "releaseActionParam",
        value: function releaseActionParam() {}
    }, {
        key: "initActionData",
        value: function initActionData() {}
    }, {
        key: "getCommand",
        value: function getCommand() {
            throw "no command defined for " + this.actionName;
        }
    }, {
        key: "apply",
        value: function apply() {
            ACEController.addActionToQueue(this);
        }
    }, {
        key: "applyAction",
        value: function applyAction() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                if (ACEController.execution === ACEController.LIVE) {
                    _this.actionData.uuid = ACEController.uuidGenerator.createUUID();
                }
                if (ACEController.execution === ACEController.LIVE) {
                    _this.captureActionParam();
                } else {
                    _this.releaseActionParam();
                }
                _this.initActionData();
                ACEController.addItemToTimeLine({ action: _this });
                var command = _this.getCommand();
                if (command) {
                    command.executeCommand().then(function () {
                        resolve();
                    }, function (error) {
                        reject(error + " when executing command " + command.commandName);
                    });
                } else {
                    resolve();
                }
            });
        }
    }]);

    return Action;
}();

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Command = function () {
    function Command(commandParam, commandName) {
        _classCallCheck(this, Command);

        this.commandParam = JSON.parse(JSON.stringify(commandParam));
        this.commandName = commandName;
        this.commandData = {};
    }

    _createClass(Command, [{
        key: "execute",
        value: function execute() {
            throw "no execute method defined for " + this.commandName;
        }
    }, {
        key: "publishEvents",
        value: function publishEvents() {
            throw "no publishEvents method defined for " + this.commandName;
        }
    }, {
        key: "executeCommand",
        value: function executeCommand() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                if (ACEController.execution !== ACEController.REPLAY) {
                    _this.execute().then(function () {
                        ACEController.addItemToTimeLine({ command: _this });
                        _this.publishEvents().then(function () {
                            ACEController.applyNextActions();
                            resolve();
                        }, function (error) {
                            reject(error + " when publishing events of command " + _this.commandName);
                        });
                    }, function (error) {
                        reject(error + " when executing command " + _this.commandName);
                    });
                } else {
                    var timelineCommand = ACEController.getCommandByUuid(_this.commandParam.uuid);
                    _this.commandData = timelineCommand.commandData;
                    ACEController.addItemToTimeLine({ command: _this });
                    _this.publishEvents().then(function () {
                        setTimeout(ACEController.applyNextActions, ACEController.pauseInMillis);
                        resolve();
                    }, function (error) {
                        reject(error + " when publishing events of command " + _this.commandName);
                    });
                }
            });
        }
    }, {
        key: "httpGet",
        value: function httpGet(url, queryParams) {
            var _this2 = this;

            queryParams = this.addUuidToQueryParams(queryParams);
            queryParams = this.addSchemaToQueryParams(queryParams);
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: url + _this2.queryParamString(url, queryParams),
                    type: 'get',
                    username: _this2.usernameString(),
                    password: _this2.commandParam.password,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    success: function success(data) {
                        resolve(data);
                    },
                    error: function error(jqxhr, textStatus, _error) {
                        reject(_error);
                    }
                });
            });
        }
    }, {
        key: "httpPost",
        value: function httpPost(url, queryParams, data) {
            var _this3 = this;

            queryParams = this.addUuidToQueryParams(queryParams);
            queryParams = this.addSchemaToQueryParams(queryParams);
            data = this.addUuidToData(data);
            data = this.addSchemaToData(data);
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: url + _this3.queryParamString(url, queryParams),
                    type: 'post',
                    data: JSON.stringify(data),
                    username: _this3.usernameString(),
                    password: _this3.commandParam.password,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    success: function success(data) {
                        resolve(data);
                    },
                    error: function error(jqxhr, textStatus, _error2) {
                        reject(_error2);
                    }
                });
            });
        }
    }, {
        key: "httpPut",
        value: function httpPut(url, queryParams, data) {
            var _this4 = this;

            queryParams = this.addUuidToQueryParams(queryParams);
            queryParams = this.addSchemaToQueryParams(queryParams);
            data = this.addUuidToData(data);
            data = this.addSchemaToData(data);
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: url + _this4.queryParamString(url, queryParams),
                    type: 'put',
                    data: JSON.stringify(data),
                    username: _this4.usernameString(),
                    password: _this4.commandParam.password,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    success: function success(data) {
                        resolve(data);
                    },
                    error: function error(jqxhr, textStatus, _error3) {
                        reject(_error3);
                    }
                });
            });
        }
    }, {
        key: "httpDelete",
        value: function httpDelete(url, queryParams, data) {
            var _this5 = this;

            queryParams = this.addUuidToQueryParams(queryParams);
            queryParams = this.addSchemaToQueryParams(queryParams);
            data = this.addUuidToData(data);
            data = this.addSchemaToData(data);
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: url + _this5.queryParamString(url, queryParams),
                    type: 'delete',
                    data: JSON.stringify(data),
                    username: _this5.usernameString(),
                    password: _this5.commandParam.password,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    success: function success(data) {
                        resolve(data);
                    },
                    error: function error(jqxhr, textStatus, _error4) {
                        reject(_error4);
                    }
                });
            });
        }
    }, {
        key: "addUuidToQueryParams",
        value: function addUuidToQueryParams(queryParams) {
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
    }, {
        key: "addSchemaToQueryParams",
        value: function addSchemaToQueryParams(queryParams) {
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
    }, {
        key: "addUuidToData",
        value: function addUuidToData(data) {
            if (!data) {
                data = {};
            }
            if (this.commandParam.uuid) {
                data.uuid = this.commandParam.uuid;
            }
            return data;
        }
    }, {
        key: "addSchemaToData",
        value: function addSchemaToData(data) {
            if (!data) {
                data = {};
            }
            if (this.commandParam.schema) {
                data.schema = this.commandParam.schema;
            }
            return data;
        }
    }, {
        key: "queryParamString",
        value: function queryParamString(url, queryParams) {
            var queryString = "";
            if (queryParams && queryParams.length > 0) {
                for (var i = 0; i < queryParams.length; i++) {
                    if (url.indexOf('?') < 0 && i === 0) {
                        queryString += '?';
                    } else {
                        queryString += '&';
                    }
                    queryString += queryParams[i].key + "=" + queryParams[i].value;
                }
            }
            return queryString;
        }
    }, {
        key: "usernameString",
        value: function usernameString() {
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
    }]);

    return Command;
}();

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event = function () {
    function Event(eventParam, eventName) {
        _classCallCheck(this, Event);

        this.eventName = eventName;
        this.eventParam = eventParam;
    }

    _createClass(Event, [{
        key: "prepareDataForView",
        value: function prepareDataForView() {
            throw "no prepareDataForView method defined for " + this.eventName;
        }
    }, {
        key: "publish",
        value: function publish() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.prepareDataForView();
                ACEController.addItemToTimeLine({ event: _this });
                Promise.all(_this.notifyListeners()).then(function () {
                    resolve();
                }, function (error) {
                    reject(error + " when notifying listeners of event " + _this.eventName);
                });
            });
        }
    }, {
        key: "notifyListeners",
        value: function notifyListeners() {
            var promises = [];
            var i, listener;
            if (this.eventName !== undefined) {
                var listenersForEvent = ACEController.listeners[this.eventName];
                if (listenersForEvent !== undefined) {
                    for (i = 0; i < listenersForEvent.length; i += 1) {
                        listener = listenersForEvent[i];
                        promises.push(listener(this.eventData));
                    }
                }
            }
            return promises;
        }
    }]);

    return Event;
}();

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TriggerAction = function (_Event) {
    _inherits(TriggerAction, _Event);

    function TriggerAction(action) {
        _classCallCheck(this, TriggerAction);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TriggerAction).call(this, action, 'TriggerAction'));

        _this.eventData = action;
        return _this;
    }

    _createClass(TriggerAction, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {}
    }]);

    return TriggerAction;
}(Event);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractCheckIfComplexCardIsFinishedAction = function (_Action) {
  _inherits(AbstractCheckIfComplexCardIsFinishedAction, _Action);

  function AbstractCheckIfComplexCardIsFinishedAction(actionParam) {
    _classCallCheck(this, AbstractCheckIfComplexCardIsFinishedAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractCheckIfComplexCardIsFinishedAction).call(this, actionParam, 'CheckIfComplexCardIsFinishedAction'));
  }

  _createClass(AbstractCheckIfComplexCardIsFinishedAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new CheckIfComplexCardIsFinishedCommand(this.actionData);
    }
  }]);

  return AbstractCheckIfComplexCardIsFinishedAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractFinishCardAction = function (_Action) {
  _inherits(AbstractFinishCardAction, _Action);

  function AbstractFinishCardAction(actionParam) {
    _classCallCheck(this, AbstractFinishCardAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractFinishCardAction).call(this, actionParam, 'FinishCardAction'));
  }

  _createClass(AbstractFinishCardAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new FinishCardCommand(this.actionData);
    }
  }]);

  return AbstractFinishCardAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractScoreCardAction = function (_Action) {
  _inherits(AbstractScoreCardAction, _Action);

  function AbstractScoreCardAction(actionParam) {
    _classCallCheck(this, AbstractScoreCardAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractScoreCardAction).call(this, actionParam, 'ScoreCardAction'));
  }

  _createClass(AbstractScoreCardAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new ScoreCardCommand(this.actionData);
    }
  }]);

  return AbstractScoreCardAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractShowNextCardItemAction = function (_Action) {
  _inherits(AbstractShowNextCardItemAction, _Action);

  function AbstractShowNextCardItemAction(actionParam) {
    _classCallCheck(this, AbstractShowNextCardItemAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractShowNextCardItemAction).call(this, actionParam, 'ShowNextCardItemAction'));
  }

  _createClass(AbstractShowNextCardItemAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new ShowNextCardItemCommand(this.actionData);
    }
  }]);

  return AbstractShowNextCardItemAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractCheckIfComplexCardIsFinishedCommand = function (_Command) {
    _inherits(AbstractCheckIfComplexCardIsFinishedCommand, _Command);

    function AbstractCheckIfComplexCardIsFinishedCommand(commandParam) {
        _classCallCheck(this, AbstractCheckIfComplexCardIsFinishedCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractCheckIfComplexCardIsFinishedCommand).call(this, commandParam, "CheckIfComplexCardIsFinishedCommand"));

        _this.complexCardIsFinished = "complexCardIsFinished";
        _this.complexCardIsNotFinished = "complexCardIsNotFinished";
        return _this;
    }

    _createClass(AbstractCheckIfComplexCardIsFinishedCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.complexCardIsFinished:
                    promises.push(new ShowScoreButtonsEvent(this.commandData).publish());
                    break;
                case this.complexCardIsNotFinished:
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractCheckIfComplexCardIsFinishedCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractFinishCardCommand = function (_Command) {
    _inherits(AbstractFinishCardCommand, _Command);

    function AbstractFinishCardCommand(commandParam) {
        _classCallCheck(this, AbstractFinishCardCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractFinishCardCommand).call(this, commandParam, "FinishCardCommand"));

        _this.cardFinished = "cardFinished";
        return _this;
    }

    _createClass(AbstractFinishCardCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.cardFinished:
                    promises.push(new TriggerAction(new SaveResultAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractFinishCardCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractScoreCardCommand = function (_Command) {
    _inherits(AbstractScoreCardCommand, _Command);

    function AbstractScoreCardCommand(commandParam) {
        _classCallCheck(this, AbstractScoreCardCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractScoreCardCommand).call(this, commandParam, "ScoreCardCommand"));

        _this.scored = "scored";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractScoreCardCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.scored:
                    promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractScoreCardCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractShowNextCardItemCommand = function (_Command) {
    _inherits(AbstractShowNextCardItemCommand, _Command);

    function AbstractShowNextCardItemCommand(commandParam) {
        _classCallCheck(this, AbstractShowNextCardItemCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractShowNextCardItemCommand).call(this, commandParam, "ShowNextCardItemCommand"));

        _this.showWanted = "showWanted";
        _this.showNextLine = "showNextLine";
        _this.showNextWord = "showNextWord";
        return _this;
    }

    _createClass(AbstractShowNextCardItemCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.showWanted:
                    promises.push(new ShowWantedEvent(this.commandData).publish());
                    promises.push(new ShowScoreButtonsEvent(this.commandData).publish());
                    break;
                case this.showNextLine:
                    promises.push(new ShowNextLineEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new CheckIfComplexCardIsFinishedAction(this.commandData)).publish());
                    break;
                case this.showNextWord:
                    promises.push(new ShowNextWordEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new CheckIfComplexCardIsFinishedAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractShowNextCardItemCommand;
}(Command);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractShowNextLineEvent = function (_Event) {
    _inherits(AbstractShowNextLineEvent, _Event);

    function AbstractShowNextLineEvent(eventParam) {
        _classCallCheck(this, AbstractShowNextLineEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractShowNextLineEvent).call(this, eventParam, 'ShowNextLineEvent'));
    }

    return AbstractShowNextLineEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractShowNextWordEvent = function (_Event) {
    _inherits(AbstractShowNextWordEvent, _Event);

    function AbstractShowNextWordEvent(eventParam) {
        _classCallCheck(this, AbstractShowNextWordEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractShowNextWordEvent).call(this, eventParam, 'ShowNextWordEvent'));
    }

    return AbstractShowNextWordEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractShowScoreButtonsEvent = function (_Event) {
    _inherits(AbstractShowScoreButtonsEvent, _Event);

    function AbstractShowScoreButtonsEvent(eventParam) {
        _classCallCheck(this, AbstractShowScoreButtonsEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractShowScoreButtonsEvent).call(this, eventParam, 'ShowScoreButtonsEvent'));
    }

    return AbstractShowScoreButtonsEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractShowWantedEvent = function (_Event) {
    _inherits(AbstractShowWantedEvent, _Event);

    function AbstractShowWantedEvent(eventParam) {
        _classCallCheck(this, AbstractShowWantedEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractShowWantedEvent).call(this, eventParam, 'ShowWantedEvent'));
    }

    return AbstractShowWantedEvent;
}(Event);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractAddCardsToBoxAction = function (_Action) {
  _inherits(AbstractAddCardsToBoxAction, _Action);

  function AbstractAddCardsToBoxAction(actionParam) {
    _classCallCheck(this, AbstractAddCardsToBoxAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractAddCardsToBoxAction).call(this, actionParam, 'AddCardsToBoxAction'));
  }

  _createClass(AbstractAddCardsToBoxAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new AddCardsToBoxCommand(this.actionData);
    }
  }]);

  return AbstractAddCardsToBoxAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractCloseAllDialogsAction = function (_Action) {
  _inherits(AbstractCloseAllDialogsAction, _Action);

  function AbstractCloseAllDialogsAction(actionParam) {
    _classCallCheck(this, AbstractCloseAllDialogsAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractCloseAllDialogsAction).call(this, actionParam, 'CloseAllDialogsAction'));
  }

  _createClass(AbstractCloseAllDialogsAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new CloseAllDialogsCommand(this.actionData);
    }
  }]);

  return AbstractCloseAllDialogsAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractInitAction = function (_Action) {
  _inherits(AbstractInitAction, _Action);

  function AbstractInitAction(actionParam) {
    _classCallCheck(this, AbstractInitAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractInitAction).call(this, actionParam, 'InitAction'));
  }

  _createClass(AbstractInitAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new InitCommand(this.actionData);
    }
  }]);

  return AbstractInitAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractLoginAction = function (_Action) {
  _inherits(AbstractLoginAction, _Action);

  function AbstractLoginAction(actionParam) {
    _classCallCheck(this, AbstractLoginAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractLoginAction).call(this, actionParam, 'LoginAction'));
  }

  _createClass(AbstractLoginAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new LoginCommand(this.actionData);
    }
  }]);

  return AbstractLoginAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractLogoutAction = function (_Action) {
  _inherits(AbstractLogoutAction, _Action);

  function AbstractLogoutAction(actionParam) {
    _classCallCheck(this, AbstractLogoutAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractLogoutAction).call(this, actionParam, 'LogoutAction'));
  }

  _createClass(AbstractLogoutAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new LogoutCommand(this.actionData);
    }
  }]);

  return AbstractLogoutAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractOpenReallyDeleteDialogAction = function (_Action) {
  _inherits(AbstractOpenReallyDeleteDialogAction, _Action);

  function AbstractOpenReallyDeleteDialogAction(actionParam) {
    _classCallCheck(this, AbstractOpenReallyDeleteDialogAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractOpenReallyDeleteDialogAction).call(this, actionParam, 'OpenReallyDeleteDialogAction'));
  }

  _createClass(AbstractOpenReallyDeleteDialogAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new OpenReallyDeleteDialogCommand(this.actionData);
    }
  }]);

  return AbstractOpenReallyDeleteDialogAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRenderHomeAction = function (_Action) {
  _inherits(AbstractRenderHomeAction, _Action);

  function AbstractRenderHomeAction(actionParam) {
    _classCallCheck(this, AbstractRenderHomeAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRenderHomeAction).call(this, actionParam, 'RenderHomeAction'));
  }

  _createClass(AbstractRenderHomeAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new RenderHomeCommand(this.actionData);
    }
  }]);

  return AbstractRenderHomeAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRenderLoginAction = function (_Action) {
  _inherits(AbstractRenderLoginAction, _Action);

  function AbstractRenderLoginAction(actionParam) {
    _classCallCheck(this, AbstractRenderLoginAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRenderLoginAction).call(this, actionParam, 'RenderLoginAction'));
  }

  _createClass(AbstractRenderLoginAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new RenderLoginCommand(this.actionData);
    }
  }]);

  return AbstractRenderLoginAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRenderLogoutAction = function (_Action) {
  _inherits(AbstractRenderLogoutAction, _Action);

  function AbstractRenderLogoutAction(actionParam) {
    _classCallCheck(this, AbstractRenderLogoutAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRenderLogoutAction).call(this, actionParam, 'RenderLogoutAction'));
  }

  _createClass(AbstractRenderLogoutAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new RenderLogoutCommand(this.actionData);
    }
  }]);

  return AbstractRenderLogoutAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRouteAction = function (_Action) {
  _inherits(AbstractRouteAction, _Action);

  function AbstractRouteAction(actionParam) {
    _classCallCheck(this, AbstractRouteAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRouteAction).call(this, actionParam, 'RouteAction'));
  }

  _createClass(AbstractRouteAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new RouteCommand(this.actionData);
    }
  }]);

  return AbstractRouteAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRouteHomeAction = function (_Action) {
  _inherits(AbstractRouteHomeAction, _Action);

  function AbstractRouteHomeAction(actionParam) {
    _classCallCheck(this, AbstractRouteHomeAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRouteHomeAction).call(this, actionParam, 'RouteHomeAction'));
  }

  _createClass(AbstractRouteHomeAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new RouteCommand(this.actionData);
    }
  }]);

  return AbstractRouteHomeAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractSaveResultAction = function (_Action) {
  _inherits(AbstractSaveResultAction, _Action);

  function AbstractSaveResultAction(actionParam) {
    _classCallCheck(this, AbstractSaveResultAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractSaveResultAction).call(this, actionParam, 'SaveResultAction'));
  }

  _createClass(AbstractSaveResultAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new SaveResultCommand(this.actionData);
    }
  }]);

  return AbstractSaveResultAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractSwitchLanguageAction = function (_Action) {
  _inherits(AbstractSwitchLanguageAction, _Action);

  function AbstractSwitchLanguageAction(actionParam) {
    _classCallCheck(this, AbstractSwitchLanguageAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractSwitchLanguageAction).call(this, actionParam, 'SwitchLanguageAction'));
  }

  _createClass(AbstractSwitchLanguageAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new SwitchLanguageCommand(this.actionData);
    }
  }]);

  return AbstractSwitchLanguageAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractValidateRequiredFieldAction = function (_Action) {
  _inherits(AbstractValidateRequiredFieldAction, _Action);

  function AbstractValidateRequiredFieldAction(actionParam) {
    _classCallCheck(this, AbstractValidateRequiredFieldAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractValidateRequiredFieldAction).call(this, actionParam, 'ValidateRequiredFieldAction'));
  }

  _createClass(AbstractValidateRequiredFieldAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new ValidateRequiredFieldCommand(this.actionData);
    }
  }]);

  return AbstractValidateRequiredFieldAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractAddCardsToBoxCommand = function (_Command) {
    _inherits(AbstractAddCardsToBoxCommand, _Command);

    function AbstractAddCardsToBoxCommand(commandParam) {
        _classCallCheck(this, AbstractAddCardsToBoxCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractAddCardsToBoxCommand).call(this, commandParam, "AddCardsToBoxCommand"));

        _this.added = "added";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractAddCardsToBoxCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.added:
                    promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractAddCardsToBoxCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractCloseAllDialogsCommand = function (_Command) {
    _inherits(AbstractCloseAllDialogsCommand, _Command);

    function AbstractCloseAllDialogsCommand(commandParam) {
        _classCallCheck(this, AbstractCloseAllDialogsCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractCloseAllDialogsCommand).call(this, commandParam, "CloseAllDialogsCommand"));

        _this.ok = "ok";
        return _this;
    }

    _createClass(AbstractCloseAllDialogsCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractCloseAllDialogsCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractInitCommand = function (_Command) {
    _inherits(AbstractInitCommand, _Command);

    function AbstractInitCommand(commandParam) {
        _classCallCheck(this, AbstractInitCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractInitCommand).call(this, commandParam, "InitCommand"));

        _this.publicCourses = "publicCourses";
        _this.publicLessons = "publicLessons";
        _this.publicTests = "publicTests";
        _this.publicTest = "publicTest";
        _this.privateCourses = "privateCourses";
        _this.privateLessons = "privateLessons";
        _this.privateTests = "privateTests";
        _this.privateTest = "privateTest";
        _this.result = "result";
        _this.box = "box";
        _this.profile = "profile";
        _this.profileCourses = "profileCourses";
        _this.profileBoxCreate = "profileBoxCreate";
        _this.profileBoxEdit = "profileBoxEdit";
        _this.profileCourseAdd = "profileCourseAdd";
        _this.profilePassword = "profilePassword";
        _this.forgotPassword = "forgotPassword";
        _this.newPassword = "newPassword";
        _this.register = "register";
        _this.confirmEmail = "confirmEmail";
        return _this;
    }

    _createClass(AbstractInitCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.publicCourses:
                    promises.push(new InitOKEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new ReadPublicCoursesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new RenderLoginAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new RenderHomeAction(this.commandData)).publish());
                    break;
                case this.publicLessons:
                    promises.push(new InitOKEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new ReadPublicLessonsAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new RenderLoginAction(this.commandData)).publish());
                    break;
                case this.publicTests:
                    promises.push(new InitOKEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new ReadPublicTestsAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new RenderLoginAction(this.commandData)).publish());
                    break;
                case this.publicTest:
                    promises.push(new InitOKEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new ReadPublicTestAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new RenderLoginAction(this.commandData)).publish());
                    break;
                case this.privateCourses:
                    promises.push(new InitOKEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new ReadStatisticsAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
                    break;
                case this.privateLessons:
                    promises.push(new InitOKEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new ReadPrivateLessonsAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
                    break;
                case this.privateTests:
                    promises.push(new InitOKEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new ReadPrivateTestsAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
                    break;
                case this.privateTest:
                    promises.push(new InitOKEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new ReadPrivateTestAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
                    break;
                case this.result:
                    promises.push(new InitOKEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new ReadResultAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
                    break;
                case this.box:
                    promises.push(new InitOKEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new ReadNextCardAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
                    break;
                case this.profile:
                    promises.push(new InitOKEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new OpenProfileAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
                    break;
                case this.profileCourses:
                    promises.push(new InitOKEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new OpenCourseSelectionAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
                    break;
                case this.profileBoxCreate:
                    promises.push(new InitOKEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new OpenBoxCreationAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
                    break;
                case this.profileBoxEdit:
                    promises.push(new InitOKEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new LoadBoxAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
                    break;
                case this.profileCourseAdd:
                    promises.push(new InitOKEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new LoadCoursesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
                    break;
                case this.profilePassword:
                    promises.push(new InitOKEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new ReadPrivateCoursesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new OpenChangePasswordAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new RenderLogoutAction(this.commandData)).publish());
                    break;
                case this.forgotPassword:
                    promises.push(new InitOKEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new ReadPublicCoursesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new RenderLoginAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new OpenForgotPasswordAction(this.commandData)).publish());
                    break;
                case this.newPassword:
                    promises.push(new InitOKEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new ReadPublicCoursesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new RenderLoginAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new OpenNewPasswordAction(this.commandData)).publish());
                    break;
                case this.register:
                    promises.push(new InitOKEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new ReadPublicCoursesAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new RenderLoginAction(this.commandData)).publish());
                    promises.push(new TriggerAction(new OpenRegistrationAction(this.commandData)).publish());
                    break;
                case this.confirmEmail:
                    promises.push(new TriggerAction(new ConfirmEmailAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractInitCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractLoginCommand = function (_Command) {
    _inherits(AbstractLoginCommand, _Command);

    function AbstractLoginCommand(commandParam) {
        _classCallCheck(this, AbstractLoginCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractLoginCommand).call(this, commandParam, "LoginCommand"));

        _this.ok = "ok";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractLoginCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new UserLoggedInEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractLoginCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractLogoutCommand = function (_Command) {
    _inherits(AbstractLogoutCommand, _Command);

    function AbstractLogoutCommand(commandParam) {
        _classCallCheck(this, AbstractLogoutCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractLogoutCommand).call(this, commandParam, "LogoutCommand"));

        _this.ok = "ok";
        return _this;
    }

    _createClass(AbstractLogoutCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new UserLoggedOutEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractLogoutCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractOpenReallyDeleteDialogCommand = function (_Command) {
    _inherits(AbstractOpenReallyDeleteDialogCommand, _Command);

    function AbstractOpenReallyDeleteDialogCommand(commandParam) {
        _classCallCheck(this, AbstractOpenReallyDeleteDialogCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractOpenReallyDeleteDialogCommand).call(this, commandParam, "OpenReallyDeleteDialogCommand"));

        _this.removeCourseFromUser = "removeCourseFromUser";
        _this.deleteBox = "deleteBox";
        return _this;
    }

    _createClass(AbstractOpenReallyDeleteDialogCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.removeCourseFromUser:
                    promises.push(new DisplayRemoveCourseFromUserDialogEvent(this.commandData).publish());
                    break;
                case this.deleteBox:
                    promises.push(new DisplayDeleteBoxDialogEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractOpenReallyDeleteDialogCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRenderHomeCommand = function (_Command) {
    _inherits(AbstractRenderHomeCommand, _Command);

    function AbstractRenderHomeCommand(commandParam) {
        _classCallCheck(this, AbstractRenderHomeCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRenderHomeCommand).call(this, commandParam, "RenderHomeCommand"));

        _this.ok = "ok";
        return _this;
    }

    _createClass(AbstractRenderHomeCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new RenderHomeEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractRenderHomeCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRenderLoginCommand = function (_Command) {
    _inherits(AbstractRenderLoginCommand, _Command);

    function AbstractRenderLoginCommand(commandParam) {
        _classCallCheck(this, AbstractRenderLoginCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRenderLoginCommand).call(this, commandParam, "RenderLoginCommand"));

        _this.ok = "ok";
        return _this;
    }

    _createClass(AbstractRenderLoginCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new RenderLoginEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractRenderLoginCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRenderLogoutCommand = function (_Command) {
    _inherits(AbstractRenderLogoutCommand, _Command);

    function AbstractRenderLogoutCommand(commandParam) {
        _classCallCheck(this, AbstractRenderLogoutCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRenderLogoutCommand).call(this, commandParam, "RenderLogoutCommand"));

        _this.ok = "ok";
        return _this;
    }

    _createClass(AbstractRenderLogoutCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new RenderLogoutEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractRenderLogoutCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRouteCommand = function (_Command) {
    _inherits(AbstractRouteCommand, _Command);

    function AbstractRouteCommand(commandParam) {
        _classCallCheck(this, AbstractRouteCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRouteCommand).call(this, commandParam, "RouteCommand"));

        _this.ok = "ok";
        return _this;
    }

    _createClass(AbstractRouteCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new UpdateHashEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new InitAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractRouteCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractSaveResultCommand = function (_Command) {
    _inherits(AbstractSaveResultCommand, _Command);

    function AbstractSaveResultCommand(commandParam) {
        _classCallCheck(this, AbstractSaveResultCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractSaveResultCommand).call(this, commandParam, "SaveResultCommand"));

        _this.noCredentials = "noCredentials";
        _this.resultSaved = "resultSaved";
        _this.serverError = "serverError";
        return _this;
    }

    _createClass(AbstractSaveResultCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.noCredentials:
                    promises.push(new RenderResultEvent(this.commandData).publish());
                    break;
                case this.resultSaved:
                    promises.push(new TriggerAction(new AddCardsToBoxAction(this.commandData)).publish());
                    break;
                case this.serverError:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractSaveResultCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractSwitchLanguageCommand = function (_Command) {
    _inherits(AbstractSwitchLanguageCommand, _Command);

    function AbstractSwitchLanguageCommand(commandParam) {
        _classCallCheck(this, AbstractSwitchLanguageCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractSwitchLanguageCommand).call(this, commandParam, "SwitchLanguageCommand"));

        _this.ok = "ok";
        return _this;
    }

    _createClass(AbstractSwitchLanguageCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new SwitchLanguageEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new InitAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractSwitchLanguageCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractValidateRequiredFieldCommand = function (_Command) {
    _inherits(AbstractValidateRequiredFieldCommand, _Command);

    function AbstractValidateRequiredFieldCommand(commandParam) {
        _classCallCheck(this, AbstractValidateRequiredFieldCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractValidateRequiredFieldCommand).call(this, commandParam, "ValidateRequiredFieldCommand"));

        _this.fieldEmpty = "fieldEmpty";
        _this.fieldNotEmpty = "fieldNotEmpty";
        return _this;
    }

    _createClass(AbstractValidateRequiredFieldCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.fieldEmpty:
                    promises.push(new FieldEmptyEvent(this.commandData).publish());
                    break;
                case this.fieldNotEmpty:
                    promises.push(new FieldNotEmptyEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractValidateRequiredFieldCommand;
}(Command);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractDisplayDeleteBoxDialogEvent = function (_Event) {
    _inherits(AbstractDisplayDeleteBoxDialogEvent, _Event);

    function AbstractDisplayDeleteBoxDialogEvent(eventParam) {
        _classCallCheck(this, AbstractDisplayDeleteBoxDialogEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractDisplayDeleteBoxDialogEvent).call(this, eventParam, 'DisplayDeleteBoxDialogEvent'));
    }

    return AbstractDisplayDeleteBoxDialogEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractDisplayRemoveCourseFromUserDialogEvent = function (_Event) {
    _inherits(AbstractDisplayRemoveCourseFromUserDialogEvent, _Event);

    function AbstractDisplayRemoveCourseFromUserDialogEvent(eventParam) {
        _classCallCheck(this, AbstractDisplayRemoveCourseFromUserDialogEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractDisplayRemoveCourseFromUserDialogEvent).call(this, eventParam, 'DisplayRemoveCourseFromUserDialogEvent'));
    }

    return AbstractDisplayRemoveCourseFromUserDialogEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractErrorEvent = function (_Event) {
    _inherits(AbstractErrorEvent, _Event);

    function AbstractErrorEvent(eventParam) {
        _classCallCheck(this, AbstractErrorEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractErrorEvent).call(this, eventParam, 'ErrorEvent'));
    }

    return AbstractErrorEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractFieldEmptyEvent = function (_Event) {
    _inherits(AbstractFieldEmptyEvent, _Event);

    function AbstractFieldEmptyEvent(eventParam) {
        _classCallCheck(this, AbstractFieldEmptyEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractFieldEmptyEvent).call(this, eventParam, 'FieldEmptyEvent'));
    }

    return AbstractFieldEmptyEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractFieldNotEmptyEvent = function (_Event) {
    _inherits(AbstractFieldNotEmptyEvent, _Event);

    function AbstractFieldNotEmptyEvent(eventParam) {
        _classCallCheck(this, AbstractFieldNotEmptyEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractFieldNotEmptyEvent).call(this, eventParam, 'FieldNotEmptyEvent'));
    }

    return AbstractFieldNotEmptyEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractInitOKEvent = function (_Event) {
    _inherits(AbstractInitOKEvent, _Event);

    function AbstractInitOKEvent(eventParam) {
        _classCallCheck(this, AbstractInitOKEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractInitOKEvent).call(this, eventParam, 'InitOKEvent'));
    }

    return AbstractInitOKEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractMessageEvent = function (_Event) {
    _inherits(AbstractMessageEvent, _Event);

    function AbstractMessageEvent(eventParam) {
        _classCallCheck(this, AbstractMessageEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractMessageEvent).call(this, eventParam, 'MessageEvent'));
    }

    return AbstractMessageEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRenderHomeEvent = function (_Event) {
    _inherits(AbstractRenderHomeEvent, _Event);

    function AbstractRenderHomeEvent(eventParam) {
        _classCallCheck(this, AbstractRenderHomeEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRenderHomeEvent).call(this, eventParam, 'RenderHomeEvent'));
    }

    return AbstractRenderHomeEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRenderLoginEvent = function (_Event) {
    _inherits(AbstractRenderLoginEvent, _Event);

    function AbstractRenderLoginEvent(eventParam) {
        _classCallCheck(this, AbstractRenderLoginEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRenderLoginEvent).call(this, eventParam, 'RenderLoginEvent'));
    }

    return AbstractRenderLoginEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRenderLogoutEvent = function (_Event) {
    _inherits(AbstractRenderLogoutEvent, _Event);

    function AbstractRenderLogoutEvent(eventParam) {
        _classCallCheck(this, AbstractRenderLogoutEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRenderLogoutEvent).call(this, eventParam, 'RenderLogoutEvent'));
    }

    return AbstractRenderLogoutEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRenderResultEvent = function (_Event) {
    _inherits(AbstractRenderResultEvent, _Event);

    function AbstractRenderResultEvent(eventParam) {
        _classCallCheck(this, AbstractRenderResultEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRenderResultEvent).call(this, eventParam, 'RenderResultEvent'));
    }

    return AbstractRenderResultEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractServerErrorEvent = function (_Event) {
    _inherits(AbstractServerErrorEvent, _Event);

    function AbstractServerErrorEvent(eventParam) {
        _classCallCheck(this, AbstractServerErrorEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractServerErrorEvent).call(this, eventParam, 'ServerErrorEvent'));
    }

    return AbstractServerErrorEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractSwitchLanguageEvent = function (_Event) {
    _inherits(AbstractSwitchLanguageEvent, _Event);

    function AbstractSwitchLanguageEvent(eventParam) {
        _classCallCheck(this, AbstractSwitchLanguageEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractSwitchLanguageEvent).call(this, eventParam, 'SwitchLanguageEvent'));
    }

    return AbstractSwitchLanguageEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractUpdateHashEvent = function (_Event) {
    _inherits(AbstractUpdateHashEvent, _Event);

    function AbstractUpdateHashEvent(eventParam) {
        _classCallCheck(this, AbstractUpdateHashEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractUpdateHashEvent).call(this, eventParam, 'UpdateHashEvent'));
    }

    return AbstractUpdateHashEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractUserLoggedInEvent = function (_Event) {
    _inherits(AbstractUserLoggedInEvent, _Event);

    function AbstractUserLoggedInEvent(eventParam) {
        _classCallCheck(this, AbstractUserLoggedInEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractUserLoggedInEvent).call(this, eventParam, 'UserLoggedInEvent'));
    }

    return AbstractUserLoggedInEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractUserLoggedOutEvent = function (_Event) {
    _inherits(AbstractUserLoggedOutEvent, _Event);

    function AbstractUserLoggedOutEvent(eventParam) {
        _classCallCheck(this, AbstractUserLoggedOutEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractUserLoggedOutEvent).call(this, eventParam, 'UserLoggedOutEvent'));
    }

    return AbstractUserLoggedOutEvent;
}(Event);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractDisplayNextQuestionAction = function (_Action) {
  _inherits(AbstractDisplayNextQuestionAction, _Action);

  function AbstractDisplayNextQuestionAction(actionParam) {
    _classCallCheck(this, AbstractDisplayNextQuestionAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractDisplayNextQuestionAction).call(this, actionParam, 'DisplayNextQuestionAction'));
  }

  _createClass(AbstractDisplayNextQuestionAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new DisplayNextQuestionCommand(this.actionData);
    }
  }]);

  return AbstractDisplayNextQuestionAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractShowCorrectMultipleChoiceAction = function (_Action) {
  _inherits(AbstractShowCorrectMultipleChoiceAction, _Action);

  function AbstractShowCorrectMultipleChoiceAction(actionParam) {
    _classCallCheck(this, AbstractShowCorrectMultipleChoiceAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractShowCorrectMultipleChoiceAction).call(this, actionParam, 'ShowCorrectMultipleChoiceAction'));
  }

  _createClass(AbstractShowCorrectMultipleChoiceAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new ShowCorrectMultipleChoiceCommand(this.actionData);
    }
  }]);

  return AbstractShowCorrectMultipleChoiceAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractShowFalseMultipleChoiceAction = function (_Action) {
  _inherits(AbstractShowFalseMultipleChoiceAction, _Action);

  function AbstractShowFalseMultipleChoiceAction(actionParam) {
    _classCallCheck(this, AbstractShowFalseMultipleChoiceAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractShowFalseMultipleChoiceAction).call(this, actionParam, 'ShowFalseMultipleChoiceAction'));
  }

  _createClass(AbstractShowFalseMultipleChoiceAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new ShowFalseMultipleChoiceCommand(this.actionData);
    }
  }]);

  return AbstractShowFalseMultipleChoiceAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractDisplayNextQuestionCommand = function (_Command) {
    _inherits(AbstractDisplayNextQuestionCommand, _Command);

    function AbstractDisplayNextQuestionCommand(commandParam) {
        _classCallCheck(this, AbstractDisplayNextQuestionCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractDisplayNextQuestionCommand).call(this, commandParam, "DisplayNextQuestionCommand"));

        _this.go = "go";
        return _this;
    }

    _createClass(AbstractDisplayNextQuestionCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.go:
                    promises.push(new DisplayNextQuestionEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractDisplayNextQuestionCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractShowCorrectMultipleChoiceCommand = function (_Command) {
    _inherits(AbstractShowCorrectMultipleChoiceCommand, _Command);

    function AbstractShowCorrectMultipleChoiceCommand(commandParam) {
        _classCallCheck(this, AbstractShowCorrectMultipleChoiceCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractShowCorrectMultipleChoiceCommand).call(this, commandParam, "ShowCorrectMultipleChoiceCommand"));

        _this.last = "last";
        _this.notLast = "notLast";
        return _this;
    }

    _createClass(AbstractShowCorrectMultipleChoiceCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.last:
                    promises.push(new ShowCorrectMultipleChoiceEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new SaveResultAction(this.commandData)).publish());
                    break;
                case this.notLast:
                    promises.push(new ShowCorrectMultipleChoiceEvent(this.commandData).publish());
                    promises.push(new EnableNextButtonEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractShowCorrectMultipleChoiceCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractShowFalseMultipleChoiceCommand = function (_Command) {
    _inherits(AbstractShowFalseMultipleChoiceCommand, _Command);

    function AbstractShowFalseMultipleChoiceCommand(commandParam) {
        _classCallCheck(this, AbstractShowFalseMultipleChoiceCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractShowFalseMultipleChoiceCommand).call(this, commandParam, "ShowFalseMultipleChoiceCommand"));

        _this.last = "last";
        _this.notLast = "notLast";
        return _this;
    }

    _createClass(AbstractShowFalseMultipleChoiceCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.last:
                    promises.push(new ShowFalseMultipleChoiceEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new SaveResultAction(this.commandData)).publish());
                    break;
                case this.notLast:
                    promises.push(new ShowFalseMultipleChoiceEvent(this.commandData).publish());
                    promises.push(new EnableNextButtonEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractShowFalseMultipleChoiceCommand;
}(Command);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractDisplayNextQuestionEvent = function (_Event) {
    _inherits(AbstractDisplayNextQuestionEvent, _Event);

    function AbstractDisplayNextQuestionEvent(eventParam) {
        _classCallCheck(this, AbstractDisplayNextQuestionEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractDisplayNextQuestionEvent).call(this, eventParam, 'DisplayNextQuestionEvent'));
    }

    return AbstractDisplayNextQuestionEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractEnableNextButtonEvent = function (_Event) {
    _inherits(AbstractEnableNextButtonEvent, _Event);

    function AbstractEnableNextButtonEvent(eventParam) {
        _classCallCheck(this, AbstractEnableNextButtonEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractEnableNextButtonEvent).call(this, eventParam, 'EnableNextButtonEvent'));
    }

    return AbstractEnableNextButtonEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractShowCorrectMultipleChoiceEvent = function (_Event) {
    _inherits(AbstractShowCorrectMultipleChoiceEvent, _Event);

    function AbstractShowCorrectMultipleChoiceEvent(eventParam) {
        _classCallCheck(this, AbstractShowCorrectMultipleChoiceEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractShowCorrectMultipleChoiceEvent).call(this, eventParam, 'ShowCorrectMultipleChoiceEvent'));
    }

    return AbstractShowCorrectMultipleChoiceEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractShowFalseMultipleChoiceEvent = function (_Event) {
    _inherits(AbstractShowFalseMultipleChoiceEvent, _Event);

    function AbstractShowFalseMultipleChoiceEvent(eventParam) {
        _classCallCheck(this, AbstractShowFalseMultipleChoiceEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractShowFalseMultipleChoiceEvent).call(this, eventParam, 'ShowFalseMultipleChoiceEvent'));
    }

    return AbstractShowFalseMultipleChoiceEvent;
}(Event);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadBoxesAction = function (_Action) {
  _inherits(AbstractReadBoxesAction, _Action);

  function AbstractReadBoxesAction(actionParam) {
    _classCallCheck(this, AbstractReadBoxesAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadBoxesAction).call(this, actionParam, 'ReadBoxesAction'));
  }

  _createClass(AbstractReadBoxesAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new ReadBoxesCommand(this.actionData);
    }
  }]);

  return AbstractReadBoxesAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadNextCardAction = function (_Action) {
  _inherits(AbstractReadNextCardAction, _Action);

  function AbstractReadNextCardAction(actionParam) {
    _classCallCheck(this, AbstractReadNextCardAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadNextCardAction).call(this, actionParam, 'ReadNextCardAction'));
  }

  _createClass(AbstractReadNextCardAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new ReadNextCardCommand(this.actionData);
    }
  }]);

  return AbstractReadNextCardAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadPrivateCoursesAction = function (_Action) {
  _inherits(AbstractReadPrivateCoursesAction, _Action);

  function AbstractReadPrivateCoursesAction(actionParam) {
    _classCallCheck(this, AbstractReadPrivateCoursesAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadPrivateCoursesAction).call(this, actionParam, 'ReadPrivateCoursesAction'));
  }

  _createClass(AbstractReadPrivateCoursesAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new ReadPrivateCoursesCommand(this.actionData);
    }
  }]);

  return AbstractReadPrivateCoursesAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadPrivateLessonsAction = function (_Action) {
  _inherits(AbstractReadPrivateLessonsAction, _Action);

  function AbstractReadPrivateLessonsAction(actionParam) {
    _classCallCheck(this, AbstractReadPrivateLessonsAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadPrivateLessonsAction).call(this, actionParam, 'ReadPrivateLessonsAction'));
  }

  _createClass(AbstractReadPrivateLessonsAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new ReadPrivateLessonsCommand(this.actionData);
    }
  }]);

  return AbstractReadPrivateLessonsAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadPrivateTestAction = function (_Action) {
  _inherits(AbstractReadPrivateTestAction, _Action);

  function AbstractReadPrivateTestAction(actionParam) {
    _classCallCheck(this, AbstractReadPrivateTestAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadPrivateTestAction).call(this, actionParam, 'ReadPrivateTestAction'));
  }

  _createClass(AbstractReadPrivateTestAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new ReadPrivateTestCommand(this.actionData);
    }
  }]);

  return AbstractReadPrivateTestAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadPrivateTestsAction = function (_Action) {
  _inherits(AbstractReadPrivateTestsAction, _Action);

  function AbstractReadPrivateTestsAction(actionParam) {
    _classCallCheck(this, AbstractReadPrivateTestsAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadPrivateTestsAction).call(this, actionParam, 'ReadPrivateTestsAction'));
  }

  _createClass(AbstractReadPrivateTestsAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new ReadPrivateTestsCommand(this.actionData);
    }
  }]);

  return AbstractReadPrivateTestsAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadPublicCoursesAction = function (_Action) {
  _inherits(AbstractReadPublicCoursesAction, _Action);

  function AbstractReadPublicCoursesAction(actionParam) {
    _classCallCheck(this, AbstractReadPublicCoursesAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadPublicCoursesAction).call(this, actionParam, 'ReadPublicCoursesAction'));
  }

  _createClass(AbstractReadPublicCoursesAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new ReadPublicCoursesCommand(this.actionData);
    }
  }]);

  return AbstractReadPublicCoursesAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadPublicLessonsAction = function (_Action) {
  _inherits(AbstractReadPublicLessonsAction, _Action);

  function AbstractReadPublicLessonsAction(actionParam) {
    _classCallCheck(this, AbstractReadPublicLessonsAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadPublicLessonsAction).call(this, actionParam, 'ReadPublicLessonsAction'));
  }

  _createClass(AbstractReadPublicLessonsAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new ReadPublicLessonsCommand(this.actionData);
    }
  }]);

  return AbstractReadPublicLessonsAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadPublicTestAction = function (_Action) {
  _inherits(AbstractReadPublicTestAction, _Action);

  function AbstractReadPublicTestAction(actionParam) {
    _classCallCheck(this, AbstractReadPublicTestAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadPublicTestAction).call(this, actionParam, 'ReadPublicTestAction'));
  }

  _createClass(AbstractReadPublicTestAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new ReadPublicTestCommand(this.actionData);
    }
  }]);

  return AbstractReadPublicTestAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadPublicTestsAction = function (_Action) {
  _inherits(AbstractReadPublicTestsAction, _Action);

  function AbstractReadPublicTestsAction(actionParam) {
    _classCallCheck(this, AbstractReadPublicTestsAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadPublicTestsAction).call(this, actionParam, 'ReadPublicTestsAction'));
  }

  _createClass(AbstractReadPublicTestsAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new ReadPublicTestsCommand(this.actionData);
    }
  }]);

  return AbstractReadPublicTestsAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadResultAction = function (_Action) {
  _inherits(AbstractReadResultAction, _Action);

  function AbstractReadResultAction(actionParam) {
    _classCallCheck(this, AbstractReadResultAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadResultAction).call(this, actionParam, 'ReadResultAction'));
  }

  _createClass(AbstractReadResultAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new ReadResultCommand(this.actionData);
    }
  }]);

  return AbstractReadResultAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadStatisticsAction = function (_Action) {
  _inherits(AbstractReadStatisticsAction, _Action);

  function AbstractReadStatisticsAction(actionParam) {
    _classCallCheck(this, AbstractReadStatisticsAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadStatisticsAction).call(this, actionParam, 'ReadStatisticsAction'));
  }

  _createClass(AbstractReadStatisticsAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new ReadStatisticsCommand(this.actionData);
    }
  }]);

  return AbstractReadStatisticsAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadBoxesCommand = function (_Command) {
    _inherits(AbstractReadBoxesCommand, _Command);

    function AbstractReadBoxesCommand(commandParam) {
        _classCallCheck(this, AbstractReadBoxesCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadBoxesCommand).call(this, commandParam, "ReadBoxesCommand"));

        _this.ok = "ok";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractReadBoxesCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new BoxesReadEvent(this.commandData).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractReadBoxesCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadNextCardCommand = function (_Command) {
    _inherits(AbstractReadNextCardCommand, _Command);

    function AbstractReadNextCardCommand(commandParam) {
        _classCallCheck(this, AbstractReadNextCardCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadNextCardCommand).call(this, commandParam, "ReadNextCardCommand"));

        _this.ok = "ok";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractReadNextCardCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new NextCardReadEvent(this.commandData).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractReadNextCardCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadPrivateCoursesCommand = function (_Command) {
    _inherits(AbstractReadPrivateCoursesCommand, _Command);

    function AbstractReadPrivateCoursesCommand(commandParam) {
        _classCallCheck(this, AbstractReadPrivateCoursesCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadPrivateCoursesCommand).call(this, commandParam, "ReadPrivateCoursesCommand"));

        _this.ok = "ok";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractReadPrivateCoursesCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new PrivateCoursesReadEvent(this.commandData).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractReadPrivateCoursesCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadPrivateLessonsCommand = function (_Command) {
    _inherits(AbstractReadPrivateLessonsCommand, _Command);

    function AbstractReadPrivateLessonsCommand(commandParam) {
        _classCallCheck(this, AbstractReadPrivateLessonsCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadPrivateLessonsCommand).call(this, commandParam, "ReadPrivateLessonsCommand"));

        _this.ok = "ok";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractReadPrivateLessonsCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new PrivateLessonsReadEvent(this.commandData).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractReadPrivateLessonsCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadPrivateTestCommand = function (_Command) {
    _inherits(AbstractReadPrivateTestCommand, _Command);

    function AbstractReadPrivateTestCommand(commandParam) {
        _classCallCheck(this, AbstractReadPrivateTestCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadPrivateTestCommand).call(this, commandParam, "ReadPrivateTestCommand"));

        _this.ok = "ok";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractReadPrivateTestCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new PrivateTestReadEvent(this.commandData).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractReadPrivateTestCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadPrivateTestsCommand = function (_Command) {
    _inherits(AbstractReadPrivateTestsCommand, _Command);

    function AbstractReadPrivateTestsCommand(commandParam) {
        _classCallCheck(this, AbstractReadPrivateTestsCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadPrivateTestsCommand).call(this, commandParam, "ReadPrivateTestsCommand"));

        _this.ok = "ok";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractReadPrivateTestsCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new PrivateTestsReadEvent(this.commandData).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractReadPrivateTestsCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadPublicCoursesCommand = function (_Command) {
    _inherits(AbstractReadPublicCoursesCommand, _Command);

    function AbstractReadPublicCoursesCommand(commandParam) {
        _classCallCheck(this, AbstractReadPublicCoursesCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadPublicCoursesCommand).call(this, commandParam, "ReadPublicCoursesCommand"));

        _this.ok = "ok";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractReadPublicCoursesCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new PublicCoursesReadEvent(this.commandData).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractReadPublicCoursesCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadPublicLessonsCommand = function (_Command) {
    _inherits(AbstractReadPublicLessonsCommand, _Command);

    function AbstractReadPublicLessonsCommand(commandParam) {
        _classCallCheck(this, AbstractReadPublicLessonsCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadPublicLessonsCommand).call(this, commandParam, "ReadPublicLessonsCommand"));

        _this.ok = "ok";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractReadPublicLessonsCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new PublicLessonsReadEvent(this.commandData).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractReadPublicLessonsCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadPublicTestCommand = function (_Command) {
    _inherits(AbstractReadPublicTestCommand, _Command);

    function AbstractReadPublicTestCommand(commandParam) {
        _classCallCheck(this, AbstractReadPublicTestCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadPublicTestCommand).call(this, commandParam, "ReadPublicTestCommand"));

        _this.ok = "ok";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractReadPublicTestCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new PublicTestReadEvent(this.commandData).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractReadPublicTestCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadPublicTestsCommand = function (_Command) {
    _inherits(AbstractReadPublicTestsCommand, _Command);

    function AbstractReadPublicTestsCommand(commandParam) {
        _classCallCheck(this, AbstractReadPublicTestsCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadPublicTestsCommand).call(this, commandParam, "ReadPublicTestsCommand"));

        _this.ok = "ok";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractReadPublicTestsCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new PublicTestsReadEvent(this.commandData).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractReadPublicTestsCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadResultCommand = function (_Command) {
    _inherits(AbstractReadResultCommand, _Command);

    function AbstractReadResultCommand(commandParam) {
        _classCallCheck(this, AbstractReadResultCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadResultCommand).call(this, commandParam, "ReadResultCommand"));

        _this.ok = "ok";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractReadResultCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new ResultReadEvent(this.commandData).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractReadResultCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractReadStatisticsCommand = function (_Command) {
    _inherits(AbstractReadStatisticsCommand, _Command);

    function AbstractReadStatisticsCommand(commandParam) {
        _classCallCheck(this, AbstractReadStatisticsCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractReadStatisticsCommand).call(this, commandParam, "ReadStatisticsCommand"));

        _this.ok = "ok";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractReadStatisticsCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new StatisticsReadEvent(this.commandData).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractReadStatisticsCommand;
}(Command);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractBoxesReadEvent = function (_Event) {
    _inherits(AbstractBoxesReadEvent, _Event);

    function AbstractBoxesReadEvent(eventParam) {
        _classCallCheck(this, AbstractBoxesReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractBoxesReadEvent).call(this, eventParam, 'BoxesReadEvent'));
    }

    return AbstractBoxesReadEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractNextCardReadEvent = function (_Event) {
    _inherits(AbstractNextCardReadEvent, _Event);

    function AbstractNextCardReadEvent(eventParam) {
        _classCallCheck(this, AbstractNextCardReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractNextCardReadEvent).call(this, eventParam, 'NextCardReadEvent'));
    }

    return AbstractNextCardReadEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractPrivateCoursesReadEvent = function (_Event) {
    _inherits(AbstractPrivateCoursesReadEvent, _Event);

    function AbstractPrivateCoursesReadEvent(eventParam) {
        _classCallCheck(this, AbstractPrivateCoursesReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractPrivateCoursesReadEvent).call(this, eventParam, 'PrivateCoursesReadEvent'));
    }

    return AbstractPrivateCoursesReadEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractPrivateLessonsReadEvent = function (_Event) {
    _inherits(AbstractPrivateLessonsReadEvent, _Event);

    function AbstractPrivateLessonsReadEvent(eventParam) {
        _classCallCheck(this, AbstractPrivateLessonsReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractPrivateLessonsReadEvent).call(this, eventParam, 'PrivateLessonsReadEvent'));
    }

    return AbstractPrivateLessonsReadEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractPrivateTestReadEvent = function (_Event) {
    _inherits(AbstractPrivateTestReadEvent, _Event);

    function AbstractPrivateTestReadEvent(eventParam) {
        _classCallCheck(this, AbstractPrivateTestReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractPrivateTestReadEvent).call(this, eventParam, 'PrivateTestReadEvent'));
    }

    return AbstractPrivateTestReadEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractPrivateTestsReadEvent = function (_Event) {
    _inherits(AbstractPrivateTestsReadEvent, _Event);

    function AbstractPrivateTestsReadEvent(eventParam) {
        _classCallCheck(this, AbstractPrivateTestsReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractPrivateTestsReadEvent).call(this, eventParam, 'PrivateTestsReadEvent'));
    }

    return AbstractPrivateTestsReadEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractPublicCoursesReadEvent = function (_Event) {
    _inherits(AbstractPublicCoursesReadEvent, _Event);

    function AbstractPublicCoursesReadEvent(eventParam) {
        _classCallCheck(this, AbstractPublicCoursesReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractPublicCoursesReadEvent).call(this, eventParam, 'PublicCoursesReadEvent'));
    }

    return AbstractPublicCoursesReadEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractPublicLessonsReadEvent = function (_Event) {
    _inherits(AbstractPublicLessonsReadEvent, _Event);

    function AbstractPublicLessonsReadEvent(eventParam) {
        _classCallCheck(this, AbstractPublicLessonsReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractPublicLessonsReadEvent).call(this, eventParam, 'PublicLessonsReadEvent'));
    }

    return AbstractPublicLessonsReadEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractPublicTestReadEvent = function (_Event) {
    _inherits(AbstractPublicTestReadEvent, _Event);

    function AbstractPublicTestReadEvent(eventParam) {
        _classCallCheck(this, AbstractPublicTestReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractPublicTestReadEvent).call(this, eventParam, 'PublicTestReadEvent'));
    }

    return AbstractPublicTestReadEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractPublicTestsReadEvent = function (_Event) {
    _inherits(AbstractPublicTestsReadEvent, _Event);

    function AbstractPublicTestsReadEvent(eventParam) {
        _classCallCheck(this, AbstractPublicTestsReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractPublicTestsReadEvent).call(this, eventParam, 'PublicTestsReadEvent'));
    }

    return AbstractPublicTestsReadEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractResultReadEvent = function (_Event) {
    _inherits(AbstractResultReadEvent, _Event);

    function AbstractResultReadEvent(eventParam) {
        _classCallCheck(this, AbstractResultReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractResultReadEvent).call(this, eventParam, 'ResultReadEvent'));
    }

    return AbstractResultReadEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractStatisticsReadEvent = function (_Event) {
    _inherits(AbstractStatisticsReadEvent, _Event);

    function AbstractStatisticsReadEvent(eventParam) {
        _classCallCheck(this, AbstractStatisticsReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractStatisticsReadEvent).call(this, eventParam, 'StatisticsReadEvent'));
    }

    return AbstractStatisticsReadEvent;
}(Event);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractCheckUsernameAction = function (_Action) {
  _inherits(AbstractCheckUsernameAction, _Action);

  function AbstractCheckUsernameAction(actionParam) {
    _classCallCheck(this, AbstractCheckUsernameAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractCheckUsernameAction).call(this, actionParam, 'CheckUsernameAction'));
  }

  _createClass(AbstractCheckUsernameAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new CheckUsernameCommand(this.actionData);
    }
  }]);

  return AbstractCheckUsernameAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractConfirmEmailAction = function (_Action) {
  _inherits(AbstractConfirmEmailAction, _Action);

  function AbstractConfirmEmailAction(actionParam) {
    _classCallCheck(this, AbstractConfirmEmailAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractConfirmEmailAction).call(this, actionParam, 'ConfirmEmailAction'));
  }

  _createClass(AbstractConfirmEmailAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new ConfirmEmailCommand(this.actionData);
    }
  }]);

  return AbstractConfirmEmailAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractDeleteBoxAction = function (_Action) {
  _inherits(AbstractDeleteBoxAction, _Action);

  function AbstractDeleteBoxAction(actionParam) {
    _classCallCheck(this, AbstractDeleteBoxAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractDeleteBoxAction).call(this, actionParam, 'DeleteBoxAction'));
  }

  _createClass(AbstractDeleteBoxAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new DeleteBoxCommand(this.actionData);
    }
  }]);

  return AbstractDeleteBoxAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractFillBoxWithCardsAction = function (_Action) {
  _inherits(AbstractFillBoxWithCardsAction, _Action);

  function AbstractFillBoxWithCardsAction(actionParam) {
    _classCallCheck(this, AbstractFillBoxWithCardsAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractFillBoxWithCardsAction).call(this, actionParam, 'FillBoxWithCardsAction'));
  }

  _createClass(AbstractFillBoxWithCardsAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new FillBoxWithCardsCommand(this.actionData);
    }
  }]);

  return AbstractFillBoxWithCardsAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractLoadBoxAction = function (_Action) {
  _inherits(AbstractLoadBoxAction, _Action);

  function AbstractLoadBoxAction(actionParam) {
    _classCallCheck(this, AbstractLoadBoxAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractLoadBoxAction).call(this, actionParam, 'LoadBoxAction'));
  }

  _createClass(AbstractLoadBoxAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new LoadBoxCommand(this.actionData);
    }
  }]);

  return AbstractLoadBoxAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractLoadCoursesAction = function (_Action) {
  _inherits(AbstractLoadCoursesAction, _Action);

  function AbstractLoadCoursesAction(actionParam) {
    _classCallCheck(this, AbstractLoadCoursesAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractLoadCoursesAction).call(this, actionParam, 'LoadCoursesAction'));
  }

  _createClass(AbstractLoadCoursesAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new LoadCoursesCommand(this.actionData);
    }
  }]);

  return AbstractLoadCoursesAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractOpenBoxCreationAction = function (_Action) {
  _inherits(AbstractOpenBoxCreationAction, _Action);

  function AbstractOpenBoxCreationAction(actionParam) {
    _classCallCheck(this, AbstractOpenBoxCreationAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractOpenBoxCreationAction).call(this, actionParam, 'OpenBoxCreationAction'));
  }

  _createClass(AbstractOpenBoxCreationAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new OpenBoxCreationCommand(this.actionData);
    }
  }]);

  return AbstractOpenBoxCreationAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractOpenChangePasswordAction = function (_Action) {
  _inherits(AbstractOpenChangePasswordAction, _Action);

  function AbstractOpenChangePasswordAction(actionParam) {
    _classCallCheck(this, AbstractOpenChangePasswordAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractOpenChangePasswordAction).call(this, actionParam, 'OpenChangePasswordAction'));
  }

  _createClass(AbstractOpenChangePasswordAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new OpenChangePasswordCommand(this.actionData);
    }
  }]);

  return AbstractOpenChangePasswordAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractOpenCourseSelectionAction = function (_Action) {
  _inherits(AbstractOpenCourseSelectionAction, _Action);

  function AbstractOpenCourseSelectionAction(actionParam) {
    _classCallCheck(this, AbstractOpenCourseSelectionAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractOpenCourseSelectionAction).call(this, actionParam, 'OpenCourseSelectionAction'));
  }

  _createClass(AbstractOpenCourseSelectionAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new OpenCourseSelectionCommand(this.actionData);
    }
  }]);

  return AbstractOpenCourseSelectionAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractOpenForgotPasswordAction = function (_Action) {
  _inherits(AbstractOpenForgotPasswordAction, _Action);

  function AbstractOpenForgotPasswordAction(actionParam) {
    _classCallCheck(this, AbstractOpenForgotPasswordAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractOpenForgotPasswordAction).call(this, actionParam, 'OpenForgotPasswordAction'));
  }

  _createClass(AbstractOpenForgotPasswordAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new OpenForgotPasswordCommand(this.actionData);
    }
  }]);

  return AbstractOpenForgotPasswordAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractOpenNewPasswordAction = function (_Action) {
  _inherits(AbstractOpenNewPasswordAction, _Action);

  function AbstractOpenNewPasswordAction(actionParam) {
    _classCallCheck(this, AbstractOpenNewPasswordAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractOpenNewPasswordAction).call(this, actionParam, 'OpenNewPasswordAction'));
  }

  _createClass(AbstractOpenNewPasswordAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new OpenNewPasswordCommand(this.actionData);
    }
  }]);

  return AbstractOpenNewPasswordAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractOpenProfileAction = function (_Action) {
  _inherits(AbstractOpenProfileAction, _Action);

  function AbstractOpenProfileAction(actionParam) {
    _classCallCheck(this, AbstractOpenProfileAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractOpenProfileAction).call(this, actionParam, 'OpenProfileAction'));
  }

  _createClass(AbstractOpenProfileAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new OpenProfileCommand(this.actionData);
    }
  }]);

  return AbstractOpenProfileAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractOpenRegistrationAction = function (_Action) {
  _inherits(AbstractOpenRegistrationAction, _Action);

  function AbstractOpenRegistrationAction(actionParam) {
    _classCallCheck(this, AbstractOpenRegistrationAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractOpenRegistrationAction).call(this, actionParam, 'OpenRegistrationAction'));
  }

  _createClass(AbstractOpenRegistrationAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new OpenRegistrationCommand(this.actionData);
    }
  }]);

  return AbstractOpenRegistrationAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRemoveCourseAction = function (_Action) {
  _inherits(AbstractRemoveCourseAction, _Action);

  function AbstractRemoveCourseAction(actionParam) {
    _classCallCheck(this, AbstractRemoveCourseAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRemoveCourseAction).call(this, actionParam, 'RemoveCourseAction'));
  }

  _createClass(AbstractRemoveCourseAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new RemoveCourseCommand(this.actionData);
    }
  }]);

  return AbstractRemoveCourseAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractSaveBoxAction = function (_Action) {
  _inherits(AbstractSaveBoxAction, _Action);

  function AbstractSaveBoxAction(actionParam) {
    _classCallCheck(this, AbstractSaveBoxAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractSaveBoxAction).call(this, actionParam, 'SaveBoxAction'));
  }

  _createClass(AbstractSaveBoxAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new SaveBoxCommand(this.actionData);
    }
  }]);

  return AbstractSaveBoxAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractSaveBoxConfigAction = function (_Action) {
  _inherits(AbstractSaveBoxConfigAction, _Action);

  function AbstractSaveBoxConfigAction(actionParam) {
    _classCallCheck(this, AbstractSaveBoxConfigAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractSaveBoxConfigAction).call(this, actionParam, 'SaveBoxConfigAction'));
  }

  _createClass(AbstractSaveBoxConfigAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new SaveBoxConfigCommand(this.actionData);
    }
  }]);

  return AbstractSaveBoxConfigAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractSaveCourseSelectionAction = function (_Action) {
  _inherits(AbstractSaveCourseSelectionAction, _Action);

  function AbstractSaveCourseSelectionAction(actionParam) {
    _classCallCheck(this, AbstractSaveCourseSelectionAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractSaveCourseSelectionAction).call(this, actionParam, 'SaveCourseSelectionAction'));
  }

  _createClass(AbstractSaveCourseSelectionAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new SaveCourseSelectionCommand(this.actionData);
    }
  }]);

  return AbstractSaveCourseSelectionAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractSaveProfileAction = function (_Action) {
  _inherits(AbstractSaveProfileAction, _Action);

  function AbstractSaveProfileAction(actionParam) {
    _classCallCheck(this, AbstractSaveProfileAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractSaveProfileAction).call(this, actionParam, 'SaveProfileAction'));
  }

  _createClass(AbstractSaveProfileAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new SaveProfileCommand(this.actionData);
    }
  }]);

  return AbstractSaveProfileAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractSubmitForgotPasswordRequestAction = function (_Action) {
  _inherits(AbstractSubmitForgotPasswordRequestAction, _Action);

  function AbstractSubmitForgotPasswordRequestAction(actionParam) {
    _classCallCheck(this, AbstractSubmitForgotPasswordRequestAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractSubmitForgotPasswordRequestAction).call(this, actionParam, 'SubmitForgotPasswordRequestAction'));
  }

  _createClass(AbstractSubmitForgotPasswordRequestAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new SubmitForgotPasswordRequestCommand(this.actionData);
    }
  }]);

  return AbstractSubmitForgotPasswordRequestAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractSubmitNewPasswordAction = function (_Action) {
  _inherits(AbstractSubmitNewPasswordAction, _Action);

  function AbstractSubmitNewPasswordAction(actionParam) {
    _classCallCheck(this, AbstractSubmitNewPasswordAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractSubmitNewPasswordAction).call(this, actionParam, 'SubmitNewPasswordAction'));
  }

  _createClass(AbstractSubmitNewPasswordAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new SubmitNewPasswordCommand(this.actionData);
    }
  }]);

  return AbstractSubmitNewPasswordAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractSubmitRegistrationAction = function (_Action) {
  _inherits(AbstractSubmitRegistrationAction, _Action);

  function AbstractSubmitRegistrationAction(actionParam) {
    _classCallCheck(this, AbstractSubmitRegistrationAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractSubmitRegistrationAction).call(this, actionParam, 'SubmitRegistrationAction'));
  }

  _createClass(AbstractSubmitRegistrationAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new SubmitRegistrationCommand(this.actionData);
    }
  }]);

  return AbstractSubmitRegistrationAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractUpdatePasswordAction = function (_Action) {
  _inherits(AbstractUpdatePasswordAction, _Action);

  function AbstractUpdatePasswordAction(actionParam) {
    _classCallCheck(this, AbstractUpdatePasswordAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractUpdatePasswordAction).call(this, actionParam, 'UpdatePasswordAction'));
  }

  _createClass(AbstractUpdatePasswordAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new UpdatePasswordCommand(this.actionData);
    }
  }]);

  return AbstractUpdatePasswordAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractValidatePasswordAction = function (_Action) {
  _inherits(AbstractValidatePasswordAction, _Action);

  function AbstractValidatePasswordAction(actionParam) {
    _classCallCheck(this, AbstractValidatePasswordAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractValidatePasswordAction).call(this, actionParam, 'ValidatePasswordAction'));
  }

  _createClass(AbstractValidatePasswordAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new ValidatePasswordCommand(this.actionData);
    }
  }]);

  return AbstractValidatePasswordAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractCheckUsernameCommand = function (_Command) {
    _inherits(AbstractCheckUsernameCommand, _Command);

    function AbstractCheckUsernameCommand(commandParam) {
        _classCallCheck(this, AbstractCheckUsernameCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractCheckUsernameCommand).call(this, commandParam, "CheckUsernameCommand"));

        _this.empty = "empty";
        _this.available = "available";
        _this.notAvailable = "notAvailable";
        return _this;
    }

    _createClass(AbstractCheckUsernameCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.empty:
                    promises.push(new FieldEmptyEvent(this.commandData).publish());
                    break;
                case this.available:
                    promises.push(new UsernameIsAvailableEvent(this.commandData).publish());
                    break;
                case this.notAvailable:
                    promises.push(new UsernameIsNotAvailableEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractCheckUsernameCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractConfirmEmailCommand = function (_Command) {
    _inherits(AbstractConfirmEmailCommand, _Command);

    function AbstractConfirmEmailCommand(commandParam) {
        _classCallCheck(this, AbstractConfirmEmailCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractConfirmEmailCommand).call(this, commandParam, "ConfirmEmailCommand"));

        _this.saved = "saved";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractConfirmEmailCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.saved:
                    promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractConfirmEmailCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractDeleteBoxCommand = function (_Command) {
    _inherits(AbstractDeleteBoxCommand, _Command);

    function AbstractDeleteBoxCommand(commandParam) {
        _classCallCheck(this, AbstractDeleteBoxCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractDeleteBoxCommand).call(this, commandParam, "DeleteBoxCommand"));

        _this.deleted = "deleted";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractDeleteBoxCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.deleted:
                    promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractDeleteBoxCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractFillBoxWithCardsCommand = function (_Command) {
    _inherits(AbstractFillBoxWithCardsCommand, _Command);

    function AbstractFillBoxWithCardsCommand(commandParam) {
        _classCallCheck(this, AbstractFillBoxWithCardsCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractFillBoxWithCardsCommand).call(this, commandParam, "FillBoxWithCardsCommand"));

        _this.filled = "filled";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractFillBoxWithCardsCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.filled:
                    promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractFillBoxWithCardsCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractLoadBoxCommand = function (_Command) {
    _inherits(AbstractLoadBoxCommand, _Command);

    function AbstractLoadBoxCommand(commandParam) {
        _classCallCheck(this, AbstractLoadBoxCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractLoadBoxCommand).call(this, commandParam, "LoadBoxCommand"));

        _this.loaded = "loaded";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractLoadBoxCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.loaded:
                    promises.push(new RenderBoxEvent(this.commandData).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractLoadBoxCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractLoadCoursesCommand = function (_Command) {
    _inherits(AbstractLoadCoursesCommand, _Command);

    function AbstractLoadCoursesCommand(commandParam) {
        _classCallCheck(this, AbstractLoadCoursesCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractLoadCoursesCommand).call(this, commandParam, "LoadCoursesCommand"));

        _this.loaded = "loaded";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractLoadCoursesCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.loaded:
                    promises.push(new RenderCourseToBoxEvent(this.commandData).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractLoadCoursesCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractOpenBoxCreationCommand = function (_Command) {
    _inherits(AbstractOpenBoxCreationCommand, _Command);

    function AbstractOpenBoxCreationCommand(commandParam) {
        _classCallCheck(this, AbstractOpenBoxCreationCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractOpenBoxCreationCommand).call(this, commandParam, "OpenBoxCreationCommand"));

        _this.ok = "ok";
        return _this;
    }

    _createClass(AbstractOpenBoxCreationCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new RenderBoxEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractOpenBoxCreationCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractOpenChangePasswordCommand = function (_Command) {
    _inherits(AbstractOpenChangePasswordCommand, _Command);

    function AbstractOpenChangePasswordCommand(commandParam) {
        _classCallCheck(this, AbstractOpenChangePasswordCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractOpenChangePasswordCommand).call(this, commandParam, "OpenChangePasswordCommand"));

        _this.ok = "ok";
        return _this;
    }

    _createClass(AbstractOpenChangePasswordCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new RenderChangePasswordEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractOpenChangePasswordCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractOpenCourseSelectionCommand = function (_Command) {
    _inherits(AbstractOpenCourseSelectionCommand, _Command);

    function AbstractOpenCourseSelectionCommand(commandParam) {
        _classCallCheck(this, AbstractOpenCourseSelectionCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractOpenCourseSelectionCommand).call(this, commandParam, "OpenCourseSelectionCommand"));

        _this.coursesRead = "coursesRead";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractOpenCourseSelectionCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.coursesRead:
                    promises.push(new CoursesLoadedEvent(this.commandData).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractOpenCourseSelectionCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractOpenForgotPasswordCommand = function (_Command) {
    _inherits(AbstractOpenForgotPasswordCommand, _Command);

    function AbstractOpenForgotPasswordCommand(commandParam) {
        _classCallCheck(this, AbstractOpenForgotPasswordCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractOpenForgotPasswordCommand).call(this, commandParam, "OpenForgotPasswordCommand"));

        _this.ok = "ok";
        return _this;
    }

    _createClass(AbstractOpenForgotPasswordCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new RenderForgotPasswordEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractOpenForgotPasswordCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractOpenNewPasswordCommand = function (_Command) {
    _inherits(AbstractOpenNewPasswordCommand, _Command);

    function AbstractOpenNewPasswordCommand(commandParam) {
        _classCallCheck(this, AbstractOpenNewPasswordCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractOpenNewPasswordCommand).call(this, commandParam, "OpenNewPasswordCommand"));

        _this.ok = "ok";
        return _this;
    }

    _createClass(AbstractOpenNewPasswordCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new RenderNewPasswordEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractOpenNewPasswordCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractOpenProfileCommand = function (_Command) {
    _inherits(AbstractOpenProfileCommand, _Command);

    function AbstractOpenProfileCommand(commandParam) {
        _classCallCheck(this, AbstractOpenProfileCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractOpenProfileCommand).call(this, commandParam, "OpenProfileCommand"));

        _this.userInfoRead = "userInfoRead";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractOpenProfileCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.userInfoRead:
                    promises.push(new UserInfoLoadedEvent(this.commandData).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractOpenProfileCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractOpenRegistrationCommand = function (_Command) {
    _inherits(AbstractOpenRegistrationCommand, _Command);

    function AbstractOpenRegistrationCommand(commandParam) {
        _classCallCheck(this, AbstractOpenRegistrationCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractOpenRegistrationCommand).call(this, commandParam, "OpenRegistrationCommand"));

        _this.ok = "ok";
        return _this;
    }

    _createClass(AbstractOpenRegistrationCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.ok:
                    promises.push(new RenderRegistrationEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractOpenRegistrationCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRemoveCourseCommand = function (_Command) {
    _inherits(AbstractRemoveCourseCommand, _Command);

    function AbstractRemoveCourseCommand(commandParam) {
        _classCallCheck(this, AbstractRemoveCourseCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRemoveCourseCommand).call(this, commandParam, "RemoveCourseCommand"));

        _this.deleted = "deleted";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractRemoveCourseCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.deleted:
                    promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractRemoveCourseCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractSaveBoxCommand = function (_Command) {
    _inherits(AbstractSaveBoxCommand, _Command);

    function AbstractSaveBoxCommand(commandParam) {
        _classCallCheck(this, AbstractSaveBoxCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractSaveBoxCommand).call(this, commandParam, "SaveBoxCommand"));

        _this.saved = "saved";
        _this.dataInvalid = "dataInvalid";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractSaveBoxCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.saved:
                    promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
                    break;
                case this.dataInvalid:
                    promises.push(new ErrorEvent(this.commandData).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractSaveBoxCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractSaveBoxConfigCommand = function (_Command) {
    _inherits(AbstractSaveBoxConfigCommand, _Command);

    function AbstractSaveBoxConfigCommand(commandParam) {
        _classCallCheck(this, AbstractSaveBoxConfigCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractSaveBoxConfigCommand).call(this, commandParam, "SaveBoxConfigCommand"));

        _this.saved = "saved";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractSaveBoxConfigCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.saved:
                    promises.push(new TriggerAction(new FillBoxWithCardsAction(this.commandData)).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractSaveBoxConfigCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractSaveCourseSelectionCommand = function (_Command) {
    _inherits(AbstractSaveCourseSelectionCommand, _Command);

    function AbstractSaveCourseSelectionCommand(commandParam) {
        _classCallCheck(this, AbstractSaveCourseSelectionCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractSaveCourseSelectionCommand).call(this, commandParam, "SaveCourseSelectionCommand"));

        _this.saved = "saved";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractSaveCourseSelectionCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.saved:
                    promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractSaveCourseSelectionCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractSaveProfileCommand = function (_Command) {
    _inherits(AbstractSaveProfileCommand, _Command);

    function AbstractSaveProfileCommand(commandParam) {
        _classCallCheck(this, AbstractSaveProfileCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractSaveProfileCommand).call(this, commandParam, "SaveProfileCommand"));

        _this.saved = "saved";
        _this.dataInvalid = "dataInvalid";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractSaveProfileCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.saved:
                    promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
                    break;
                case this.dataInvalid:
                    promises.push(new ErrorEvent(this.commandData).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractSaveProfileCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractSubmitForgotPasswordRequestCommand = function (_Command) {
    _inherits(AbstractSubmitForgotPasswordRequestCommand, _Command);

    function AbstractSubmitForgotPasswordRequestCommand(commandParam) {
        _classCallCheck(this, AbstractSubmitForgotPasswordRequestCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractSubmitForgotPasswordRequestCommand).call(this, commandParam, "SubmitForgotPasswordRequestCommand"));

        _this.dataInvalid = "dataInvalid";
        _this.ok = "ok";
        return _this;
    }

    _createClass(AbstractSubmitForgotPasswordRequestCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.dataInvalid:
                    promises.push(new ErrorEvent(this.commandData).publish());
                    break;
                case this.ok:
                    promises.push(new MessageEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractSubmitForgotPasswordRequestCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractSubmitNewPasswordCommand = function (_Command) {
    _inherits(AbstractSubmitNewPasswordCommand, _Command);

    function AbstractSubmitNewPasswordCommand(commandParam) {
        _classCallCheck(this, AbstractSubmitNewPasswordCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractSubmitNewPasswordCommand).call(this, commandParam, "SubmitNewPasswordCommand"));

        _this.dataInvalid = "dataInvalid";
        _this.mismatch = "mismatch";
        _this.saved = "saved";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractSubmitNewPasswordCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.dataInvalid:
                    promises.push(new ErrorEvent(this.commandData).publish());
                    break;
                case this.mismatch:
                    promises.push(new ErrorEvent(this.commandData).publish());
                    break;
                case this.saved:
                    promises.push(new UserLoggedInEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractSubmitNewPasswordCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractSubmitRegistrationCommand = function (_Command) {
    _inherits(AbstractSubmitRegistrationCommand, _Command);

    function AbstractSubmitRegistrationCommand(commandParam) {
        _classCallCheck(this, AbstractSubmitRegistrationCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractSubmitRegistrationCommand).call(this, commandParam, "SubmitRegistrationCommand"));

        _this.dataInvalid = "dataInvalid";
        _this.mismatch = "mismatch";
        _this.saved = "saved";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractSubmitRegistrationCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.dataInvalid:
                    promises.push(new ErrorEvent(this.commandData).publish());
                    break;
                case this.mismatch:
                    promises.push(new ErrorEvent(this.commandData).publish());
                    break;
                case this.saved:
                    promises.push(new UserLoggedInEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractSubmitRegistrationCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractUpdatePasswordCommand = function (_Command) {
    _inherits(AbstractUpdatePasswordCommand, _Command);

    function AbstractUpdatePasswordCommand(commandParam) {
        _classCallCheck(this, AbstractUpdatePasswordCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractUpdatePasswordCommand).call(this, commandParam, "UpdatePasswordCommand"));

        _this.dataInvalid = "dataInvalid";
        _this.mismatch = "mismatch";
        _this.saved = "saved";
        _this.error = "error";
        return _this;
    }

    _createClass(AbstractUpdatePasswordCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.dataInvalid:
                    promises.push(new ErrorEvent(this.commandData).publish());
                    break;
                case this.mismatch:
                    promises.push(new ErrorEvent(this.commandData).publish());
                    break;
                case this.saved:
                    promises.push(new UserLoggedInEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
                    break;
                case this.error:
                    promises.push(new ServerErrorEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractUpdatePasswordCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractValidatePasswordCommand = function (_Command) {
    _inherits(AbstractValidatePasswordCommand, _Command);

    function AbstractValidatePasswordCommand(commandParam) {
        _classCallCheck(this, AbstractValidatePasswordCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractValidatePasswordCommand).call(this, commandParam, "ValidatePasswordCommand"));

        _this.empty = "empty";
        _this.ok = "ok";
        _this.mismatch = "mismatch";
        return _this;
    }

    _createClass(AbstractValidatePasswordCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.empty:
                    promises.push(new PasswordEmptyEvent(this.commandData).publish());
                    break;
                case this.ok:
                    promises.push(new PasswordsOKEvent(this.commandData).publish());
                    break;
                case this.mismatch:
                    promises.push(new PasswordsMismatchEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractValidatePasswordCommand;
}(Command);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractCoursesLoadedEvent = function (_Event) {
    _inherits(AbstractCoursesLoadedEvent, _Event);

    function AbstractCoursesLoadedEvent(eventParam) {
        _classCallCheck(this, AbstractCoursesLoadedEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractCoursesLoadedEvent).call(this, eventParam, 'CoursesLoadedEvent'));
    }

    return AbstractCoursesLoadedEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractPasswordEmptyEvent = function (_Event) {
    _inherits(AbstractPasswordEmptyEvent, _Event);

    function AbstractPasswordEmptyEvent(eventParam) {
        _classCallCheck(this, AbstractPasswordEmptyEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractPasswordEmptyEvent).call(this, eventParam, 'PasswordEmptyEvent'));
    }

    return AbstractPasswordEmptyEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractPasswordsMismatchEvent = function (_Event) {
    _inherits(AbstractPasswordsMismatchEvent, _Event);

    function AbstractPasswordsMismatchEvent(eventParam) {
        _classCallCheck(this, AbstractPasswordsMismatchEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractPasswordsMismatchEvent).call(this, eventParam, 'PasswordsMismatchEvent'));
    }

    return AbstractPasswordsMismatchEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractPasswordsOKEvent = function (_Event) {
    _inherits(AbstractPasswordsOKEvent, _Event);

    function AbstractPasswordsOKEvent(eventParam) {
        _classCallCheck(this, AbstractPasswordsOKEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractPasswordsOKEvent).call(this, eventParam, 'PasswordsOKEvent'));
    }

    return AbstractPasswordsOKEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRenderBoxEvent = function (_Event) {
    _inherits(AbstractRenderBoxEvent, _Event);

    function AbstractRenderBoxEvent(eventParam) {
        _classCallCheck(this, AbstractRenderBoxEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRenderBoxEvent).call(this, eventParam, 'RenderBoxEvent'));
    }

    return AbstractRenderBoxEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRenderChangePasswordEvent = function (_Event) {
    _inherits(AbstractRenderChangePasswordEvent, _Event);

    function AbstractRenderChangePasswordEvent(eventParam) {
        _classCallCheck(this, AbstractRenderChangePasswordEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRenderChangePasswordEvent).call(this, eventParam, 'RenderChangePasswordEvent'));
    }

    return AbstractRenderChangePasswordEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRenderCourseToBoxEvent = function (_Event) {
    _inherits(AbstractRenderCourseToBoxEvent, _Event);

    function AbstractRenderCourseToBoxEvent(eventParam) {
        _classCallCheck(this, AbstractRenderCourseToBoxEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRenderCourseToBoxEvent).call(this, eventParam, 'RenderCourseToBoxEvent'));
    }

    return AbstractRenderCourseToBoxEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRenderForgotPasswordEvent = function (_Event) {
    _inherits(AbstractRenderForgotPasswordEvent, _Event);

    function AbstractRenderForgotPasswordEvent(eventParam) {
        _classCallCheck(this, AbstractRenderForgotPasswordEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRenderForgotPasswordEvent).call(this, eventParam, 'RenderForgotPasswordEvent'));
    }

    return AbstractRenderForgotPasswordEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRenderNewPasswordEvent = function (_Event) {
    _inherits(AbstractRenderNewPasswordEvent, _Event);

    function AbstractRenderNewPasswordEvent(eventParam) {
        _classCallCheck(this, AbstractRenderNewPasswordEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRenderNewPasswordEvent).call(this, eventParam, 'RenderNewPasswordEvent'));
    }

    return AbstractRenderNewPasswordEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRenderRegistrationEvent = function (_Event) {
    _inherits(AbstractRenderRegistrationEvent, _Event);

    function AbstractRenderRegistrationEvent(eventParam) {
        _classCallCheck(this, AbstractRenderRegistrationEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRenderRegistrationEvent).call(this, eventParam, 'RenderRegistrationEvent'));
    }

    return AbstractRenderRegistrationEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractUserInfoLoadedEvent = function (_Event) {
    _inherits(AbstractUserInfoLoadedEvent, _Event);

    function AbstractUserInfoLoadedEvent(eventParam) {
        _classCallCheck(this, AbstractUserInfoLoadedEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractUserInfoLoadedEvent).call(this, eventParam, 'UserInfoLoadedEvent'));
    }

    return AbstractUserInfoLoadedEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractUsernameIsAvailableEvent = function (_Event) {
    _inherits(AbstractUsernameIsAvailableEvent, _Event);

    function AbstractUsernameIsAvailableEvent(eventParam) {
        _classCallCheck(this, AbstractUsernameIsAvailableEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractUsernameIsAvailableEvent).call(this, eventParam, 'UsernameIsAvailableEvent'));
    }

    return AbstractUsernameIsAvailableEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractUsernameIsNotAvailableEvent = function (_Event) {
    _inherits(AbstractUsernameIsNotAvailableEvent, _Event);

    function AbstractUsernameIsNotAvailableEvent(eventParam) {
        _classCallCheck(this, AbstractUsernameIsNotAvailableEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractUsernameIsNotAvailableEvent).call(this, eventParam, 'UsernameIsNotAvailableEvent'));
    }

    return AbstractUsernameIsNotAvailableEvent;
}(Event);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractCorrectWordAction = function (_Action) {
  _inherits(AbstractCorrectWordAction, _Action);

  function AbstractCorrectWordAction(actionParam) {
    _classCallCheck(this, AbstractCorrectWordAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractCorrectWordAction).call(this, actionParam, 'CorrectWordAction'));
  }

  _createClass(AbstractCorrectWordAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new CorrectWordCommand(this.actionData);
    }
  }]);

  return AbstractCorrectWordAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractIsRatedTestFinishedAction = function (_Action) {
  _inherits(AbstractIsRatedTestFinishedAction, _Action);

  function AbstractIsRatedTestFinishedAction(actionParam) {
    _classCallCheck(this, AbstractIsRatedTestFinishedAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractIsRatedTestFinishedAction).call(this, actionParam, 'IsRatedTestFinishedAction'));
  }

  _createClass(AbstractIsRatedTestFinishedAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new IsRatedTestFinishedCommand(this.actionData);
    }
  }]);

  return AbstractIsRatedTestFinishedAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractIsTestFinishedAction = function (_Action) {
  _inherits(AbstractIsTestFinishedAction, _Action);

  function AbstractIsTestFinishedAction(actionParam) {
    _classCallCheck(this, AbstractIsTestFinishedAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractIsTestFinishedAction).call(this, actionParam, 'IsTestFinishedAction'));
  }

  _createClass(AbstractIsTestFinishedAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new IsTestFinishedCommand(this.actionData);
    }
  }]);

  return AbstractIsTestFinishedAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRateWordAction = function (_Action) {
  _inherits(AbstractRateWordAction, _Action);

  function AbstractRateWordAction(actionParam) {
    _classCallCheck(this, AbstractRateWordAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRateWordAction).call(this, actionParam, 'RateWordAction'));
  }

  _createClass(AbstractRateWordAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new RateWordCommand(this.actionData);
    }
  }]);

  return AbstractRateWordAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRepeatComplexCardAction = function (_Action) {
  _inherits(AbstractRepeatComplexCardAction, _Action);

  function AbstractRepeatComplexCardAction(actionParam) {
    _classCallCheck(this, AbstractRepeatComplexCardAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRepeatComplexCardAction).call(this, actionParam, 'RepeatComplexCardAction'));
  }

  _createClass(AbstractRepeatComplexCardAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new RepeatComplexCardCommand(this.actionData);
    }
  }]);

  return AbstractRepeatComplexCardAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractShowNextWordOfTestAction = function (_Action) {
  _inherits(AbstractShowNextWordOfTestAction, _Action);

  function AbstractShowNextWordOfTestAction(actionParam) {
    _classCallCheck(this, AbstractShowNextWordOfTestAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractShowNextWordOfTestAction).call(this, actionParam, 'ShowNextWordOfTestAction'));
  }

  _createClass(AbstractShowNextWordOfTestAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new ShowNextWordOfTestCommand(this.actionData);
    }
  }]);

  return AbstractShowNextWordOfTestAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractShowWordAction = function (_Action) {
  _inherits(AbstractShowWordAction, _Action);

  function AbstractShowWordAction(actionParam) {
    _classCallCheck(this, AbstractShowWordAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractShowWordAction).call(this, actionParam, 'ShowWordAction'));
  }

  _createClass(AbstractShowWordAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new ShowWordCommand(this.actionData);
    }
  }]);

  return AbstractShowWordAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractStartTestAction = function (_Action) {
  _inherits(AbstractStartTestAction, _Action);

  function AbstractStartTestAction(actionParam) {
    _classCallCheck(this, AbstractStartTestAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractStartTestAction).call(this, actionParam, 'StartTestAction'));
  }

  _createClass(AbstractStartTestAction, [{
    key: 'getCommand',
    value: function getCommand() {
      return new StartTestCommand(this.actionData);
    }
  }]);

  return AbstractStartTestAction;
}(Action);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractCorrectWordCommand = function (_Command) {
    _inherits(AbstractCorrectWordCommand, _Command);

    function AbstractCorrectWordCommand(commandParam) {
        _classCallCheck(this, AbstractCorrectWordCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractCorrectWordCommand).call(this, commandParam, "CorrectWordCommand"));

        _this.wordIsCorrectAndFinished = "wordIsCorrectAndFinished";
        _this.wordIsCorrectAndNotFinished = "wordIsCorrectAndNotFinished";
        _this.wordIsNotCorrect = "wordIsNotCorrect";
        return _this;
    }

    _createClass(AbstractCorrectWordCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.wordIsCorrectAndFinished:
                    promises.push(new WordIsCorrectAndFinishedEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new IsTestFinishedAction(this.commandData)).publish());
                    break;
                case this.wordIsCorrectAndNotFinished:
                    promises.push(new WordIsCorrectAndNotFinishedEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new IsTestFinishedAction(this.commandData)).publish());
                    break;
                case this.wordIsNotCorrect:
                    promises.push(new WordIsNotCorrectEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new IsTestFinishedAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractCorrectWordCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractIsRatedTestFinishedCommand = function (_Command) {
    _inherits(AbstractIsRatedTestFinishedCommand, _Command);

    function AbstractIsRatedTestFinishedCommand(commandParam) {
        _classCallCheck(this, AbstractIsRatedTestFinishedCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractIsRatedTestFinishedCommand).call(this, commandParam, "IsRatedTestFinishedCommand"));

        _this.testFailed = "testFailed";
        _this.testFinishedSuccessfully = "testFinishedSuccessfully";
        _this.goOnWithTest = "goOnWithTest";
        return _this;
    }

    _createClass(AbstractIsRatedTestFinishedCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.testFailed:
                    promises.push(new TriggerAction(new SaveResultAction(this.commandData)).publish());
                    break;
                case this.testFinishedSuccessfully:
                    promises.push(new TriggerAction(new SaveResultAction(this.commandData)).publish());
                    break;
                case this.goOnWithTest:
                    promises.push(new TriggerAction(new ShowNextWordOfTestAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractIsRatedTestFinishedCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractIsTestFinishedCommand = function (_Command) {
    _inherits(AbstractIsTestFinishedCommand, _Command);

    function AbstractIsTestFinishedCommand(commandParam) {
        _classCallCheck(this, AbstractIsTestFinishedCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractIsTestFinishedCommand).call(this, commandParam, "IsTestFinishedCommand"));

        _this.testFailed = "testFailed";
        _this.testFinishedSuccessfully = "testFinishedSuccessfully";
        _this.goOnWithTest = "goOnWithTest";
        return _this;
    }

    _createClass(AbstractIsTestFinishedCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.testFailed:
                    promises.push(new TriggerAction(new SaveResultAction(this.commandData)).publish());
                    break;
                case this.testFinishedSuccessfully:
                    promises.push(new TriggerAction(new SaveResultAction(this.commandData)).publish());
                    break;
                case this.goOnWithTest:
                    promises.push(new DisplayNextWordButtonEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractIsTestFinishedCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRateWordCommand = function (_Command) {
    _inherits(AbstractRateWordCommand, _Command);

    function AbstractRateWordCommand(commandParam) {
        _classCallCheck(this, AbstractRateWordCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRateWordCommand).call(this, commandParam, "RateWordCommand"));

        _this.wordIsCorrectAndFinished = "wordIsCorrectAndFinished";
        _this.wordIsCorrectAndNotFinished = "wordIsCorrectAndNotFinished";
        _this.wordIsNotCorrect = "wordIsNotCorrect";
        return _this;
    }

    _createClass(AbstractRateWordCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.wordIsCorrectAndFinished:
                    promises.push(new WordIsCorrectAndFinishedEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new IsRatedTestFinishedAction(this.commandData)).publish());
                    break;
                case this.wordIsCorrectAndNotFinished:
                    promises.push(new WordIsCorrectAndNotFinishedEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new IsRatedTestFinishedAction(this.commandData)).publish());
                    break;
                case this.wordIsNotCorrect:
                    promises.push(new WordIsNotCorrectEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new IsRatedTestFinishedAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractRateWordCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractRepeatComplexCardCommand = function (_Command) {
    _inherits(AbstractRepeatComplexCardCommand, _Command);

    function AbstractRepeatComplexCardCommand(commandParam) {
        _classCallCheck(this, AbstractRepeatComplexCardCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractRepeatComplexCardCommand).call(this, commandParam, "RepeatComplexCardCommand"));

        _this.go = "go";
        return _this;
    }

    _createClass(AbstractRepeatComplexCardCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.go:
                    promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractRepeatComplexCardCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractShowNextWordOfTestCommand = function (_Command) {
    _inherits(AbstractShowNextWordOfTestCommand, _Command);

    function AbstractShowNextWordOfTestCommand(commandParam) {
        _classCallCheck(this, AbstractShowNextWordOfTestCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractShowNextWordOfTestCommand).call(this, commandParam, "ShowNextWordOfTestCommand"));

        _this.showNextWordOfTest = "showNextWordOfTest";
        return _this;
    }

    _createClass(AbstractShowNextWordOfTestCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.showNextWordOfTest:
                    promises.push(new ShowNextWordOfTestEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractShowNextWordOfTestCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractShowWordCommand = function (_Command) {
    _inherits(AbstractShowWordCommand, _Command);

    function AbstractShowWordCommand(commandParam) {
        _classCallCheck(this, AbstractShowWordCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractShowWordCommand).call(this, commandParam, "ShowWordCommand"));

        _this.showWord = "showWord";
        return _this;
    }

    _createClass(AbstractShowWordCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.showWord:
                    promises.push(new ShowWordEvent(this.commandData).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractShowWordCommand;
}(Command);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractStartTestCommand = function (_Command) {
    _inherits(AbstractStartTestCommand, _Command);

    function AbstractStartTestCommand(commandParam) {
        _classCallCheck(this, AbstractStartTestCommand);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractStartTestCommand).call(this, commandParam, "StartTestCommand"));

        _this.testStarted = "testStarted";
        return _this;
    }

    _createClass(AbstractStartTestCommand, [{
        key: "publishEvents",
        value: function publishEvents() {
            var promises = [];

            switch (this.commandData.outcome) {
                case this.testStarted:
                    promises.push(new TestStartedEvent(this.commandData).publish());
                    promises.push(new TriggerAction(new ShowNextWordOfTestAction(this.commandData)).publish());
                    break;
                default:
                    throw 'unhandled outcome: ' + this.commandData.outcome;
            }
            return Promise.all(promises);
        }
    }]);

    return AbstractStartTestCommand;
}(Command);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractDisplayNextWordButtonEvent = function (_Event) {
    _inherits(AbstractDisplayNextWordButtonEvent, _Event);

    function AbstractDisplayNextWordButtonEvent(eventParam) {
        _classCallCheck(this, AbstractDisplayNextWordButtonEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractDisplayNextWordButtonEvent).call(this, eventParam, 'DisplayNextWordButtonEvent'));
    }

    return AbstractDisplayNextWordButtonEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractShowNextWordOfTestEvent = function (_Event) {
    _inherits(AbstractShowNextWordOfTestEvent, _Event);

    function AbstractShowNextWordOfTestEvent(eventParam) {
        _classCallCheck(this, AbstractShowNextWordOfTestEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractShowNextWordOfTestEvent).call(this, eventParam, 'ShowNextWordOfTestEvent'));
    }

    return AbstractShowNextWordOfTestEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractShowWordEvent = function (_Event) {
    _inherits(AbstractShowWordEvent, _Event);

    function AbstractShowWordEvent(eventParam) {
        _classCallCheck(this, AbstractShowWordEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractShowWordEvent).call(this, eventParam, 'ShowWordEvent'));
    }

    return AbstractShowWordEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractTestStartedEvent = function (_Event) {
    _inherits(AbstractTestStartedEvent, _Event);

    function AbstractTestStartedEvent(eventParam) {
        _classCallCheck(this, AbstractTestStartedEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractTestStartedEvent).call(this, eventParam, 'TestStartedEvent'));
    }

    return AbstractTestStartedEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractWordIsCorrectAndFinishedEvent = function (_Event) {
    _inherits(AbstractWordIsCorrectAndFinishedEvent, _Event);

    function AbstractWordIsCorrectAndFinishedEvent(eventParam) {
        _classCallCheck(this, AbstractWordIsCorrectAndFinishedEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractWordIsCorrectAndFinishedEvent).call(this, eventParam, 'WordIsCorrectAndFinishedEvent'));
    }

    return AbstractWordIsCorrectAndFinishedEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractWordIsCorrectAndNotFinishedEvent = function (_Event) {
    _inherits(AbstractWordIsCorrectAndNotFinishedEvent, _Event);

    function AbstractWordIsCorrectAndNotFinishedEvent(eventParam) {
        _classCallCheck(this, AbstractWordIsCorrectAndNotFinishedEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractWordIsCorrectAndNotFinishedEvent).call(this, eventParam, 'WordIsCorrectAndNotFinishedEvent'));
    }

    return AbstractWordIsCorrectAndNotFinishedEvent;
}(Event);

/*       S.D.G.       */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractWordIsNotCorrectEvent = function (_Event) {
    _inherits(AbstractWordIsNotCorrectEvent, _Event);

    function AbstractWordIsNotCorrectEvent(eventParam) {
        _classCallCheck(this, AbstractWordIsNotCorrectEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractWordIsNotCorrectEvent).call(this, eventParam, 'WordIsNotCorrectEvent'));
    }

    return AbstractWordIsNotCorrectEvent;
}(Event);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CardView = function () {
    function CardView() {
        _classCallCheck(this, CardView);
    }

    _createClass(CardView, null, [{
        key: 'showScoreButtons',
        value: function showScoreButtons(eventData) {
            Mousetrap.unbind('enter');
            Mousetrap.unbind('alt+enter');
            $('.quality-buttons button').removeAttr("disabled");
            Mousetrap.bind('q', function () {
                $(".quality-buttons .btn-green").click();
            });
            Mousetrap.bind('a', function () {
                $(".quality-buttons .btn-blue").click();
            });
            Mousetrap.bind('y', function () {
                $(".quality-buttons .btn-cyan").click();
            });
            Mousetrap.bind('w', function () {
                $(".quality-buttons .btn-orange").click();
            });
            Mousetrap.bind('s', function () {
                $(".quality-buttons .btn-red").click();
            });
            Mousetrap.bind('x', function () {
                $(".quality-buttons .btn-pink").click();
            });

            // in test mode
            var finishCardButton3 = $('#finishCardButton3');
            finishCardButton3.removeAttr("disabled");
            finishCardButton3.removeClass("disabled");
            var finishCardButton2 = $('#finishCardButton2');
            finishCardButton2.removeAttr("disabled");
            finishCardButton2.removeClass("disabled");
            var finishCardButton1 = $('#finishCardButton1');
            finishCardButton1.removeAttr("disabled");
            finishCardButton1.removeClass("disabled");
            var repeatCardButton = $('#repeatCardButton');
            repeatCardButton.removeAttr("disabled");
            repeatCardButton.removeClass("disabled");
            var correctParagraph = $('#correctParagraph');
            correctParagraph.find('button.blueButton').addClass("btn-blue");
            correctParagraph.find('button.greenButton').addClass("btn-green");
            correctParagraph.find('button.orangeButton').addClass("btn-orange");
            correctParagraph.find('button.redButton').addClass("btn-red");
        }
    }, {
        key: 'showWanted',
        value: function showWanted(eventData) {
            Mousetrap.unbind('enter');
            $('.wanted-word').show();
        }
    }, {
        key: 'showNextLine',
        value: function showNextLine(eventData) {
            var nextLine = $(".line.hiddenLine").first();
            nextLine.removeClass("hiddenLine");
            nextLine.children().removeClass("hiddenWord");
        }
    }, {
        key: 'showNextWord',
        value: function showNextWord(eventData) {
            var nextWord = $(".line.hiddenLine .word.hiddenWord").first();
            nextWord.removeClass("hiddenWord");
            if (nextWord.is(':last-child')) {
                nextWord.parent().removeClass("hiddenLine");
            }
        }
    }, {
        key: 'displayComplexCardFinishedSuccessfully',
        value: function displayComplexCardFinishedSuccessfully(eventData) {}
    }]);

    return CardView;
}();

/*                    S.D.G.                    */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckIfComplexCardIsFinishedAction = function (_AbstractCheckIfCompl) {
    _inherits(CheckIfComplexCardIsFinishedAction, _AbstractCheckIfCompl);

    function CheckIfComplexCardIsFinishedAction() {
        _classCallCheck(this, CheckIfComplexCardIsFinishedAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(CheckIfComplexCardIsFinishedAction).apply(this, arguments));
    }

    _createClass(CheckIfComplexCardIsFinishedAction, [{
        key: "captureActionParam",
        value: function captureActionParam() {}
    }, {
        key: "initActionData",
        value: function initActionData() {
            this.actionData.isFinished = !$(".word").hasClass("hiddenWord");
        }
    }, {
        key: "releaseActionParam",
        value: function releaseActionParam() {}
    }]);

    return CheckIfComplexCardIsFinishedAction;
}(AbstractCheckIfComplexCardIsFinishedAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FinishCardAction = function (_AbstractFinishCardAc) {
    _inherits(FinishCardAction, _AbstractFinishCardAc);

    function FinishCardAction() {
        _classCallCheck(this, FinishCardAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FinishCardAction).apply(this, arguments));
    }

    _createClass(FinishCardAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {}
    }, {
        key: 'initActionData',
        value: function initActionData() {
            this.actionData.points = this.actionParam.points;
            this.actionData.maxPoints = this.actionParam.maxPoints;
        }
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {}
    }]);

    return FinishCardAction;
}(AbstractFinishCardAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScoreCardAction = function (_AbstractScoreCardAct) {
		_inherits(ScoreCardAction, _AbstractScoreCardAct);

		function ScoreCardAction() {
				_classCallCheck(this, ScoreCardAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(ScoreCardAction).apply(this, arguments));
		}

		_createClass(ScoreCardAction, [{
				key: 'captureActionParam',
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						this.actionParam.schema = localStorage.schema;
				}
		}, {
				key: 'initActionData',
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
						this.actionData.quality = this.actionParam.quality;
						this.actionData.boxId = this.actionParam.boxId;
						this.actionData.cardOfBoxId = this.actionParam.cardOfBoxId;
				}
		}, {
				key: 'releaseActionParam',
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
				}
		}]);

		return ScoreCardAction;
}(AbstractScoreCardAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowNextCardItemAction = function (_AbstractShowNextCard) {
  _inherits(ShowNextCardItemAction, _AbstractShowNextCard);

  function ShowNextCardItemAction() {
    _classCallCheck(this, ShowNextCardItemAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowNextCardItemAction).apply(this, arguments));
  }

  _createClass(ShowNextCardItemAction, [{
    key: 'captureActionParam',
    value: function captureActionParam() {
      this.actionParam = {
        flag: this.actionParam
      };
    }
  }, {
    key: 'initActionData',
    value: function initActionData() {
      this.actionData.flag = this.actionParam.flag;
    }
  }, {
    key: 'releaseActionParam',
    value: function releaseActionParam() {}
  }]);

  return ShowNextCardItemAction;
}(AbstractShowNextCardItemAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckIfComplexCardIsFinishedCommand = function (_AbstractCheckIfCompl) {
    _inherits(CheckIfComplexCardIsFinishedCommand, _AbstractCheckIfCompl);

    function CheckIfComplexCardIsFinishedCommand() {
        _classCallCheck(this, CheckIfComplexCardIsFinishedCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(CheckIfComplexCardIsFinishedCommand).apply(this, arguments));
    }

    _createClass(CheckIfComplexCardIsFinishedCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                if (_this2.commandParam.isFinished) {
                    _this2.commandData.outcome = _this2.complexCardIsFinished;
                } else {
                    _this2.commandData.outcome = _this2.complexCardIsNotFinished;
                }
                resolve();
            });
        }
    }]);

    return CheckIfComplexCardIsFinishedCommand;
}(AbstractCheckIfComplexCardIsFinishedCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FinishCardCommand = function (_AbstractFinishCardCo) {
    _inherits(FinishCardCommand, _AbstractFinishCardCo);

    function FinishCardCommand() {
        _classCallCheck(this, FinishCardCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FinishCardCommand).apply(this, arguments));
    }

    _createClass(FinishCardCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.points = _this2.commandParam.points;
                _this2.commandData.maxPoints = _this2.commandParam.maxPoints;
                _this2.commandData.outcome = _this2.cardFinished;
                resolve();
            });
        }
    }]);

    return FinishCardCommand;
}(AbstractFinishCardCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScoreCardCommand = function (_AbstractScoreCardCom) {
    _inherits(ScoreCardCommand, _AbstractScoreCardCom);

    function ScoreCardCommand() {
        _classCallCheck(this, ScoreCardCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ScoreCardCommand).apply(this, arguments));
    }

    _createClass(ScoreCardCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                var queryParams = [];
                queryParams.push({
                    key: "cardOfBoxId",
                    value: _this2.commandParam.cardOfBoxId
                });
                queryParams.push({
                    key: "quality",
                    value: _this2.commandParam.quality
                });
                _this2.httpPost("api/cards/score", queryParams).then(function () {
                    _this2.commandData.outcome = _this2.scored;
                    _this2.commandData.hash = "box/" + _this2.commandParam.boxId;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "scoreCardFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return ScoreCardCommand;
}(AbstractScoreCardCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowNextCardItemCommand = function (_AbstractShowNextCard) {
    _inherits(ShowNextCardItemCommand, _AbstractShowNextCard);

    function ShowNextCardItemCommand() {
        _classCallCheck(this, ShowNextCardItemCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowNextCardItemCommand).apply(this, arguments));
    }

    _createClass(ShowNextCardItemCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                if (_this2.commandParam.flag === 'card') {
                    _this2.commandData.outcome = _this2.showWanted;
                } else if (_this2.commandParam.flag === 'line') {
                    _this2.commandData.outcome = _this2.showNextLine;
                } else if (_this2.commandParam.flag === 'word') {
                    _this2.commandData.outcome = _this2.showNextWord;
                }
                resolve();
            });
        }
    }]);

    return ShowNextCardItemCommand;
}(AbstractShowNextCardItemCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowNextLineEvent = function (_AbstractShowNextLine) {
    _inherits(ShowNextLineEvent, _AbstractShowNextLine);

    function ShowNextLineEvent() {
        _classCallCheck(this, ShowNextLineEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowNextLineEvent).apply(this, arguments));
    }

    _createClass(ShowNextLineEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return ShowNextLineEvent;
}(AbstractShowNextLineEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowNextWordEvent = function (_AbstractShowNextWord) {
    _inherits(ShowNextWordEvent, _AbstractShowNextWord);

    function ShowNextWordEvent() {
        _classCallCheck(this, ShowNextWordEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowNextWordEvent).apply(this, arguments));
    }

    _createClass(ShowNextWordEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return ShowNextWordEvent;
}(AbstractShowNextWordEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowScoreButtonsEvent = function (_AbstractShowScoreBut) {
    _inherits(ShowScoreButtonsEvent, _AbstractShowScoreBut);

    function ShowScoreButtonsEvent() {
        _classCallCheck(this, ShowScoreButtonsEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowScoreButtonsEvent).apply(this, arguments));
    }

    _createClass(ShowScoreButtonsEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return ShowScoreButtonsEvent;
}(AbstractShowScoreButtonsEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowWantedEvent = function (_AbstractShowWantedEv) {
    _inherits(ShowWantedEvent, _AbstractShowWantedEv);

    function ShowWantedEvent() {
        _classCallCheck(this, ShowWantedEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowWantedEvent).apply(this, arguments));
    }

    _createClass(ShowWantedEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return ShowWantedEvent;
}(AbstractShowWantedEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Texts = {};

var CommonView = function () {
    function CommonView() {
        _classCallCheck(this, CommonView);
    }

    _createClass(CommonView, null, [{
        key: 'initLanguageInLocalStorage',
        value: function initLanguageInLocalStorage(data) {
            localStorage.language = data.language;
            $.get('texts/errors_' + data.language + '.json', function (texts) {
                Texts.errors = texts;
            });
            $.get('texts/common_' + data.language + '.json', function (texts) {
                Texts.common = texts;
            });
            $.get('texts/user_' + data.language + '.json', function (texts) {
                Texts.user = texts;
            });
        }
    }, {
        key: 'initSchemaInLocalStorage',
        value: function initSchemaInLocalStorage(data) {
            localStorage.schema = data.schema;
        }
    }, {
        key: 'initUserInLocalStorage',
        value: function initUserInLocalStorage(data) {
            localStorage.username = data.username;
            localStorage.password = data.password;
        }
    }, {
        key: 'removeUserFromLocalStorage',
        value: function removeUserFromLocalStorage(data) {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }
    }, {
        key: 'updateHash',
        value: function updateHash(data) {
            window.location.hash = data.hash;
        }
    }]);

    return CommonView;
}();

/*                    S.D.G.                    */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorView = function () {
    function ErrorView() {
        _classCallCheck(this, ErrorView);
    }

    _createClass(ErrorView, null, [{
        key: 'renderServerError',
        value: function renderServerError(data) {
            data.message = Texts.errors[data.messageKey];
            $.get('templates/common/serverErrorTemplate.mst', function (template) {
                var rendered = Mustache.render(template, data);
                $('.notifications').html(rendered);
            });
            window.setTimeout(function () {
                $(".notifications div").fadeOut("slow", function () {
                    $(".notifications").empty();
                });
            }, 3000);
        }
    }, {
        key: 'renderError',
        value: function renderError(data) {
            data.message = Texts.errors[data.messageKey];
            $.get('templates/common/errorTemplate.mst', function (template) {
                var rendered = Mustache.render(template, data);
                $('.notifications').html(rendered);
            });
            window.setTimeout(function () {
                $(".notifications div").fadeOut("slow", function () {
                    $(".notifications").empty();
                });
            }, 3000);
        }
    }]);

    return ErrorView;
}();

/*                    S.D.G.                    */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderView = function () {
    function HeaderView() {
        _classCallCheck(this, HeaderView);
    }

    _createClass(HeaderView, null, [{
        key: 'renderLogin',
        value: function renderLogin(eventData) {
            eventData.texts = Texts.common;
            $.get('templates/common/login.mst', function (template) {
                var rendered = Mustache.render(template, eventData);
                $('.login-logout-pane').html(rendered);
            });
        }
    }, {
        key: 'renderLogout',
        value: function renderLogout(eventData) {
            eventData.texts = Texts.common;
            $.get('templates/common/logout.mst', function (template) {
                var rendered = Mustache.render(template, eventData);
                $('.login-logout-pane').html(rendered);
            });
        }
    }]);

    return HeaderView;
}();

/*                    S.D.G.                    */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MessageView = function () {
    function MessageView() {
        _classCallCheck(this, MessageView);
    }

    _createClass(MessageView, null, [{
        key: 'renderMessage',
        value: function renderMessage(eventData) {
            eventData.message = Texts.common[eventData.messageKey];
            $.get('templates/common/messageTemplate.mst', function (template) {
                var rendered = Mustache.render(template, eventData);
                $('.notifications').html(rendered);
            });
            window.setTimeout(function () {
                $(".notifications div").fadeOut("slow", function () {
                    $(".notifications").empty();
                });
            }, 3000);
        }
    }]);

    return MessageView;
}();

/*                    S.D.G.                    */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReallyDeleteDialogView = function () {
    function ReallyDeleteDialogView() {
        _classCallCheck(this, ReallyDeleteDialogView);
    }

    _createClass(ReallyDeleteDialogView, null, [{
        key: 'displayRemoveCourseFromUserDialog',
        value: function displayRemoveCourseFromUserDialog(eventData) {
            bootbox.confirm(Texts.user.reallyRemoveCourseFromUser, function (result) {
                if (result === true) {
                    new RemoveCourseAction({ 'courseId': eventData.courseId }).apply();
                } else {
                    new CloseAllDialogsAction().apply();
                }
            });
        }
    }, {
        key: 'displayDeleteBoxDialog',
        value: function displayDeleteBoxDialog(eventData) {
            bootbox.confirm(Texts.user.reallyDeleteBox, function (result) {
                if (result === true) {
                    new DeleteBoxAction({ 'boxId': eventData.boxId }).apply();
                } else {
                    new CloseAllDialogsAction().apply();
                }
            });
        }
    }]);

    return ReallyDeleteDialogView;
}();

/*                    S.D.G.                    */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestView = function () {
    function TestView() {
        _classCallCheck(this, TestView);
    }

    _createClass(TestView, null, [{
        key: 'renderResult',
        value: function renderResult(eventData) {
            $.get('templates/test/result_' + eventData.language + '.mst', function (template) {
                var rendered = Mustache.render(template, eventData);
                $('#correctParagraph').html(rendered);
            });
        }
    }]);

    return TestView;
}();

/*                    S.D.G.                    */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidationView = function () {
    function ValidationView() {
        _classCallCheck(this, ValidationView);
    }

    _createClass(ValidationView, null, [{
        key: "fieldEmpty",
        value: function fieldEmpty(eventData) {
            $("#" + eventData.id + "Div").addClass("has-error");
            $("#" + eventData.id + "Div .help-block").hide();
            $("#" + eventData.id + "Div .notEmpty").show();
        }
    }, {
        key: "fieldNotEmpty",
        value: function fieldNotEmpty(eventData) {
            $("#" + eventData.id + "Div").removeClass("has-error");
            $("#" + eventData.id + "Div .notEmpty").hide();
        }
    }]);

    return ValidationView;
}();

/*                    S.D.G.                    */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddCardsToBoxAction = function (_AbstractAddCardsToBo) {
				_inherits(AddCardsToBoxAction, _AbstractAddCardsToBo);

				function AddCardsToBoxAction() {
								_classCallCheck(this, AddCardsToBoxAction);

								return _possibleConstructorReturn(this, Object.getPrototypeOf(AddCardsToBoxAction).apply(this, arguments));
				}

				_createClass(AddCardsToBoxAction, [{
								key: 'captureActionParam',
								value: function captureActionParam() {
												this.actionParam.username = localStorage.username;
												this.actionParam.password = localStorage.password;
												this.actionParam.schema = localStorage.schema;
												this.actionParam.hash = window.location.hash.substring(1);
								}
				}, {
								key: 'initActionData',
								value: function initActionData() {
												this.actionData.username = this.actionParam.username;
												this.actionData.password = this.actionParam.password;
												this.actionData.schema = this.actionParam.schema;
												this.actionData.resultId = this.actionParam.resultId;
												this.actionData.boxIds = this.actionParam.boxIds;
												this.actionData.hash = this.actionParam.hash;
								}
				}, {
								key: 'releaseActionParam',
								value: function releaseActionParam() {
												localStorage.username = this.actionParam.username;
												localStorage.password = this.actionParam.password;
												localStorage.schema = this.actionParam.schema;
								}
				}]);

				return AddCardsToBoxAction;
}(AbstractAddCardsToBoxAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CloseAllDialogsAction = function (_AbstractCloseAllDial) {
    _inherits(CloseAllDialogsAction, _AbstractCloseAllDial);

    function CloseAllDialogsAction() {
        _classCallCheck(this, CloseAllDialogsAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(CloseAllDialogsAction).apply(this, arguments));
    }

    _createClass(CloseAllDialogsAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {}
    }, {
        key: 'initActionData',
        value: function initActionData() {}
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {
            bootbox.hideAll();
        }
    }]);

    return CloseAllDialogsAction;
}(AbstractCloseAllDialogsAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InitAction = function (_AbstractInitAction) {
		_inherits(InitAction, _AbstractInitAction);

		function InitAction() {
				_classCallCheck(this, InitAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(InitAction).apply(this, arguments));
		}

		_createClass(InitAction, [{
				key: "captureActionParam",
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						if (localStorage.schema) {
								this.actionParam.schema = localStorage.schema;
						} else {
								this.actionParam.schema = "anfelisa";
						}
						if (localStorage.language) {
								this.actionParam.language = localStorage.language;
						} else {
								this.actionParam.language = "de";
						}
						this.actionParam.hash = window.location.hash.substring(1);
				}
		}, {
				key: "initActionData",
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
						this.actionData.language = this.actionParam.language;
						this.actionData.hash = this.actionParam.hash;
				}
		}, {
				key: "releaseActionParam",
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
						localStorage.language = this.actionParam.language;
						window.location.hash = this.actionParam.hash;
				}
		}]);

		return InitAction;
}(AbstractInitAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginAction = function (_AbstractLoginAction) {
		_inherits(LoginAction, _AbstractLoginAction);

		function LoginAction() {
				_classCallCheck(this, LoginAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(LoginAction).apply(this, arguments));
		}

		_createClass(LoginAction, [{
				key: "captureActionParam",
				value: function captureActionParam() {
						this.actionParam.username = $(".username").val();
						var password = $(".password").val();
						this.actionParam.password = CryptoJS.MD5(password).toString(CryptoJS.enc.Base64);
						this.actionParam.schema = localStorage.schema;
				}
		}, {
				key: "initActionData",
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
						this.actionData.role = this.actionParam.role;
				}
		}, {
				key: "releaseActionParam",
				value: function releaseActionParam() {
						$(".username").val(this.actionParam.username);
						$(".password").val(this.actionParam.password);
						localStorage.schema = this.actionParam.schema;
						localStorage.role = this.actionParam.role;
				}
		}]);

		return LoginAction;
}(AbstractLoginAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LogoutAction = function (_AbstractLogoutAction) {
    _inherits(LogoutAction, _AbstractLogoutAction);

    function LogoutAction() {
        _classCallCheck(this, LogoutAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(LogoutAction).apply(this, arguments));
    }

    _createClass(LogoutAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {}
    }, {
        key: 'initActionData',
        value: function initActionData() {}
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {}
    }]);

    return LogoutAction;
}(AbstractLogoutAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpenReallyDeleteDialogAction = function (_AbstractOpenReallyDe) {
    _inherits(OpenReallyDeleteDialogAction, _AbstractOpenReallyDe);

    function OpenReallyDeleteDialogAction() {
        _classCallCheck(this, OpenReallyDeleteDialogAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(OpenReallyDeleteDialogAction).apply(this, arguments));
    }

    _createClass(OpenReallyDeleteDialogAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {}
    }, {
        key: 'initActionData',
        value: function initActionData() {
            this.actionData = JSON.parse(JSON.stringify(this.actionParam));
        }
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {}
    }]);

    return OpenReallyDeleteDialogAction;
}(AbstractOpenReallyDeleteDialogAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderHomeAction = function (_AbstractRenderHomeAc) {
    _inherits(RenderHomeAction, _AbstractRenderHomeAc);

    function RenderHomeAction() {
        _classCallCheck(this, RenderHomeAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RenderHomeAction).apply(this, arguments));
    }

    _createClass(RenderHomeAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {
            this.actionParam.language = localStorage.language;
        }
    }, {
        key: 'initActionData',
        value: function initActionData() {
            this.actionData.language = this.actionParam.language;
        }
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {}
    }]);

    return RenderHomeAction;
}(AbstractRenderHomeAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderLoginAction = function (_AbstractRenderLoginA) {
    _inherits(RenderLoginAction, _AbstractRenderLoginA);

    function RenderLoginAction() {
        _classCallCheck(this, RenderLoginAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RenderLoginAction).apply(this, arguments));
    }

    _createClass(RenderLoginAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {}
    }, {
        key: 'initActionData',
        value: function initActionData() {}
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {}
    }]);

    return RenderLoginAction;
}(AbstractRenderLoginAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderLogoutAction = function (_AbstractRenderLogout) {
    _inherits(RenderLogoutAction, _AbstractRenderLogout);

    function RenderLogoutAction() {
        _classCallCheck(this, RenderLogoutAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RenderLogoutAction).apply(this, arguments));
    }

    _createClass(RenderLogoutAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {
            this.actionParam.username = localStorage.username;
        }
    }, {
        key: 'initActionData',
        value: function initActionData() {
            this.actionData.username = this.actionParam.username;
        }
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {
            localStorage.username = this.actionParam.username;
        }
    }]);

    return RenderLogoutAction;
}(AbstractRenderLogoutAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouteAction = function (_AbstractRouteAction) {
    _inherits(RouteAction, _AbstractRouteAction);

    function RouteAction() {
        _classCallCheck(this, RouteAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RouteAction).apply(this, arguments));
    }

    _createClass(RouteAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {}
    }, {
        key: 'initActionData',
        value: function initActionData() {
            this.actionData.hash = this.actionParam.hash;
        }
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {}
    }]);

    return RouteAction;
}(AbstractRouteAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouteHomeAction = function (_AbstractRouteHomeAct) {
    _inherits(RouteHomeAction, _AbstractRouteHomeAct);

    function RouteHomeAction() {
        _classCallCheck(this, RouteHomeAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RouteHomeAction).apply(this, arguments));
    }

    _createClass(RouteHomeAction, [{
        key: "captureActionParam",
        value: function captureActionParam() {
            this.actionParam.username = localStorage.username;
        }
    }, {
        key: "initActionData",
        value: function initActionData() {
            if (this.actionParam.username) {
                this.actionData.hash = "private";
                this.actionData.username = this.actionParam.username;
            } else {
                this.actionData.hash = "public";
            }
        }
    }, {
        key: "releaseActionParam",
        value: function releaseActionParam() {
            localStorage.username = this.actionParam.username;
        }
    }]);

    return RouteHomeAction;
}(AbstractRouteHomeAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SaveResultAction = function (_AbstractSaveResultAc) {
	_inherits(SaveResultAction, _AbstractSaveResultAc);

	function SaveResultAction() {
		_classCallCheck(this, SaveResultAction);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SaveResultAction).apply(this, arguments));
	}

	_createClass(SaveResultAction, [{
		key: "captureActionParam",
		value: function captureActionParam() {
			this.actionParam.username = localStorage.username;
			this.actionParam.password = localStorage.password;
			this.actionParam.schema = localStorage.schema;
			this.actionParam.language = localStorage.language;
			this.actionParam.hash = window.location.hash.substring(1);
		}
	}, {
		key: "initActionData",
		value: function initActionData() {
			this.actionData.username = this.actionParam.username;
			this.actionData.password = this.actionParam.password;
			this.actionData.schema = this.actionParam.schema;
			this.actionData.language = this.actionParam.language;
			var json = {};
			var allCompletionTexts = jQuery(".vocabulary");
			for (var i = 0; i < allCompletionTexts.length; i++) {
				var completionTextId = allCompletionTexts[i].id;
				var strikes = jQuery("#" + completionTextId + "_shots").children();
				var answer = "";
				for (var j = 0; j < strikes.length; j++) {
					var currentStrike = $(strikes[j]);
					if (currentStrike.hasClass("strike")) {
						answer += "1";
					} else {
						answer += "0";
					}
				}
				json["" + completionTextId] = answer;
			}

			if ($("#questionOverviewList i").length > 0) {
				this.actionParam.maxPoints = $("#questionOverviewList i").length;
				var correctAnswers = $("#questionOverviewList i.correct").length;
				var falseAnswers = $("#questionOverviewList i.false").length;
				this.actionParam.points = correctAnswers - falseAnswers;
				if (this.actionParam.points < 0) {
					this.actionParam.points = 0;
				}

				for (var i = 1; i <= this.actionParam.maxPoints; i++) {
					var result = "";
					$("#" + i + " i").each(function () {
						if ($(this).hasClass("correct")) {
							result += "1";
						} else if ($(this).hasClass("false")) {
							result += "2";
						} else {
							result += "0";
						}
					});
					json[i] = result;
				}
			}

			if (allCompletionTexts.length > 0) {
				this.actionData.points = Vocabulary.testState.points;
				this.actionData.maxPoints = Vocabulary.testState.maxPoints;
			} else {
				this.actionData.points = this.actionParam.points;
				this.actionData.maxPoints = this.actionParam.maxPoints;
			}

			this.actionData.json = JSON.stringify(json);
			var hashes = this.actionParam.hash.split("/");
			this.actionData.testId = Number(hashes[hashes.length - 1]);
		}
	}, {
		key: "releaseActionParam",
		value: function releaseActionParam() {
			localStorage.username = this.actionParam.username;
			localStorage.password = this.actionParam.password;
			localStorage.schema = this.actionParam.schema;
			localStorage.language = this.actionParam.language;
			window.location.hash = this.actionParam.hash;
		}
	}]);

	return SaveResultAction;
}(AbstractSaveResultAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitchLanguageAction = function (_AbstractSwitchLangua) {
    _inherits(SwitchLanguageAction, _AbstractSwitchLangua);

    function SwitchLanguageAction() {
        _classCallCheck(this, SwitchLanguageAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SwitchLanguageAction).apply(this, arguments));
    }

    _createClass(SwitchLanguageAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {}
    }, {
        key: 'initActionData',
        value: function initActionData() {
            this.actionData.language = this.actionParam.language;
        }
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {}
    }]);

    return SwitchLanguageAction;
}(AbstractSwitchLanguageAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValidateRequiredFieldAction = function (_AbstractValidateRequ) {
  _inherits(ValidateRequiredFieldAction, _AbstractValidateRequ);

  function ValidateRequiredFieldAction() {
    _classCallCheck(this, ValidateRequiredFieldAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ValidateRequiredFieldAction).apply(this, arguments));
  }

  _createClass(ValidateRequiredFieldAction, [{
    key: "captureActionParam",
    value: function captureActionParam() {
      this.actionParam.value = $("#" + this.actionParam.id).val();
    }
  }, {
    key: "initActionData",
    value: function initActionData() {
      this.actionData.id = this.actionParam.id;
      this.actionData.value = this.actionParam.value;
    }
  }, {
    key: "releaseActionParam",
    value: function releaseActionParam() {
      $("#" + this.actionParam.id + "").val(this.actionParam.value);
    }
  }]);

  return ValidateRequiredFieldAction;
}(AbstractValidateRequiredFieldAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddCardsToBoxCommand = function (_AbstractAddCardsToBo) {
    _inherits(AddCardsToBoxCommand, _AbstractAddCardsToBo);

    function AddCardsToBoxCommand() {
        _classCallCheck(this, AddCardsToBoxCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AddCardsToBoxCommand).apply(this, arguments));
    }

    _createClass(AddCardsToBoxCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                var data = {
                    boxIds: _this2.commandParam.boxIds
                };
                _this2.httpPost("api/box/fill", [], data).then(function () {
                    _this2.commandData.outcome = _this2.added;
                    _this2.commandData.hash = _this2.commandParam.hash + "/" + _this2.commandParam.resultId;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "fillBoxWithCardsFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return AddCardsToBoxCommand;
}(AbstractAddCardsToBoxCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CloseAllDialogsCommand = function (_AbstractCloseAllDial) {
    _inherits(CloseAllDialogsCommand, _AbstractCloseAllDial);

    function CloseAllDialogsCommand() {
        _classCallCheck(this, CloseAllDialogsCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(CloseAllDialogsCommand).apply(this, arguments));
    }

    _createClass(CloseAllDialogsCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.outcome = _this2.ok;
                resolve();
            });
        }
    }]);

    return CloseAllDialogsCommand;
}(AbstractCloseAllDialogsCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InitCommand = function (_AbstractInitCommand) {
    _inherits(InitCommand, _AbstractInitCommand);

    function InitCommand() {
        _classCallCheck(this, InitCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(InitCommand).apply(this, arguments));
    }

    _createClass(InitCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.language = _this2.commandParam.language;
                _this2.commandData.username = _this2.commandParam.username;
                _this2.commandData.schema = _this2.commandParam.schema;
                if (_this2.commandParam.username) {
                    _this2.commandData.outcome = _this2.privateCourses;
                } else {
                    _this2.commandData.outcome = _this2.publicCourses;
                }
                if (_this2.commandParam.hash !== undefined) {
                    var hashes = _this2.commandParam.hash.split("/");
                    if (_this2.commandParam.username && hashes[0] === "public") {
                        hashes = ["private"];
                    }
                    if (hashes[0]) {
                        if (hashes[0] === "private") {
                            if (hashes[1]) {
                                _this2.commandData.courseId = hashes[1];
                                if (hashes[2]) {
                                    _this2.commandData.lessonId = hashes[2];
                                    if (hashes[3]) {
                                        _this2.commandData.testId = hashes[3];
                                        if (hashes[4]) {
                                            _this2.commandData.resultId = hashes[4];
                                            _this2.commandData.outcome = _this2.result;
                                        } else {
                                            _this2.commandData.outcome = _this2.privateTest;
                                        }
                                    } else {
                                        _this2.commandData.outcome = _this2.privateTests;
                                    }
                                } else {
                                    _this2.commandData.outcome = _this2.privateLessons;
                                }
                            } else {
                                _this2.commandData.outcome = _this2.privateCourses;
                            }
                        } else if (hashes[0] === "box" && hashes[1]) {
                            _this2.commandData.outcome = _this2.box;
                            _this2.commandData.boxId = hashes[1];
                        } else if (hashes[0] === "statistics") {
                            _this2.commandData.outcome = _this2.statistics;
                        } else if (hashes[0] === "profile") {
                            if (hashes[1] && hashes[1] === "courses") {
                                _this2.commandData.outcome = _this2.profileCourses;
                            } else if (hashes[1] && hashes[1] === "boxes") {
                                if (hashes[2] && hashes[2] === "edit") {
                                    _this2.commandData.outcome = _this2.profileBoxEdit;
                                    _this2.commandData.boxId = hashes[3];
                                } else if (hashes[2] && hashes[2] === "create") {
                                    _this2.commandData.outcome = _this2.profileBoxCreate;
                                } else if (hashes[2] && hashes[2] === "courses") {
                                    _this2.commandData.outcome = _this2.profileCourseAdd;
                                    _this2.commandData.boxId = hashes[3];
                                }
                            } else if (hashes[1] && hashes[1] === "password") {
                                _this2.commandData.outcome = _this2.profilePassword;
                            } else if (hashes[1] && hashes[1] === "register") {
                                _this2.commandData.outcome = _this2.register;
                            } else if (hashes[1] && hashes[1] === "forgot-password") {
                                _this2.commandData.outcome = _this2.forgotPassword;
                            } else if (hashes[1] && hashes[1] === "newPassword" && hashes[2] && hashes[3]) {
                                _this2.commandData.outcome = _this2.newPassword;
                                _this2.commandData.username = hashes[2];
                                _this2.commandData.password = hashes[3];
                            } else if (hashes[1] && hashes[1] === "confirmEmail" && hashes[2] && hashes[3]) {
                                _this2.commandData.outcome = _this2.confirmEmail;
                                _this2.commandData.username = hashes[2];
                                _this2.commandData.password = hashes[3];
                            } else {
                                _this2.commandData.outcome = _this2.profile;
                            }
                        } else {
                            if (hashes[1]) {
                                _this2.commandData.courseId = hashes[1];
                                if (hashes[2]) {
                                    _this2.commandData.lessonId = hashes[2];
                                    if (hashes[3]) {
                                        _this2.commandData.testId = hashes[3];
                                        _this2.commandData.outcome = _this2.publicTest;
                                    } else {
                                        _this2.commandData.outcome = _this2.publicTests;
                                    }
                                } else {
                                    _this2.commandData.outcome = _this2.publicLessons;
                                }
                            } else {
                                _this2.commandData.outcome = _this2.publicCourses;
                            }
                        }
                    }
                }
                resolve();
            });
        }
    }]);

    return InitCommand;
}(AbstractInitCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginCommand = function (_AbstractLoginCommand) {
    _inherits(LoginCommand, _AbstractLoginCommand);

    function LoginCommand() {
        _classCallCheck(this, LoginCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(LoginCommand).apply(this, arguments));
    }

    _createClass(LoginCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.httpPost("api/user/login").then(function (data) {
                    _this2.commandData.hash = "private";
                    _this2.commandData.username = _this2.commandParam.username;
                    _this2.commandData.password = _this2.commandParam.password;
                    _this2.commandData.outcome = _this2.ok;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "loginFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return LoginCommand;
}(AbstractLoginCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LogoutCommand = function (_AbstractLogoutComman) {
    _inherits(LogoutCommand, _AbstractLogoutComman);

    function LogoutCommand() {
        _classCallCheck(this, LogoutCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(LogoutCommand).apply(this, arguments));
    }

    _createClass(LogoutCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.hash = "public";
                _this2.commandData.outcome = _this2.ok;
                resolve();
            });
        }
    }]);

    return LogoutCommand;
}(AbstractLogoutCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpenReallyDeleteDialogCommand = function (_AbstractOpenReallyDe) {
    _inherits(OpenReallyDeleteDialogCommand, _AbstractOpenReallyDe);

    function OpenReallyDeleteDialogCommand() {
        _classCallCheck(this, OpenReallyDeleteDialogCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(OpenReallyDeleteDialogCommand).apply(this, arguments));
    }

    _createClass(OpenReallyDeleteDialogCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData = JSON.parse(JSON.stringify(_this2.commandParam));
                _this2.commandData.outcome = _this2.commandParam.dialog;
                resolve();
            });
        }
    }]);

    return OpenReallyDeleteDialogCommand;
}(AbstractOpenReallyDeleteDialogCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderHomeCommand = function (_AbstractRenderHomeCo) {
    _inherits(RenderHomeCommand, _AbstractRenderHomeCo);

    function RenderHomeCommand() {
        _classCallCheck(this, RenderHomeCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RenderHomeCommand).apply(this, arguments));
    }

    _createClass(RenderHomeCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.language = _this2.commandParam.language;
                _this2.commandData.outcome = _this2.ok;
                resolve();
            });
        }
    }]);

    return RenderHomeCommand;
}(AbstractRenderHomeCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderLoginCommand = function (_AbstractRenderLoginC) {
    _inherits(RenderLoginCommand, _AbstractRenderLoginC);

    function RenderLoginCommand() {
        _classCallCheck(this, RenderLoginCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RenderLoginCommand).apply(this, arguments));
    }

    _createClass(RenderLoginCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.outcome = _this2.ok;
                resolve();
            });
        }
    }]);

    return RenderLoginCommand;
}(AbstractRenderLoginCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderLogoutCommand = function (_AbstractRenderLogout) {
    _inherits(RenderLogoutCommand, _AbstractRenderLogout);

    function RenderLogoutCommand() {
        _classCallCheck(this, RenderLogoutCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RenderLogoutCommand).apply(this, arguments));
    }

    _createClass(RenderLogoutCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.outcome = _this2.ok;
                _this2.commandData.username = _this2.commandParam.username;
                resolve();
            });
        }
    }]);

    return RenderLogoutCommand;
}(AbstractRenderLogoutCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouteCommand = function (_AbstractRouteCommand) {
    _inherits(RouteCommand, _AbstractRouteCommand);

    function RouteCommand() {
        _classCallCheck(this, RouteCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RouteCommand).apply(this, arguments));
    }

    _createClass(RouteCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.hash = _this2.commandParam.hash;
                _this2.commandData.outcome = _this2.ok;
                resolve();
            });
        }
    }]);

    return RouteCommand;
}(AbstractRouteCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SaveResultCommand = function (_AbstractSaveResultCo) {
    _inherits(SaveResultCommand, _AbstractSaveResultCo);

    function SaveResultCommand() {
        _classCallCheck(this, SaveResultCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SaveResultCommand).apply(this, arguments));
    }

    _createClass(SaveResultCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.language = _this2.commandParam.language;
                if (_this2.commandParam.username == undefined) {
                    _this2.commandData.points = _this2.commandParam.points;
                    _this2.commandData.maxPoints = _this2.commandParam.maxPoints;
                    _this2.commandData.outcome = _this2.noCredentials;
                    resolve();
                } else {
                    _this2.commandData.testId = _this2.commandParam.testId;
                    var data = {
                        username: _this2.commandParam.username,
                        testId: _this2.commandParam.testId,
                        json: _this2.commandParam.json,
                        points: _this2.commandParam.points,
                        maxPoints: _this2.commandParam.maxPoints
                    };
                    _this2.httpPost("api/results/save", [], data).then(function (data) {
                        _this2.commandData.outcome = _this2.resultSaved;
                        _this2.commandData.boxIds = data.boxIds;
                        _this2.commandData.resultId = data.resultId;
                        resolve();
                    }, function (error) {
                        _this2.commandData.messageKey = "saveResultFailed";
                        _this2.commandData.error = error;
                        _this2.commandData.outcome = _this2.serverError;
                        resolve();
                    });
                }
            });
        }
    }]);

    return SaveResultCommand;
}(AbstractSaveResultCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitchLanguageCommand = function (_AbstractSwitchLangua) {
    _inherits(SwitchLanguageCommand, _AbstractSwitchLangua);

    function SwitchLanguageCommand() {
        _classCallCheck(this, SwitchLanguageCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SwitchLanguageCommand).apply(this, arguments));
    }

    _createClass(SwitchLanguageCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.language = _this2.commandParam.language;
                _this2.commandData.outcome = _this2.ok;
                resolve();
            });
        }
    }]);

    return SwitchLanguageCommand;
}(AbstractSwitchLanguageCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValidateRequiredFieldCommand = function (_AbstractValidateRequ) {
    _inherits(ValidateRequiredFieldCommand, _AbstractValidateRequ);

    function ValidateRequiredFieldCommand() {
        _classCallCheck(this, ValidateRequiredFieldCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ValidateRequiredFieldCommand).apply(this, arguments));
    }

    _createClass(ValidateRequiredFieldCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                if (!_this2.commandParam.value) {
                    _this2.commandData.outcome = _this2.fieldEmpty;
                    _this2.commandData.id = _this2.commandParam.id;
                } else {
                    _this2.commandData.outcome = _this2.fieldNotEmpty;
                    _this2.commandData.id = _this2.commandParam.id;
                }
                resolve();
            });
        }
    }]);

    return ValidateRequiredFieldCommand;
}(AbstractValidateRequiredFieldCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayDeleteBoxDialogEvent = function (_AbstractDisplayDelet) {
    _inherits(DisplayDeleteBoxDialogEvent, _AbstractDisplayDelet);

    function DisplayDeleteBoxDialogEvent() {
        _classCallCheck(this, DisplayDeleteBoxDialogEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(DisplayDeleteBoxDialogEvent).apply(this, arguments));
    }

    _createClass(DisplayDeleteBoxDialogEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return DisplayDeleteBoxDialogEvent;
}(AbstractDisplayDeleteBoxDialogEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayRemoveCourseFromUserDialogEvent = function (_AbstractDisplayRemov) {
    _inherits(DisplayRemoveCourseFromUserDialogEvent, _AbstractDisplayRemov);

    function DisplayRemoveCourseFromUserDialogEvent() {
        _classCallCheck(this, DisplayRemoveCourseFromUserDialogEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(DisplayRemoveCourseFromUserDialogEvent).apply(this, arguments));
    }

    _createClass(DisplayRemoveCourseFromUserDialogEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return DisplayRemoveCourseFromUserDialogEvent;
}(AbstractDisplayRemoveCourseFromUserDialogEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorEvent = function (_AbstractErrorEvent) {
    _inherits(ErrorEvent, _AbstractErrorEvent);

    function ErrorEvent() {
        _classCallCheck(this, ErrorEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ErrorEvent).apply(this, arguments));
    }

    _createClass(ErrorEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return ErrorEvent;
}(AbstractErrorEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FieldEmptyEvent = function (_AbstractFieldEmptyEv) {
    _inherits(FieldEmptyEvent, _AbstractFieldEmptyEv);

    function FieldEmptyEvent() {
        _classCallCheck(this, FieldEmptyEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FieldEmptyEvent).apply(this, arguments));
    }

    _createClass(FieldEmptyEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return FieldEmptyEvent;
}(AbstractFieldEmptyEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FieldNotEmptyEvent = function (_AbstractFieldNotEmpt) {
    _inherits(FieldNotEmptyEvent, _AbstractFieldNotEmpt);

    function FieldNotEmptyEvent() {
        _classCallCheck(this, FieldNotEmptyEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FieldNotEmptyEvent).apply(this, arguments));
    }

    _createClass(FieldNotEmptyEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return FieldNotEmptyEvent;
}(AbstractFieldNotEmptyEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InitOKEvent = function (_AbstractInitOKEvent) {
    _inherits(InitOKEvent, _AbstractInitOKEvent);

    function InitOKEvent() {
        _classCallCheck(this, InitOKEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(InitOKEvent).apply(this, arguments));
    }

    _createClass(InitOKEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return InitOKEvent;
}(AbstractInitOKEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageEvent = function (_AbstractMessageEvent) {
    _inherits(MessageEvent, _AbstractMessageEvent);

    function MessageEvent() {
        _classCallCheck(this, MessageEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MessageEvent).apply(this, arguments));
    }

    _createClass(MessageEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return MessageEvent;
}(AbstractMessageEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderHomeEvent = function (_AbstractRenderHomeEv) {
    _inherits(RenderHomeEvent, _AbstractRenderHomeEv);

    function RenderHomeEvent() {
        _classCallCheck(this, RenderHomeEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RenderHomeEvent).apply(this, arguments));
    }

    _createClass(RenderHomeEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return RenderHomeEvent;
}(AbstractRenderHomeEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderLoginEvent = function (_AbstractRenderLoginE) {
    _inherits(RenderLoginEvent, _AbstractRenderLoginE);

    function RenderLoginEvent() {
        _classCallCheck(this, RenderLoginEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RenderLoginEvent).apply(this, arguments));
    }

    _createClass(RenderLoginEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return RenderLoginEvent;
}(AbstractRenderLoginEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderLogoutEvent = function (_AbstractRenderLogout) {
    _inherits(RenderLogoutEvent, _AbstractRenderLogout);

    function RenderLogoutEvent() {
        _classCallCheck(this, RenderLogoutEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RenderLogoutEvent).apply(this, arguments));
    }

    _createClass(RenderLogoutEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return RenderLogoutEvent;
}(AbstractRenderLogoutEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderResultEvent = function (_AbstractRenderResult) {
    _inherits(RenderResultEvent, _AbstractRenderResult);

    function RenderResultEvent() {
        _classCallCheck(this, RenderResultEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RenderResultEvent).apply(this, arguments));
    }

    _createClass(RenderResultEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return RenderResultEvent;
}(AbstractRenderResultEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ServerErrorEvent = function (_AbstractServerErrorE) {
    _inherits(ServerErrorEvent, _AbstractServerErrorE);

    function ServerErrorEvent() {
        _classCallCheck(this, ServerErrorEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ServerErrorEvent).apply(this, arguments));
    }

    _createClass(ServerErrorEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return ServerErrorEvent;
}(AbstractServerErrorEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitchLanguageEvent = function (_AbstractSwitchLangua) {
    _inherits(SwitchLanguageEvent, _AbstractSwitchLangua);

    function SwitchLanguageEvent() {
        _classCallCheck(this, SwitchLanguageEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SwitchLanguageEvent).apply(this, arguments));
    }

    _createClass(SwitchLanguageEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return SwitchLanguageEvent;
}(AbstractSwitchLanguageEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpdateHashEvent = function (_AbstractUpdateHashEv) {
    _inherits(UpdateHashEvent, _AbstractUpdateHashEv);

    function UpdateHashEvent() {
        _classCallCheck(this, UpdateHashEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UpdateHashEvent).apply(this, arguments));
    }

    _createClass(UpdateHashEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return UpdateHashEvent;
}(AbstractUpdateHashEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserLoggedInEvent = function (_AbstractUserLoggedIn) {
    _inherits(UserLoggedInEvent, _AbstractUserLoggedIn);

    function UserLoggedInEvent() {
        _classCallCheck(this, UserLoggedInEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UserLoggedInEvent).apply(this, arguments));
    }

    _createClass(UserLoggedInEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return UserLoggedInEvent;
}(AbstractUserLoggedInEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserLoggedOutEvent = function (_AbstractUserLoggedOu) {
    _inherits(UserLoggedOutEvent, _AbstractUserLoggedOu);

    function UserLoggedOutEvent() {
        _classCallCheck(this, UserLoggedOutEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UserLoggedOutEvent).apply(this, arguments));
    }

    _createClass(UserLoggedOutEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return UserLoggedOutEvent;
}(AbstractUserLoggedOutEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MultipleChoiceView = function () {
    function MultipleChoiceView() {
        _classCallCheck(this, MultipleChoiceView);
    }

    _createClass(MultipleChoiceView, null, [{
        key: "showCorrecture",
        value: function showCorrecture(eventData) {
            jQuery("#" + eventData.multipleChoiceId + " i").prop("onclick", null);
        }
    }, {
        key: "enableNextButton",
        value: function enableNextButton(eventData) {
            jQuery("#" + eventData.multipleChoiceId + " button").removeClass("disabled");
            jQuery("#" + eventData.multipleChoiceId + " button").removeAttr("disabled");
        }
    }, {
        key: "showFalse",
        value: function showFalse(eventData) {
            $("#" + eventData.itemId).removeClass("fa-circle-o");
            $("#" + eventData.itemId).addClass("fa-times-circle-o");
            $("#" + eventData.itemId).addClass("false");
            $("#" + eventData.multipleChoiceId + "_icon").removeClass("fa-circle-o");
            $("#" + eventData.multipleChoiceId + "_icon").addClass("fa-times-circle-o");
            $("#" + eventData.multipleChoiceId + "_icon").addClass("false");
        }
    }, {
        key: "showCorrect",
        value: function showCorrect(eventData) {
            $("#" + eventData.itemId).removeClass("fa-circle-o");
            $("#" + eventData.itemId).addClass("fa-check-circle-o");
            $("#" + eventData.itemId).addClass("correct");
            $("#" + eventData.multipleChoiceId + "_icon").removeClass("fa-circle-o");
            $("#" + eventData.multipleChoiceId + "_icon").addClass("fa-check-circle-o");
            $("#" + eventData.multipleChoiceId + "_icon").addClass("correct");
        }
    }, {
        key: "displayNextQuestion",
        value: function displayNextQuestion(eventData) {
            var multipleChoiceId = eventData.multipleChoiceId;
            jQuery("#" + multipleChoiceId).addClass("hide");
            jQuery("#" + multipleChoiceId).removeClass("show");
            multipleChoiceId++;
            jQuery("#" + multipleChoiceId).addClass("show");
            jQuery("#" + multipleChoiceId).removeClass("hide");
        }
    }]);

    return MultipleChoiceView;
}();

/*                    S.D.G.                    */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayNextQuestionAction = function (_AbstractDisplayNextQ) {
    _inherits(DisplayNextQuestionAction, _AbstractDisplayNextQ);

    function DisplayNextQuestionAction() {
        _classCallCheck(this, DisplayNextQuestionAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(DisplayNextQuestionAction).apply(this, arguments));
    }

    _createClass(DisplayNextQuestionAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {}
    }, {
        key: 'initActionData',
        value: function initActionData() {
            this.actionData.multipleChoiceId = this.actionParam.multipleChoiceId;
            // bind action parameters to action data
        }
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {}
    }]);

    return DisplayNextQuestionAction;
}(AbstractDisplayNextQuestionAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowCorrectMultipleChoiceAction = function (_AbstractShowCorrectM) {
    _inherits(ShowCorrectMultipleChoiceAction, _AbstractShowCorrectM);

    function ShowCorrectMultipleChoiceAction() {
        _classCallCheck(this, ShowCorrectMultipleChoiceAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowCorrectMultipleChoiceAction).apply(this, arguments));
    }

    _createClass(ShowCorrectMultipleChoiceAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {}
    }, {
        key: 'initActionData',
        value: function initActionData() {
            this.actionData.itemId = this.actionParam.itemId;
            this.actionData.last = this.actionParam.last;
            this.actionData.multipleChoiceId = this.actionParam.multipleChoiceId;
        }
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {}
    }]);

    return ShowCorrectMultipleChoiceAction;
}(AbstractShowCorrectMultipleChoiceAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowFalseMultipleChoiceAction = function (_AbstractShowFalseMul) {
    _inherits(ShowFalseMultipleChoiceAction, _AbstractShowFalseMul);

    function ShowFalseMultipleChoiceAction() {
        _classCallCheck(this, ShowFalseMultipleChoiceAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowFalseMultipleChoiceAction).apply(this, arguments));
    }

    _createClass(ShowFalseMultipleChoiceAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {}
    }, {
        key: 'initActionData',
        value: function initActionData() {
            this.actionData.itemId = this.actionParam.itemId;
            this.actionData.last = this.actionParam.last;
            this.actionData.multipleChoiceId = this.actionParam.multipleChoiceId;
        }
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {}
    }]);

    return ShowFalseMultipleChoiceAction;
}(AbstractShowFalseMultipleChoiceAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayNextQuestionCommand = function (_AbstractDisplayNextQ) {
    _inherits(DisplayNextQuestionCommand, _AbstractDisplayNextQ);

    function DisplayNextQuestionCommand() {
        _classCallCheck(this, DisplayNextQuestionCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(DisplayNextQuestionCommand).apply(this, arguments));
    }

    _createClass(DisplayNextQuestionCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.multipleChoiceId = _this2.commandParam.multipleChoiceId;
                _this2.commandData.outcome = _this2.go;
                resolve();
            });
        }
    }]);

    return DisplayNextQuestionCommand;
}(AbstractDisplayNextQuestionCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowCorrectMultipleChoiceCommand = function (_AbstractShowCorrectM) {
    _inherits(ShowCorrectMultipleChoiceCommand, _AbstractShowCorrectM);

    function ShowCorrectMultipleChoiceCommand() {
        _classCallCheck(this, ShowCorrectMultipleChoiceCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowCorrectMultipleChoiceCommand).apply(this, arguments));
    }

    _createClass(ShowCorrectMultipleChoiceCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.itemId = _this2.commandParam.itemId;
                _this2.commandData.multipleChoiceId = _this2.commandParam.multipleChoiceId;
                _this2.commandData.last = _this2.commandParam.last;
                if (_this2.commandParam.last === true) {
                    _this2.commandData.outcome = _this2.last;
                } else {
                    _this2.commandData.outcome = _this2.notLast;
                }
                resolve();
            });
        }
    }]);

    return ShowCorrectMultipleChoiceCommand;
}(AbstractShowCorrectMultipleChoiceCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowFalseMultipleChoiceCommand = function (_AbstractShowFalseMul) {
    _inherits(ShowFalseMultipleChoiceCommand, _AbstractShowFalseMul);

    function ShowFalseMultipleChoiceCommand() {
        _classCallCheck(this, ShowFalseMultipleChoiceCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowFalseMultipleChoiceCommand).apply(this, arguments));
    }

    _createClass(ShowFalseMultipleChoiceCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.itemId = _this2.commandParam.itemId;
                _this2.commandData.multipleChoiceId = _this2.commandParam.multipleChoiceId;
                _this2.commandData.last = _this2.commandParam.last;
                if (_this2.commandParam.last === true) {
                    _this2.commandData.outcome = _this2.last;
                } else {
                    _this2.commandData.outcome = _this2.notLast;
                }
                resolve();
            });
        }
    }]);

    return ShowFalseMultipleChoiceCommand;
}(AbstractShowFalseMultipleChoiceCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayNextQuestionEvent = function (_AbstractDisplayNextQ) {
    _inherits(DisplayNextQuestionEvent, _AbstractDisplayNextQ);

    function DisplayNextQuestionEvent() {
        _classCallCheck(this, DisplayNextQuestionEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(DisplayNextQuestionEvent).apply(this, arguments));
    }

    _createClass(DisplayNextQuestionEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return DisplayNextQuestionEvent;
}(AbstractDisplayNextQuestionEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnableNextButtonEvent = function (_AbstractEnableNextBu) {
    _inherits(EnableNextButtonEvent, _AbstractEnableNextBu);

    function EnableNextButtonEvent() {
        _classCallCheck(this, EnableNextButtonEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(EnableNextButtonEvent).apply(this, arguments));
    }

    _createClass(EnableNextButtonEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return EnableNextButtonEvent;
}(AbstractEnableNextButtonEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowCorrectMultipleChoiceEvent = function (_AbstractShowCorrectM) {
    _inherits(ShowCorrectMultipleChoiceEvent, _AbstractShowCorrectM);

    function ShowCorrectMultipleChoiceEvent() {
        _classCallCheck(this, ShowCorrectMultipleChoiceEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowCorrectMultipleChoiceEvent).apply(this, arguments));
    }

    _createClass(ShowCorrectMultipleChoiceEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return ShowCorrectMultipleChoiceEvent;
}(AbstractShowCorrectMultipleChoiceEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowFalseMultipleChoiceEvent = function (_AbstractShowFalseMul) {
    _inherits(ShowFalseMultipleChoiceEvent, _AbstractShowFalseMul);

    function ShowFalseMultipleChoiceEvent() {
        _classCallCheck(this, ShowFalseMultipleChoiceEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowFalseMultipleChoiceEvent).apply(this, arguments));
    }

    _createClass(ShowFalseMultipleChoiceEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return ShowFalseMultipleChoiceEvent;
}(AbstractShowFalseMultipleChoiceEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BoxesView = function () {
    function BoxesView() {
        _classCallCheck(this, BoxesView);
    }

    _createClass(BoxesView, null, [{
        key: 'renderBoxes',
        value: function renderBoxes(eventData) {
            eventData.data.texts = Texts.common;
            $.get('templates/navigation/myBoxesTemplate.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $(".box-navigation").html(rendered);
            });
        }
    }, {
        key: 'hideBoxes',
        value: function hideBoxes(eventData) {
            $('.box-navigation').empty();
        }
    }]);

    return BoxesView;
}();

/*                    S.D.G.                    */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BreadcrumbsView = function () {
    function BreadcrumbsView() {
        _classCallCheck(this, BreadcrumbsView);
    }

    _createClass(BreadcrumbsView, null, [{
        key: 'renderPublicCoursesBreadcrumbs',
        value: function renderPublicCoursesBreadcrumbs(eventData) {
            eventData.data.texts = Texts.common;
            $.get('templates/breadcrumbs/breadcrumbsTemplate1Public.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.breadcrumbs').html(rendered);
            });
        }
    }, {
        key: 'renderPublicLessonsBreadcrumbs',
        value: function renderPublicLessonsBreadcrumbs(eventData) {
            eventData.data.texts = Texts.common;
            $.get('templates/breadcrumbs/breadcrumbsTemplate2Public.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.breadcrumbs').html(rendered);
            });
        }
    }, {
        key: 'renderPublicTestsBreadcrumbs',
        value: function renderPublicTestsBreadcrumbs(eventData) {
            eventData.data.texts = Texts.common;
            $.get('templates/breadcrumbs/breadcrumbsTemplate3Public.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.breadcrumbs').html(rendered);
            });
        }
    }, {
        key: 'renderPrivateCoursesBreadcrumbs',
        value: function renderPrivateCoursesBreadcrumbs(eventData) {
            eventData.data.texts = Texts.common;
            $.get('templates/breadcrumbs/breadcrumbsTemplate1.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.breadcrumbs').html(rendered);
            });
        }
    }, {
        key: 'renderPrivateLessonsBreadcrumbs',
        value: function renderPrivateLessonsBreadcrumbs(eventData) {
            eventData.data.texts = Texts.common;
            $.get('templates/breadcrumbs/breadcrumbsTemplate2.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.breadcrumbs').html(rendered);
            });
        }
    }, {
        key: 'renderPrivateTestsBreadcrumbs',
        value: function renderPrivateTestsBreadcrumbs(eventData) {
            eventData.data.texts = Texts.common;
            $.get('templates/breadcrumbs/breadcrumbsTemplate3.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.breadcrumbs').html(rendered);
            });
        }
    }]);

    return BreadcrumbsView;
}();

/*                    S.D.G.                    */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContentView = function () {
    function ContentView() {
        _classCallCheck(this, ContentView);
    }

    _createClass(ContentView, null, [{
        key: 'renderPublicCourses',
        value: function renderPublicCourses(eventData) {
            $.get('templates/content/contentTemplate1_' + eventData.language + '.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.content-pane').html(rendered);
            });
        }
    }, {
        key: 'renderPublicLessons',
        value: function renderPublicLessons(eventData) {
            $.get('templates/content/contentTemplate2.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.content-pane').html(rendered);
            });
        }
    }, {
        key: 'renderPublicTests',
        value: function renderPublicTests(eventData) {
            $.get('templates/content/contentTemplate3.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.content-pane').html(rendered);
            });
        }
    }, {
        key: 'renderPublicTest',
        value: function renderPublicTest(eventData) {
            var html = "<div class='test'>" + eventData.data.html + "</div>";
            $(".content-pane").html(html);
            eventData.texts = Texts.common;
            //enableDrag();
            $("#startButton").html(Texts.common.withTyping);
            $("#repeatButton").html(Texts.common.asRepetition);
        }
    }, {
        key: 'renderPrivateLessons',
        value: function renderPrivateLessons(eventData) {
            $.get('templates/content/contentTemplate2.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.content-pane').html(rendered);
            });
        }
    }, {
        key: 'renderPrivateTests',
        value: function renderPrivateTests(eventData) {
            $.get('templates/content/contentTemplate3.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.content-pane').html(rendered);
            });
        }
    }, {
        key: 'renderPrivateTest',
        value: function renderPrivateTest(eventData) {
            var html = "<div class='test'>" + eventData.data.html + "</div>";
            $(".content-pane").html(html);
            //enableDrag();
            eventData.texts = Texts.common;
            $("#startButton").html(Texts.common.withTyping);
            $("#repeatButton").html(Texts.common.asRepetition);
            $("#finishCardButton3").html(Texts.common.finishCardButton3Text);
            $("#finishCardButton2").html(Texts.common.finishCardButton2Text);
            $("#finishCardButton1").html(Texts.common.finishCardButton1Text);
            $("#repeatCardButton").html(Texts.common.repeatCardButtonText);
        }
    }, {
        key: 'renderResult',
        value: function renderResult(eventData) {
            var jsonString = eventData.data.json;
            if (jsonString != null && jsonString.length > 0) {
                var jsonObject = JSON.parse(jsonString);
                if (jQuery(".vocabulary").length > 0) {
                    for (var i in jsonObject) {
                        var value = jsonObject[i];
                        if (jQuery("#" + i).hasClass('vocabulary')) {
                            jQuery("#" + i).addClass("strike");
                            jQuery("#" + i).attr("disabled", "disabled");
                            for (var j = 0; j < value.length; j++) {
                                if (value[j] == '1') {
                                    jQuery("#" + i + "_shots").append("<span class='strike'><i class='fa fa-check-circle-o'></i></span>");
                                } else {
                                    jQuery("#" + i + "_shots").append("<span class='offTarget'><i class='fa fa-times-circle-o'></i></span>");
                                }
                            }
                        }
                    }
                    $.get('templates/test/result_' + eventData.language + '.mst', function (template) {
                        var rendered = Mustache.render(template, eventData.data);
                        $('#correctParagraph').html(rendered);
                    });
                } else if (jQuery("#questionOverviewList").length > 0) {
                    for (var i = 1; i <= eventData.data.maxPoints; i++) {
                        $("#" + i).addClass("show");
                        $("#" + i).removeClass("hide");
                        $("#" + i + " button").remove();
                        var j = 0;
                        var value = jsonObject[i + ""];
                        jQuery("#" + i + " i").each(function () {
                            jQuery(this).prop("onclick", null);
                            var v = value.charAt(j);
                            if (v == 1) {
                                jQuery(this).removeClass("fa fa-circle-o");
                                jQuery(this).addClass("fa fa-check-circle-o");
                                jQuery(this).addClass("correct");
                                $("#" + i + "_icon").removeClass("fa fa-circle-o");
                                $("#" + i + "_icon").addClass("fa fa-check-circle-o");
                                $("#" + i + "_icon").addClass("correct");
                            } else if (v == 2) {
                                jQuery(this).removeClass("fa fa-circle-o");
                                jQuery(this).addClass("fa fa-times-circle-o");
                                jQuery(this).addClass("false");
                                $("#" + i + "_icon").removeClass("fa fa-circle-o");
                                $("#" + i + "_icon").addClass("fa fa-times-circle-o");
                                $("#" + i + "_icon").addClass("false");
                            }
                            j++;
                        });
                    }
                    $.get('templates/test/result_' + eventData.language + '.mst', function (template) {
                        var rendered = Mustache.render(template, eventData.data);
                        $('#resultDiv').html(rendered);
                    });
                } else if (jQuery(".ccard").length > 0) {
                    $(".line").removeClass("hiddenLine");
                    $(".word").removeClass("hiddenWord");
                    $.get('templates/test/result_' + eventData.language + '.mst', function (template) {
                        var rendered = Mustache.render(template, eventData.data);
                        $('#correctParagraph').html(rendered);
                    });
                } else {
                    for (var i in jsonObject) {
                        var value = jsonObject[i];
                        if (jQuery("#" + i).hasClass('clickText')) {
                            jQuery("#" + i).html(value);
                        } else if (jQuery("#" + i).hasClass('completionText')) {
                            jQuery("#" + i).attr('value', value);
                        } else if (jQuery("#" + i).hasClass('singleChoice')) {
                            if (value == "selected") {
                                jQuery("#" + i).addClass("selectedItem");
                            }
                        } else if (jQuery("#" + i).hasClass('multipleChoice')) {
                            if (value == "selected") {
                                jQuery("#" + i).addClass("selectedItem");
                            }
                        } else if (jQuery("#" + i).hasClass('dragElement')) {
                            var splitted = value.split("###");
                            $("#" + i).children('.answer').html(splitted[0]);
                            jQuery("#" + i).css("left", splitted[1]);
                            jQuery("#" + i).css("top", splitted[2]);
                        }
                    }
                }
            }
        }
    }, {
        key: 'renderStatistics',
        value: function renderStatistics(eventData) {
            if (eventData.data === null) {
                eventData.data = {
                    statisticsItemList: []
                };
            }
            eventData.data.texts = Texts.common;
            $.get('templates/user/statisticsTemplate.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.content-pane').html(rendered);
                $(".year").val(eventData.data.year);
                $(".month").val(eventData.data.month);
            });
        }
    }, {
        key: 'renderCard',
        value: function renderCard(eventData) {
            var data = eventData.data;
            data.texts = Texts.common;
            $.get('templates/breadcrumbs/breadcrumbsTemplateBox.mst', function (template) {
                var rendered = Mustache.render(template, data);
                $('.breadcrumbs').html(rendered);
            });

            Mousetrap.unbind('q');
            Mousetrap.unbind('a');
            Mousetrap.unbind('y');
            Mousetrap.unbind('w');
            Mousetrap.unbind('s');
            Mousetrap.unbind('x');

            if (data.cardsForToday > 0) {
                $('li.active span.badge').html(data.cardsForToday);
            } else if (data.cardsForToday == 0) {
                $('li.active span.badge').html('');
            }
            data.texts = Texts.common;
            if (data.cardsForToday > 0 || /*App.cardView.goOnWithNewCards &&*/data.newCards > 0) {
                $.get('templates/card/cardTemplate.mst', function (template) {
                    var rendered = Mustache.render(template, data);
                    $('.content-pane').html(rendered);
                });
                if (data["content"]["complex"]) {
                    Mousetrap.bind('enter', function () {
                        $(".ccard").click();
                    });
                } else {
                    Mousetrap.bind('enter', function () {
                        $(".card").click();
                    });
                }
            } else {
                var activeItem = $('li.active i.fa');
                activeItem.removeClass('fa-pencil-square-o');
                activeItem.addClass('fa-check-square-o');
                $.get('templates/card/cardTemplateFinished.mst', function (template) {
                    var rendered = Mustache.render(template, data);
                    $('.content-pane').html(rendered);
                });
            }
        }
    }]);

    return ContentView;
}();

/*                    S.D.G.                    */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavigationView = function () {
    function NavigationView() {
        _classCallCheck(this, NavigationView);
    }

    _createClass(NavigationView, null, [{
        key: 'renderPublicCourses',
        value: function renderPublicCourses(eventData) {
            eventData.data.texts = Texts.common;
            $.get('templates/navigation/publicCoursesTemplate.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.course-navigation').html(rendered);
            });
        }
    }, {
        key: 'renderPublicLessons',
        value: function renderPublicLessons(eventData) {
            eventData.data.texts = Texts.common;
            $.get('templates/navigation/publicLessonsTemplate.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.course-navigation').html(rendered);
            });
        }
    }, {
        key: 'renderPublicTests',
        value: function renderPublicTests(eventData) {
            eventData.data.texts = Texts.common;
            $.get('templates/navigation/publicTestsTemplate.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.course-navigation').html(rendered);
            });
        }
    }, {
        key: 'renderPublicTest',
        value: function renderPublicTest(eventData) {
            eventData.data.texts = Texts.common;
            $.get('templates/navigation/publicTestsTemplate.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.course-navigation').html(rendered);
                $("ul.nav li").removeClass("active");
                $("ul.nav li.test_" + eventData.data.testId).addClass("active");
            });
        }
    }, {
        key: 'renderPrivateCourses',
        value: function renderPrivateCourses(eventData) {
            eventData.data.texts = Texts.common;
            $.get('templates/navigation/privateCoursesTemplate.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.course-navigation').html(rendered);
            });
        }
    }, {
        key: 'renderPrivateLessons',
        value: function renderPrivateLessons(eventData) {
            eventData.data.texts = Texts.common;
            $.get('templates/navigation/privateLessonsTemplate.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.course-navigation').html(rendered);
            });
        }
    }, {
        key: 'renderPrivateTests',
        value: function renderPrivateTests(eventData) {
            eventData.data.texts = Texts.common;
            $.get('templates/navigation/privateTestsTemplate.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.course-navigation').html(rendered);
                $("ul.nav li").removeClass("active");
                $("ul.nav li.test_" + eventData.data.testId).addClass("active");
            });
        }
    }, {
        key: 'renderPrivateTest',
        value: function renderPrivateTest(eventData) {
            eventData.data.texts = Texts.common;
            $.get('templates/navigation/privateTestsTemplate.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.course-navigation').html(rendered);
                $("ul.nav li").removeClass("active");
                $("ul.nav li.test_" + eventData.data.testId).addClass("active");
            });
        }
    }]);

    return NavigationView;
}();

/*                    S.D.G.                    */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadBoxesAction = function (_AbstractReadBoxesAct) {
		_inherits(ReadBoxesAction, _AbstractReadBoxesAct);

		function ReadBoxesAction() {
				_classCallCheck(this, ReadBoxesAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadBoxesAction).apply(this, arguments));
		}

		_createClass(ReadBoxesAction, [{
				key: 'captureActionParam',
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						this.actionParam.schema = localStorage.schema;
				}
		}, {
				key: 'initActionData',
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
				}
		}, {
				key: 'releaseActionParam',
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
				}
		}]);

		return ReadBoxesAction;
}(AbstractReadBoxesAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadNextCardAction = function (_AbstractReadNextCard) {
		_inherits(ReadNextCardAction, _AbstractReadNextCard);

		function ReadNextCardAction() {
				_classCallCheck(this, ReadNextCardAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadNextCardAction).apply(this, arguments));
		}

		_createClass(ReadNextCardAction, [{
				key: 'captureActionParam',
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						this.actionParam.schema = localStorage.schema;
				}
		}, {
				key: 'initActionData',
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
						this.actionData.boxId = this.actionParam.boxId;
				}
		}, {
				key: 'releaseActionParam',
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
				}
		}]);

		return ReadNextCardAction;
}(AbstractReadNextCardAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadPrivateCoursesAction = function (_AbstractReadPrivateC) {
		_inherits(ReadPrivateCoursesAction, _AbstractReadPrivateC);

		function ReadPrivateCoursesAction() {
				_classCallCheck(this, ReadPrivateCoursesAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadPrivateCoursesAction).apply(this, arguments));
		}

		_createClass(ReadPrivateCoursesAction, [{
				key: 'captureActionParam',
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						this.actionParam.schema = localStorage.schema;
				}
		}, {
				key: 'initActionData',
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
				}
		}, {
				key: 'releaseActionParam',
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
				}
		}]);

		return ReadPrivateCoursesAction;
}(AbstractReadPrivateCoursesAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadPrivateLessonsAction = function (_AbstractReadPrivateL) {
		_inherits(ReadPrivateLessonsAction, _AbstractReadPrivateL);

		function ReadPrivateLessonsAction() {
				_classCallCheck(this, ReadPrivateLessonsAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadPrivateLessonsAction).apply(this, arguments));
		}

		_createClass(ReadPrivateLessonsAction, [{
				key: 'captureActionParam',
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						this.actionParam.schema = localStorage.schema;
				}
		}, {
				key: 'initActionData',
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
						this.actionData.courseId = this.actionParam.courseId;
				}
		}, {
				key: 'releaseActionParam',
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
				}
		}]);

		return ReadPrivateLessonsAction;
}(AbstractReadPrivateLessonsAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadPrivateTestAction = function (_AbstractReadPrivateT) {
		_inherits(ReadPrivateTestAction, _AbstractReadPrivateT);

		function ReadPrivateTestAction() {
				_classCallCheck(this, ReadPrivateTestAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadPrivateTestAction).apply(this, arguments));
		}

		_createClass(ReadPrivateTestAction, [{
				key: 'captureActionParam',
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						this.actionParam.schema = localStorage.schema;
				}
		}, {
				key: 'initActionData',
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
						this.actionData.testId = this.actionParam.testId;
				}
		}, {
				key: 'releaseActionParam',
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
				}
		}]);

		return ReadPrivateTestAction;
}(AbstractReadPrivateTestAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadPrivateTestsAction = function (_AbstractReadPrivateT) {
		_inherits(ReadPrivateTestsAction, _AbstractReadPrivateT);

		function ReadPrivateTestsAction() {
				_classCallCheck(this, ReadPrivateTestsAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadPrivateTestsAction).apply(this, arguments));
		}

		_createClass(ReadPrivateTestsAction, [{
				key: 'captureActionParam',
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						this.actionParam.schema = localStorage.schema;
				}
		}, {
				key: 'initActionData',
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
						this.actionData.lessonId = this.actionParam.lessonId;
				}
		}, {
				key: 'releaseActionParam',
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
				}
		}]);

		return ReadPrivateTestsAction;
}(AbstractReadPrivateTestsAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadPublicCoursesAction = function (_AbstractReadPublicCo) {
    _inherits(ReadPublicCoursesAction, _AbstractReadPublicCo);

    function ReadPublicCoursesAction() {
        _classCallCheck(this, ReadPublicCoursesAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadPublicCoursesAction).apply(this, arguments));
    }

    _createClass(ReadPublicCoursesAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {
            this.actionParam.schema = localStorage.schema;
        }
    }, {
        key: 'initActionData',
        value: function initActionData() {
            this.actionData.schema = this.actionParam.schema;
            this.actionData.courseId = this.actionParam.courseId;
        }
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {
            localStorage.schema = this.actionParam.schema;
        }
    }]);

    return ReadPublicCoursesAction;
}(AbstractReadPublicCoursesAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadPublicLessonsAction = function (_AbstractReadPublicLe) {
    _inherits(ReadPublicLessonsAction, _AbstractReadPublicLe);

    function ReadPublicLessonsAction() {
        _classCallCheck(this, ReadPublicLessonsAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadPublicLessonsAction).apply(this, arguments));
    }

    _createClass(ReadPublicLessonsAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {
            this.actionParam.schema = localStorage.schema;
        }
    }, {
        key: 'initActionData',
        value: function initActionData() {
            this.actionData.schema = this.actionParam.schema;
            this.actionData.courseId = this.actionParam.courseId;
        }
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {
            localStorage.schema = this.actionParam.schema;
        }
    }]);

    return ReadPublicLessonsAction;
}(AbstractReadPublicLessonsAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadPublicTestAction = function (_AbstractReadPublicTe) {
    _inherits(ReadPublicTestAction, _AbstractReadPublicTe);

    function ReadPublicTestAction() {
        _classCallCheck(this, ReadPublicTestAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadPublicTestAction).apply(this, arguments));
    }

    _createClass(ReadPublicTestAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {
            this.actionParam.schema = localStorage.schema;
        }
    }, {
        key: 'initActionData',
        value: function initActionData() {
            this.actionData.schema = this.actionParam.schema;
            this.actionData.testId = this.actionParam.testId;
        }
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {
            localStorage.schema = this.actionParam.schema;
        }
    }]);

    return ReadPublicTestAction;
}(AbstractReadPublicTestAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadPublicTestsAction = function (_AbstractReadPublicTe) {
    _inherits(ReadPublicTestsAction, _AbstractReadPublicTe);

    function ReadPublicTestsAction() {
        _classCallCheck(this, ReadPublicTestsAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadPublicTestsAction).apply(this, arguments));
    }

    _createClass(ReadPublicTestsAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {
            this.actionParam.schema = localStorage.schema;
        }
    }, {
        key: 'initActionData',
        value: function initActionData() {
            this.actionData.schema = this.actionParam.schema;
            this.actionData.lessonId = this.actionParam.lessonId;
        }
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {
            localStorage.schema = this.actionParam.schema;
        }
    }]);

    return ReadPublicTestsAction;
}(AbstractReadPublicTestsAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadResultAction = function (_AbstractReadResultAc) {
		_inherits(ReadResultAction, _AbstractReadResultAc);

		function ReadResultAction() {
				_classCallCheck(this, ReadResultAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadResultAction).apply(this, arguments));
		}

		_createClass(ReadResultAction, [{
				key: 'captureActionParam',
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						this.actionParam.schema = localStorage.schema;
						this.actionParam.language = localStorage.language;
				}
		}, {
				key: 'initActionData',
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
						this.actionData.language = this.actionParam.language;
						this.actionData.resultId = this.actionParam.resultId;
				}
		}, {
				key: 'releaseActionParam',
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
						localStorage.language = this.actionParam.language;
				}
		}]);

		return ReadResultAction;
}(AbstractReadResultAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadStatisticsAction = function (_AbstractReadStatisti) {
		_inherits(ReadStatisticsAction, _AbstractReadStatisti);

		function ReadStatisticsAction() {
				_classCallCheck(this, ReadStatisticsAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadStatisticsAction).apply(this, arguments));
		}

		_createClass(ReadStatisticsAction, [{
				key: "captureActionParam",
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						this.actionParam.schema = localStorage.schema;
						this.actionParam.language = localStorage.language;
						this.actionParam.year = $(".year").val();
						this.actionParam.month = $(".month").val();
						if (this.actionParam.year === undefined || this.actionParam.month === undefined) {
								var now = new Date();
								this.actionParam.year = now.getFullYear();
								this.actionParam.month = now.getMonth() + 1;
						}
				}
		}, {
				key: "initActionData",
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
						this.actionData.language = this.actionParam.language;
						this.actionData.token = localStorage.token;
						this.actionData.year = this.actionParam.year;
						this.actionData.month = this.actionParam.month;
				}
		}, {
				key: "releaseActionParam",
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
						localStorage.language = this.actionParam.language;
						$(".year").val(this.actionParam.year);
						$(".month").val(this.actionParam.month);
				}
		}]);

		return ReadStatisticsAction;
}(AbstractReadStatisticsAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadBoxesCommand = function (_AbstractReadBoxesCom) {
    _inherits(ReadBoxesCommand, _AbstractReadBoxesCom);

    function ReadBoxesCommand() {
        _classCallCheck(this, ReadBoxesCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadBoxesCommand).apply(this, arguments));
    }

    _createClass(ReadBoxesCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.httpGet("api/boxes").then(function (data) {
                    _this2.commandData.data = data;
                    _this2.commandData.outcome = _this2.ok;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "readBoxesFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return ReadBoxesCommand;
}(AbstractReadBoxesCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadNextCardCommand = function (_AbstractReadNextCard) {
    _inherits(ReadNextCardCommand, _AbstractReadNextCard);

    function ReadNextCardCommand() {
        _classCallCheck(this, ReadNextCardCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadNextCardCommand).apply(this, arguments));
    }

    _createClass(ReadNextCardCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                var queryParams = [];
                queryParams.push({
                    key: "boxId",
                    value: _this2.commandParam.boxId
                });
                _this2.httpGet("api/boxes/next", queryParams).then(function (data) {
                    _this2.commandData.data = data;
                    _this2.commandData.outcome = _this2.ok;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "readNextCardFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return ReadNextCardCommand;
}(AbstractReadNextCardCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadPrivateCoursesCommand = function (_AbstractReadPrivateC) {
    _inherits(ReadPrivateCoursesCommand, _AbstractReadPrivateC);

    function ReadPrivateCoursesCommand() {
        _classCallCheck(this, ReadPrivateCoursesCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadPrivateCoursesCommand).apply(this, arguments));
    }

    _createClass(ReadPrivateCoursesCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.httpGet("api/courses/private").then(function (data) {
                    _this2.commandData.data = data;
                    _this2.commandData.outcome = _this2.ok;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "readPrivateCoursesFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return ReadPrivateCoursesCommand;
}(AbstractReadPrivateCoursesCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadPrivateLessonsCommand = function (_AbstractReadPrivateL) {
    _inherits(ReadPrivateLessonsCommand, _AbstractReadPrivateL);

    function ReadPrivateLessonsCommand() {
        _classCallCheck(this, ReadPrivateLessonsCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadPrivateLessonsCommand).apply(this, arguments));
    }

    _createClass(ReadPrivateLessonsCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                var queryParams = [];
                queryParams.push({
                    key: "courseId",
                    value: _this2.commandParam.courseId
                });
                _this2.httpGet("api/lessons/private", queryParams).then(function (data) {
                    _this2.commandData.data = data;
                    _this2.commandData.outcome = _this2.ok;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "readPrivateLessonsFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return ReadPrivateLessonsCommand;
}(AbstractReadPrivateLessonsCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadPrivateTestCommand = function (_AbstractReadPrivateT) {
    _inherits(ReadPrivateTestCommand, _AbstractReadPrivateT);

    function ReadPrivateTestCommand() {
        _classCallCheck(this, ReadPrivateTestCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadPrivateTestCommand).apply(this, arguments));
    }

    _createClass(ReadPrivateTestCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                var queryParams = [];
                queryParams.push({
                    key: "testId",
                    value: _this2.commandParam.testId
                });
                _this2.httpGet("api/tests/private/single", queryParams).then(function (data) {
                    _this2.commandData.data = data;
                    _this2.commandData.outcome = _this2.ok;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "readPrivateTestFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return ReadPrivateTestCommand;
}(AbstractReadPrivateTestCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadPrivateTestsCommand = function (_AbstractReadPrivateT) {
    _inherits(ReadPrivateTestsCommand, _AbstractReadPrivateT);

    function ReadPrivateTestsCommand() {
        _classCallCheck(this, ReadPrivateTestsCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadPrivateTestsCommand).apply(this, arguments));
    }

    _createClass(ReadPrivateTestsCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                var queryParams = [];
                queryParams.push({
                    key: "lessonId",
                    value: _this2.commandParam.lessonId
                });
                _this2.httpGet("api/tests/private", queryParams).then(function (data) {
                    _this2.commandData.data = data;
                    _this2.commandData.outcome = _this2.ok;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "readPrivateTestsFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return ReadPrivateTestsCommand;
}(AbstractReadPrivateTestsCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadPublicCoursesCommand = function (_AbstractReadPublicCo) {
    _inherits(ReadPublicCoursesCommand, _AbstractReadPublicCo);

    function ReadPublicCoursesCommand() {
        _classCallCheck(this, ReadPublicCoursesCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadPublicCoursesCommand).apply(this, arguments));
    }

    _createClass(ReadPublicCoursesCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.httpGet("api/courses/public").then(function (data) {
                    _this2.commandData.data = data;
                    _this2.commandData.outcome = _this2.ok;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "readPublicCoursesFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return ReadPublicCoursesCommand;
}(AbstractReadPublicCoursesCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadPublicLessonsCommand = function (_AbstractReadPublicLe) {
    _inherits(ReadPublicLessonsCommand, _AbstractReadPublicLe);

    function ReadPublicLessonsCommand() {
        _classCallCheck(this, ReadPublicLessonsCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadPublicLessonsCommand).apply(this, arguments));
    }

    _createClass(ReadPublicLessonsCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                var queryParams = [];
                queryParams.push({
                    key: "courseId",
                    value: _this2.commandParam.courseId
                });
                _this2.httpGet("api/lessons/public", queryParams).then(function (data) {
                    _this2.commandData.data = data;
                    _this2.commandData.outcome = _this2.ok;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "readPublicLessonsFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return ReadPublicLessonsCommand;
}(AbstractReadPublicLessonsCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadPublicTestCommand = function (_AbstractReadPublicTe) {
    _inherits(ReadPublicTestCommand, _AbstractReadPublicTe);

    function ReadPublicTestCommand() {
        _classCallCheck(this, ReadPublicTestCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadPublicTestCommand).apply(this, arguments));
    }

    _createClass(ReadPublicTestCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                var queryParams = [];
                queryParams.push({
                    key: "testId",
                    value: _this2.commandParam.testId
                });
                _this2.httpGet("api/tests/public/single", queryParams).then(function (data) {
                    _this2.commandData.data = data;
                    _this2.commandData.outcome = _this2.ok;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "readPublicTestFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return ReadPublicTestCommand;
}(AbstractReadPublicTestCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadPublicTestsCommand = function (_AbstractReadPublicTe) {
    _inherits(ReadPublicTestsCommand, _AbstractReadPublicTe);

    function ReadPublicTestsCommand() {
        _classCallCheck(this, ReadPublicTestsCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadPublicTestsCommand).apply(this, arguments));
    }

    _createClass(ReadPublicTestsCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                var queryParams = [];
                queryParams.push({
                    key: "lessonId",
                    value: _this2.commandParam.lessonId
                });
                _this2.httpGet("api/tests/public", queryParams).then(function (data) {
                    _this2.commandData.data = data;
                    _this2.commandData.outcome = _this2.ok;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "readPublicTestsFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return ReadPublicTestsCommand;
}(AbstractReadPublicTestsCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadResultCommand = function (_AbstractReadResultCo) {
    _inherits(ReadResultCommand, _AbstractReadResultCo);

    function ReadResultCommand() {
        _classCallCheck(this, ReadResultCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadResultCommand).apply(this, arguments));
    }

    _createClass(ReadResultCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.language = _this2.commandParam.language;
                var queryParams = [];
                queryParams.push({
                    key: "resultId",
                    value: _this2.commandParam.resultId
                });
                _this2.httpGet("api/results/single", queryParams).then(function (data) {
                    _this2.commandData.data = data;
                    _this2.commandData.outcome = _this2.ok;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "readResultFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return ReadResultCommand;
}(AbstractReadResultCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReadStatisticsCommand = function (_AbstractReadStatisti) {
    _inherits(ReadStatisticsCommand, _AbstractReadStatisti);

    function ReadStatisticsCommand() {
        _classCallCheck(this, ReadStatisticsCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReadStatisticsCommand).apply(this, arguments));
    }

    _createClass(ReadStatisticsCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                var queryParams = [];
                queryParams.push({
                    key: "month",
                    value: _this2.commandParam.month
                });
                queryParams.push({
                    key: "year",
                    value: _this2.commandParam.year
                });
                _this2.httpGet("api/statistics", queryParams).then(function (data) {
                    _this2.commandData.data = data;
                    _this2.commandData.outcome = _this2.ok;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "readStatisticsFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return ReadStatisticsCommand;
}(AbstractReadStatisticsCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoxesReadEvent = function (_AbstractBoxesReadEve) {
    _inherits(BoxesReadEvent, _AbstractBoxesReadEve);

    function BoxesReadEvent() {
        _classCallCheck(this, BoxesReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(BoxesReadEvent).apply(this, arguments));
    }

    _createClass(BoxesReadEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return BoxesReadEvent;
}(AbstractBoxesReadEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NextCardReadEvent = function (_AbstractNextCardRead) {
    _inherits(NextCardReadEvent, _AbstractNextCardRead);

    function NextCardReadEvent() {
        _classCallCheck(this, NextCardReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(NextCardReadEvent).apply(this, arguments));
    }

    _createClass(NextCardReadEvent, [{
        key: "prepareDataForView",
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
            this.eventData.data.formattedLast = this.formatDate(this.eventData.data.last);
            this.eventData.data.formattedNext = this.formatDate(this.eventData.data.next);
        }
    }, {
        key: "formatDate",
        value: function formatDate(timestamp) {
            if (timestamp) {
                try {
                    var date = new Date(timestamp);
                    return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
                } catch (error) {
                    return undefined;
                }
            } else {
                return undefined;
            }
        }
    }]);

    return NextCardReadEvent;
}(AbstractNextCardReadEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrivateCoursesReadEvent = function (_AbstractPrivateCours) {
    _inherits(PrivateCoursesReadEvent, _AbstractPrivateCours);

    function PrivateCoursesReadEvent() {
        _classCallCheck(this, PrivateCoursesReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(PrivateCoursesReadEvent).apply(this, arguments));
    }

    _createClass(PrivateCoursesReadEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return PrivateCoursesReadEvent;
}(AbstractPrivateCoursesReadEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrivateLessonsReadEvent = function (_AbstractPrivateLesso) {
    _inherits(PrivateLessonsReadEvent, _AbstractPrivateLesso);

    function PrivateLessonsReadEvent() {
        _classCallCheck(this, PrivateLessonsReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(PrivateLessonsReadEvent).apply(this, arguments));
    }

    _createClass(PrivateLessonsReadEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return PrivateLessonsReadEvent;
}(AbstractPrivateLessonsReadEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrivateTestReadEvent = function (_AbstractPrivateTestR) {
    _inherits(PrivateTestReadEvent, _AbstractPrivateTestR);

    function PrivateTestReadEvent() {
        _classCallCheck(this, PrivateTestReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(PrivateTestReadEvent).apply(this, arguments));
    }

    _createClass(PrivateTestReadEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return PrivateTestReadEvent;
}(AbstractPrivateTestReadEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrivateTestsReadEvent = function (_AbstractPrivateTests) {
    _inherits(PrivateTestsReadEvent, _AbstractPrivateTests);

    function PrivateTestsReadEvent() {
        _classCallCheck(this, PrivateTestsReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(PrivateTestsReadEvent).apply(this, arguments));
    }

    _createClass(PrivateTestsReadEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return PrivateTestsReadEvent;
}(AbstractPrivateTestsReadEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PublicCoursesReadEvent = function (_AbstractPublicCourse) {
    _inherits(PublicCoursesReadEvent, _AbstractPublicCourse);

    function PublicCoursesReadEvent() {
        _classCallCheck(this, PublicCoursesReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(PublicCoursesReadEvent).apply(this, arguments));
    }

    _createClass(PublicCoursesReadEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return PublicCoursesReadEvent;
}(AbstractPublicCoursesReadEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PublicLessonsReadEvent = function (_AbstractPublicLesson) {
    _inherits(PublicLessonsReadEvent, _AbstractPublicLesson);

    function PublicLessonsReadEvent() {
        _classCallCheck(this, PublicLessonsReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(PublicLessonsReadEvent).apply(this, arguments));
    }

    _createClass(PublicLessonsReadEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return PublicLessonsReadEvent;
}(AbstractPublicLessonsReadEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PublicTestReadEvent = function (_AbstractPublicTestRe) {
    _inherits(PublicTestReadEvent, _AbstractPublicTestRe);

    function PublicTestReadEvent() {
        _classCallCheck(this, PublicTestReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(PublicTestReadEvent).apply(this, arguments));
    }

    _createClass(PublicTestReadEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return PublicTestReadEvent;
}(AbstractPublicTestReadEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PublicTestsReadEvent = function (_AbstractPublicTestsR) {
    _inherits(PublicTestsReadEvent, _AbstractPublicTestsR);

    function PublicTestsReadEvent() {
        _classCallCheck(this, PublicTestsReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(PublicTestsReadEvent).apply(this, arguments));
    }

    _createClass(PublicTestsReadEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return PublicTestsReadEvent;
}(AbstractPublicTestsReadEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResultReadEvent = function (_AbstractResultReadEv) {
    _inherits(ResultReadEvent, _AbstractResultReadEv);

    function ResultReadEvent() {
        _classCallCheck(this, ResultReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ResultReadEvent).apply(this, arguments));
    }

    _createClass(ResultReadEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return ResultReadEvent;
}(AbstractResultReadEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatisticsReadEvent = function (_AbstractStatisticsRe) {
    _inherits(StatisticsReadEvent, _AbstractStatisticsRe);

    function StatisticsReadEvent() {
        _classCallCheck(this, StatisticsReadEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(StatisticsReadEvent).apply(this, arguments));
    }

    _createClass(StatisticsReadEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return StatisticsReadEvent;
}(AbstractStatisticsReadEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserInfoView = function () {
    function UserInfoView() {
        _classCallCheck(this, UserInfoView);
    }

    _createClass(UserInfoView, null, [{
        key: 'renderUserInfo',
        value: function renderUserInfo(eventData) {
            eventData.data.texts = Texts.user;
            $.get('templates/user/profile.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.content-pane').html(rendered);
            });
        }
    }, {
        key: 'renderCourseSelection',
        value: function renderCourseSelection(eventData) {
            eventData.data.texts = Texts.user;
            $.get('templates/user/courses.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.content-pane').html(rendered);
            });
        }
    }, {
        key: 'renderBox',
        value: function renderBox(eventData) {
            if (!eventData.data) {
                eventData.data = {};
            }
            eventData.data.texts = Texts.user;
            $.get('templates/user/box.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.content-pane').html(rendered);
            });
        }
    }, {
        key: 'renderCourseToBox',
        value: function renderCourseToBox(eventData) {
            eventData.data.texts = Texts.user;
            $.get('templates/user/boxAddCourse.mst', function (template) {
                var rendered = Mustache.render(template, eventData.data);
                $('.content-pane').html(rendered);
            });
        }
    }, {
        key: 'renderPasswordChange',
        value: function renderPasswordChange(eventData) {
            eventData.texts = Texts.user;
            $.get('templates/user/changePassword.mst', function (template) {
                var rendered = Mustache.render(template, eventData);
                $('.content-pane').html(rendered);
            });
        }
    }, {
        key: 'passwordOK',
        value: function passwordOK(eventData) {
            $("#passwordRepetitionDiv").removeClass("has-error");
            $("#passwordRepetitionDiv .help-block").hide();
            $("#passwordDiv").removeClass("has-error");
            $("#passwordDiv .help-block").hide();
        }
    }, {
        key: 'passwordMismatch',
        value: function passwordMismatch(eventData) {
            $("#passwordDiv").removeClass("has-error");
            $("#passwordDiv .help-block").hide();
            $("#passwordRepetitionDiv").addClass("has-error");
            $("#passwordRepetitionDiv .help-block").hide();
            $("#passwordRepetitionDiv .passwordMismatch").show();
        }
    }, {
        key: 'passwordEmpty',
        value: function passwordEmpty(eventData) {
            $("#passwordRepetitionDiv").removeClass("has-error");
            $("#passwordRepetitionDiv .help-block").hide();
            $("#passwordDiv").removeClass("has-error");
            $("#passwordDiv .help-block").hide();
            eventData.emptyIds.forEach(function (id) {
                $("#" + id + "Div").addClass("has-error");
                $("#" + id + "Div .help-block").hide();
                $("#" + id + "Div .notEmpty").show();
            });
        }
    }, {
        key: 'renderForgotPassword',
        value: function renderForgotPassword(eventData) {
            eventData.texts = Texts.user;
            $.get('templates/user/forgotPassword.mst', function (template) {
                var rendered = Mustache.render(template, eventData);
                $('.content-pane').html(rendered);
            });
        }
    }, {
        key: 'renderNewPassword',
        value: function renderNewPassword(eventData) {
            eventData.texts = Texts.user;
            $.get('templates/user/newPassword.mst', function (template) {
                var rendered = Mustache.render(template, eventData);
                $('.content-pane').html(rendered);
            });
        }
    }, {
        key: 'renderRegistration',
        value: function renderRegistration(eventData) {
            eventData.texts = Texts.user;
            $.get('templates/user/registration.mst', function (template) {
                var rendered = Mustache.render(template, eventData);
                $('.content-pane').html(rendered);
            });
        }
    }, {
        key: 'renderUsernameIsAvailable',
        value: function renderUsernameIsAvailable(eventData) {
            $("#usernameDiv").removeClass("has-error");
            $("#usernameDiv .help-block").hide();
        }
    }, {
        key: 'renderUsernameIsNotAvailable',
        value: function renderUsernameIsNotAvailable(eventData) {
            $("#usernameDiv").addClass("has-error");
            $("#usernameDiv .help-block").hide();
            $("#usernameDiv .usernameNotAvailable").show();
        }
    }]);

    return UserInfoView;
}();

/*                    S.D.G.                    */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckUsernameAction = function (_AbstractCheckUsernam) {
  _inherits(CheckUsernameAction, _AbstractCheckUsernam);

  function CheckUsernameAction() {
    _classCallCheck(this, CheckUsernameAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CheckUsernameAction).apply(this, arguments));
  }

  _createClass(CheckUsernameAction, [{
    key: "captureActionParam",
    value: function captureActionParam() {
      this.actionParam.schema = localStorage.schema;
      this.actionParam.username = jQuery("#username").val().trim();
    }
  }, {
    key: "initActionData",
    value: function initActionData() {
      this.actionData.username = this.actionParam.username;
      this.actionData.schema = this.actionParam.schema;
    }
  }, {
    key: "releaseActionParam",
    value: function releaseActionParam() {
      localStorage.schema = this.actionParam.schema;
      jQuery("#username").val(this.actionData.username);
    }
  }]);

  return CheckUsernameAction;
}(AbstractCheckUsernameAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfirmEmailAction = function (_AbstractConfirmEmail) {
    _inherits(ConfirmEmailAction, _AbstractConfirmEmail);

    function ConfirmEmailAction() {
        _classCallCheck(this, ConfirmEmailAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ConfirmEmailAction).apply(this, arguments));
    }

    _createClass(ConfirmEmailAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {
            this.actionParam.schema = localStorage.schema;
        }
    }, {
        key: 'initActionData',
        value: function initActionData() {
            this.actionData.username = this.actionParam.username;
            this.actionData.password = this.actionParam.password;
            this.actionData.schema = this.actionParam.schema;
        }
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {
            localStorage.schema = this.actionParam.schema;
        }
    }]);

    return ConfirmEmailAction;
}(AbstractConfirmEmailAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeleteBoxAction = function (_AbstractDeleteBoxAct) {
		_inherits(DeleteBoxAction, _AbstractDeleteBoxAct);

		function DeleteBoxAction() {
				_classCallCheck(this, DeleteBoxAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(DeleteBoxAction).apply(this, arguments));
		}

		_createClass(DeleteBoxAction, [{
				key: 'captureActionParam',
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						this.actionParam.schema = localStorage.schema;
				}
		}, {
				key: 'initActionData',
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
						this.actionData.boxId = this.actionParam.boxId;
				}
		}, {
				key: 'releaseActionParam',
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
						bootbox.hideAll();
				}
		}]);

		return DeleteBoxAction;
}(AbstractDeleteBoxAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FillBoxWithCardsAction = function (_AbstractFillBoxWithC) {
		_inherits(FillBoxWithCardsAction, _AbstractFillBoxWithC);

		function FillBoxWithCardsAction() {
				_classCallCheck(this, FillBoxWithCardsAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(FillBoxWithCardsAction).apply(this, arguments));
		}

		_createClass(FillBoxWithCardsAction, [{
				key: 'captureActionParam',
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						this.actionParam.schema = localStorage.schema;
				}
		}, {
				key: 'initActionData',
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
						this.actionData.boxId = this.actionParam.boxId;
				}
		}, {
				key: 'releaseActionParam',
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
				}
		}]);

		return FillBoxWithCardsAction;
}(AbstractFillBoxWithCardsAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadBoxAction = function (_AbstractLoadBoxActio) {
		_inherits(LoadBoxAction, _AbstractLoadBoxActio);

		function LoadBoxAction() {
				_classCallCheck(this, LoadBoxAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(LoadBoxAction).apply(this, arguments));
		}

		_createClass(LoadBoxAction, [{
				key: 'captureActionParam',
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						this.actionParam.schema = localStorage.schema;
				}
		}, {
				key: 'initActionData',
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
						this.actionData.boxId = this.actionParam.boxId;
				}
		}, {
				key: 'releaseActionParam',
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
				}
		}]);

		return LoadBoxAction;
}(AbstractLoadBoxAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadCoursesAction = function (_AbstractLoadCoursesA) {
		_inherits(LoadCoursesAction, _AbstractLoadCoursesA);

		function LoadCoursesAction() {
				_classCallCheck(this, LoadCoursesAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(LoadCoursesAction).apply(this, arguments));
		}

		_createClass(LoadCoursesAction, [{
				key: 'captureActionParam',
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						this.actionParam.schema = localStorage.schema;
				}
		}, {
				key: 'initActionData',
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
						this.actionData.boxId = this.actionParam.boxId;
				}
		}, {
				key: 'releaseActionParam',
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
				}
		}]);

		return LoadCoursesAction;
}(AbstractLoadCoursesAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpenBoxCreationAction = function (_AbstractOpenBoxCreat) {
    _inherits(OpenBoxCreationAction, _AbstractOpenBoxCreat);

    function OpenBoxCreationAction() {
        _classCallCheck(this, OpenBoxCreationAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(OpenBoxCreationAction).apply(this, arguments));
    }

    _createClass(OpenBoxCreationAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {}
    }, {
        key: 'initActionData',
        value: function initActionData() {}
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {}
    }]);

    return OpenBoxCreationAction;
}(AbstractOpenBoxCreationAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpenChangePasswordAction = function (_AbstractOpenChangePa) {
    _inherits(OpenChangePasswordAction, _AbstractOpenChangePa);

    function OpenChangePasswordAction() {
        _classCallCheck(this, OpenChangePasswordAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(OpenChangePasswordAction).apply(this, arguments));
    }

    _createClass(OpenChangePasswordAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {}
    }, {
        key: 'initActionData',
        value: function initActionData() {}
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {}
    }]);

    return OpenChangePasswordAction;
}(AbstractOpenChangePasswordAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpenCourseSelectionAction = function (_AbstractOpenCourseSe) {
		_inherits(OpenCourseSelectionAction, _AbstractOpenCourseSe);

		function OpenCourseSelectionAction() {
				_classCallCheck(this, OpenCourseSelectionAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(OpenCourseSelectionAction).apply(this, arguments));
		}

		_createClass(OpenCourseSelectionAction, [{
				key: 'captureActionParam',
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						this.actionParam.schema = localStorage.schema;
				}
		}, {
				key: 'initActionData',
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
				}
		}, {
				key: 'releaseActionParam',
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
				}
		}]);

		return OpenCourseSelectionAction;
}(AbstractOpenCourseSelectionAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpenForgotPasswordAction = function (_AbstractOpenForgotPa) {
    _inherits(OpenForgotPasswordAction, _AbstractOpenForgotPa);

    function OpenForgotPasswordAction() {
        _classCallCheck(this, OpenForgotPasswordAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(OpenForgotPasswordAction).apply(this, arguments));
    }

    _createClass(OpenForgotPasswordAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {}
    }, {
        key: 'initActionData',
        value: function initActionData() {}
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {}
    }]);

    return OpenForgotPasswordAction;
}(AbstractOpenForgotPasswordAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpenNewPasswordAction = function (_AbstractOpenNewPassw) {
    _inherits(OpenNewPasswordAction, _AbstractOpenNewPassw);

    function OpenNewPasswordAction() {
        _classCallCheck(this, OpenNewPasswordAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(OpenNewPasswordAction).apply(this, arguments));
    }

    _createClass(OpenNewPasswordAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {}
    }, {
        key: 'initActionData',
        value: function initActionData() {
            this.actionData.username = this.actionParam.username;
            this.actionData.password = this.actionParam.password;
        }
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {}
    }]);

    return OpenNewPasswordAction;
}(AbstractOpenNewPasswordAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpenProfileAction = function (_AbstractOpenProfileA) {
		_inherits(OpenProfileAction, _AbstractOpenProfileA);

		function OpenProfileAction() {
				_classCallCheck(this, OpenProfileAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(OpenProfileAction).apply(this, arguments));
		}

		_createClass(OpenProfileAction, [{
				key: 'captureActionParam',
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						this.actionParam.schema = localStorage.schema;
				}
		}, {
				key: 'initActionData',
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
				}
		}, {
				key: 'releaseActionParam',
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
				}
		}]);

		return OpenProfileAction;
}(AbstractOpenProfileAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpenRegistrationAction = function (_AbstractOpenRegistra) {
    _inherits(OpenRegistrationAction, _AbstractOpenRegistra);

    function OpenRegistrationAction() {
        _classCallCheck(this, OpenRegistrationAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(OpenRegistrationAction).apply(this, arguments));
    }

    _createClass(OpenRegistrationAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {}
    }, {
        key: 'initActionData',
        value: function initActionData() {}
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {}
    }]);

    return OpenRegistrationAction;
}(AbstractOpenRegistrationAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RemoveCourseAction = function (_AbstractRemoveCourse) {
		_inherits(RemoveCourseAction, _AbstractRemoveCourse);

		function RemoveCourseAction() {
				_classCallCheck(this, RemoveCourseAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(RemoveCourseAction).apply(this, arguments));
		}

		_createClass(RemoveCourseAction, [{
				key: 'captureActionParam',
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						this.actionParam.schema = localStorage.schema;
				}
		}, {
				key: 'initActionData',
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
						this.actionData.courseId = this.actionParam.courseId;
				}
		}, {
				key: 'releaseActionParam',
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
						bootbox.hideAll();
				}
		}]);

		return RemoveCourseAction;
}(AbstractRemoveCourseAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SaveBoxAction = function (_AbstractSaveBoxActio) {
		_inherits(SaveBoxAction, _AbstractSaveBoxActio);

		function SaveBoxAction() {
				_classCallCheck(this, SaveBoxAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(SaveBoxAction).apply(this, arguments));
		}

		_createClass(SaveBoxAction, [{
				key: "captureActionParam",
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						this.actionParam.schema = localStorage.schema;
						this.actionParam.name = jQuery("#name").val().trim();
				}
		}, {
				key: "initActionData",
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
						this.actionData.role = this.actionParam.role;
						this.actionData.name = this.actionParam.name;
						this.actionData.boxId = this.actionParam.boxId;
				}
		}, {
				key: "releaseActionParam",
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
				}
		}]);

		return SaveBoxAction;
}(AbstractSaveBoxAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SaveBoxConfigAction = function (_AbstractSaveBoxConfi) {
		_inherits(SaveBoxConfigAction, _AbstractSaveBoxConfi);

		function SaveBoxConfigAction() {
				_classCallCheck(this, SaveBoxConfigAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(SaveBoxConfigAction).apply(this, arguments));
		}

		_createClass(SaveBoxConfigAction, [{
				key: "captureActionParam",
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						this.actionParam.schema = localStorage.schema;
						var boxId = this.actionParam.boxId;
						this.actionParam.boxOfCourseList = $("select").map(function () {
								return { autoAdd: this.value, courseId: this.id, boxId: boxId };
						}).get();
				}
		}, {
				key: "initActionData",
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
						this.actionData.boxId = this.actionParam.boxId;
						this.actionData.boxOfCourseList = this.actionParam.boxOfCourseList;
				}
		}, {
				key: "releaseActionParam",
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
				}
		}]);

		return SaveBoxConfigAction;
}(AbstractSaveBoxConfigAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SaveCourseSelectionAction = function (_AbstractSaveCourseSe) {
		_inherits(SaveCourseSelectionAction, _AbstractSaveCourseSe);

		function SaveCourseSelectionAction() {
				_classCallCheck(this, SaveCourseSelectionAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(SaveCourseSelectionAction).apply(this, arguments));
		}

		_createClass(SaveCourseSelectionAction, [{
				key: "captureActionParam",
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						this.actionParam.schema = localStorage.schema;
						this.actionParam.courseIdList = $("input:checkbox:checked").map(function () {
								return this.value;
						}).get();
				}
		}, {
				key: "initActionData",
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
						this.actionData.courseIdList = this.actionParam.courseIdList;
				}
		}, {
				key: "releaseActionParam",
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
				}
		}]);

		return SaveCourseSelectionAction;
}(AbstractSaveCourseSelectionAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SaveProfileAction = function (_AbstractSaveProfileA) {
		_inherits(SaveProfileAction, _AbstractSaveProfileA);

		function SaveProfileAction() {
				_classCallCheck(this, SaveProfileAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(SaveProfileAction).apply(this, arguments));
		}

		_createClass(SaveProfileAction, [{
				key: "captureActionParam",
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						this.actionParam.schema = localStorage.schema;
						this.actionParam.name = jQuery("#name").val().trim();
						this.actionParam.prename = jQuery("#prename").val().trim();
						this.actionParam.email = jQuery("#email").val().trim();
				}
		}, {
				key: "initActionData",
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
						this.actionData.name = this.actionParam.name;
						this.actionData.prename = this.actionParam.prename;
						this.actionData.email = this.actionParam.email;
						this.actionData.username = this.actionParam.username;
				}
		}, {
				key: "releaseActionParam",
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
						jQuery("#name").val(this.actionData.name);
						jQuery("#prename").val(this.actionData.prename);
						jQuery("#email").val(this.actionData.email);
				}
		}]);

		return SaveProfileAction;
}(AbstractSaveProfileAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubmitForgotPasswordRequestAction = function (_AbstractSubmitForgot) {
		_inherits(SubmitForgotPasswordRequestAction, _AbstractSubmitForgot);

		function SubmitForgotPasswordRequestAction() {
				_classCallCheck(this, SubmitForgotPasswordRequestAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(SubmitForgotPasswordRequestAction).apply(this, arguments));
		}

		_createClass(SubmitForgotPasswordRequestAction, [{
				key: "captureActionParam",
				value: function captureActionParam() {
						this.actionParam.schema = localStorage.schema;
						this.actionParam.language = localStorage.language;
						this.actionParam.username = jQuery("#username").val().trim();
				}
		}, {
				key: "initActionData",
				value: function initActionData() {
						this.actionData.schema = this.actionParam.schema;
						this.actionData.language = this.actionParam.language;
						this.actionData.username = this.actionParam.username;
				}
		}, {
				key: "releaseActionParam",
				value: function releaseActionParam() {
						localStorage.schema = this.actionParam.schema;
						localStorage.language = this.actionParam.language;
						jQuery("#username").val(this.actionData.username);
				}
		}]);

		return SubmitForgotPasswordRequestAction;
}(AbstractSubmitForgotPasswordRequestAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubmitNewPasswordAction = function (_AbstractSubmitNewPas) {
		_inherits(SubmitNewPasswordAction, _AbstractSubmitNewPas);

		function SubmitNewPasswordAction() {
				_classCallCheck(this, SubmitNewPasswordAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(SubmitNewPasswordAction).apply(this, arguments));
		}

		_createClass(SubmitNewPasswordAction, [{
				key: "captureActionParam",
				value: function captureActionParam() {
						this.actionParam.schema = localStorage.schema;
						this.actionParam.username = jQuery("#username").val().trim();
						this.actionParam.password = jQuery("#oldPassword").val().trim();
						this.actionParam.newPassword = CryptoJS.MD5(jQuery("#password").val().trim()).toString(CryptoJS.enc.Base64);
						this.actionParam.passwordRepetition = CryptoJS.MD5(jQuery("#passwordRepetition").val().trim()).toString(CryptoJS.enc.Base64);
				}
		}, {
				key: "initActionData",
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.newPassword = this.actionParam.newPassword;
						this.actionData.passwordRepetition = this.actionParam.passwordRepetition;
						this.actionData.schema = this.actionParam.schema;
				}
		}, {
				key: "releaseActionParam",
				value: function releaseActionParam() {
						localStorage.schema = this.actionParam.schema;
						localStorage.language = this.actionParam.language;
				}
		}]);

		return SubmitNewPasswordAction;
}(AbstractSubmitNewPasswordAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubmitRegistrationAction = function (_AbstractSubmitRegist) {
		_inherits(SubmitRegistrationAction, _AbstractSubmitRegist);

		function SubmitRegistrationAction() {
				_classCallCheck(this, SubmitRegistrationAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(SubmitRegistrationAction).apply(this, arguments));
		}

		_createClass(SubmitRegistrationAction, [{
				key: "captureActionParam",
				value: function captureActionParam() {
						this.actionParam.schema = localStorage.schema;
						this.actionParam.language = localStorage.language;
						this.actionParam.username = jQuery("#username").val().trim();
						this.actionParam.usernameExists = jQuery(".usernameNotAvailable").is(':visible');
						this.actionParam.name = jQuery("#name").val().trim();
						this.actionParam.prename = jQuery("#prename").val().trim();
						this.actionParam.email = jQuery("#email").val().trim();
						this.actionParam.password = CryptoJS.MD5(jQuery("#password").val().trim()).toString(CryptoJS.enc.Base64);
						this.actionParam.passwordRepetition = CryptoJS.MD5(jQuery("#passwordRepetition").val().trim()).toString(CryptoJS.enc.Base64);
				}
		}, {
				key: "initActionData",
				value: function initActionData() {
						this.actionData.schema = this.actionParam.schema;
						this.actionData.language = this.actionParam.language;
						this.actionData.username = this.actionParam.username;
						this.actionData.usernameExists = this.actionParam.usernameExists;
						this.actionData.name = this.actionParam.name;
						this.actionData.prename = this.actionParam.prename;
						this.actionData.email = this.actionParam.email;
						this.actionData.password = this.actionParam.password;
						this.actionData.passwordRepetition = this.actionParam.passwordRepetition;
				}
		}, {
				key: "releaseActionParam",
				value: function releaseActionParam() {
						localStorage.schema = this.actionParam.schema;
						localStorage.language = this.actionParam.language;
						jQuery("#username").val(this.actionData.username);
						jQuery("#name").val(this.actionData.name);
						jQuery("#prename").val(this.actionData.prename);
						jQuery("#email").val(this.actionData.email);
						// release action params during replay
				}
		}]);

		return SubmitRegistrationAction;
}(AbstractSubmitRegistrationAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpdatePasswordAction = function (_AbstractUpdatePasswo) {
		_inherits(UpdatePasswordAction, _AbstractUpdatePasswo);

		function UpdatePasswordAction() {
				_classCallCheck(this, UpdatePasswordAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(UpdatePasswordAction).apply(this, arguments));
		}

		_createClass(UpdatePasswordAction, [{
				key: "captureActionParam",
				value: function captureActionParam() {
						this.actionParam.username = localStorage.username;
						this.actionParam.password = localStorage.password;
						this.actionParam.schema = localStorage.schema;
						this.actionParam.newPassword = CryptoJS.MD5(jQuery("#password").val().trim()).toString(CryptoJS.enc.Base64);
						this.actionParam.passwordRepetition = CryptoJS.MD5(jQuery("#passwordRepetition").val().trim()).toString(CryptoJS.enc.Base64);
				}
		}, {
				key: "initActionData",
				value: function initActionData() {
						this.actionData.username = this.actionParam.username;
						this.actionData.password = this.actionParam.password;
						this.actionData.schema = this.actionParam.schema;
						this.actionData.newPassword = this.actionParam.newPassword;
						this.actionData.passwordRepetition = this.actionParam.passwordRepetition;
				}
		}, {
				key: "releaseActionParam",
				value: function releaseActionParam() {
						localStorage.username = this.actionParam.username;
						localStorage.password = this.actionParam.password;
						localStorage.schema = this.actionParam.schema;
				}
		}]);

		return UpdatePasswordAction;
}(AbstractUpdatePasswordAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValidatePasswordAction = function (_AbstractValidatePass) {
		_inherits(ValidatePasswordAction, _AbstractValidatePass);

		function ValidatePasswordAction() {
				_classCallCheck(this, ValidatePasswordAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(ValidatePasswordAction).apply(this, arguments));
		}

		_createClass(ValidatePasswordAction, [{
				key: "captureActionParam",
				value: function captureActionParam() {
						this.actionParam.newPassword = CryptoJS.MD5(jQuery("#password").val().trim()).toString(CryptoJS.enc.Base64);
						this.actionParam.passwordRepetition = CryptoJS.MD5(jQuery("#passwordRepetition").val().trim()).toString(CryptoJS.enc.Base64);
						this.actionParam.newPasswordEmpty = jQuery("#password").val().trim().length === 0;
						this.actionParam.passwordRepetitionEmpty = jQuery("#passwordRepetition").val().trim().length === 0;
				}
		}, {
				key: "initActionData",
				value: function initActionData() {
						this.actionData.newPassword = this.actionParam.newPassword;
						this.actionData.passwordRepetition = this.actionParam.passwordRepetition;
						this.actionData.newPasswordEmpty = this.actionParam.newPasswordEmpty;
						this.actionData.passwordRepetitionEmpty = this.actionParam.passwordRepetitionEmpty;
				}
		}, {
				key: "releaseActionParam",
				value: function releaseActionParam() {
						jQuery("#password").val(this.actionData.newPassword);
						jQuery("#passwordRepetition").val(this.actionData.passwordRepetition);
				}
		}]);

		return ValidatePasswordAction;
}(AbstractValidatePasswordAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckUsernameCommand = function (_AbstractCheckUsernam) {
    _inherits(CheckUsernameCommand, _AbstractCheckUsernam);

    function CheckUsernameCommand() {
        _classCallCheck(this, CheckUsernameCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(CheckUsernameCommand).apply(this, arguments));
    }

    _createClass(CheckUsernameCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                if (!_this2.commandParam.username) {
                    _this2.commandData.outcome = _this2.empty;
                    _this2.commandData.id = "username";
                    resolve();
                } else {
                    var queryParams = [];
                    queryParams.push({
                        key: "username",
                        value: _this2.commandParam.username
                    });
                    _this2.httpGet("api/users/username", queryParams).then(function (data) {
                        if (data.available === true) {
                            _this2.commandData.outcome = _this2.available;
                        } else {
                            _this2.commandData.outcome = _this2.notAvailable;
                        }
                        resolve();
                    }, function (error) {
                        _this2.commandData.messageKey = "checkUsernameFailed";
                        _this2.commandData.error = error;
                        _this2.commandData.outcome = _this2.error;
                        resolve();
                    });
                }
            });
        }
    }]);

    return CheckUsernameCommand;
}(AbstractCheckUsernameCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfirmEmailCommand = function (_AbstractConfirmEmail) {
    _inherits(ConfirmEmailCommand, _AbstractConfirmEmail);

    function ConfirmEmailCommand() {
        _classCallCheck(this, ConfirmEmailCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ConfirmEmailCommand).apply(this, arguments));
    }

    _createClass(ConfirmEmailCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.httpPut("api/users/confirm").then(function () {
                    _this2.commandData.outcome = _this2.saved;
                    _this2.commandData.hash = "profile";
                    _this2.commandData.password = _this2.commandParam.password;
                    _this2.commandData.username = _this2.commandParam.username;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "confirmEmailFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return ConfirmEmailCommand;
}(AbstractConfirmEmailCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeleteBoxCommand = function (_AbstractDeleteBoxCom) {
    _inherits(DeleteBoxCommand, _AbstractDeleteBoxCom);

    function DeleteBoxCommand() {
        _classCallCheck(this, DeleteBoxCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(DeleteBoxCommand).apply(this, arguments));
    }

    _createClass(DeleteBoxCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                var queryParams = [];
                queryParams.push({
                    key: "boxId",
                    value: _this2.commandParam.boxId
                });
                _this2.httpDelete("api/boxes/delete", queryParams).then(function (data) {
                    _this2.commandData.data = data;
                    _this2.commandData.outcome = _this2.deleted;
                    _this2.commandData.hash = "profile";
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "deleteBoxFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return DeleteBoxCommand;
}(AbstractDeleteBoxCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FillBoxWithCardsCommand = function (_AbstractFillBoxWithC) {
    _inherits(FillBoxWithCardsCommand, _AbstractFillBoxWithC);

    function FillBoxWithCardsCommand() {
        _classCallCheck(this, FillBoxWithCardsCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FillBoxWithCardsCommand).apply(this, arguments));
    }

    _createClass(FillBoxWithCardsCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                var data = {
                    boxIds: [_this2.commandParam.boxId]
                };
                _this2.httpPost("api/box/fill", [], data).then(function () {
                    _this2.commandData.outcome = _this2.filled;
                    _this2.commandData.hash = "profile";
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "fillBoxWithCardsFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return FillBoxWithCardsCommand;
}(AbstractFillBoxWithCardsCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadBoxCommand = function (_AbstractLoadBoxComma) {
    _inherits(LoadBoxCommand, _AbstractLoadBoxComma);

    function LoadBoxCommand() {
        _classCallCheck(this, LoadBoxCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(LoadBoxCommand).apply(this, arguments));
    }

    _createClass(LoadBoxCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                var queryParams = [];
                queryParams.push({
                    key: "boxId",
                    value: _this2.commandParam.boxId
                });
                _this2.httpGet("api/boxes/single", queryParams).then(function (data) {
                    _this2.commandData.data = data;
                    _this2.commandData.outcome = _this2.loaded;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "readBoxFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return LoadBoxCommand;
}(AbstractLoadBoxCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadCoursesCommand = function (_AbstractLoadCoursesC) {
    _inherits(LoadCoursesCommand, _AbstractLoadCoursesC);

    function LoadCoursesCommand() {
        _classCallCheck(this, LoadCoursesCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(LoadCoursesCommand).apply(this, arguments));
    }

    _createClass(LoadCoursesCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                var queryParams = [];
                queryParams.push({
                    key: "boxId",
                    value: _this2.commandParam.boxId
                });
                _this2.httpGet("api/boxes/courses", queryParams).then(function (data) {
                    _this2.commandData.data = data;
                    _this2.commandData.outcome = _this2.loaded;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "readCoursesOfBoxFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return LoadCoursesCommand;
}(AbstractLoadCoursesCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpenBoxCreationCommand = function (_AbstractOpenBoxCreat) {
    _inherits(OpenBoxCreationCommand, _AbstractOpenBoxCreat);

    function OpenBoxCreationCommand() {
        _classCallCheck(this, OpenBoxCreationCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(OpenBoxCreationCommand).apply(this, arguments));
    }

    _createClass(OpenBoxCreationCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.outcome = _this2.ok;
                resolve();
            });
        }
    }]);

    return OpenBoxCreationCommand;
}(AbstractOpenBoxCreationCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpenChangePasswordCommand = function (_AbstractOpenChangePa) {
    _inherits(OpenChangePasswordCommand, _AbstractOpenChangePa);

    function OpenChangePasswordCommand() {
        _classCallCheck(this, OpenChangePasswordCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(OpenChangePasswordCommand).apply(this, arguments));
    }

    _createClass(OpenChangePasswordCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.outcome = _this2.ok;
                resolve();
            });
        }
    }]);

    return OpenChangePasswordCommand;
}(AbstractOpenChangePasswordCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpenCourseSelectionCommand = function (_AbstractOpenCourseSe) {
    _inherits(OpenCourseSelectionCommand, _AbstractOpenCourseSe);

    function OpenCourseSelectionCommand() {
        _classCallCheck(this, OpenCourseSelectionCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(OpenCourseSelectionCommand).apply(this, arguments));
    }

    _createClass(OpenCourseSelectionCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.httpGet("api/users/courses").then(function (data) {
                    _this2.commandData.data = data;
                    _this2.commandData.outcome = _this2.coursesRead;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "readProfileCoursesFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return OpenCourseSelectionCommand;
}(AbstractOpenCourseSelectionCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpenForgotPasswordCommand = function (_AbstractOpenForgotPa) {
    _inherits(OpenForgotPasswordCommand, _AbstractOpenForgotPa);

    function OpenForgotPasswordCommand() {
        _classCallCheck(this, OpenForgotPasswordCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(OpenForgotPasswordCommand).apply(this, arguments));
    }

    _createClass(OpenForgotPasswordCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.outcome = _this2.ok;
                resolve();
            });
        }
    }]);

    return OpenForgotPasswordCommand;
}(AbstractOpenForgotPasswordCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpenNewPasswordCommand = function (_AbstractOpenNewPassw) {
    _inherits(OpenNewPasswordCommand, _AbstractOpenNewPassw);

    function OpenNewPasswordCommand() {
        _classCallCheck(this, OpenNewPasswordCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(OpenNewPasswordCommand).apply(this, arguments));
    }

    _createClass(OpenNewPasswordCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.outcome = _this2.ok;
                _this2.commandData.username = _this2.commandParam.username;
                _this2.commandData.password = _this2.commandParam.password;
                resolve();
            });
        }
    }]);

    return OpenNewPasswordCommand;
}(AbstractOpenNewPasswordCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpenProfileCommand = function (_AbstractOpenProfileC) {
    _inherits(OpenProfileCommand, _AbstractOpenProfileC);

    function OpenProfileCommand() {
        _classCallCheck(this, OpenProfileCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(OpenProfileCommand).apply(this, arguments));
    }

    _createClass(OpenProfileCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.httpGet("api/users/info").then(function (data) {
                    _this2.commandData.data = data;
                    _this2.commandData.outcome = _this2.userInfoRead;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "readProfileFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return OpenProfileCommand;
}(AbstractOpenProfileCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpenRegistrationCommand = function (_AbstractOpenRegistra) {
    _inherits(OpenRegistrationCommand, _AbstractOpenRegistra);

    function OpenRegistrationCommand() {
        _classCallCheck(this, OpenRegistrationCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(OpenRegistrationCommand).apply(this, arguments));
    }

    _createClass(OpenRegistrationCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.outcome = _this2.ok;
                resolve();
            });
        }
    }]);

    return OpenRegistrationCommand;
}(AbstractOpenRegistrationCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RemoveCourseCommand = function (_AbstractRemoveCourse) {
    _inherits(RemoveCourseCommand, _AbstractRemoveCourse);

    function RemoveCourseCommand() {
        _classCallCheck(this, RemoveCourseCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RemoveCourseCommand).apply(this, arguments));
    }

    _createClass(RemoveCourseCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                var queryParams = [];
                queryParams.push({
                    key: "courseId",
                    value: _this2.commandParam.courseId
                });
                _this2.httpDelete("api/users/course", queryParams).then(function () {
                    _this2.commandData.hash = "profile";
                    _this2.commandData.outcome = _this2.deleted;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "removeCoursesFromUserFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return RemoveCourseCommand;
}(AbstractRemoveCourseCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SaveBoxCommand = function (_AbstractSaveBoxComma) {
    _inherits(SaveBoxCommand, _AbstractSaveBoxComma);

    function SaveBoxCommand() {
        _classCallCheck(this, SaveBoxCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SaveBoxCommand).apply(this, arguments));
    }

    _createClass(SaveBoxCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                if (!_this2.commandParam.name) {
                    _this2.commandData.messageKey = "dataInvalid";
                    _this2.commandData.outcome = _this2.dataInvalid;
                    resolve();
                } else {
                    var data = {
                        boxId: _this2.commandParam.boxId,
                        name: _this2.commandParam.name,
                        username: _this2.commandParam.username
                    };
                    if (_this2.commandParam.boxId) {
                        _this2.httpPut("api/boxes/update", [], data).then(function () {
                            _this2.commandData.outcome = _this2.saved;
                            _this2.commandData.hash = "profile";
                            resolve();
                        }, function (error) {
                            _this2.commandData.messageKey = "saveBoxFailed";
                            _this2.commandData.error = error;
                            _this2.commandData.outcome = _this2.error;
                            resolve();
                        });
                    } else {
                        _this2.httpPost("api/boxes/create", [], data).then(function () {
                            _this2.commandData.outcome = _this2.saved;
                            _this2.commandData.hash = "profile";
                            resolve();
                        }, function (error) {
                            _this2.commandData.messageKey = "saveBoxFailed";
                            _this2.commandData.error = error;
                            _this2.commandData.outcome = _this2.error;
                            resolve();
                        });
                    }
                }
            });
        }
    }]);

    return SaveBoxCommand;
}(AbstractSaveBoxCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SaveBoxConfigCommand = function (_AbstractSaveBoxConfi) {
    _inherits(SaveBoxConfigCommand, _AbstractSaveBoxConfi);

    function SaveBoxConfigCommand() {
        _classCallCheck(this, SaveBoxConfigCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SaveBoxConfigCommand).apply(this, arguments));
    }

    _createClass(SaveBoxConfigCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                var data = {
                    boxId: _this2.commandParam.boxId,
                    boxOfCourseList: _this2.commandParam.boxOfCourseList,
                    username: _this2.commandParam.username
                };
                _this2.httpPut("api/boxes/config", [], data).then(function () {
                    _this2.commandData.outcome = _this2.saved;
                    _this2.commandData.boxId = _this2.commandParam.boxId;
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "saveBoxFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return SaveBoxConfigCommand;
}(AbstractSaveBoxConfigCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SaveCourseSelectionCommand = function (_AbstractSaveCourseSe) {
    _inherits(SaveCourseSelectionCommand, _AbstractSaveCourseSe);

    function SaveCourseSelectionCommand() {
        _classCallCheck(this, SaveCourseSelectionCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SaveCourseSelectionCommand).apply(this, arguments));
    }

    _createClass(SaveCourseSelectionCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                var data = {
                    courseIdList: _this2.commandParam.courseIdList,
                    username: _this2.commandParam.username
                };
                _this2.httpPost("api/users/courses", [], data).then(function () {
                    _this2.commandData.outcome = _this2.saved;
                    _this2.commandData.hash = "profile";
                    resolve();
                }, function (error) {
                    _this2.commandData.messageKey = "addCoursesFailed";
                    _this2.commandData.error = error;
                    _this2.commandData.outcome = _this2.error;
                    resolve();
                });
            });
        }
    }]);

    return SaveCourseSelectionCommand;
}(AbstractSaveCourseSelectionCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SaveProfileCommand = function (_AbstractSaveProfileC) {
    _inherits(SaveProfileCommand, _AbstractSaveProfileC);

    function SaveProfileCommand() {
        _classCallCheck(this, SaveProfileCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SaveProfileCommand).apply(this, arguments));
    }

    _createClass(SaveProfileCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                if (!_this2.commandParam.email || !_this2.commandParam.name || !_this2.commandParam.prename) {
                    _this2.commandData.messageKey = "dataInvalid";
                    _this2.commandData.outcome = _this2.dataInvalid;
                    resolve();
                } else {
                    var data = {
                        username: _this2.commandParam.username,
                        name: _this2.commandParam.name,
                        prename: _this2.commandParam.prename,
                        email: _this2.commandParam.email
                    };
                    _this2.httpPut("api/users/update", [], data).then(function () {
                        _this2.commandData.outcome = _this2.saved;
                        _this2.commandData.hash = "profile";
                        resolve();
                    }, function (error) {
                        _this2.commandData.messageKey = "saveProfileFailed";
                        _this2.commandData.error = error;
                        _this2.commandData.outcome = _this2.error;
                        resolve();
                    });
                }
            });
        }
    }]);

    return SaveProfileCommand;
}(AbstractSaveProfileCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubmitForgotPasswordRequestCommand = function (_AbstractSubmitForgot) {
    _inherits(SubmitForgotPasswordRequestCommand, _AbstractSubmitForgot);

    function SubmitForgotPasswordRequestCommand() {
        _classCallCheck(this, SubmitForgotPasswordRequestCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SubmitForgotPasswordRequestCommand).apply(this, arguments));
    }

    _createClass(SubmitForgotPasswordRequestCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.language = _this2.commandParam.language;
                if (!_this2.commandParam.username) {
                    _this2.commandData.messageKey = "dataInvalid";
                    _this2.commandData.outcome = _this2.dataInvalid;
                    resolve();
                } else {
                    var queryParams = [];
                    queryParams.push({
                        key: "username",
                        value: _this2.commandParam.username
                    });
                    queryParams.push({
                        key: "language",
                        value: _this2.commandParam.language
                    });
                    _this2.httpPost("api/users/forgot-password", queryParams).then(function () {
                        _this2.commandData.outcome = _this2.ok;
                        _this2.commandData.messageKey = "forgotPasswordSubmitted";
                        resolve();
                    }, function (error) {
                        _this2.commandData.outcome = _this2.ok;
                        _this2.commandData.messageKey = "forgotPasswordSubmitted";
                        resolve();
                    });
                }
            });
        }
    }]);

    return SubmitForgotPasswordRequestCommand;
}(AbstractSubmitForgotPasswordRequestCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubmitNewPasswordCommand = function (_AbstractSubmitNewPas) {
    _inherits(SubmitNewPasswordCommand, _AbstractSubmitNewPas);

    function SubmitNewPasswordCommand() {
        _classCallCheck(this, SubmitNewPasswordCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SubmitNewPasswordCommand).apply(this, arguments));
    }

    _createClass(SubmitNewPasswordCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                if (!_this2.commandParam.newPassword || !_this2.commandParam.passwordRepetition) {
                    _this2.commandData.messageKey = "dataInvalid";
                    _this2.commandData.outcome = _this2.dataInvalid;
                    resolve();
                } else if (_this2.commandParam.newPassword != _this2.commandParam.passwordRepetition) {
                    _this2.commandData.messageKey = "passwordMismatch";
                    _this2.commandData.outcome = _this2.mismatch;
                    resolve();
                } else {
                    var data = {
                        password: _this2.commandParam.newPassword
                    };
                    _this2.httpPut("api/users/password", [], data).then(function () {
                        _this2.commandData.outcome = _this2.saved;
                        _this2.commandData.hash = "profile";
                        _this2.commandData.password = _this2.commandParam.newPassword;
                        _this2.commandData.username = _this2.commandParam.username;
                        resolve();
                    }, function (error) {
                        _this2.commandData.messageKey = "updatePasswordFailed";
                        _this2.commandData.error = error;
                        _this2.commandData.outcome = _this2.error;
                        resolve();
                    });
                }
            });
        }
    }]);

    return SubmitNewPasswordCommand;
}(AbstractSubmitNewPasswordCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubmitRegistrationCommand = function (_AbstractSubmitRegist) {
    _inherits(SubmitRegistrationCommand, _AbstractSubmitRegist);

    function SubmitRegistrationCommand() {
        _classCallCheck(this, SubmitRegistrationCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SubmitRegistrationCommand).apply(this, arguments));
    }

    _createClass(SubmitRegistrationCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.language = _this2.commandParam.language;
                if (!_this2.commandParam.password || !_this2.commandParam.passwordRepetition || !_this2.commandParam.email || !_this2.commandParam.name || !_this2.commandParam.prename || !_this2.commandParam.username || _this2.commandParam.usernameExists) {
                    _this2.commandData.messageKey = "dataInvalid";
                    _this2.commandData.outcome = _this2.dataInvalid;
                    resolve();
                } else if (_this2.commandParam.password != _this2.commandParam.passwordRepetition) {
                    _this2.commandData.messageKey = "passwordMismatch";
                    _this2.commandData.outcome = _this2.mismatch;
                    resolve();
                } else {
                    var data = {
                        password: _this2.commandParam.password,
                        username: _this2.commandParam.username,
                        email: _this2.commandParam.email,
                        name: _this2.commandParam.name,
                        prename: _this2.commandParam.prename,
                        language: _this2.commandParam.language
                    };
                    _this2.httpPost("api/users/register", [], data).then(function () {
                        _this2.commandData.outcome = _this2.saved;
                        _this2.commandData.hash = "profile";
                        _this2.commandData.password = _this2.commandParam.password;
                        _this2.commandData.username = _this2.commandParam.username;
                        resolve();
                    }, function (error) {
                        _this2.commandData.messageKey = "registerUserFailed";
                        _this2.commandData.error = error;
                        _this2.commandData.outcome = _this2.error;
                        resolve();
                    });
                }
            });
        }
    }]);

    return SubmitRegistrationCommand;
}(AbstractSubmitRegistrationCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpdatePasswordCommand = function (_AbstractUpdatePasswo) {
    _inherits(UpdatePasswordCommand, _AbstractUpdatePasswo);

    function UpdatePasswordCommand() {
        _classCallCheck(this, UpdatePasswordCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UpdatePasswordCommand).apply(this, arguments));
    }

    _createClass(UpdatePasswordCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                if (!_this2.commandParam.newPassword || !_this2.commandParam.passwordRepetition) {
                    _this2.commandData.messageKey = "dataInvalid";
                    _this2.commandData.outcome = _this2.dataInvalid;
                    resolve();
                } else if (_this2.commandParam.newPassword != _this2.commandParam.passwordRepetition) {
                    _this2.commandData.messageKey = "passwordMismatch";
                    _this2.commandData.outcome = _this2.mismatch;
                    resolve();
                } else {
                    var data = {
                        password: _this2.commandParam.newPassword
                    };
                    _this2.httpPut("api/users/password", [], data).then(function () {
                        _this2.commandData.outcome = _this2.saved;
                        _this2.commandData.hash = "profile";
                        _this2.commandData.password = _this2.commandParam.newPassword;
                        _this2.commandData.username = _this2.commandParam.username;
                        resolve();
                    }, function (error) {
                        _this2.commandData.messageKey = "updatePasswordFailed";
                        _this2.commandData.error = error;
                        _this2.commandData.outcome = _this2.error;
                        resolve();
                    });
                }
            });
        }
    }]);

    return UpdatePasswordCommand;
}(AbstractUpdatePasswordCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValidatePasswordCommand = function (_AbstractValidatePass) {
    _inherits(ValidatePasswordCommand, _AbstractValidatePass);

    function ValidatePasswordCommand() {
        _classCallCheck(this, ValidatePasswordCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ValidatePasswordCommand).apply(this, arguments));
    }

    _createClass(ValidatePasswordCommand, [{
        key: "execute",
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.emptyIds = [];
                if (_this2.commandParam.newPasswordEmpty === true) {
                    _this2.commandData.outcome = _this2.empty;
                    _this2.commandData.emptyIds.push("password");
                }
                if (_this2.commandParam.passwordRepetitionEmpty === true) {
                    _this2.commandData.outcome = _this2.empty;
                    _this2.commandData.emptyIds.push("passwordRepetition");
                }
                if (_this2.commandData.outcome != _this2.empty) {
                    if (_this2.commandParam.newPassword != _this2.commandParam.passwordRepetition) {
                        _this2.commandData.outcome = _this2.mismatch;
                    } else {
                        _this2.commandData.outcome = _this2.ok;
                    }
                }
                resolve();
            });
        }
    }]);

    return ValidatePasswordCommand;
}(AbstractValidatePasswordCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoursesLoadedEvent = function (_AbstractCoursesLoade) {
    _inherits(CoursesLoadedEvent, _AbstractCoursesLoade);

    function CoursesLoadedEvent() {
        _classCallCheck(this, CoursesLoadedEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(CoursesLoadedEvent).apply(this, arguments));
    }

    _createClass(CoursesLoadedEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return CoursesLoadedEvent;
}(AbstractCoursesLoadedEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PasswordEmptyEvent = function (_AbstractPasswordEmpt) {
    _inherits(PasswordEmptyEvent, _AbstractPasswordEmpt);

    function PasswordEmptyEvent() {
        _classCallCheck(this, PasswordEmptyEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(PasswordEmptyEvent).apply(this, arguments));
    }

    _createClass(PasswordEmptyEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return PasswordEmptyEvent;
}(AbstractPasswordEmptyEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PasswordsMismatchEvent = function (_AbstractPasswordsMis) {
    _inherits(PasswordsMismatchEvent, _AbstractPasswordsMis);

    function PasswordsMismatchEvent() {
        _classCallCheck(this, PasswordsMismatchEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(PasswordsMismatchEvent).apply(this, arguments));
    }

    _createClass(PasswordsMismatchEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return PasswordsMismatchEvent;
}(AbstractPasswordsMismatchEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PasswordsOKEvent = function (_AbstractPasswordsOKE) {
    _inherits(PasswordsOKEvent, _AbstractPasswordsOKE);

    function PasswordsOKEvent() {
        _classCallCheck(this, PasswordsOKEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(PasswordsOKEvent).apply(this, arguments));
    }

    _createClass(PasswordsOKEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return PasswordsOKEvent;
}(AbstractPasswordsOKEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderBoxEvent = function (_AbstractRenderBoxEve) {
    _inherits(RenderBoxEvent, _AbstractRenderBoxEve);

    function RenderBoxEvent() {
        _classCallCheck(this, RenderBoxEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RenderBoxEvent).apply(this, arguments));
    }

    _createClass(RenderBoxEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return RenderBoxEvent;
}(AbstractRenderBoxEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderChangePasswordEvent = function (_AbstractRenderChange) {
    _inherits(RenderChangePasswordEvent, _AbstractRenderChange);

    function RenderChangePasswordEvent() {
        _classCallCheck(this, RenderChangePasswordEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RenderChangePasswordEvent).apply(this, arguments));
    }

    _createClass(RenderChangePasswordEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return RenderChangePasswordEvent;
}(AbstractRenderChangePasswordEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderCourseToBoxEvent = function (_AbstractRenderCourse) {
    _inherits(RenderCourseToBoxEvent, _AbstractRenderCourse);

    function RenderCourseToBoxEvent() {
        _classCallCheck(this, RenderCourseToBoxEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RenderCourseToBoxEvent).apply(this, arguments));
    }

    _createClass(RenderCourseToBoxEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
            this.eventData.data.courseToBoxAdditionList.forEach(function (item) {
                if (item.autoAdd === null) {
                    item.nullSelected = true;
                } else if (item.autoAdd === false) {
                    item.falseSelected = true;
                } else if (item.autoAdd === true) {
                    item.trueSelected = true;
                }
            });
        }
    }]);

    return RenderCourseToBoxEvent;
}(AbstractRenderCourseToBoxEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderForgotPasswordEvent = function (_AbstractRenderForgot) {
    _inherits(RenderForgotPasswordEvent, _AbstractRenderForgot);

    function RenderForgotPasswordEvent() {
        _classCallCheck(this, RenderForgotPasswordEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RenderForgotPasswordEvent).apply(this, arguments));
    }

    _createClass(RenderForgotPasswordEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return RenderForgotPasswordEvent;
}(AbstractRenderForgotPasswordEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderNewPasswordEvent = function (_AbstractRenderNewPas) {
    _inherits(RenderNewPasswordEvent, _AbstractRenderNewPas);

    function RenderNewPasswordEvent() {
        _classCallCheck(this, RenderNewPasswordEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RenderNewPasswordEvent).apply(this, arguments));
    }

    _createClass(RenderNewPasswordEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return RenderNewPasswordEvent;
}(AbstractRenderNewPasswordEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderRegistrationEvent = function (_AbstractRenderRegist) {
    _inherits(RenderRegistrationEvent, _AbstractRenderRegist);

    function RenderRegistrationEvent() {
        _classCallCheck(this, RenderRegistrationEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RenderRegistrationEvent).apply(this, arguments));
    }

    _createClass(RenderRegistrationEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return RenderRegistrationEvent;
}(AbstractRenderRegistrationEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserInfoLoadedEvent = function (_AbstractUserInfoLoad) {
    _inherits(UserInfoLoadedEvent, _AbstractUserInfoLoad);

    function UserInfoLoadedEvent() {
        _classCallCheck(this, UserInfoLoadedEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UserInfoLoadedEvent).apply(this, arguments));
    }

    _createClass(UserInfoLoadedEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return UserInfoLoadedEvent;
}(AbstractUserInfoLoadedEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsernameIsAvailableEvent = function (_AbstractUsernameIsAv) {
    _inherits(UsernameIsAvailableEvent, _AbstractUsernameIsAv);

    function UsernameIsAvailableEvent() {
        _classCallCheck(this, UsernameIsAvailableEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UsernameIsAvailableEvent).apply(this, arguments));
    }

    _createClass(UsernameIsAvailableEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return UsernameIsAvailableEvent;
}(AbstractUsernameIsAvailableEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsernameIsNotAvailableEvent = function (_AbstractUsernameIsNo) {
    _inherits(UsernameIsNotAvailableEvent, _AbstractUsernameIsNo);

    function UsernameIsNotAvailableEvent() {
        _classCallCheck(this, UsernameIsNotAvailableEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(UsernameIsNotAvailableEvent).apply(this, arguments));
    }

    _createClass(UsernameIsNotAvailableEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return UsernameIsNotAvailableEvent;
}(AbstractUsernameIsNotAvailableEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vocabulary = {};

var VocabularyView = function () {
    function VocabularyView() {
        _classCallCheck(this, VocabularyView);
    }

    _createClass(VocabularyView, null, [{
        key: 'wordIsCorrectAndFinished',
        value: function wordIsCorrectAndFinished(eventData) {
            Mousetrap.unbind('ctrl+k');
            Mousetrap.unbind('g');
            Mousetrap.unbind('n');
            var active = jQuery(".active");
            active.attr("readonly", "readonly");
            active.addClass("correct");
            jQuery("#" + eventData.id + "_shots").append("<span class='strike'><i class='fa fa-check-circle-o'></i></span>");
            active.addClass("strike");
            var strike = jQuery('input.strike');
            strike.removeClass("active");
            strike.removeClass("correct");
            strike.attr("disabled", "disabled");
            VocabularyView.updateTestState(eventData);
        }
    }, {
        key: 'wordIsCorrectAndNotFinished',
        value: function wordIsCorrectAndNotFinished(eventData) {
            Mousetrap.unbind('ctrl+k');
            Mousetrap.unbind('g');
            Mousetrap.unbind('n');
            var active = jQuery(".active");
            active.attr("readonly", "readonly");
            active.addClass("correct");
            jQuery("#" + eventData.id + "_shots").append("<span class='strike'><i class='fa fa-check-circle-o'></i></span>");
            VocabularyView.updateTestState(eventData);
        }
    }, {
        key: 'wordIsNotCorrect',
        value: function wordIsNotCorrect(eventData) {
            Mousetrap.unbind('ctrl+k');
            Mousetrap.unbind('g');
            Mousetrap.unbind('n');
            var active = jQuery(".active");
            active.attr("readonly", "readonly");
            active.addClass("false");
            jQuery("#" + eventData.id + "_shots").append("<span class='offTarget'><i class='fa fa-times-circle-o'></i></span>");
            var solution = jQuery("#" + eventData.id + "_solution");
            solution.html(eventData.solution);
            solution.addClass('displayedSolution');
            VocabularyView.updateTestState(eventData);
        }
    }, {
        key: 'updateTestState',
        value: function updateTestState(eventData) {
            Vocabulary.testState.points = eventData.points;
            Vocabulary.testState.strikeCount = eventData.strikeCount;
        }
    }, {
        key: 'showWord',
        value: function showWord(eventData) {
            Mousetrap.unbind('z');
            jQuery('.active').val(eventData.solution);
            jQuery('#showWord').remove();
            eventData.texts = Texts.common;
            $.get('templates/test/rate.mst', function (template) {
                var rendered = Mustache.render(template, eventData);
                $('#correctParagraph').html(rendered);
                Mousetrap.bind('g', function () {
                    $("#known").click();
                });
                Mousetrap.bind('n', function () {
                    $("#notKnown").click();
                });
            });
        }
    }, {
        key: 'displayNextWordButton',
        value: function displayNextWordButton(eventData) {
            jQuery('#correctButton').remove();
            eventData.texts = Texts.common;
            $.get('templates/test/goOn.mst', function (template) {
                var rendered = Mustache.render(template, eventData);
                $('#correctParagraph').html(rendered);
                jQuery("#nextButton").focus();
                Mousetrap.bind('ctrl+space', function () {
                    $("#nextButton").click();
                });
            });
        }
    }, {
        key: 'showNextWordOfTest',
        value: function showNextWordOfTest(eventData) {
            jQuery('#nextButton').remove();
            Mousetrap.unbind('ctrl+space');
            var active = jQuery('.active');
            active.attr("disabled", "disabled");
            active.val("");
            active.removeClass("correct");
            active.removeClass("false");
            active.removeClass("active");
            var nextRandomIndex = jQuery('#' + eventData.nextRandomIndex);
            nextRandomIndex.addClass("active");
            eventData.texts = Texts.common;
            if (Vocabulary.testState.testMode === "withTyping") {
                $.get('templates/test/correct.mst', function (template) {
                    var rendered = Mustache.render(template, eventData);
                    $('#correctParagraph').html(rendered);
                    Mousetrap.bind('ctrl+k', function () {
                        $("#correctButton").click();
                    });
                });

                var displayedSolution = jQuery('.displayedSolution');
                displayedSolution.html("");
                displayedSolution.removeClass("displayedSolution");
                nextRandomIndex.removeAttr("readonly");
                nextRandomIndex.removeAttr("disabled");
                nextRandomIndex.focus();
            } else {
                $.get('templates/test/show.mst', function (template) {
                    var rendered = Mustache.render(template, eventData);
                    $('#correctParagraph').html(rendered);
                    Mousetrap.bind('z', function () {
                        $("#showWord").click();
                    });
                });
            }
        }
    }, {
        key: 'testStarted',
        value: function testStarted(eventData) {
            jQuery('#startButton').remove();
            var vocabulary = jQuery('.vocabulary');
            vocabulary.attr("disabled", "disabled");
            vocabulary.val("");
            var wordCount = vocabulary.length;
            Vocabulary.testState = {
                wordCount: wordCount,
                strikeCount: 0,
                points: wordCount * 3,
                testMode: eventData.testMode,
                maxPoints: wordCount * 3,
                lastIndices: [],
                nextRandomIndex: function nextRandomIndex() {
                    var random = Math.random();
                    var index = Math.floor(random * Vocabulary.testState.wordCount) + 1;
                    var indices = [];
                    while (indices.length < wordCount) {
                        while (jQuery('#' + index).hasClass("strike")) {
                            random = Math.random();
                            index = Math.floor(random * Vocabulary.testState.wordCount) + 1;
                        }
                        indices.push(index);
                        random = Math.random();
                        index = Math.floor(random * Vocabulary.testState.wordCount) + 1;
                    }
                    var nextIndex;
                    var smallestPositionInLastIndices = -1;
                    for (var i = 0; i < indices.length; i++) {
                        var currentIndex = indices[i];
                        var positionInLastIndices = Vocabulary.testState.lastIndices.indexOf(currentIndex);
                        if (positionInLastIndices < 0) {
                            nextIndex = currentIndex;
                            break;
                        } else if (smallestPositionInLastIndices === -1 || positionInLastIndices < smallestPositionInLastIndices) {
                            nextIndex = currentIndex;
                            smallestPositionInLastIndices = positionInLastIndices;
                        }
                    }
                    if (smallestPositionInLastIndices !== -1 && Vocabulary.testState.lastIndices.indexOf(indices[smallestPositionInLastIndices] > -1)) {
                        Vocabulary.testState.lastIndices.splice(smallestPositionInLastIndices, 1);
                    }
                    Vocabulary.testState.lastIndices.push(nextIndex);
                    return nextIndex;
                }
            };
            vocabulary.addClass("mousetrap");
        }
    }]);

    return VocabularyView;
}();

/*                    S.D.G.                    */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CorrectWordAction = function (_AbstractCorrectWordA) {
		_inherits(CorrectWordAction, _AbstractCorrectWordA);

		function CorrectWordAction() {
				_classCallCheck(this, CorrectWordAction);

				return _possibleConstructorReturn(this, Object.getPrototypeOf(CorrectWordAction).apply(this, arguments));
		}

		_createClass(CorrectWordAction, [{
				key: "captureActionParam",
				value: function captureActionParam() {
						this.actionParam.answer = jQuery(".active").val().trim();
						this.actionParam.id = jQuery(".active").attr("id");
				}
		}, {
				key: "initActionData",
				value: function initActionData() {
						this.actionData.answer = this.actionParam.answer;
						this.actionData.id = this.actionParam.id;
						this.actionData.solution = jQuery(".active").next().html();
						this.actionData.wordCount = Vocabulary.testState.wordCount;
						this.actionData.strikeCount = Vocabulary.testState.strikeCount;
						this.actionData.points = Vocabulary.testState.points;
						this.actionData.strikesOfWord = jQuery("#" + this.actionData.id + "_shots").children(".strike").length;
				}
		}, {
				key: "releaseActionParam",
				value: function releaseActionParam() {}
		}]);

		return CorrectWordAction;
}(AbstractCorrectWordAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IsRatedTestFinishedAction = function (_AbstractIsRatedTestF) {
    _inherits(IsRatedTestFinishedAction, _AbstractIsRatedTestF);

    function IsRatedTestFinishedAction() {
        _classCallCheck(this, IsRatedTestFinishedAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(IsRatedTestFinishedAction).apply(this, arguments));
    }

    _createClass(IsRatedTestFinishedAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {}
    }, {
        key: 'initActionData',
        value: function initActionData() {
            this.actionData.strikeCount = this.actionParam.strikeCount;
            this.actionData.points = this.actionParam.points;
            this.actionData.wordCount = this.actionParam.wordCount;
        }
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {}
    }]);

    return IsRatedTestFinishedAction;
}(AbstractIsRatedTestFinishedAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IsTestFinishedAction = function (_AbstractIsTestFinish) {
    _inherits(IsTestFinishedAction, _AbstractIsTestFinish);

    function IsTestFinishedAction() {
        _classCallCheck(this, IsTestFinishedAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(IsTestFinishedAction).apply(this, arguments));
    }

    _createClass(IsTestFinishedAction, [{
        key: 'captureActionParam',
        value: function captureActionParam() {}
    }, {
        key: 'initActionData',
        value: function initActionData() {
            this.actionData.strikeCount = this.actionParam.strikeCount;
            this.actionData.points = this.actionParam.points;
            this.actionData.wordCount = this.actionParam.wordCount;
        }
    }, {
        key: 'releaseActionParam',
        value: function releaseActionParam() {}
    }]);

    return IsTestFinishedAction;
}(AbstractIsTestFinishedAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RateWordAction = function (_AbstractRateWordActi) {
    _inherits(RateWordAction, _AbstractRateWordActi);

    function RateWordAction() {
        _classCallCheck(this, RateWordAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RateWordAction).apply(this, arguments));
    }

    _createClass(RateWordAction, [{
        key: "captureActionParam",
        value: function captureActionParam() {}
    }, {
        key: "initActionData",
        value: function initActionData() {
            this.actionData.knewIt = this.actionParam.knewIt;
            this.actionData.id = jQuery(".active").attr("id");
            this.actionData.wordCount = Vocabulary.testState.wordCount;
            this.actionData.strikeCount = Vocabulary.testState.strikeCount;
            this.actionData.points = Vocabulary.testState.points;
            this.actionData.strikesOfWord = jQuery("#" + this.actionData.id + "_shots").children(".strike").length;
        }
    }, {
        key: "releaseActionParam",
        value: function releaseActionParam() {}
    }]);

    return RateWordAction;
}(AbstractRateWordAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepeatComplexCardAction = function (_AbstractRepeatComple) {
  _inherits(RepeatComplexCardAction, _AbstractRepeatComple);

  function RepeatComplexCardAction() {
    _classCallCheck(this, RepeatComplexCardAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(RepeatComplexCardAction).apply(this, arguments));
  }

  _createClass(RepeatComplexCardAction, [{
    key: 'captureActionParam',
    value: function captureActionParam() {
      this.actionParam.hash = window.location.hash.substring(1);
    }
  }, {
    key: 'initActionData',
    value: function initActionData() {
      this.actionData.hash = this.actionParam.hash;
    }
  }, {
    key: 'releaseActionParam',
    value: function releaseActionParam() {
      window.location.hash = this.actionParam.hash;
    }
  }]);

  return RepeatComplexCardAction;
}(AbstractRepeatComplexCardAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowNextWordOfTestAction = function (_AbstractShowNextWord) {
  _inherits(ShowNextWordOfTestAction, _AbstractShowNextWord);

  function ShowNextWordOfTestAction() {
    _classCallCheck(this, ShowNextWordOfTestAction);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowNextWordOfTestAction).apply(this, arguments));
  }

  _createClass(ShowNextWordOfTestAction, [{
    key: 'captureActionParam',
    value: function captureActionParam() {
      this.actionParam.nextRandomIndex = Vocabulary.testState.nextRandomIndex();
    }
  }, {
    key: 'initActionData',
    value: function initActionData() {
      this.actionData.nextRandomIndex = this.actionParam.nextRandomIndex;
    }
  }, {
    key: 'releaseActionParam',
    value: function releaseActionParam() {}
  }]);

  return ShowNextWordOfTestAction;
}(AbstractShowNextWordOfTestAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowWordAction = function (_AbstractShowWordActi) {
    _inherits(ShowWordAction, _AbstractShowWordActi);

    function ShowWordAction() {
        _classCallCheck(this, ShowWordAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowWordAction).apply(this, arguments));
    }

    _createClass(ShowWordAction, [{
        key: "captureActionParam",
        value: function captureActionParam() {}
    }, {
        key: "initActionData",
        value: function initActionData() {
            this.actionData.solution = jQuery(".active").next().html();
        }
    }, {
        key: "releaseActionParam",
        value: function releaseActionParam() {}
    }]);

    return ShowWordAction;
}(AbstractShowWordAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StartTestAction = function (_AbstractStartTestAct) {
    _inherits(StartTestAction, _AbstractStartTestAct);

    function StartTestAction() {
        _classCallCheck(this, StartTestAction);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(StartTestAction).apply(this, arguments));
    }

    _createClass(StartTestAction, [{
        key: "captureActionParam",
        value: function captureActionParam() {}
    }, {
        key: "initActionData",
        value: function initActionData() {
            this.actionData.wordCount = jQuery(".vocabulary").length;;
            this.actionData.testMode = this.actionParam.testMode;
        }
    }, {
        key: "releaseActionParam",
        value: function releaseActionParam() {}
    }]);

    return StartTestAction;
}(AbstractStartTestAction);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CorrectWordCommand = function (_AbstractCorrectWordC) {
    _inherits(CorrectWordCommand, _AbstractCorrectWordC);

    function CorrectWordCommand() {
        _classCallCheck(this, CorrectWordCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(CorrectWordCommand).apply(this, arguments));
    }

    _createClass(CorrectWordCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.solution = _this2.commandParam.solution.trim();
                _this2.commandData.answer = _this2.commandParam.answer.trim();
                _this2.commandData.id = _this2.commandParam.id;
                _this2.commandData.strikeCount = _this2.commandParam.strikeCount;
                _this2.commandData.points = _this2.commandParam.points;
                _this2.commandData.wordCount = _this2.commandParam.wordCount;
                _this2.commandData.strikesOfWord = _this2.commandParam.strikesOfWord;
                if (_this2.commandData.solution === _this2.commandData.answer) {
                    _this2.commandData.strikesOfWord++;
                    if (_this2.commandData.strikesOfWord === 3) {
                        _this2.commandData.strikeCount++;
                        _this2.commandData.outcome = _this2.wordIsCorrectAndFinished;
                    } else {
                        _this2.commandData.outcome = _this2.wordIsCorrectAndNotFinished;
                    }
                } else {
                    if (_this2.commandData.points > 0) {
                        _this2.commandData.points--;
                    }
                    _this2.commandData.outcome = _this2.wordIsNotCorrect;
                }
                resolve();
            });
        }
    }]);

    return CorrectWordCommand;
}(AbstractCorrectWordCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IsRatedTestFinishedCommand = function (_AbstractIsRatedTestF) {
    _inherits(IsRatedTestFinishedCommand, _AbstractIsRatedTestF);

    function IsRatedTestFinishedCommand() {
        _classCallCheck(this, IsRatedTestFinishedCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(IsRatedTestFinishedCommand).apply(this, arguments));
    }

    _createClass(IsRatedTestFinishedCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.strikeCount = _this2.commandParam.strikeCount;
                _this2.commandData.points = _this2.commandParam.points;
                _this2.commandData.wordCount = _this2.commandParam.wordCount;
                if (_this2.commandParam.points === 0) {
                    _this2.commandData.outcome = _this2.testFailed;
                } else if (_this2.commandParam.strikeCount < _this2.commandParam.wordCount) {
                    _this2.commandData.outcome = _this2.goOnWithTest;
                } else {
                    _this2.commandData.outcome = _this2.testFinishedSuccessfully;
                }
                resolve();
            });
        }
    }]);

    return IsRatedTestFinishedCommand;
}(AbstractIsRatedTestFinishedCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IsTestFinishedCommand = function (_AbstractIsTestFinish) {
    _inherits(IsTestFinishedCommand, _AbstractIsTestFinish);

    function IsTestFinishedCommand() {
        _classCallCheck(this, IsTestFinishedCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(IsTestFinishedCommand).apply(this, arguments));
    }

    _createClass(IsTestFinishedCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.strikeCount = _this2.commandParam.strikeCount;
                _this2.commandData.points = _this2.commandParam.points;
                _this2.commandData.wordCount = _this2.commandParam.wordCount;
                if (_this2.commandParam.points === 0) {
                    _this2.commandData.outcome = _this2.testFailed;
                } else if (_this2.commandParam.strikeCount < _this2.commandParam.wordCount) {
                    _this2.commandData.outcome = _this2.goOnWithTest;
                } else {
                    _this2.commandData.outcome = _this2.testFinishedSuccessfully;
                }
                resolve();
            });
        }
    }]);

    return IsTestFinishedCommand;
}(AbstractIsTestFinishedCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RateWordCommand = function (_AbstractRateWordComm) {
    _inherits(RateWordCommand, _AbstractRateWordComm);

    function RateWordCommand() {
        _classCallCheck(this, RateWordCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RateWordCommand).apply(this, arguments));
    }

    _createClass(RateWordCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.knewIt = _this2.commandParam.knewIt;
                _this2.commandData.id = _this2.commandParam.id;
                _this2.commandData.strikeCount = _this2.commandParam.strikeCount;
                _this2.commandData.points = _this2.commandParam.points;
                _this2.commandData.wordCount = _this2.commandParam.wordCount;
                _this2.commandData.strikesOfWord = _this2.commandParam.strikesOfWord;
                if (_this2.commandData.knewIt) {
                    _this2.commandData.strikesOfWord++;
                    if (_this2.commandData.strikesOfWord === 3) {
                        _this2.commandData.strikeCount++;
                        _this2.commandData.outcome = _this2.wordIsCorrectAndFinished;
                    } else {
                        _this2.commandData.outcome = _this2.wordIsCorrectAndNotFinished;
                    }
                } else {
                    if (_this2.commandData.points > 0) {
                        _this2.commandData.points--;
                    }
                    _this2.commandData.outcome = _this2.wordIsNotCorrect;
                }
                resolve();
            });
        }
    }]);

    return RateWordCommand;
}(AbstractRateWordCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepeatComplexCardCommand = function (_AbstractRepeatComple) {
    _inherits(RepeatComplexCardCommand, _AbstractRepeatComple);

    function RepeatComplexCardCommand() {
        _classCallCheck(this, RepeatComplexCardCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RepeatComplexCardCommand).apply(this, arguments));
    }

    _createClass(RepeatComplexCardCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.hash = _this2.commandParam.hash;
                _this2.commandData.outcome = _this2.go;
                resolve();
            });
        }
    }]);

    return RepeatComplexCardCommand;
}(AbstractRepeatComplexCardCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowNextWordOfTestCommand = function (_AbstractShowNextWord) {
    _inherits(ShowNextWordOfTestCommand, _AbstractShowNextWord);

    function ShowNextWordOfTestCommand() {
        _classCallCheck(this, ShowNextWordOfTestCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowNextWordOfTestCommand).apply(this, arguments));
    }

    _createClass(ShowNextWordOfTestCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.nextRandomIndex = _this2.commandParam.nextRandomIndex;
                _this2.commandData.outcome = _this2.showNextWordOfTest;
                resolve();
            });
        }
    }]);

    return ShowNextWordOfTestCommand;
}(AbstractShowNextWordOfTestCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowWordCommand = function (_AbstractShowWordComm) {
    _inherits(ShowWordCommand, _AbstractShowWordComm);

    function ShowWordCommand() {
        _classCallCheck(this, ShowWordCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowWordCommand).apply(this, arguments));
    }

    _createClass(ShowWordCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.outcome = _this2.showWord;
                _this2.commandData.solution = _this2.commandParam.solution;
                resolve();
            });
        }
    }]);

    return ShowWordCommand;
}(AbstractShowWordCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StartTestCommand = function (_AbstractStartTestCom) {
    _inherits(StartTestCommand, _AbstractStartTestCom);

    function StartTestCommand() {
        _classCallCheck(this, StartTestCommand);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(StartTestCommand).apply(this, arguments));
    }

    _createClass(StartTestCommand, [{
        key: 'execute',
        value: function execute() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.commandData.wordCount = _this2.commandParam.wordCount;
                _this2.commandData.testMode = _this2.commandParam.testMode;
                _this2.commandData.outcome = _this2.testStarted;
                resolve();
            });
        }
    }]);

    return StartTestCommand;
}(AbstractStartTestCommand);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayNextWordButtonEvent = function (_AbstractDisplayNextW) {
    _inherits(DisplayNextWordButtonEvent, _AbstractDisplayNextW);

    function DisplayNextWordButtonEvent() {
        _classCallCheck(this, DisplayNextWordButtonEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(DisplayNextWordButtonEvent).apply(this, arguments));
    }

    _createClass(DisplayNextWordButtonEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return DisplayNextWordButtonEvent;
}(AbstractDisplayNextWordButtonEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowNextWordOfTestEvent = function (_AbstractShowNextWord) {
    _inherits(ShowNextWordOfTestEvent, _AbstractShowNextWord);

    function ShowNextWordOfTestEvent() {
        _classCallCheck(this, ShowNextWordOfTestEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowNextWordOfTestEvent).apply(this, arguments));
    }

    _createClass(ShowNextWordOfTestEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return ShowNextWordOfTestEvent;
}(AbstractShowNextWordOfTestEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowWordEvent = function (_AbstractShowWordEven) {
    _inherits(ShowWordEvent, _AbstractShowWordEven);

    function ShowWordEvent() {
        _classCallCheck(this, ShowWordEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowWordEvent).apply(this, arguments));
    }

    _createClass(ShowWordEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return ShowWordEvent;
}(AbstractShowWordEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestStartedEvent = function (_AbstractTestStartedE) {
    _inherits(TestStartedEvent, _AbstractTestStartedE);

    function TestStartedEvent() {
        _classCallCheck(this, TestStartedEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TestStartedEvent).apply(this, arguments));
    }

    _createClass(TestStartedEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return TestStartedEvent;
}(AbstractTestStartedEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WordIsCorrectAndFinishedEvent = function (_AbstractWordIsCorrec) {
    _inherits(WordIsCorrectAndFinishedEvent, _AbstractWordIsCorrec);

    function WordIsCorrectAndFinishedEvent() {
        _classCallCheck(this, WordIsCorrectAndFinishedEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(WordIsCorrectAndFinishedEvent).apply(this, arguments));
    }

    _createClass(WordIsCorrectAndFinishedEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return WordIsCorrectAndFinishedEvent;
}(AbstractWordIsCorrectAndFinishedEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WordIsCorrectAndNotFinishedEvent = function (_AbstractWordIsCorrec) {
    _inherits(WordIsCorrectAndNotFinishedEvent, _AbstractWordIsCorrec);

    function WordIsCorrectAndNotFinishedEvent() {
        _classCallCheck(this, WordIsCorrectAndNotFinishedEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(WordIsCorrectAndNotFinishedEvent).apply(this, arguments));
    }

    _createClass(WordIsCorrectAndNotFinishedEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return WordIsCorrectAndNotFinishedEvent;
}(AbstractWordIsCorrectAndNotFinishedEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WordIsNotCorrectEvent = function (_AbstractWordIsNotCor) {
    _inherits(WordIsNotCorrectEvent, _AbstractWordIsNotCor);

    function WordIsNotCorrectEvent() {
        _classCallCheck(this, WordIsNotCorrectEvent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(WordIsNotCorrectEvent).apply(this, arguments));
    }

    _createClass(WordIsNotCorrectEvent, [{
        key: 'prepareDataForView',
        value: function prepareDataForView() {
            this.eventData = JSON.parse(JSON.stringify(this.eventParam));
        }
    }]);

    return WordIsNotCorrectEvent;
}(AbstractWordIsNotCorrectEvent);

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventListenerRegistrationCard = function () {
   function EventListenerRegistrationCard() {
      _classCallCheck(this, EventListenerRegistrationCard);
   }

   _createClass(EventListenerRegistrationCard, null, [{
      key: 'init',
      value: function init() {
         ACEController.registerListener('ShowWantedEvent', CardView.showWanted);
         ACEController.registerListener('ShowNextLineEvent', CardView.showNextLine);
         ACEController.registerListener('ShowNextWordEvent', CardView.showNextWord);
         ACEController.registerListener('ShowScoreButtonsEvent', CardView.showScoreButtons);
      }
   }]);

   return EventListenerRegistrationCard;
}();

EventListenerRegistrationCard.init();

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventListenerRegistrationCommon = function () {
   function EventListenerRegistrationCommon() {
      _classCallCheck(this, EventListenerRegistrationCommon);
   }

   _createClass(EventListenerRegistrationCommon, null, [{
      key: 'init',
      value: function init() {
         ACEController.registerListener('InitOKEvent', CommonView.initLanguageInLocalStorage);
         ACEController.registerListener('InitOKEvent', CommonView.initSchemaInLocalStorage);
         ACEController.registerListener('ServerErrorEvent', ErrorView.renderServerError);
         ACEController.registerListener('ErrorEvent', ErrorView.renderError);
         ACEController.registerListener('MessageEvent', MessageView.renderMessage);
         ACEController.registerListener('UpdateHashEvent', CommonView.updateHash);
         ACEController.registerListener('UserLoggedInEvent', CommonView.initUserInLocalStorage);
         ACEController.registerListener('UserLoggedOutEvent', CommonView.removeUserFromLocalStorage);
         ACEController.registerListener('UserLoggedOutEvent', BoxesView.hideBoxes);
         ACEController.registerListener('RenderResultEvent', TestView.renderResult);
         ACEController.registerListener('FieldEmptyEvent', ValidationView.fieldEmpty);
         ACEController.registerListener('FieldNotEmptyEvent', ValidationView.fieldNotEmpty);
         ACEController.registerListener('DisplayRemoveCourseFromUserDialogEvent', ReallyDeleteDialogView.displayRemoveCourseFromUserDialog);
         ACEController.registerListener('DisplayDeleteBoxDialogEvent', ReallyDeleteDialogView.displayDeleteBoxDialog);
         ACEController.registerListener('SwitchLanguageEvent', CommonView.initLanguageInLocalStorage);
         ACEController.registerListener('RenderLoginEvent', HeaderView.renderLogin);
         ACEController.registerListener('RenderLogoutEvent', HeaderView.renderLogout);
         ACEController.registerListener('RenderHomeEvent', ContentView.renderPublicCourses);
      }
   }]);

   return EventListenerRegistrationCommon;
}();

EventListenerRegistrationCommon.init();

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventListenerRegistrationMultiplechoice = function () {
   function EventListenerRegistrationMultiplechoice() {
      _classCallCheck(this, EventListenerRegistrationMultiplechoice);
   }

   _createClass(EventListenerRegistrationMultiplechoice, null, [{
      key: 'init',
      value: function init() {
         ACEController.registerListener('ShowFalseMultipleChoiceEvent', MultipleChoiceView.showFalse);
         ACEController.registerListener('ShowFalseMultipleChoiceEvent', MultipleChoiceView.showCorrecture);
         ACEController.registerListener('ShowCorrectMultipleChoiceEvent', MultipleChoiceView.showCorrect);
         ACEController.registerListener('ShowCorrectMultipleChoiceEvent', MultipleChoiceView.showCorrecture);
         ACEController.registerListener('EnableNextButtonEvent', MultipleChoiceView.enableNextButton);
         ACEController.registerListener('DisplayNextQuestionEvent', MultipleChoiceView.displayNextQuestion);
      }
   }]);

   return EventListenerRegistrationMultiplechoice;
}();

EventListenerRegistrationMultiplechoice.init();

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventListenerRegistrationNavigation = function () {
   function EventListenerRegistrationNavigation() {
      _classCallCheck(this, EventListenerRegistrationNavigation);
   }

   _createClass(EventListenerRegistrationNavigation, null, [{
      key: 'init',
      value: function init() {
         ACEController.registerListener('PublicCoursesReadEvent', NavigationView.renderPublicCourses);
         ACEController.registerListener('PublicCoursesReadEvent', BreadcrumbsView.renderPublicCoursesBreadcrumbs);
         ACEController.registerListener('PublicLessonsReadEvent', NavigationView.renderPublicLessons);
         ACEController.registerListener('PublicLessonsReadEvent', ContentView.renderPublicLessons);
         ACEController.registerListener('PublicLessonsReadEvent', BreadcrumbsView.renderPublicLessonsBreadcrumbs);
         ACEController.registerListener('PublicTestsReadEvent', NavigationView.renderPublicTests);
         ACEController.registerListener('PublicTestsReadEvent', ContentView.renderPublicTests);
         ACEController.registerListener('PublicTestsReadEvent', BreadcrumbsView.renderPublicTestsBreadcrumbs);
         ACEController.registerListener('PublicTestReadEvent', NavigationView.renderPublicTest);
         ACEController.registerListener('PublicTestReadEvent', ContentView.renderPublicTest);
         ACEController.registerListener('PublicTestReadEvent', BreadcrumbsView.renderPublicTestsBreadcrumbs);
         ACEController.registerListener('PrivateCoursesReadEvent', NavigationView.renderPrivateCourses);
         ACEController.registerListener('PrivateCoursesReadEvent', BreadcrumbsView.renderPrivateCoursesBreadcrumbs);
         ACEController.registerListener('PrivateLessonsReadEvent', NavigationView.renderPrivateLessons);
         ACEController.registerListener('PrivateLessonsReadEvent', ContentView.renderPrivateLessons);
         ACEController.registerListener('PrivateLessonsReadEvent', BreadcrumbsView.renderPrivateLessonsBreadcrumbs);
         ACEController.registerListener('PrivateTestsReadEvent', NavigationView.renderPrivateTests);
         ACEController.registerListener('PrivateTestsReadEvent', ContentView.renderPrivateTests);
         ACEController.registerListener('PrivateTestsReadEvent', BreadcrumbsView.renderPrivateTestsBreadcrumbs);
         ACEController.registerListener('PrivateTestReadEvent', NavigationView.renderPrivateTest);
         ACEController.registerListener('PrivateTestReadEvent', ContentView.renderPrivateTest);
         ACEController.registerListener('PrivateTestReadEvent', BreadcrumbsView.renderPrivateTestsBreadcrumbs);
         ACEController.registerListener('ResultReadEvent', NavigationView.renderPrivateTest);
         ACEController.registerListener('ResultReadEvent', ContentView.renderPrivateTest);
         ACEController.registerListener('ResultReadEvent', BreadcrumbsView.renderPrivateTestsBreadcrumbs);
         ACEController.registerListener('ResultReadEvent', ContentView.renderResult);
         ACEController.registerListener('StatisticsReadEvent', ContentView.renderStatistics);
         ACEController.registerListener('BoxesReadEvent', BoxesView.renderBoxes);
         ACEController.registerListener('NextCardReadEvent', ContentView.renderCard);
      }
   }]);

   return EventListenerRegistrationNavigation;
}();

EventListenerRegistrationNavigation.init();

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventListenerRegistrationProfile = function () {
   function EventListenerRegistrationProfile() {
      _classCallCheck(this, EventListenerRegistrationProfile);
   }

   _createClass(EventListenerRegistrationProfile, null, [{
      key: 'init',
      value: function init() {
         ACEController.registerListener('UserInfoLoadedEvent', UserInfoView.renderUserInfo);
         ACEController.registerListener('CoursesLoadedEvent', UserInfoView.renderCourseSelection);
         ACEController.registerListener('RenderBoxEvent', UserInfoView.renderBox);
         ACEController.registerListener('RenderCourseToBoxEvent', UserInfoView.renderCourseToBox);
         ACEController.registerListener('RenderChangePasswordEvent', UserInfoView.renderPasswordChange);
         ACEController.registerListener('PasswordsOKEvent', UserInfoView.passwordOK);
         ACEController.registerListener('PasswordsMismatchEvent', UserInfoView.passwordMismatch);
         ACEController.registerListener('RenderForgotPasswordEvent', UserInfoView.renderForgotPassword);
         ACEController.registerListener('RenderNewPasswordEvent', UserInfoView.renderNewPassword);
         ACEController.registerListener('RenderRegistrationEvent', UserInfoView.renderRegistration);
         ACEController.registerListener('UsernameIsAvailableEvent', UserInfoView.renderUsernameIsAvailable);
         ACEController.registerListener('UsernameIsNotAvailableEvent', UserInfoView.renderUsernameIsNotAvailable);
         ACEController.registerListener('PasswordEmptyEvent', UserInfoView.passwordEmpty);
      }
   }]);

   return EventListenerRegistrationProfile;
}();

EventListenerRegistrationProfile.init();

/*       S.D.G.       */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventListenerRegistrationVocabulary = function () {
   function EventListenerRegistrationVocabulary() {
      _classCallCheck(this, EventListenerRegistrationVocabulary);
   }

   _createClass(EventListenerRegistrationVocabulary, null, [{
      key: 'init',
      value: function init() {
         ACEController.registerListener('WordIsCorrectAndFinishedEvent', VocabularyView.wordIsCorrectAndFinished);
         ACEController.registerListener('WordIsCorrectAndNotFinishedEvent', VocabularyView.wordIsCorrectAndNotFinished);
         ACEController.registerListener('WordIsNotCorrectEvent', VocabularyView.wordIsNotCorrect);
         ACEController.registerListener('DisplayNextWordButtonEvent', VocabularyView.displayNextWordButton);
         ACEController.registerListener('ShowNextWordOfTestEvent', VocabularyView.showNextWordOfTest);
         ACEController.registerListener('ShowWordEvent', VocabularyView.showWord);
         ACEController.registerListener('TestStartedEvent', VocabularyView.testStarted);
      }
   }]);

   return EventListenerRegistrationVocabulary;
}();

EventListenerRegistrationVocabulary.init();

/*       S.D.G.       */
/**
 * Created by annette on 07.01.16.
 */

'use strict';

function initApp() {

    new InitAction().apply();
}

initApp();

ACEController.verificationCleanupFunction = function (key, value) {
    if (key === 'timestamp' || key === 'token' || key === 'nextRandomIndex' || key === 'id' || key === 'next' || key === 'last' || key === 'date' || key === 'day' || key === 'month' || key === 'year') {
        return undefined;
    } else {
        return value;
    }
};

/*       S.D.G.       */
