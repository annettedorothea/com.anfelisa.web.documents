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
 * generated with de.acegen 0.9.5
 *
 */




import AppUtils from "../../src/app/AppUtils";

export let appState;

export function getAppState() {
	return AppUtils.deepCopy(appState);
}

export function setInitialAppState(initialAppState) {
	appState = AppUtils.deepCopy(initialAppState);
}

export function get_loggedInUser() {
	return AppUtils.deepCopy(appState.loggedInUser);
}

export function set_loggedInUser(eventData) {
	appState.loggedInUser = eventData.loggedInUser;
}

export function reset_loggedInUser() {
	appState.loggedInUser = null;
}

export function merge_loggedInUser(eventData) {
	if (!appState.loggedInUser) {
		appState.loggedInUser = {};
	}
	if (eventData.username !== undefined) {
		appState.loggedInUser.username = eventData.username;
	}
	if (eventData.role !== undefined) {
		appState.loggedInUser.role = eventData.role;
	}
	if (eventData.password !== undefined) {
		appState.loggedInUser.password = eventData.password;
	}
}

export function get_loggedInUser_username() {
	if (!appState.loggedInUser) {
		return undefined;
	}
	return appState.loggedInUser.username;
}

export function set_loggedInUser_username(eventData) {
	if (!appState.loggedInUser) {
		appState.loggedInUser = {};
	}
	appState.loggedInUser.username = eventData.username;
}

export function reset_loggedInUser_username() {
	if (!appState.loggedInUser) {
		return;
	}
	appState.loggedInUser.username = null;
}

export function get_loggedInUser_role() {
	if (!appState.loggedInUser) {
		return undefined;
	}
	return appState.loggedInUser.role;
}

export function set_loggedInUser_role(eventData) {
	if (!appState.loggedInUser) {
		appState.loggedInUser = {};
	}
	appState.loggedInUser.role = eventData.role;
}

export function reset_loggedInUser_role() {
	if (!appState.loggedInUser) {
		return;
	}
	appState.loggedInUser.role = null;
}

export function get_loggedInUser_password() {
	if (!appState.loggedInUser) {
		return undefined;
	}
	return appState.loggedInUser.password;
}

export function set_loggedInUser_password(eventData) {
	if (!appState.loggedInUser) {
		appState.loggedInUser = {};
	}
	appState.loggedInUser.password = eventData.password;
}

export function reset_loggedInUser_password() {
	if (!appState.loggedInUser) {
		return;
	}
	appState.loggedInUser.password = null;
}

export function get_hash() {
	return location.hash;
}

export function set_hash(eventData) {
	location.hash = eventData.hash;
}

export function reset_hash() {
	location.hash = "";
}

export function get_username() {
	return localStorage.getItem("username");
}

export function set_username(eventData) {
	localStorage.setItem("username", eventData.username);
}

export function reset_username() {
	localStorage.removeItem("username");
}

export function get_password() {
	return localStorage.getItem("password");
}

export function set_password(eventData) {
	localStorage.setItem("password", eventData.password);
}

export function reset_password() {
	localStorage.removeItem("password");
}

export function get_displaySpinner() {
	return appState.displaySpinner;
}

export function set_displaySpinner(eventData) {
	appState.displaySpinner = eventData.displaySpinner;
}

export function reset_displaySpinner() {
	appState.displaySpinner = null;
}

export function get_language() {
	return appState.language;
}

export function set_language(eventData) {
	appState.language = eventData.language;
}

export function reset_language() {
	appState.language = null;
}

export function get_texts() {
	return appState.texts;
}

export function set_texts(eventData) {
	appState.texts = eventData.texts;
}

export function reset_texts() {
	appState.texts = null;
}

export function get_displaySaveBugDialog() {
	return appState.displaySaveBugDialog;
}

export function set_displaySaveBugDialog(eventData) {
	appState.displaySaveBugDialog = eventData.displaySaveBugDialog;
}

export function reset_displaySaveBugDialog() {
	appState.displaySaveBugDialog = null;
}

export function get_message() {
	return AppUtils.deepCopy(appState.message);
}

export function set_message(eventData) {
	appState.message = eventData.message;
}

export function reset_message() {
	appState.message = null;
}

export function merge_message(eventData) {
	if (!appState.message) {
		appState.message = {};
	}
	if (eventData.type !== undefined) {
		appState.message.type = eventData.type;
	}
	if (eventData.text !== undefined) {
		appState.message.text = eventData.text;
	}
}

export function get_message_type() {
	if (!appState.message) {
		return undefined;
	}
	return appState.message.type;
}

export function set_message_type(eventData) {
	if (!appState.message) {
		appState.message = {};
	}
	appState.message.type = eventData.type;
}

export function reset_message_type() {
	if (!appState.message) {
		return;
	}
	appState.message.type = null;
}

export function get_message_text() {
	if (!appState.message) {
		return undefined;
	}
	return appState.message.text;
}

export function set_message_text(eventData) {
	if (!appState.message) {
		appState.message = {};
	}
	appState.message.text = eventData.text;
}

export function reset_message_text() {
	if (!appState.message) {
		return;
	}
	appState.message.text = null;
}

export function get_loginView() {
	return AppUtils.deepCopy(appState.loginView);
}

export function set_loginView(eventData) {
	appState.loginView = eventData.loginView;
	reset_registrationView();
	reset_forgotPasswordView();
	reset_resetPasswordView();
	reset_dashboardView();
	reset_boxSettingsView();
	reset_profileView();
	reset_userListView();
	reset_cardView();
	reset_authorView();
}

export function reset_loginView() {
	appState.loginView = null;
}

export function merge_loginView(eventData) {
	if (!appState.loginView) {
		appState.loginView = {};
	}
	if (eventData.username !== undefined) {
		appState.loginView.username = eventData.username;
	}
	if (eventData.saveInLocalStorage !== undefined) {
		appState.loginView.saveInLocalStorage = eventData.saveInLocalStorage;
	}
	reset_registrationView();
	reset_forgotPasswordView();
	reset_resetPasswordView();
	reset_dashboardView();
	reset_boxSettingsView();
	reset_profileView();
	reset_userListView();
	reset_cardView();
	reset_authorView();
}

export function get_loginView_username() {
	if (!appState.loginView) {
		return undefined;
	}
	return appState.loginView.username;
}

export function set_loginView_username(eventData) {
	if (!appState.loginView) {
		appState.loginView = {};
	}
	appState.loginView.username = eventData.username;
}

export function reset_loginView_username() {
	if (!appState.loginView) {
		return;
	}
	appState.loginView.username = null;
}

export function get_loginView_saveInLocalStorage() {
	if (!appState.loginView) {
		return undefined;
	}
	return appState.loginView.saveInLocalStorage;
}

export function set_loginView_saveInLocalStorage(eventData) {
	if (!appState.loginView) {
		appState.loginView = {};
	}
	appState.loginView.saveInLocalStorage = eventData.saveInLocalStorage;
}

export function reset_loginView_saveInLocalStorage() {
	if (!appState.loginView) {
		return;
	}
	appState.loginView.saveInLocalStorage = null;
}

export function get_registrationView() {
	return AppUtils.deepCopy(appState.registrationView);
}

export function set_registrationView(eventData) {
	appState.registrationView = eventData.registrationView;
	reset_loginView();
	reset_forgotPasswordView();
	reset_resetPasswordView();
	reset_dashboardView();
	reset_boxSettingsView();
	reset_profileView();
	reset_userListView();
	reset_cardView();
	reset_authorView();
}

export function reset_registrationView() {
	appState.registrationView = null;
}

export function merge_registrationView(eventData) {
	if (!appState.registrationView) {
		appState.registrationView = {};
	}
	if (eventData.displayUsernameSpinner !== undefined) {
		appState.registrationView.displayUsernameSpinner = eventData.displayUsernameSpinner;
	}
	if (eventData.available !== undefined) {
		appState.registrationView.available = eventData.available;
	}
	if (eventData.username !== undefined) {
		appState.registrationView.username = eventData.username;
	}
	if (eventData.email !== undefined) {
		appState.registrationView.email = eventData.email;
	}
	if (eventData.emailInvalid !== undefined) {
		appState.registrationView.emailInvalid = eventData.emailInvalid;
	}
	if (eventData.passwordMismatch !== undefined) {
		appState.registrationView.passwordMismatch = eventData.passwordMismatch;
	}
	reset_loginView();
	reset_forgotPasswordView();
	reset_resetPasswordView();
	reset_dashboardView();
	reset_boxSettingsView();
	reset_profileView();
	reset_userListView();
	reset_cardView();
	reset_authorView();
}

export function get_registrationView_displayUsernameSpinner() {
	if (!appState.registrationView) {
		return undefined;
	}
	return appState.registrationView.displayUsernameSpinner;
}

export function set_registrationView_displayUsernameSpinner(eventData) {
	if (!appState.registrationView) {
		appState.registrationView = {};
	}
	appState.registrationView.displayUsernameSpinner = eventData.displayUsernameSpinner;
}

export function reset_registrationView_displayUsernameSpinner() {
	if (!appState.registrationView) {
		return;
	}
	appState.registrationView.displayUsernameSpinner = null;
}

export function get_registrationView_available() {
	if (!appState.registrationView) {
		return undefined;
	}
	return appState.registrationView.available;
}

export function set_registrationView_available(eventData) {
	if (!appState.registrationView) {
		appState.registrationView = {};
	}
	appState.registrationView.available = eventData.available;
}

export function reset_registrationView_available() {
	if (!appState.registrationView) {
		return;
	}
	appState.registrationView.available = null;
}

export function get_registrationView_username() {
	if (!appState.registrationView) {
		return undefined;
	}
	return appState.registrationView.username;
}

export function set_registrationView_username(eventData) {
	if (!appState.registrationView) {
		appState.registrationView = {};
	}
	appState.registrationView.username = eventData.username;
}

export function reset_registrationView_username() {
	if (!appState.registrationView) {
		return;
	}
	appState.registrationView.username = null;
}

export function get_registrationView_email() {
	if (!appState.registrationView) {
		return undefined;
	}
	return appState.registrationView.email;
}

export function set_registrationView_email(eventData) {
	if (!appState.registrationView) {
		appState.registrationView = {};
	}
	appState.registrationView.email = eventData.email;
}

export function reset_registrationView_email() {
	if (!appState.registrationView) {
		return;
	}
	appState.registrationView.email = null;
}

export function get_registrationView_emailInvalid() {
	if (!appState.registrationView) {
		return undefined;
	}
	return appState.registrationView.emailInvalid;
}

export function set_registrationView_emailInvalid(eventData) {
	if (!appState.registrationView) {
		appState.registrationView = {};
	}
	appState.registrationView.emailInvalid = eventData.emailInvalid;
}

export function reset_registrationView_emailInvalid() {
	if (!appState.registrationView) {
		return;
	}
	appState.registrationView.emailInvalid = null;
}

export function get_registrationView_passwordMismatch() {
	if (!appState.registrationView) {
		return undefined;
	}
	return appState.registrationView.passwordMismatch;
}

export function set_registrationView_passwordMismatch(eventData) {
	if (!appState.registrationView) {
		appState.registrationView = {};
	}
	appState.registrationView.passwordMismatch = eventData.passwordMismatch;
}

export function reset_registrationView_passwordMismatch() {
	if (!appState.registrationView) {
		return;
	}
	appState.registrationView.passwordMismatch = null;
}

export function get_forgotPasswordView() {
	return AppUtils.deepCopy(appState.forgotPasswordView);
}

export function set_forgotPasswordView(eventData) {
	appState.forgotPasswordView = eventData.forgotPasswordView;
	reset_loginView();
	reset_registrationView();
	reset_resetPasswordView();
	reset_dashboardView();
	reset_boxSettingsView();
	reset_profileView();
	reset_userListView();
	reset_cardView();
	reset_authorView();
}

export function reset_forgotPasswordView() {
	appState.forgotPasswordView = null;
}

