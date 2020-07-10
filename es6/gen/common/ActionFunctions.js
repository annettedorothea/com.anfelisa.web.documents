/* 
 * Copyright (c) 2020, Annette Pohl, Koblenz, Germany
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.

 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * generated with de.acegen 0.9.6
 *
 */




import InitAction from "../../src/common/actions/InitAction";
import RouteChangedAction from "../../src/common/actions/RouteChangedAction";
import RouteAction from "../../src/common/actions/RouteAction";
import InitialLoginAction from "../../src/common/actions/InitialLoginAction";
import LogoutAction from "../../src/common/actions/LogoutAction";
import DisplayErrorAction from "../../src/common/actions/DisplayErrorAction";
import DisplayErrorAndLogoutAction from "../../src/common/actions/DisplayErrorAndLogoutAction";
import DisplayMessageAction from "../../src/common/actions/DisplayMessageAction";
import ClearToastAction from "../../src/common/actions/ClearToastAction";
import DisplaySaveBugDialogAction from "../../src/common/actions/DisplaySaveBugDialogAction";
import CallSaveBugAction from "../../src/common/actions/CallSaveBugAction";
import CancelSaveBugDialogAction from "../../src/common/actions/CancelSaveBugDialogAction";
import HideSaveBugDialogAction from "../../src/common/actions/HideSaveBugDialogAction";

export function init() {
    new InitAction().apply();
}

export function routeChanged() {
    new RouteChangedAction().apply();
}

export function route(hash) {
    new RouteAction(hash).apply();
}

export function initialLogin() {
    new InitialLoginAction().apply();
}

export function logout() {
    new LogoutAction().apply();
}

export function displayError(error) {
    new DisplayErrorAction(error).apply();
}

export function displayErrorAndLogout(error) {
    new DisplayErrorAndLogoutAction(error).apply();
}

export function displayMessage(messageKey) {
    new DisplayMessageAction(messageKey).apply();
}

export function clearToast() {
    new ClearToastAction().apply();
}

export function displaySaveBugDialog() {
    new DisplaySaveBugDialogAction().apply();
}

export function callSaveBug() {
    new CallSaveBugAction().apply();
}

export function cancelSaveBugDialog() {
    new CancelSaveBugDialogAction().apply();
}

export function hideSaveBugDialog() {
    new HideSaveBugDialogAction().apply();
}





/******* S.D.G. *******/