export function merge_forgotPasswordView(eventData) {
	if (!appState.forgotPasswordView) {
		appState.forgotPasswordView = {};
	}
	if (eventData.username !== undefined) {
		appState.forgotPasswordView.username = eventData.username;
	}
	reset_loginView();
	reset_registrationView();
	reset_resetPasswordView();
	reset_dashboardView();
	reset_boxSettingsView();
	reset_profileView();
	reset_userListView();
	reset_cardView();
	reset_authorView();
}

export function get_forgotPasswordView_username() {
	if (!appState.forgotPasswordView) {
		return undefined;
	}
	return appState.forgotPasswordView.username;
}

export function set_forgotPasswordView_username(eventData) {
	if (!appState.forgotPasswordView) {
		appState.forgotPasswordView = {};
	}
	appState.forgotPasswordView.username = eventData.username;
}

export function reset_forgotPasswordView_username() {
	if (!appState.forgotPasswordView) {
		return;
	}
	appState.forgotPasswordView.username = null;
}

export function get_resetPasswordView() {
	return AppUtils.deepCopy(appState.resetPasswordView);
}

export function set_resetPasswordView(eventData) {
	appState.resetPasswordView = eventData.resetPasswordView;
	reset_loginView();
	reset_registrationView();
	reset_forgotPasswordView();
	reset_dashboardView();
	reset_boxSettingsView();
	reset_profileView();
	reset_userListView();
	reset_cardView();
	reset_authorView();
}

export function reset_resetPasswordView() {
	appState.resetPasswordView = null;
}

export function merge_resetPasswordView(eventData) {
	if (!appState.resetPasswordView) {
		appState.resetPasswordView = {};
	}
	if (eventData.token !== undefined) {
		appState.resetPasswordView.token = eventData.token;
	}
	if (eventData.passwordMismatch !== undefined) {
		appState.resetPasswordView.passwordMismatch = eventData.passwordMismatch;
	}
	reset_loginView();
	reset_registrationView();
	reset_forgotPasswordView();
	reset_dashboardView();
	reset_boxSettingsView();
	reset_profileView();
	reset_userListView();
	reset_cardView();
	reset_authorView();
}

export function get_resetPasswordView_token() {
	if (!appState.resetPasswordView) {
		return undefined;
	}
	return appState.resetPasswordView.token;
}

export function set_resetPasswordView_token(eventData) {
	if (!appState.resetPasswordView) {
		appState.resetPasswordView = {};
	}
	appState.resetPasswordView.token = eventData.token;
}

export function reset_resetPasswordView_token() {
	if (!appState.resetPasswordView) {
		return;
	}
	appState.resetPasswordView.token = null;
}

export function get_resetPasswordView_passwordMismatch() {
	if (!appState.resetPasswordView) {
		return undefined;
	}
	return appState.resetPasswordView.passwordMismatch;
}

export function set_resetPasswordView_passwordMismatch(eventData) {
	if (!appState.resetPasswordView) {
		appState.resetPasswordView = {};
	}
	appState.resetPasswordView.passwordMismatch = eventData.passwordMismatch;
}

export function reset_resetPasswordView_passwordMismatch() {
	if (!appState.resetPasswordView) {
		return;
	}
	appState.resetPasswordView.passwordMismatch = null;
}

export function get_dashboardView() {
	return AppUtils.deepCopy(appState.dashboardView);
}

export function set_dashboardView(eventData) {
	appState.dashboardView = eventData.dashboardView;
	reset_loginView();
	reset_registrationView();
	reset_forgotPasswordView();
	reset_resetPasswordView();
	reset_boxSettingsView();
	reset_profileView();
	reset_userListView();
	reset_cardView();
	reset_authorView();
}

export function reset_dashboardView() {
	appState.dashboardView = null;
}

export function merge_dashboardView(eventData) {
	if (!appState.dashboardView) {
		appState.dashboardView = {};
	}
	if (eventData.boxList !== undefined) {
		appState.dashboardView.boxList = eventData.boxList;
	}
	if (eventData.deleteBox !== undefined) {
		appState.dashboardView.deleteBox = eventData.deleteBox;
	}
	reset_loginView();
	reset_registrationView();
	reset_forgotPasswordView();
	reset_resetPasswordView();
	reset_boxSettingsView();
	reset_profileView();
	reset_userListView();
	reset_cardView();
	reset_authorView();
}

export function get_dashboardView_boxList() {
	if (!appState.dashboardView) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.dashboardView.boxList);
}

export function set_dashboardView_boxList(eventData) {
	if (!appState.dashboardView) {
		appState.dashboardView = {};
	}
	appState.dashboardView.boxList = eventData.boxList;
}

export function reset_dashboardView_boxList() {
	if (!appState.dashboardView) {
		return;
	}
	appState.dashboardView.boxList = null;
}

export function merge_dashboardView_boxList(eventData) {
	if (!appState.dashboardView) {
		appState.dashboardView = {};
	}
	if (!appState.dashboardView.boxList) {
		appState.dashboardView.boxList = {};
	}
	if (eventData.openTodaysCards !== undefined) {
		appState.dashboardView.boxList.openTodaysCards = eventData.openTodaysCards;
	}
	if (eventData.categoryName !== undefined) {
		appState.dashboardView.boxList.categoryName = eventData.categoryName;
	}
	if (eventData.categoryId !== undefined) {
		appState.dashboardView.boxList.categoryId = eventData.categoryId;
	}
	if (eventData.boxId !== undefined) {
		appState.dashboardView.boxList.boxId = eventData.boxId;
	}
	if (eventData.quality0Count !== undefined) {
		appState.dashboardView.boxList.quality0Count = eventData.quality0Count;
	}
	if (eventData.quality1Count !== undefined) {
		appState.dashboardView.boxList.quality1Count = eventData.quality1Count;
	}
	if (eventData.quality2Count !== undefined) {
		appState.dashboardView.boxList.quality2Count = eventData.quality2Count;
	}
	if (eventData.quality3Count !== undefined) {
		appState.dashboardView.boxList.quality3Count = eventData.quality3Count;
	}
	if (eventData.quality4Count !== undefined) {
		appState.dashboardView.boxList.quality4Count = eventData.quality4Count;
	}
	if (eventData.quality5Count !== undefined) {
		appState.dashboardView.boxList.quality5Count = eventData.quality5Count;
	}
	if (eventData.countsPerDayNextWeek !== undefined) {
		appState.dashboardView.boxList.countsPerDayNextWeek = eventData.countsPerDayNextWeek;
	}
	if (eventData.maxCardsPerDay !== undefined) {
		appState.dashboardView.boxList.maxCardsPerDay = eventData.maxCardsPerDay;
	}
}

export function get_dashboardView_deleteBox() {
	if (!appState.dashboardView) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.dashboardView.deleteBox);
}

export function set_dashboardView_deleteBox(eventData) {
	if (!appState.dashboardView) {
		appState.dashboardView = {};
	}
	appState.dashboardView.deleteBox = eventData.deleteBox;
}

export function reset_dashboardView_deleteBox() {
	if (!appState.dashboardView) {
		return;
	}
	appState.dashboardView.deleteBox = null;
}

export function merge_dashboardView_deleteBox(eventData) {
	if (!appState.dashboardView) {
		appState.dashboardView = {};
	}
	if (!appState.dashboardView.deleteBox) {
		appState.dashboardView.deleteBox = {};
	}
	if (eventData.confirmDelete !== undefined) {
		appState.dashboardView.deleteBox.confirmDelete = eventData.confirmDelete;
	}
	if (eventData.boxId !== undefined) {
		appState.dashboardView.deleteBox.boxId = eventData.boxId;
	}
}

export function get_dashboardView_deleteBox_confirmDelete() {
	if (!appState.dashboardView) {
		return undefined;
	}
	if (!appState.dashboardView.deleteBox) {
		return undefined;
	}
	return appState.dashboardView.deleteBox.confirmDelete;
}

export function set_dashboardView_deleteBox_confirmDelete(eventData) {
	if (!appState.dashboardView) {
		appState.dashboardView = {};
	}
	if (!appState.dashboardView.deleteBox) {
		appState.dashboardView.deleteBox = {};
	}
	appState.dashboardView.deleteBox.confirmDelete = eventData.confirmDelete;
}

export function reset_dashboardView_deleteBox_confirmDelete() {
	if (!appState.dashboardView) {
		return;
	}
	if (!appState.dashboardView.deleteBox) {
		return;
	}
	appState.dashboardView.deleteBox.confirmDelete = null;
}

export function get_dashboardView_deleteBox_boxId() {
	if (!appState.dashboardView) {
		return undefined;
	}
	if (!appState.dashboardView.deleteBox) {
		return undefined;
	}
	return appState.dashboardView.deleteBox.boxId;
}

export function set_dashboardView_deleteBox_boxId(eventData) {
	if (!appState.dashboardView) {
		appState.dashboardView = {};
	}
	if (!appState.dashboardView.deleteBox) {
		appState.dashboardView.deleteBox = {};
	}
	appState.dashboardView.deleteBox.boxId = eventData.boxId;
}

export function reset_dashboardView_deleteBox_boxId() {
	if (!appState.dashboardView) {
		return;
	}
	if (!appState.dashboardView.deleteBox) {
		return;
	}
	appState.dashboardView.deleteBox.boxId = null;
}

export function get_boxSettingsView() {
	return AppUtils.deepCopy(appState.boxSettingsView);
}

export function set_boxSettingsView(eventData) {
	appState.boxSettingsView = eventData.boxSettingsView;
	reset_loginView();
	reset_registrationView();
	reset_forgotPasswordView();
	reset_resetPasswordView();
	reset_dashboardView();
	reset_profileView();
	reset_userListView();
	reset_cardView();
	reset_authorView();
}

export function reset_boxSettingsView() {
	appState.boxSettingsView = null;
}

export function merge_boxSettingsView(eventData) {
	if (!appState.boxSettingsView) {
		appState.boxSettingsView = {};
	}
	if (eventData.maxIntervalInvalid !== undefined) {
		appState.boxSettingsView.maxIntervalInvalid = eventData.maxIntervalInvalid;
	}
	if (eventData.maxCardsPerDayInvalid !== undefined) {
		appState.boxSettingsView.maxCardsPerDayInvalid = eventData.maxCardsPerDayInvalid;
	}
	if (eventData.dictionaryLookupInvalid !== undefined) {
		appState.boxSettingsView.dictionaryLookupInvalid = eventData.dictionaryLookupInvalid;
	}
	if (eventData.boxId !== undefined) {
		appState.boxSettingsView.boxId = eventData.boxId;
	}
	if (eventData.maxInterval !== undefined) {
		appState.boxSettingsView.maxInterval = eventData.maxInterval;
	}
	if (eventData.maxCardsPerDay !== undefined) {
		appState.boxSettingsView.maxCardsPerDay = eventData.maxCardsPerDay;
	}
	if (eventData.categoryName !== undefined) {
		appState.boxSettingsView.categoryName = eventData.categoryName;
	}
	if (eventData.dictionaryLookup !== undefined) {
		appState.boxSettingsView.dictionaryLookup = eventData.dictionaryLookup;
	}
	if (eventData.givenLanguage !== undefined) {
		appState.boxSettingsView.givenLanguage = eventData.givenLanguage;
	}
	if (eventData.wantedLanguage !== undefined) {
		appState.boxSettingsView.wantedLanguage = eventData.wantedLanguage;
	}
	if (eventData.categoryId !== undefined) {
		appState.boxSettingsView.categoryId = eventData.categoryId;
	}
	reset_loginView();
	reset_registrationView();
	reset_forgotPasswordView();
	reset_resetPasswordView();
	reset_dashboardView();
	reset_profileView();
	reset_userListView();
	reset_cardView();
	reset_authorView();
}

export function get_boxSettingsView_maxIntervalInvalid() {
	if (!appState.boxSettingsView) {
		return undefined;
	}
	return appState.boxSettingsView.maxIntervalInvalid;
}

export function set_boxSettingsView_maxIntervalInvalid(eventData) {
	if (!appState.boxSettingsView) {
		appState.boxSettingsView = {};
	}
	appState.boxSettingsView.maxIntervalInvalid = eventData.maxIntervalInvalid;
}

export function reset_boxSettingsView_maxIntervalInvalid() {
	if (!appState.boxSettingsView) {
		return;
	}
	appState.boxSettingsView.maxIntervalInvalid = null;
}

export function get_boxSettingsView_maxCardsPerDayInvalid() {
	if (!appState.boxSettingsView) {
		return undefined;
	}
	return appState.boxSettingsView.maxCardsPerDayInvalid;
}

export function set_boxSettingsView_maxCardsPerDayInvalid(eventData) {
	if (!appState.boxSettingsView) {
		appState.boxSettingsView = {};
	}
	appState.boxSettingsView.maxCardsPerDayInvalid = eventData.maxCardsPerDayInvalid;
}

export function reset_boxSettingsView_maxCardsPerDayInvalid() {
	if (!appState.boxSettingsView) {
		return;
	}
	appState.boxSettingsView.maxCardsPerDayInvalid = null;
}

export function get_boxSettingsView_dictionaryLookupInvalid() {
	if (!appState.boxSettingsView) {
		return undefined;
	}
	return appState.boxSettingsView.dictionaryLookupInvalid;
}

export function set_boxSettingsView_dictionaryLookupInvalid(eventData) {
	if (!appState.boxSettingsView) {
		appState.boxSettingsView = {};
	}
	appState.boxSettingsView.dictionaryLookupInvalid = eventData.dictionaryLookupInvalid;
}

export function reset_boxSettingsView_dictionaryLookupInvalid() {
	if (!appState.boxSettingsView) {
		return;
	}
	appState.boxSettingsView.dictionaryLookupInvalid = null;
}

export function get_boxSettingsView_boxId() {
	if (!appState.boxSettingsView) {
		return undefined;
	}
	return appState.boxSettingsView.boxId;
}

export function set_boxSettingsView_boxId(eventData) {
	if (!appState.boxSettingsView) {
		appState.boxSettingsView = {};
	}
	appState.boxSettingsView.boxId = eventData.boxId;
}

export function reset_boxSettingsView_boxId() {
	if (!appState.boxSettingsView) {
		return;
	}
	appState.boxSettingsView.boxId = null;
}

export function get_boxSettingsView_maxInterval() {
	if (!appState.boxSettingsView) {
		return undefined;
	}
	return appState.boxSettingsView.maxInterval;
}

export function set_boxSettingsView_maxInterval(eventData) {
	if (!appState.boxSettingsView) {
		appState.boxSettingsView = {};
	}
	appState.boxSettingsView.maxInterval = eventData.maxInterval;
}

export function reset_boxSettingsView_maxInterval() {
	if (!appState.boxSettingsView) {
		return;
	}
	appState.boxSettingsView.maxInterval = null;
}

export function get_boxSettingsView_maxCardsPerDay() {
	if (!appState.boxSettingsView) {
		return undefined;
	}
	return appState.boxSettingsView.maxCardsPerDay;
}

export function set_boxSettingsView_maxCardsPerDay(eventData) {
	if (!appState.boxSettingsView) {
		appState.boxSettingsView = {};
	}
	appState.boxSettingsView.maxCardsPerDay = eventData.maxCardsPerDay;
}

export function reset_boxSettingsView_maxCardsPerDay() {
	if (!appState.boxSettingsView) {
		return;
	}
	appState.boxSettingsView.maxCardsPerDay = null;
}

export function get_boxSettingsView_categoryName() {
	if (!appState.boxSettingsView) {
		return undefined;
	}
	return appState.boxSettingsView.categoryName;
}

export function set_boxSettingsView_categoryName(eventData) {
	if (!appState.boxSettingsView) {
		appState.boxSettingsView = {};
	}
	appState.boxSettingsView.categoryName = eventData.categoryName;
}

export function reset_boxSettingsView_categoryName() {
	if (!appState.boxSettingsView) {
		return;
	}
	appState.boxSettingsView.categoryName = null;
}

export function get_boxSettingsView_dictionaryLookup() {
	if (!appState.boxSettingsView) {
		return undefined;
	}
	return appState.boxSettingsView.dictionaryLookup;
}

export function set_boxSettingsView_dictionaryLookup(eventData) {
	if (!appState.boxSettingsView) {
		appState.boxSettingsView = {};
	}
	appState.boxSettingsView.dictionaryLookup = eventData.dictionaryLookup;
}

export function reset_boxSettingsView_dictionaryLookup() {
	if (!appState.boxSettingsView) {
		return;
	}
	appState.boxSettingsView.dictionaryLookup = null;
}

export function get_boxSettingsView_givenLanguage() {
	if (!appState.boxSettingsView) {
		return undefined;
	}
	return appState.boxSettingsView.givenLanguage;
}

export function set_boxSettingsView_givenLanguage(eventData) {
	if (!appState.boxSettingsView) {
		appState.boxSettingsView = {};
	}
	appState.boxSettingsView.givenLanguage = eventData.givenLanguage;
}

export function reset_boxSettingsView_givenLanguage() {
	if (!appState.boxSettingsView) {
		return;
	}
	appState.boxSettingsView.givenLanguage = null;
}

export function get_boxSettingsView_wantedLanguage() {
	if (!appState.boxSettingsView) {
		return undefined;
	}
	return appState.boxSettingsView.wantedLanguage;
}

export function set_boxSettingsView_wantedLanguage(eventData) {
	if (!appState.boxSettingsView) {
		appState.boxSettingsView = {};
	}
	appState.boxSettingsView.wantedLanguage = eventData.wantedLanguage;
}

export function reset_boxSettingsView_wantedLanguage() {
	if (!appState.boxSettingsView) {
		return;
	}
	appState.boxSettingsView.wantedLanguage = null;
}

export function get_boxSettingsView_categoryId() {
	if (!appState.boxSettingsView) {
		return undefined;
	}
	return appState.boxSettingsView.categoryId;
}

export function set_boxSettingsView_categoryId(eventData) {
	if (!appState.boxSettingsView) {
		appState.boxSettingsView = {};
	}
	appState.boxSettingsView.categoryId = eventData.categoryId;
}

export function reset_boxSettingsView_categoryId() {
	if (!appState.boxSettingsView) {
		return;
	}
	appState.boxSettingsView.categoryId = null;
}

export function get_profileView() {
	return AppUtils.deepCopy(appState.profileView);
}

export function set_profileView(eventData) {
	appState.profileView = eventData.profileView;
	reset_loginView();
	reset_registrationView();
	reset_forgotPasswordView();
	reset_resetPasswordView();
	reset_dashboardView();
	reset_boxSettingsView();
	reset_userListView();
	reset_cardView();
	reset_authorView();
}

export function reset_profileView() {
	appState.profileView = null;
}

export function merge_profileView(eventData) {
	if (!appState.profileView) {
		appState.profileView = {};
	}
	if (eventData.username !== undefined) {
		appState.profileView.username = eventData.username;
	}
	if (eventData.email !== undefined) {
		appState.profileView.email = eventData.email;
	}
	if (eventData.role !== undefined) {
		appState.profileView.role = eventData.role;
	}
	if (eventData.showDeleteUserDialog !== undefined) {
		appState.profileView.showDeleteUserDialog = eventData.showDeleteUserDialog;
	}
	reset_loginView();
	reset_registrationView();
	reset_forgotPasswordView();
	reset_resetPasswordView();
	reset_dashboardView();
	reset_boxSettingsView();
	reset_userListView();
	reset_cardView();
	reset_authorView();
}

export function get_profileView_username() {
	if (!appState.profileView) {
		return undefined;
	}
	return appState.profileView.username;
}

export function set_profileView_username(eventData) {
	if (!appState.profileView) {
		appState.profileView = {};
	}
	appState.profileView.username = eventData.username;
}

export function reset_profileView_username() {
	if (!appState.profileView) {
		return;
	}
	appState.profileView.username = null;
}

export function get_profileView_email() {
	if (!appState.profileView) {
		return undefined;
	}
	return appState.profileView.email;
}

export function set_profileView_email(eventData) {
	if (!appState.profileView) {
		appState.profileView = {};
	}
	appState.profileView.email = eventData.email;
}

export function reset_profileView_email() {
	if (!appState.profileView) {
		return;
	}
	appState.profileView.email = null;
}

export function get_profileView_role() {
	if (!appState.profileView) {
		return undefined;
	}
	return appState.profileView.role;
}

export function set_profileView_role(eventData) {
	if (!appState.profileView) {
		appState.profileView = {};
	}
	appState.profileView.role = eventData.role;
}

export function reset_profileView_role() {
	if (!appState.profileView) {
		return;
	}
	appState.profileView.role = null;
}

export function get_profileView_showDeleteUserDialog() {
	if (!appState.profileView) {
		return undefined;
	}
	return appState.profileView.showDeleteUserDialog;
}

export function set_profileView_showDeleteUserDialog(eventData) {
	if (!appState.profileView) {
		appState.profileView = {};
	}
	appState.profileView.showDeleteUserDialog = eventData.showDeleteUserDialog;
}

export function reset_profileView_showDeleteUserDialog() {
	if (!appState.profileView) {
		return;
	}
	appState.profileView.showDeleteUserDialog = null;
}

export function get_userListView() {
	return AppUtils.deepCopy(appState.userListView);
}

export function set_userListView(eventData) {
	appState.userListView = eventData.userListView;
	reset_loginView();
	reset_registrationView();
	reset_forgotPasswordView();
	reset_resetPasswordView();
	reset_dashboardView();
	reset_boxSettingsView();
	reset_profileView();
	reset_cardView();
	reset_authorView();
}

export function reset_userListView() {
	appState.userListView = null;
}

export function merge_userListView(eventData) {
	if (!appState.userListView) {
		appState.userListView = {};
	}
	if (eventData.userList !== undefined) {
		appState.userListView.userList = eventData.userList;
	}
	if (eventData.showDeleteUserDialog !== undefined) {
		appState.userListView.showDeleteUserDialog = eventData.showDeleteUserDialog;
	}
	if (eventData.usernameToBeDeleted !== undefined) {
		appState.userListView.usernameToBeDeleted = eventData.usernameToBeDeleted;
	}
	reset_loginView();
	reset_registrationView();
	reset_forgotPasswordView();
	reset_resetPasswordView();
	reset_dashboardView();
	reset_boxSettingsView();
	reset_profileView();
	reset_cardView();
	reset_authorView();
}

export function get_userListView_userList() {
	if (!appState.userListView) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.userListView.userList);
}

export function set_userListView_userList(eventData) {
	if (!appState.userListView) {
		appState.userListView = {};
	}
	appState.userListView.userList = eventData.userList;
}

export function reset_userListView_userList() {
	if (!appState.userListView) {
		return;
	}
	appState.userListView.userList = null;
}

export function merge_userListView_userList(eventData) {
	if (!appState.userListView) {
		appState.userListView = {};
	}
	if (!appState.userListView.userList) {
		appState.userListView.userList = {};
	}
	if (eventData.userId !== undefined) {
		appState.userListView.userList.userId = eventData.userId;
	}
	if (eventData.username !== undefined) {
		appState.userListView.userList.username = eventData.username;
	}
	if (eventData.password !== undefined) {
		appState.userListView.userList.password = eventData.password;
	}
	if (eventData.email !== undefined) {
		appState.userListView.userList.email = eventData.email;
	}
	if (eventData.role !== undefined) {
		appState.userListView.userList.role = eventData.role;
	}
	if (eventData.emailConfirmed !== undefined) {
		appState.userListView.userList.emailConfirmed = eventData.emailConfirmed;
	}
}

export function get_userListView_showDeleteUserDialog() {
	if (!appState.userListView) {
		return undefined;
	}
	return appState.userListView.showDeleteUserDialog;
}

export function set_userListView_showDeleteUserDialog(eventData) {
	if (!appState.userListView) {
		appState.userListView = {};
	}
	appState.userListView.showDeleteUserDialog = eventData.showDeleteUserDialog;
}

export function reset_userListView_showDeleteUserDialog() {
	if (!appState.userListView) {
		return;
	}
	appState.userListView.showDeleteUserDialog = null;
}

export function get_userListView_usernameToBeDeleted() {
	if (!appState.userListView) {
		return undefined;
	}
	return appState.userListView.usernameToBeDeleted;
}

export function set_userListView_usernameToBeDeleted(eventData) {
	if (!appState.userListView) {
		appState.userListView = {};
	}
	appState.userListView.usernameToBeDeleted = eventData.usernameToBeDeleted;
}

export function reset_userListView_usernameToBeDeleted() {
	if (!appState.userListView) {
		return;
	}
	appState.userListView.usernameToBeDeleted = null;
}

export function get_cardView() {
	return AppUtils.deepCopy(appState.cardView);
}

export function set_cardView(eventData) {
	appState.cardView = eventData.cardView;
	reset_loginView();
	reset_registrationView();
	reset_forgotPasswordView();
	reset_resetPasswordView();
	reset_dashboardView();
	reset_boxSettingsView();
	reset_profileView();
	reset_userListView();
	reset_authorView();
}

export function reset_cardView() {
	appState.cardView = null;
}

export function merge_cardView(eventData) {
	if (!appState.cardView) {
		appState.cardView = {};
	}
	if (eventData.cardId !== undefined) {
		appState.cardView.cardId = eventData.cardId;
	}
	if (eventData.categoryId !== undefined) {
		appState.cardView.categoryId = eventData.categoryId;
	}
	if (eventData.count !== undefined) {
		appState.cardView.count = eventData.count;
	}
	if (eventData.given !== undefined) {
		appState.cardView.given = eventData.given;
	}
	if (eventData.image !== undefined) {
		appState.cardView.image = eventData.image;
	}
	if (eventData.lastQuality !== undefined) {
		appState.cardView.lastQuality = eventData.lastQuality;
	}
	if (eventData.rootCategoryId !== undefined) {
		appState.cardView.rootCategoryId = eventData.rootCategoryId;
	}
	if (eventData.scheduledCardId !== undefined) {
		appState.cardView.scheduledCardId = eventData.scheduledCardId;
	}
	if (eventData.reinforceCardId !== undefined) {
		appState.cardView.reinforceCardId = eventData.reinforceCardId;
	}
	if (eventData.scheduledDate !== undefined) {
		appState.cardView.scheduledDate = eventData.scheduledDate;
	}
	if (eventData.scoredDate !== undefined) {
		appState.cardView.scoredDate = eventData.scoredDate;
	}
	if (eventData.wanted !== undefined) {
		appState.cardView.wanted = eventData.wanted;
	}
	if (eventData.openTodaysCards !== undefined) {
		appState.cardView.openTodaysCards = eventData.openTodaysCards;
	}
	if (eventData.allTodaysCards !== undefined) {
		appState.cardView.allTodaysCards = eventData.allTodaysCards;
	}
	if (eventData.index !== undefined) {
		appState.cardView.index = eventData.index;
	}
	if (eventData.enableScoreButtons !== undefined) {
		appState.cardView.enableScoreButtons = eventData.enableScoreButtons;
	}
	if (eventData.displayImage !== undefined) {
		appState.cardView.displayImage = eventData.displayImage;
	}
	if (eventData.boxId !== undefined) {
		appState.cardView.boxId = eventData.boxId;
	}
	reset_loginView();
	reset_registrationView();
	reset_forgotPasswordView();
	reset_resetPasswordView();
	reset_dashboardView();
	reset_boxSettingsView();
	reset_profileView();
	reset_userListView();
	reset_authorView();
}

export function get_cardView_cardId() {
	if (!appState.cardView) {
		return undefined;
	}
	return appState.cardView.cardId;
}

export function set_cardView_cardId(eventData) {
	if (!appState.cardView) {
		appState.cardView = {};
	}
	appState.cardView.cardId = eventData.cardId;
}

export function reset_cardView_cardId() {
	if (!appState.cardView) {
		return;
	}
	appState.cardView.cardId = null;
}

export function get_cardView_categoryId() {
	if (!appState.cardView) {
		return undefined;
	}
	return appState.cardView.categoryId;
}

export function set_cardView_categoryId(eventData) {
	if (!appState.cardView) {
		appState.cardView = {};
	}
	appState.cardView.categoryId = eventData.categoryId;
}

export function reset_cardView_categoryId() {
	if (!appState.cardView) {
		return;
	}
	appState.cardView.categoryId = null;
}

export function get_cardView_count() {
	if (!appState.cardView) {
		return undefined;
	}
	return appState.cardView.count;
}

export function set_cardView_count(eventData) {
	if (!appState.cardView) {
		appState.cardView = {};
	}
	appState.cardView.count = eventData.count;
}

export function reset_cardView_count() {
	if (!appState.cardView) {
		return;
	}
	appState.cardView.count = null;
}

export function get_cardView_given() {
	if (!appState.cardView) {
		return undefined;
	}
	return appState.cardView.given;
}

export function set_cardView_given(eventData) {
	if (!appState.cardView) {
		appState.cardView = {};
	}
	appState.cardView.given = eventData.given;
}

export function reset_cardView_given() {
	if (!appState.cardView) {
		return;
	}
	appState.cardView.given = null;
}

export function get_cardView_image() {
	if (!appState.cardView) {
		return undefined;
	}
	return appState.cardView.image;
}

export function set_cardView_image(eventData) {
	if (!appState.cardView) {
		appState.cardView = {};
	}
	appState.cardView.image = eventData.image;
}

export function reset_cardView_image() {
	if (!appState.cardView) {
		return;
	}
	appState.cardView.image = null;
}

export function get_cardView_lastQuality() {
	if (!appState.cardView) {
		return undefined;
	}
	return appState.cardView.lastQuality;
}

export function set_cardView_lastQuality(eventData) {
	if (!appState.cardView) {
		appState.cardView = {};
	}
	appState.cardView.lastQuality = eventData.lastQuality;
}

export function reset_cardView_lastQuality() {
	if (!appState.cardView) {
		return;
	}
	appState.cardView.lastQuality = null;
}

export function get_cardView_rootCategoryId() {
	if (!appState.cardView) {
		return undefined;
	}
	return appState.cardView.rootCategoryId;
}

export function set_cardView_rootCategoryId(eventData) {
	if (!appState.cardView) {
		appState.cardView = {};
	}
	appState.cardView.rootCategoryId = eventData.rootCategoryId;
}

export function reset_cardView_rootCategoryId() {
	if (!appState.cardView) {
		return;
	}
	appState.cardView.rootCategoryId = null;
}

export function get_cardView_scheduledCardId() {
	if (!appState.cardView) {
		return undefined;
	}
	return appState.cardView.scheduledCardId;
}

export function set_cardView_scheduledCardId(eventData) {
	if (!appState.cardView) {
		appState.cardView = {};
	}
	appState.cardView.scheduledCardId = eventData.scheduledCardId;
}

export function reset_cardView_scheduledCardId() {
	if (!appState.cardView) {
		return;
	}
	appState.cardView.scheduledCardId = null;
}

export function get_cardView_reinforceCardId() {
	if (!appState.cardView) {
		return undefined;
	}
	return appState.cardView.reinforceCardId;
}

export function set_cardView_reinforceCardId(eventData) {
	if (!appState.cardView) {
		appState.cardView = {};
	}
	appState.cardView.reinforceCardId = eventData.reinforceCardId;
}

export function reset_cardView_reinforceCardId() {
	if (!appState.cardView) {
		return;
	}
	appState.cardView.reinforceCardId = null;
}

export function get_cardView_scheduledDate() {
	if (!appState.cardView) {
		return undefined;
	}
	return appState.cardView.scheduledDate;
}

export function set_cardView_scheduledDate(eventData) {
	if (!appState.cardView) {
		appState.cardView = {};
	}
	appState.cardView.scheduledDate = eventData.scheduledDate;
}

export function reset_cardView_scheduledDate() {
	if (!appState.cardView) {
		return;
	}
	appState.cardView.scheduledDate = null;
}

export function get_cardView_scoredDate() {
	if (!appState.cardView) {
		return undefined;
	}
	return appState.cardView.scoredDate;
}

export function set_cardView_scoredDate(eventData) {
	if (!appState.cardView) {
		appState.cardView = {};
	}
	appState.cardView.scoredDate = eventData.scoredDate;
}

export function reset_cardView_scoredDate() {
	if (!appState.cardView) {
		return;
	}
	appState.cardView.scoredDate = null;
}

export function get_cardView_wanted() {
	if (!appState.cardView) {
		return undefined;
	}
	return appState.cardView.wanted;
}

export function set_cardView_wanted(eventData) {
	if (!appState.cardView) {
		appState.cardView = {};
	}
	appState.cardView.wanted = eventData.wanted;
}

export function reset_cardView_wanted() {
	if (!appState.cardView) {
		return;
	}
	appState.cardView.wanted = null;
}

export function get_cardView_openTodaysCards() {
	if (!appState.cardView) {
		return undefined;
	}
	return appState.cardView.openTodaysCards;
}

export function set_cardView_openTodaysCards(eventData) {
	if (!appState.cardView) {
		appState.cardView = {};
	}
	appState.cardView.openTodaysCards = eventData.openTodaysCards;
}

export function reset_cardView_openTodaysCards() {
	if (!appState.cardView) {
		return;
	}
	appState.cardView.openTodaysCards = null;
}

export function get_cardView_allTodaysCards() {
	if (!appState.cardView) {
		return undefined;
	}
	return appState.cardView.allTodaysCards;
}

export function set_cardView_allTodaysCards(eventData) {
	if (!appState.cardView) {
		appState.cardView = {};
	}
	appState.cardView.allTodaysCards = eventData.allTodaysCards;
}

export function reset_cardView_allTodaysCards() {
	if (!appState.cardView) {
		return;
	}
	appState.cardView.allTodaysCards = null;
}

export function get_cardView_index() {
	if (!appState.cardView) {
		return undefined;
	}
	return appState.cardView.index;
}

export function set_cardView_index(eventData) {
	if (!appState.cardView) {
		appState.cardView = {};
	}
	appState.cardView.index = eventData.index;
}

export function reset_cardView_index() {
	if (!appState.cardView) {
		return;
	}
	appState.cardView.index = null;
}

export function get_cardView_enableScoreButtons() {
	if (!appState.cardView) {
		return undefined;
	}
	return appState.cardView.enableScoreButtons;
}

export function set_cardView_enableScoreButtons(eventData) {
	if (!appState.cardView) {
		appState.cardView = {};
	}
	appState.cardView.enableScoreButtons = eventData.enableScoreButtons;
}

export function reset_cardView_enableScoreButtons() {
	if (!appState.cardView) {
		return;
	}
	appState.cardView.enableScoreButtons = null;
}

export function get_cardView_displayImage() {
	if (!appState.cardView) {
		return undefined;
	}
	return appState.cardView.displayImage;
}

export function set_cardView_displayImage(eventData) {
	if (!appState.cardView) {
		appState.cardView = {};
	}
	appState.cardView.displayImage = eventData.displayImage;
}

export function reset_cardView_displayImage() {
	if (!appState.cardView) {
		return;
	}
	appState.cardView.displayImage = null;
}

export function get_cardView_boxId() {
	if (!appState.cardView) {
		return undefined;
	}
	return appState.cardView.boxId;
}

export function set_cardView_boxId(eventData) {
	if (!appState.cardView) {
		appState.cardView = {};
	}
	appState.cardView.boxId = eventData.boxId;
}

export function reset_cardView_boxId() {
	if (!appState.cardView) {
		return;
	}
	appState.cardView.boxId = null;
}

export function get_authorView() {
	return AppUtils.deepCopy(appState.authorView);
}

export function set_authorView(eventData) {
	appState.authorView = eventData.authorView;
	reset_loginView();
	reset_registrationView();
	reset_forgotPasswordView();
	reset_resetPasswordView();
	reset_dashboardView();
	reset_boxSettingsView();
	reset_profileView();
	reset_userListView();
	reset_cardView();
}

export function reset_authorView() {
	appState.authorView = null;
}

export function merge_authorView(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (eventData.categoryTree !== undefined) {
		appState.authorView.categoryTree = eventData.categoryTree;
	}
	if (eventData.cardView !== undefined) {
		appState.authorView.cardView = eventData.cardView;
	}
	reset_loginView();
	reset_registrationView();
	reset_forgotPasswordView();
	reset_resetPasswordView();
	reset_dashboardView();
	reset_boxSettingsView();
	reset_profileView();
	reset_userListView();
	reset_cardView();
}

export function get_authorView_categoryTree() {
	if (!appState.authorView) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.authorView.categoryTree);
}

export function set_authorView_categoryTree(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	appState.authorView.categoryTree = eventData.categoryTree;
}

export function reset_authorView_categoryTree() {
	if (!appState.authorView) {
		return;
	}
	appState.authorView.categoryTree = null;
}

export function merge_authorView_categoryTree(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (eventData.selectedCategory !== undefined) {
		appState.authorView.categoryTree.selectedCategory = eventData.selectedCategory;
	}
	if (eventData.rootCategory !== undefined) {
		appState.authorView.categoryTree.rootCategory = eventData.rootCategory;
	}
	if (eventData.displayDeleteCategory !== undefined) {
		appState.authorView.categoryTree.displayDeleteCategory = eventData.displayDeleteCategory;
	}
	if (eventData.categoryName !== undefined) {
		appState.authorView.categoryTree.categoryName = eventData.categoryName;
	}
	if (eventData.displayEditCategory !== undefined) {
		appState.authorView.categoryTree.displayEditCategory = eventData.displayEditCategory;
	}
	if (eventData.displayNewCategory !== undefined) {
		appState.authorView.categoryTree.displayNewCategory = eventData.displayNewCategory;
	}
	if (eventData.dropAllowed !== undefined) {
		appState.authorView.categoryTree.dropAllowed = eventData.dropAllowed;
	}
	if (eventData.dropTargetCategoryId !== undefined) {
		appState.authorView.categoryTree.dropTargetCategoryId = eventData.dropTargetCategoryId;
	}
	if (eventData.movedCategory !== undefined) {
		appState.authorView.categoryTree.movedCategory = eventData.movedCategory;
	}
	if (eventData.previewCsv !== undefined) {
		appState.authorView.categoryTree.previewCsv = eventData.previewCsv;
	}
}

export function get_authorView_categoryTree_selectedCategory() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.authorView.categoryTree.selectedCategory);
}

export function set_authorView_categoryTree_selectedCategory(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	appState.authorView.categoryTree.selectedCategory = eventData.selectedCategory;
}

export function reset_authorView_categoryTree_selectedCategory() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	appState.authorView.categoryTree.selectedCategory = null;
}

export function merge_authorView_categoryTree_selectedCategory(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		appState.authorView.categoryTree.selectedCategory = {};
	}
	if (eventData.categoryId !== undefined) {
		appState.authorView.categoryTree.selectedCategory.categoryId = eventData.categoryId;
	}
	if (eventData.categoryName !== undefined) {
		appState.authorView.categoryTree.selectedCategory.categoryName = eventData.categoryName;
	}
	if (eventData.categoryIndex !== undefined) {
		appState.authorView.categoryTree.selectedCategory.categoryIndex = eventData.categoryIndex;
	}
	if (eventData.empty !== undefined) {
		appState.authorView.categoryTree.selectedCategory.empty = eventData.empty;
	}
	if (eventData.parentCategoryId !== undefined) {
		appState.authorView.categoryTree.selectedCategory.parentCategoryId = eventData.parentCategoryId;
	}
	if (eventData.dictionaryLookup !== undefined) {
		appState.authorView.categoryTree.selectedCategory.dictionaryLookup = eventData.dictionaryLookup;
	}
	if (eventData.givenLanguage !== undefined) {
		appState.authorView.categoryTree.selectedCategory.givenLanguage = eventData.givenLanguage;
	}
	if (eventData.wantedLanguage !== undefined) {
		appState.authorView.categoryTree.selectedCategory.wantedLanguage = eventData.wantedLanguage;
	}
	if (eventData.rootCategoryId !== undefined) {
		appState.authorView.categoryTree.selectedCategory.rootCategoryId = eventData.rootCategoryId;
	}
	if (eventData.CategoryTreeItem !== undefined) {
		appState.authorView.categoryTree.selectedCategory.CategoryTreeItem = eventData.CategoryTreeItem;
	}
	if (eventData.childCategories !== undefined) {
		appState.authorView.categoryTree.selectedCategory.childCategories = eventData.childCategories;
	}
}

export function get_authorView_categoryTree_selectedCategory_categoryId() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.selectedCategory.categoryId;
}

export function set_authorView_categoryTree_selectedCategory_categoryId(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		appState.authorView.categoryTree.selectedCategory = {};
	}
	appState.authorView.categoryTree.selectedCategory.categoryId = eventData.categoryId;
}

export function reset_authorView_categoryTree_selectedCategory_categoryId() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return;
	}
	appState.authorView.categoryTree.selectedCategory.categoryId = null;
}

export function get_authorView_categoryTree_selectedCategory_categoryName() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.selectedCategory.categoryName;
}

export function set_authorView_categoryTree_selectedCategory_categoryName(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		appState.authorView.categoryTree.selectedCategory = {};
	}
	appState.authorView.categoryTree.selectedCategory.categoryName = eventData.categoryName;
}

export function reset_authorView_categoryTree_selectedCategory_categoryName() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return;
	}
	appState.authorView.categoryTree.selectedCategory.categoryName = null;
}

export function get_authorView_categoryTree_selectedCategory_categoryIndex() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.selectedCategory.categoryIndex;
}

export function set_authorView_categoryTree_selectedCategory_categoryIndex(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		appState.authorView.categoryTree.selectedCategory = {};
	}
	appState.authorView.categoryTree.selectedCategory.categoryIndex = eventData.categoryIndex;
}

export function reset_authorView_categoryTree_selectedCategory_categoryIndex() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return;
	}
	appState.authorView.categoryTree.selectedCategory.categoryIndex = null;
}

export function get_authorView_categoryTree_selectedCategory_empty() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.selectedCategory.empty;
}

export function set_authorView_categoryTree_selectedCategory_empty(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		appState.authorView.categoryTree.selectedCategory = {};
	}
	appState.authorView.categoryTree.selectedCategory.empty = eventData.empty;
}

export function reset_authorView_categoryTree_selectedCategory_empty() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return;
	}
	appState.authorView.categoryTree.selectedCategory.empty = null;
}

export function get_authorView_categoryTree_selectedCategory_parentCategoryId() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.selectedCategory.parentCategoryId;
}

export function set_authorView_categoryTree_selectedCategory_parentCategoryId(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		appState.authorView.categoryTree.selectedCategory = {};
	}
	appState.authorView.categoryTree.selectedCategory.parentCategoryId = eventData.parentCategoryId;
}

export function reset_authorView_categoryTree_selectedCategory_parentCategoryId() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return;
	}
	appState.authorView.categoryTree.selectedCategory.parentCategoryId = null;
}

export function get_authorView_categoryTree_selectedCategory_dictionaryLookup() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.selectedCategory.dictionaryLookup;
}

export function set_authorView_categoryTree_selectedCategory_dictionaryLookup(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		appState.authorView.categoryTree.selectedCategory = {};
	}
	appState.authorView.categoryTree.selectedCategory.dictionaryLookup = eventData.dictionaryLookup;
}

export function reset_authorView_categoryTree_selectedCategory_dictionaryLookup() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return;
	}
	appState.authorView.categoryTree.selectedCategory.dictionaryLookup = null;
}

export function get_authorView_categoryTree_selectedCategory_givenLanguage() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.selectedCategory.givenLanguage;
}

export function set_authorView_categoryTree_selectedCategory_givenLanguage(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		appState.authorView.categoryTree.selectedCategory = {};
	}
	appState.authorView.categoryTree.selectedCategory.givenLanguage = eventData.givenLanguage;
}

export function reset_authorView_categoryTree_selectedCategory_givenLanguage() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return;
	}
	appState.authorView.categoryTree.selectedCategory.givenLanguage = null;
}

export function get_authorView_categoryTree_selectedCategory_wantedLanguage() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.selectedCategory.wantedLanguage;
}

export function set_authorView_categoryTree_selectedCategory_wantedLanguage(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		appState.authorView.categoryTree.selectedCategory = {};
	}
	appState.authorView.categoryTree.selectedCategory.wantedLanguage = eventData.wantedLanguage;
}

export function reset_authorView_categoryTree_selectedCategory_wantedLanguage() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return;
	}
	appState.authorView.categoryTree.selectedCategory.wantedLanguage = null;
}

export function get_authorView_categoryTree_selectedCategory_rootCategoryId() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.selectedCategory.rootCategoryId;
}

export function set_authorView_categoryTree_selectedCategory_rootCategoryId(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		appState.authorView.categoryTree.selectedCategory = {};
	}
	appState.authorView.categoryTree.selectedCategory.rootCategoryId = eventData.rootCategoryId;
}

export function reset_authorView_categoryTree_selectedCategory_rootCategoryId() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return;
	}
	appState.authorView.categoryTree.selectedCategory.rootCategoryId = null;
}

export function get_authorView_categoryTree_selectedCategory_CategoryTreeItem() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.selectedCategory.CategoryTreeItem;
}

export function set_authorView_categoryTree_selectedCategory_CategoryTreeItem(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		appState.authorView.categoryTree.selectedCategory = {};
	}
	appState.authorView.categoryTree.selectedCategory.CategoryTreeItem = eventData.CategoryTreeItem;
}

export function reset_authorView_categoryTree_selectedCategory_CategoryTreeItem() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return;
	}
	appState.authorView.categoryTree.selectedCategory.CategoryTreeItem = null;
}

export function get_authorView_categoryTree_selectedCategory_childCategories() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.selectedCategory.childCategories;
}

export function set_authorView_categoryTree_selectedCategory_childCategories(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		appState.authorView.categoryTree.selectedCategory = {};
	}
	appState.authorView.categoryTree.selectedCategory.childCategories = eventData.childCategories;
}

export function reset_authorView_categoryTree_selectedCategory_childCategories() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.selectedCategory) {
		return;
	}
	appState.authorView.categoryTree.selectedCategory.childCategories = null;
}

export function get_authorView_categoryTree_rootCategory() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.authorView.categoryTree.rootCategory);
}

export function set_authorView_categoryTree_rootCategory(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	appState.authorView.categoryTree.rootCategory = eventData.rootCategory;
}

export function reset_authorView_categoryTree_rootCategory() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	appState.authorView.categoryTree.rootCategory = null;
}

export function merge_authorView_categoryTree_rootCategory(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		appState.authorView.categoryTree.rootCategory = {};
	}
	if (eventData.categoryId !== undefined) {
		appState.authorView.categoryTree.rootCategory.categoryId = eventData.categoryId;
	}
	if (eventData.categoryName !== undefined) {
		appState.authorView.categoryTree.rootCategory.categoryName = eventData.categoryName;
	}
	if (eventData.categoryIndex !== undefined) {
		appState.authorView.categoryTree.rootCategory.categoryIndex = eventData.categoryIndex;
	}
	if (eventData.empty !== undefined) {
		appState.authorView.categoryTree.rootCategory.empty = eventData.empty;
	}
	if (eventData.parentCategoryId !== undefined) {
		appState.authorView.categoryTree.rootCategory.parentCategoryId = eventData.parentCategoryId;
	}
	if (eventData.dictionaryLookup !== undefined) {
		appState.authorView.categoryTree.rootCategory.dictionaryLookup = eventData.dictionaryLookup;
	}
	if (eventData.givenLanguage !== undefined) {
		appState.authorView.categoryTree.rootCategory.givenLanguage = eventData.givenLanguage;
	}
	if (eventData.wantedLanguage !== undefined) {
		appState.authorView.categoryTree.rootCategory.wantedLanguage = eventData.wantedLanguage;
	}
	if (eventData.rootCategoryId !== undefined) {
		appState.authorView.categoryTree.rootCategory.rootCategoryId = eventData.rootCategoryId;
	}
	if (eventData.CategoryTreeItem !== undefined) {
		appState.authorView.categoryTree.rootCategory.CategoryTreeItem = eventData.CategoryTreeItem;
	}
	if (eventData.childCategories !== undefined) {
		appState.authorView.categoryTree.rootCategory.childCategories = eventData.childCategories;
	}
}

export function get_authorView_categoryTree_rootCategory_categoryId() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.rootCategory.categoryId;
}

export function set_authorView_categoryTree_rootCategory_categoryId(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		appState.authorView.categoryTree.rootCategory = {};
	}
	appState.authorView.categoryTree.rootCategory.categoryId = eventData.categoryId;
}

export function reset_authorView_categoryTree_rootCategory_categoryId() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return;
	}
	appState.authorView.categoryTree.rootCategory.categoryId = null;
}

export function get_authorView_categoryTree_rootCategory_categoryName() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.rootCategory.categoryName;
}

export function set_authorView_categoryTree_rootCategory_categoryName(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		appState.authorView.categoryTree.rootCategory = {};
	}
	appState.authorView.categoryTree.rootCategory.categoryName = eventData.categoryName;
}

export function reset_authorView_categoryTree_rootCategory_categoryName() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return;
	}
	appState.authorView.categoryTree.rootCategory.categoryName = null;
}

export function get_authorView_categoryTree_rootCategory_categoryIndex() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.rootCategory.categoryIndex;
}

export function set_authorView_categoryTree_rootCategory_categoryIndex(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		appState.authorView.categoryTree.rootCategory = {};
	}
	appState.authorView.categoryTree.rootCategory.categoryIndex = eventData.categoryIndex;
}

export function reset_authorView_categoryTree_rootCategory_categoryIndex() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return;
	}
	appState.authorView.categoryTree.rootCategory.categoryIndex = null;
}

export function get_authorView_categoryTree_rootCategory_empty() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.rootCategory.empty;
}

export function set_authorView_categoryTree_rootCategory_empty(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		appState.authorView.categoryTree.rootCategory = {};
	}
	appState.authorView.categoryTree.rootCategory.empty = eventData.empty;
}

export function reset_authorView_categoryTree_rootCategory_empty() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return;
	}
	appState.authorView.categoryTree.rootCategory.empty = null;
}

export function get_authorView_categoryTree_rootCategory_parentCategoryId() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.rootCategory.parentCategoryId;
}

export function set_authorView_categoryTree_rootCategory_parentCategoryId(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		appState.authorView.categoryTree.rootCategory = {};
	}
	appState.authorView.categoryTree.rootCategory.parentCategoryId = eventData.parentCategoryId;
}

export function reset_authorView_categoryTree_rootCategory_parentCategoryId() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return;
	}
	appState.authorView.categoryTree.rootCategory.parentCategoryId = null;
}

export function get_authorView_categoryTree_rootCategory_dictionaryLookup() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.rootCategory.dictionaryLookup;
}

export function set_authorView_categoryTree_rootCategory_dictionaryLookup(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		appState.authorView.categoryTree.rootCategory = {};
	}
	appState.authorView.categoryTree.rootCategory.dictionaryLookup = eventData.dictionaryLookup;
}

export function reset_authorView_categoryTree_rootCategory_dictionaryLookup() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return;
	}
	appState.authorView.categoryTree.rootCategory.dictionaryLookup = null;
}

export function get_authorView_categoryTree_rootCategory_givenLanguage() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.rootCategory.givenLanguage;
}

export function set_authorView_categoryTree_rootCategory_givenLanguage(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		appState.authorView.categoryTree.rootCategory = {};
	}
	appState.authorView.categoryTree.rootCategory.givenLanguage = eventData.givenLanguage;
}

export function reset_authorView_categoryTree_rootCategory_givenLanguage() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return;
	}
	appState.authorView.categoryTree.rootCategory.givenLanguage = null;
}

export function get_authorView_categoryTree_rootCategory_wantedLanguage() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.rootCategory.wantedLanguage;
}

export function set_authorView_categoryTree_rootCategory_wantedLanguage(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		appState.authorView.categoryTree.rootCategory = {};
	}
	appState.authorView.categoryTree.rootCategory.wantedLanguage = eventData.wantedLanguage;
}

export function reset_authorView_categoryTree_rootCategory_wantedLanguage() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return;
	}
	appState.authorView.categoryTree.rootCategory.wantedLanguage = null;
}

export function get_authorView_categoryTree_rootCategory_rootCategoryId() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.rootCategory.rootCategoryId;
}

export function set_authorView_categoryTree_rootCategory_rootCategoryId(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		appState.authorView.categoryTree.rootCategory = {};
	}
	appState.authorView.categoryTree.rootCategory.rootCategoryId = eventData.rootCategoryId;
}

export function reset_authorView_categoryTree_rootCategory_rootCategoryId() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return;
	}
	appState.authorView.categoryTree.rootCategory.rootCategoryId = null;
}

export function get_authorView_categoryTree_rootCategory_CategoryTreeItem() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.rootCategory.CategoryTreeItem;
}

export function set_authorView_categoryTree_rootCategory_CategoryTreeItem(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		appState.authorView.categoryTree.rootCategory = {};
	}
	appState.authorView.categoryTree.rootCategory.CategoryTreeItem = eventData.CategoryTreeItem;
}

export function reset_authorView_categoryTree_rootCategory_CategoryTreeItem() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return;
	}
	appState.authorView.categoryTree.rootCategory.CategoryTreeItem = null;
}

export function get_authorView_categoryTree_rootCategory_childCategories() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.rootCategory.childCategories;
}

export function set_authorView_categoryTree_rootCategory_childCategories(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		appState.authorView.categoryTree.rootCategory = {};
	}
	appState.authorView.categoryTree.rootCategory.childCategories = eventData.childCategories;
}

export function reset_authorView_categoryTree_rootCategory_childCategories() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.rootCategory) {
		return;
	}
	appState.authorView.categoryTree.rootCategory.childCategories = null;
}

export function get_authorView_categoryTree_displayDeleteCategory() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	return appState.authorView.categoryTree.displayDeleteCategory;
}

export function set_authorView_categoryTree_displayDeleteCategory(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	appState.authorView.categoryTree.displayDeleteCategory = eventData.displayDeleteCategory;
}

export function reset_authorView_categoryTree_displayDeleteCategory() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	appState.authorView.categoryTree.displayDeleteCategory = null;
}

export function get_authorView_categoryTree_categoryName() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	return appState.authorView.categoryTree.categoryName;
}

export function set_authorView_categoryTree_categoryName(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	appState.authorView.categoryTree.categoryName = eventData.categoryName;
}

export function reset_authorView_categoryTree_categoryName() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	appState.authorView.categoryTree.categoryName = null;
}

export function get_authorView_categoryTree_displayEditCategory() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	return appState.authorView.categoryTree.displayEditCategory;
}

export function set_authorView_categoryTree_displayEditCategory(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	appState.authorView.categoryTree.displayEditCategory = eventData.displayEditCategory;
}

export function reset_authorView_categoryTree_displayEditCategory() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	appState.authorView.categoryTree.displayEditCategory = null;
}

export function get_authorView_categoryTree_displayNewCategory() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	return appState.authorView.categoryTree.displayNewCategory;
}

export function set_authorView_categoryTree_displayNewCategory(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	appState.authorView.categoryTree.displayNewCategory = eventData.displayNewCategory;
}

export function reset_authorView_categoryTree_displayNewCategory() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	appState.authorView.categoryTree.displayNewCategory = null;
}

export function get_authorView_categoryTree_dropAllowed() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	return appState.authorView.categoryTree.dropAllowed;
}

export function set_authorView_categoryTree_dropAllowed(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	appState.authorView.categoryTree.dropAllowed = eventData.dropAllowed;
}

export function reset_authorView_categoryTree_dropAllowed() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	appState.authorView.categoryTree.dropAllowed = null;
}

export function get_authorView_categoryTree_dropTargetCategoryId() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	return appState.authorView.categoryTree.dropTargetCategoryId;
}

export function set_authorView_categoryTree_dropTargetCategoryId(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	appState.authorView.categoryTree.dropTargetCategoryId = eventData.dropTargetCategoryId;
}

export function reset_authorView_categoryTree_dropTargetCategoryId() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	appState.authorView.categoryTree.dropTargetCategoryId = null;
}

export function get_authorView_categoryTree_movedCategory() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.authorView.categoryTree.movedCategory);
}

export function set_authorView_categoryTree_movedCategory(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	appState.authorView.categoryTree.movedCategory = eventData.movedCategory;
}

export function reset_authorView_categoryTree_movedCategory() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	appState.authorView.categoryTree.movedCategory = null;
}

export function merge_authorView_categoryTree_movedCategory(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		appState.authorView.categoryTree.movedCategory = {};
	}
	if (eventData.categoryId !== undefined) {
		appState.authorView.categoryTree.movedCategory.categoryId = eventData.categoryId;
	}
	if (eventData.categoryName !== undefined) {
		appState.authorView.categoryTree.movedCategory.categoryName = eventData.categoryName;
	}
	if (eventData.categoryIndex !== undefined) {
		appState.authorView.categoryTree.movedCategory.categoryIndex = eventData.categoryIndex;
	}
	if (eventData.empty !== undefined) {
		appState.authorView.categoryTree.movedCategory.empty = eventData.empty;
	}
	if (eventData.parentCategoryId !== undefined) {
		appState.authorView.categoryTree.movedCategory.parentCategoryId = eventData.parentCategoryId;
	}
	if (eventData.dictionaryLookup !== undefined) {
		appState.authorView.categoryTree.movedCategory.dictionaryLookup = eventData.dictionaryLookup;
	}
	if (eventData.givenLanguage !== undefined) {
		appState.authorView.categoryTree.movedCategory.givenLanguage = eventData.givenLanguage;
	}
	if (eventData.wantedLanguage !== undefined) {
		appState.authorView.categoryTree.movedCategory.wantedLanguage = eventData.wantedLanguage;
	}
	if (eventData.rootCategoryId !== undefined) {
		appState.authorView.categoryTree.movedCategory.rootCategoryId = eventData.rootCategoryId;
	}
	if (eventData.CategoryTreeItem !== undefined) {
		appState.authorView.categoryTree.movedCategory.CategoryTreeItem = eventData.CategoryTreeItem;
	}
	if (eventData.childCategories !== undefined) {
		appState.authorView.categoryTree.movedCategory.childCategories = eventData.childCategories;
	}
}

export function get_authorView_categoryTree_movedCategory_categoryId() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.movedCategory.categoryId;
}

export function set_authorView_categoryTree_movedCategory_categoryId(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		appState.authorView.categoryTree.movedCategory = {};
	}
	appState.authorView.categoryTree.movedCategory.categoryId = eventData.categoryId;
}

export function reset_authorView_categoryTree_movedCategory_categoryId() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return;
	}
	appState.authorView.categoryTree.movedCategory.categoryId = null;
}

export function get_authorView_categoryTree_movedCategory_categoryName() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.movedCategory.categoryName;
}

export function set_authorView_categoryTree_movedCategory_categoryName(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		appState.authorView.categoryTree.movedCategory = {};
	}
	appState.authorView.categoryTree.movedCategory.categoryName = eventData.categoryName;
}

export function reset_authorView_categoryTree_movedCategory_categoryName() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return;
	}
	appState.authorView.categoryTree.movedCategory.categoryName = null;
}

export function get_authorView_categoryTree_movedCategory_categoryIndex() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.movedCategory.categoryIndex;
}

export function set_authorView_categoryTree_movedCategory_categoryIndex(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		appState.authorView.categoryTree.movedCategory = {};
	}
	appState.authorView.categoryTree.movedCategory.categoryIndex = eventData.categoryIndex;
}

export function reset_authorView_categoryTree_movedCategory_categoryIndex() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return;
	}
	appState.authorView.categoryTree.movedCategory.categoryIndex = null;
}

export function get_authorView_categoryTree_movedCategory_empty() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.movedCategory.empty;
}

export function set_authorView_categoryTree_movedCategory_empty(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		appState.authorView.categoryTree.movedCategory = {};
	}
	appState.authorView.categoryTree.movedCategory.empty = eventData.empty;
}

export function reset_authorView_categoryTree_movedCategory_empty() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return;
	}
	appState.authorView.categoryTree.movedCategory.empty = null;
}

export function get_authorView_categoryTree_movedCategory_parentCategoryId() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.movedCategory.parentCategoryId;
}

export function set_authorView_categoryTree_movedCategory_parentCategoryId(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		appState.authorView.categoryTree.movedCategory = {};
	}
	appState.authorView.categoryTree.movedCategory.parentCategoryId = eventData.parentCategoryId;
}

export function reset_authorView_categoryTree_movedCategory_parentCategoryId() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return;
	}
	appState.authorView.categoryTree.movedCategory.parentCategoryId = null;
}

export function get_authorView_categoryTree_movedCategory_dictionaryLookup() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.movedCategory.dictionaryLookup;
}

export function set_authorView_categoryTree_movedCategory_dictionaryLookup(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		appState.authorView.categoryTree.movedCategory = {};
	}
	appState.authorView.categoryTree.movedCategory.dictionaryLookup = eventData.dictionaryLookup;
}

export function reset_authorView_categoryTree_movedCategory_dictionaryLookup() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return;
	}
	appState.authorView.categoryTree.movedCategory.dictionaryLookup = null;
}

export function get_authorView_categoryTree_movedCategory_givenLanguage() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.movedCategory.givenLanguage;
}

export function set_authorView_categoryTree_movedCategory_givenLanguage(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		appState.authorView.categoryTree.movedCategory = {};
	}
	appState.authorView.categoryTree.movedCategory.givenLanguage = eventData.givenLanguage;
}

export function reset_authorView_categoryTree_movedCategory_givenLanguage() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return;
	}
	appState.authorView.categoryTree.movedCategory.givenLanguage = null;
}

export function get_authorView_categoryTree_movedCategory_wantedLanguage() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.movedCategory.wantedLanguage;
}

export function set_authorView_categoryTree_movedCategory_wantedLanguage(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		appState.authorView.categoryTree.movedCategory = {};
	}
	appState.authorView.categoryTree.movedCategory.wantedLanguage = eventData.wantedLanguage;
}

export function reset_authorView_categoryTree_movedCategory_wantedLanguage() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return;
	}
	appState.authorView.categoryTree.movedCategory.wantedLanguage = null;
}

export function get_authorView_categoryTree_movedCategory_rootCategoryId() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.movedCategory.rootCategoryId;
}

export function set_authorView_categoryTree_movedCategory_rootCategoryId(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		appState.authorView.categoryTree.movedCategory = {};
	}
	appState.authorView.categoryTree.movedCategory.rootCategoryId = eventData.rootCategoryId;
}

export function reset_authorView_categoryTree_movedCategory_rootCategoryId() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return;
	}
	appState.authorView.categoryTree.movedCategory.rootCategoryId = null;
}

export function get_authorView_categoryTree_movedCategory_CategoryTreeItem() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.movedCategory.CategoryTreeItem;
}

export function set_authorView_categoryTree_movedCategory_CategoryTreeItem(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		appState.authorView.categoryTree.movedCategory = {};
	}
	appState.authorView.categoryTree.movedCategory.CategoryTreeItem = eventData.CategoryTreeItem;
}

export function reset_authorView_categoryTree_movedCategory_CategoryTreeItem() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return;
	}
	appState.authorView.categoryTree.movedCategory.CategoryTreeItem = null;
}

export function get_authorView_categoryTree_movedCategory_childCategories() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.authorView.categoryTree.movedCategory.childCategories;
}

export function set_authorView_categoryTree_movedCategory_childCategories(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		appState.authorView.categoryTree.movedCategory = {};
	}
	appState.authorView.categoryTree.movedCategory.childCategories = eventData.childCategories;
}

export function reset_authorView_categoryTree_movedCategory_childCategories() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	if (!appState.authorView.categoryTree.movedCategory) {
		return;
	}
	appState.authorView.categoryTree.movedCategory.childCategories = null;
}

export function get_authorView_categoryTree_previewCsv() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.categoryTree) {
		return undefined;
	}
	return appState.authorView.categoryTree.previewCsv;
}

export function set_authorView_categoryTree_previewCsv(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.categoryTree) {
		appState.authorView.categoryTree = {};
	}
	appState.authorView.categoryTree.previewCsv = eventData.previewCsv;
}

export function reset_authorView_categoryTree_previewCsv() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.categoryTree) {
		return;
	}
	appState.authorView.categoryTree.previewCsv = null;
}

export function get_authorView_cardView() {
	if (!appState.authorView) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.authorView.cardView);
}

export function set_authorView_cardView(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	appState.authorView.cardView = eventData.cardView;
}

export function reset_authorView_cardView() {
	if (!appState.authorView) {
		return;
	}
	appState.authorView.cardView = null;
}

export function merge_authorView_cardView(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	if (eventData.cardList !== undefined) {
		appState.authorView.cardView.cardList = eventData.cardList;
	}
	if (eventData.naturalInputOrder !== undefined) {
		appState.authorView.cardView.naturalInputOrder = eventData.naturalInputOrder;
	}
	if (eventData.filter !== undefined) {
		appState.authorView.cardView.filter = eventData.filter;
	}
	if (eventData.filterNonScheduled !== undefined) {
		appState.authorView.cardView.filterNonScheduled = eventData.filterNonScheduled;
	}
	if (eventData.editedCard !== undefined) {
		appState.authorView.cardView.editedCard = eventData.editedCard;
	}
	if (eventData.newCard !== undefined) {
		appState.authorView.cardView.newCard = eventData.newCard;
	}
	if (eventData.cardDuplicates !== undefined) {
		appState.authorView.cardView.cardDuplicates = eventData.cardDuplicates;
	}
	if (eventData.deleteCard !== undefined) {
		appState.authorView.cardView.deleteCard = eventData.deleteCard;
	}
	if (eventData.dictionaryValue !== undefined) {
		appState.authorView.cardView.dictionaryValue = eventData.dictionaryValue;
	}
	if (eventData.selectedCardIds !== undefined) {
		appState.authorView.cardView.selectedCardIds = eventData.selectedCardIds;
	}
	if (eventData.movedCardIds !== undefined) {
		appState.authorView.cardView.movedCardIds = eventData.movedCardIds;
	}
	if (eventData.dragTargetCardId !== undefined) {
		appState.authorView.cardView.dragTargetCardId = eventData.dragTargetCardId;
	}
}

export function get_authorView_cardView_cardList() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.authorView.cardView.cardList);
}

export function set_authorView_cardView_cardList(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	appState.authorView.cardView.cardList = eventData.cardList;
}

export function reset_authorView_cardView_cardList() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	appState.authorView.cardView.cardList = null;
}

export function merge_authorView_cardView_cardList(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	if (!appState.authorView.cardView.cardList) {
		appState.authorView.cardView.cardList = {};
	}
	if (eventData.cardId !== undefined) {
		appState.authorView.cardView.cardList.cardId = eventData.cardId;
	}
	if (eventData.given !== undefined) {
		appState.authorView.cardView.cardList.given = eventData.given;
	}
	if (eventData.wanted !== undefined) {
		appState.authorView.cardView.cardList.wanted = eventData.wanted;
	}
	if (eventData.image !== undefined) {
		appState.authorView.cardView.cardList.image = eventData.image;
	}
	if (eventData.cardAuthor !== undefined) {
		appState.authorView.cardView.cardList.cardAuthor = eventData.cardAuthor;
	}
	if (eventData.cardIndex !== undefined) {
		appState.authorView.cardView.cardList.cardIndex = eventData.cardIndex;
	}
	if (eventData.categoryId !== undefined) {
		appState.authorView.cardView.cardList.categoryId = eventData.categoryId;
	}
	if (eventData.rootCategoryId !== undefined) {
		appState.authorView.cardView.cardList.rootCategoryId = eventData.rootCategoryId;
	}
	if (eventData.next !== undefined) {
		appState.authorView.cardView.cardList.next = eventData.next;
	}
}

export function get_authorView_cardView_naturalInputOrder() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	return appState.authorView.cardView.naturalInputOrder;
}

export function set_authorView_cardView_naturalInputOrder(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	appState.authorView.cardView.naturalInputOrder = eventData.naturalInputOrder;
}

export function reset_authorView_cardView_naturalInputOrder() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	appState.authorView.cardView.naturalInputOrder = null;
}

export function get_authorView_cardView_filter() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	return appState.authorView.cardView.filter;
}

export function set_authorView_cardView_filter(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	appState.authorView.cardView.filter = eventData.filter;
}

export function reset_authorView_cardView_filter() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	appState.authorView.cardView.filter = null;
}

export function get_authorView_cardView_filterNonScheduled() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	return appState.authorView.cardView.filterNonScheduled;
}

export function set_authorView_cardView_filterNonScheduled(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	appState.authorView.cardView.filterNonScheduled = eventData.filterNonScheduled;
}

export function reset_authorView_cardView_filterNonScheduled() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	appState.authorView.cardView.filterNonScheduled = null;
}

export function get_authorView_cardView_editedCard() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.authorView.cardView.editedCard);
}

export function set_authorView_cardView_editedCard(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	appState.authorView.cardView.editedCard = eventData.editedCard;
}

export function reset_authorView_cardView_editedCard() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	appState.authorView.cardView.editedCard = null;
}

export function merge_authorView_cardView_editedCard(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	if (!appState.authorView.cardView.editedCard) {
		appState.authorView.cardView.editedCard = {};
	}
	if (eventData.cardId !== undefined) {
		appState.authorView.cardView.editedCard.cardId = eventData.cardId;
	}
	if (eventData.given !== undefined) {
		appState.authorView.cardView.editedCard.given = eventData.given;
	}
	if (eventData.wanted !== undefined) {
		appState.authorView.cardView.editedCard.wanted = eventData.wanted;
	}
	if (eventData.index !== undefined) {
		appState.authorView.cardView.editedCard.index = eventData.index;
	}
	if (eventData.image !== undefined) {
		appState.authorView.cardView.editedCard.image = eventData.image;
	}
}

export function get_authorView_cardView_editedCard_cardId() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	if (!appState.authorView.cardView.editedCard) {
		return undefined;
	}
	return appState.authorView.cardView.editedCard.cardId;
}

export function set_authorView_cardView_editedCard_cardId(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	if (!appState.authorView.cardView.editedCard) {
		appState.authorView.cardView.editedCard = {};
	}
	appState.authorView.cardView.editedCard.cardId = eventData.cardId;
}

export function reset_authorView_cardView_editedCard_cardId() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	if (!appState.authorView.cardView.editedCard) {
		return;
	}
	appState.authorView.cardView.editedCard.cardId = null;
}

export function get_authorView_cardView_editedCard_given() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	if (!appState.authorView.cardView.editedCard) {
		return undefined;
	}
	return appState.authorView.cardView.editedCard.given;
}

export function set_authorView_cardView_editedCard_given(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	if (!appState.authorView.cardView.editedCard) {
		appState.authorView.cardView.editedCard = {};
	}
	appState.authorView.cardView.editedCard.given = eventData.given;
}

export function reset_authorView_cardView_editedCard_given() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	if (!appState.authorView.cardView.editedCard) {
		return;
	}
	appState.authorView.cardView.editedCard.given = null;
}

export function get_authorView_cardView_editedCard_wanted() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	if (!appState.authorView.cardView.editedCard) {
		return undefined;
	}
	return appState.authorView.cardView.editedCard.wanted;
}

export function set_authorView_cardView_editedCard_wanted(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	if (!appState.authorView.cardView.editedCard) {
		appState.authorView.cardView.editedCard = {};
	}
	appState.authorView.cardView.editedCard.wanted = eventData.wanted;
}

export function reset_authorView_cardView_editedCard_wanted() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	if (!appState.authorView.cardView.editedCard) {
		return;
	}
	appState.authorView.cardView.editedCard.wanted = null;
}

export function get_authorView_cardView_editedCard_index() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	if (!appState.authorView.cardView.editedCard) {
		return undefined;
	}
	return appState.authorView.cardView.editedCard.index;
}

export function set_authorView_cardView_editedCard_index(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	if (!appState.authorView.cardView.editedCard) {
		appState.authorView.cardView.editedCard = {};
	}
	appState.authorView.cardView.editedCard.index = eventData.index;
}

export function reset_authorView_cardView_editedCard_index() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	if (!appState.authorView.cardView.editedCard) {
		return;
	}
	appState.authorView.cardView.editedCard.index = null;
}

export function get_authorView_cardView_editedCard_image() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	if (!appState.authorView.cardView.editedCard) {
		return undefined;
	}
	return appState.authorView.cardView.editedCard.image;
}

export function set_authorView_cardView_editedCard_image(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	if (!appState.authorView.cardView.editedCard) {
		appState.authorView.cardView.editedCard = {};
	}
	appState.authorView.cardView.editedCard.image = eventData.image;
}

export function reset_authorView_cardView_editedCard_image() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	if (!appState.authorView.cardView.editedCard) {
		return;
	}
	appState.authorView.cardView.editedCard.image = null;
}

export function get_authorView_cardView_newCard() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.authorView.cardView.newCard);
}

export function set_authorView_cardView_newCard(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	appState.authorView.cardView.newCard = eventData.newCard;
}

export function reset_authorView_cardView_newCard() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	appState.authorView.cardView.newCard = null;
}

export function merge_authorView_cardView_newCard(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	if (!appState.authorView.cardView.newCard) {
		appState.authorView.cardView.newCard = {};
	}
	if (eventData.given !== undefined) {
		appState.authorView.cardView.newCard.given = eventData.given;
	}
	if (eventData.wanted !== undefined) {
		appState.authorView.cardView.newCard.wanted = eventData.wanted;
	}
	if (eventData.index !== undefined) {
		appState.authorView.cardView.newCard.index = eventData.index;
	}
	if (eventData.image !== undefined) {
		appState.authorView.cardView.newCard.image = eventData.image;
	}
	if (eventData.file !== undefined) {
		appState.authorView.cardView.newCard.file = eventData.file;
	}
	if (eventData.displaySpinner !== undefined) {
		appState.authorView.cardView.newCard.displaySpinner = eventData.displaySpinner;
	}
	if (eventData.displayTranslateSpinner !== undefined) {
		appState.authorView.cardView.newCard.displayTranslateSpinner = eventData.displayTranslateSpinner;
	}
}

export function get_authorView_cardView_newCard_given() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	if (!appState.authorView.cardView.newCard) {
		return undefined;
	}
	return appState.authorView.cardView.newCard.given;
}

export function set_authorView_cardView_newCard_given(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	if (!appState.authorView.cardView.newCard) {
		appState.authorView.cardView.newCard = {};
	}
	appState.authorView.cardView.newCard.given = eventData.given;
}

export function reset_authorView_cardView_newCard_given() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	if (!appState.authorView.cardView.newCard) {
		return;
	}
	appState.authorView.cardView.newCard.given = null;
}

export function get_authorView_cardView_newCard_wanted() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	if (!appState.authorView.cardView.newCard) {
		return undefined;
	}
	return appState.authorView.cardView.newCard.wanted;
}

export function set_authorView_cardView_newCard_wanted(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	if (!appState.authorView.cardView.newCard) {
		appState.authorView.cardView.newCard = {};
	}
	appState.authorView.cardView.newCard.wanted = eventData.wanted;
}

export function reset_authorView_cardView_newCard_wanted() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	if (!appState.authorView.cardView.newCard) {
		return;
	}
	appState.authorView.cardView.newCard.wanted = null;
}

export function get_authorView_cardView_newCard_index() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	if (!appState.authorView.cardView.newCard) {
		return undefined;
	}
	return appState.authorView.cardView.newCard.index;
}

export function set_authorView_cardView_newCard_index(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	if (!appState.authorView.cardView.newCard) {
		appState.authorView.cardView.newCard = {};
	}
	appState.authorView.cardView.newCard.index = eventData.index;
}

export function reset_authorView_cardView_newCard_index() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	if (!appState.authorView.cardView.newCard) {
		return;
	}
	appState.authorView.cardView.newCard.index = null;
}

export function get_authorView_cardView_newCard_image() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	if (!appState.authorView.cardView.newCard) {
		return undefined;
	}
	return appState.authorView.cardView.newCard.image;
}

export function set_authorView_cardView_newCard_image(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	if (!appState.authorView.cardView.newCard) {
		appState.authorView.cardView.newCard = {};
	}
	appState.authorView.cardView.newCard.image = eventData.image;
}

export function reset_authorView_cardView_newCard_image() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	if (!appState.authorView.cardView.newCard) {
		return;
	}
	appState.authorView.cardView.newCard.image = null;
}

export function get_authorView_cardView_newCard_file() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	if (!appState.authorView.cardView.newCard) {
		return undefined;
	}
	return appState.authorView.cardView.newCard.file;
}

export function set_authorView_cardView_newCard_file(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	if (!appState.authorView.cardView.newCard) {
		appState.authorView.cardView.newCard = {};
	}
	appState.authorView.cardView.newCard.file = eventData.file;
}

export function reset_authorView_cardView_newCard_file() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	if (!appState.authorView.cardView.newCard) {
		return;
	}
	appState.authorView.cardView.newCard.file = null;
}

export function get_authorView_cardView_newCard_displaySpinner() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	if (!appState.authorView.cardView.newCard) {
		return undefined;
	}
	return appState.authorView.cardView.newCard.displaySpinner;
}

export function set_authorView_cardView_newCard_displaySpinner(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	if (!appState.authorView.cardView.newCard) {
		appState.authorView.cardView.newCard = {};
	}
	appState.authorView.cardView.newCard.displaySpinner = eventData.displaySpinner;
}

export function reset_authorView_cardView_newCard_displaySpinner() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	if (!appState.authorView.cardView.newCard) {
		return;
	}
	appState.authorView.cardView.newCard.displaySpinner = null;
}

export function get_authorView_cardView_newCard_displayTranslateSpinner() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	if (!appState.authorView.cardView.newCard) {
		return undefined;
	}
	return appState.authorView.cardView.newCard.displayTranslateSpinner;
}

export function set_authorView_cardView_newCard_displayTranslateSpinner(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	if (!appState.authorView.cardView.newCard) {
		appState.authorView.cardView.newCard = {};
	}
	appState.authorView.cardView.newCard.displayTranslateSpinner = eventData.displayTranslateSpinner;
}

export function reset_authorView_cardView_newCard_displayTranslateSpinner() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	if (!appState.authorView.cardView.newCard) {
		return;
	}
	appState.authorView.cardView.newCard.displayTranslateSpinner = null;
}

export function get_authorView_cardView_cardDuplicates() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	return appState.authorView.cardView.cardDuplicates;
}

export function set_authorView_cardView_cardDuplicates(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	appState.authorView.cardView.cardDuplicates = eventData.cardDuplicates;
}

export function reset_authorView_cardView_cardDuplicates() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	appState.authorView.cardView.cardDuplicates = null;
}

export function get_authorView_cardView_deleteCard() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.authorView.cardView.deleteCard);
}

export function set_authorView_cardView_deleteCard(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	appState.authorView.cardView.deleteCard = eventData.deleteCard;
}

export function reset_authorView_cardView_deleteCard() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	appState.authorView.cardView.deleteCard = null;
}

export function merge_authorView_cardView_deleteCard(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	if (!appState.authorView.cardView.deleteCard) {
		appState.authorView.cardView.deleteCard = {};
	}
	if (eventData.confirmDelete !== undefined) {
		appState.authorView.cardView.deleteCard.confirmDelete = eventData.confirmDelete;
	}
	if (eventData.cardId !== undefined) {
		appState.authorView.cardView.deleteCard.cardId = eventData.cardId;
	}
}

export function get_authorView_cardView_deleteCard_confirmDelete() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	if (!appState.authorView.cardView.deleteCard) {
		return undefined;
	}
	return appState.authorView.cardView.deleteCard.confirmDelete;
}

export function set_authorView_cardView_deleteCard_confirmDelete(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	if (!appState.authorView.cardView.deleteCard) {
		appState.authorView.cardView.deleteCard = {};
	}
	appState.authorView.cardView.deleteCard.confirmDelete = eventData.confirmDelete;
}

export function reset_authorView_cardView_deleteCard_confirmDelete() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	if (!appState.authorView.cardView.deleteCard) {
		return;
	}
	appState.authorView.cardView.deleteCard.confirmDelete = null;
}

export function get_authorView_cardView_deleteCard_cardId() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	if (!appState.authorView.cardView.deleteCard) {
		return undefined;
	}
	return appState.authorView.cardView.deleteCard.cardId;
}

export function set_authorView_cardView_deleteCard_cardId(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	if (!appState.authorView.cardView.deleteCard) {
		appState.authorView.cardView.deleteCard = {};
	}
	appState.authorView.cardView.deleteCard.cardId = eventData.cardId;
}

export function reset_authorView_cardView_deleteCard_cardId() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	if (!appState.authorView.cardView.deleteCard) {
		return;
	}
	appState.authorView.cardView.deleteCard.cardId = null;
}

export function get_authorView_cardView_dictionaryValue() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	return appState.authorView.cardView.dictionaryValue;
}

export function set_authorView_cardView_dictionaryValue(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	appState.authorView.cardView.dictionaryValue = eventData.dictionaryValue;
}

export function reset_authorView_cardView_dictionaryValue() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	appState.authorView.cardView.dictionaryValue = null;
}

export function get_authorView_cardView_selectedCardIds() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	return appState.authorView.cardView.selectedCardIds;
}

export function set_authorView_cardView_selectedCardIds(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	appState.authorView.cardView.selectedCardIds = eventData.selectedCardIds;
}

export function reset_authorView_cardView_selectedCardIds() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	appState.authorView.cardView.selectedCardIds = null;
}

export function get_authorView_cardView_movedCardIds() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	return appState.authorView.cardView.movedCardIds;
}

export function set_authorView_cardView_movedCardIds(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	appState.authorView.cardView.movedCardIds = eventData.movedCardIds;
}

export function reset_authorView_cardView_movedCardIds() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	appState.authorView.cardView.movedCardIds = null;
}

export function get_authorView_cardView_dragTargetCardId() {
	if (!appState.authorView) {
		return undefined;
	}
	if (!appState.authorView.cardView) {
		return undefined;
	}
	return appState.authorView.cardView.dragTargetCardId;
}

export function set_authorView_cardView_dragTargetCardId(eventData) {
	if (!appState.authorView) {
		appState.authorView = {};
	}
	if (!appState.authorView.cardView) {
		appState.authorView.cardView = {};
	}
	appState.authorView.cardView.dragTargetCardId = eventData.dragTargetCardId;
}

export function reset_authorView_cardView_dragTargetCardId() {
	if (!appState.authorView) {
		return;
	}
	if (!appState.authorView.cardView) {
		return;
	}
	appState.authorView.cardView.dragTargetCardId = null;
}

