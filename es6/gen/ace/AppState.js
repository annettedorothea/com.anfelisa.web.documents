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
 * generated with de.acegen 0.9.7
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
	if (!appState.loggedInUser) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.loggedInUser);
}

export function set_loggedInUser(eventData) {
	appState.loggedInUser = eventData.loggedInUser;
}

export function reset_loggedInUser() {
	appState.loggedInUser = undefined;
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
	appState.loggedInUser.username = undefined;
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
	appState.loggedInUser.role = undefined;
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
	appState.loggedInUser.password = undefined;
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
	appState.displaySpinner = undefined;
}

export function get_language() {
	return appState.language;
}

export function set_language(eventData) {
	appState.language = eventData.language;
}

export function reset_language() {
	appState.language = undefined;
}

export function get_texts() {
	return appState.texts;
}

export function set_texts(eventData) {
	appState.texts = eventData.texts;
}

export function reset_texts() {
	appState.texts = undefined;
}

export function get_displaySaveBugDialog() {
	return appState.displaySaveBugDialog;
}

export function set_displaySaveBugDialog(eventData) {
	appState.displaySaveBugDialog = eventData.displaySaveBugDialog;
}

export function reset_displaySaveBugDialog() {
	appState.displaySaveBugDialog = undefined;
}

export function get_message() {
	if (!appState.message) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.message);
}

export function set_message(eventData) {
	appState.message = eventData.message;
}

export function reset_message() {
	appState.message = undefined;
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
	appState.message.type = undefined;
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
	appState.message.text = undefined;
}

export function get_loginView() {
	if (appState.mainView && appState.mainView.isLoginView === true) {
		return AppUtils.deepCopy(appState.mainView);
	}
	return undefined;
}

export function set_loginView(eventData) {
	if (!!eventData.loginView) {
		appState.mainView = eventData.loginView;
		appState.mainView.isLoginView = true;
	} else {
		appState.mainView = {
			isLoginView : true
		};
	}
}

export function reset_loginView() {
	appState.mainView = undefined;
}

export function merge_loginView(eventData) {
	if (!appState.mainView) {
		appState.mainView = {
			isLoginView : true
		};
	}
	if (eventData.username !== undefined) {
		appState.mainView.username = eventData.username;
	}
	if (eventData.saveInLocalStorage !== undefined) {
		appState.mainView.saveInLocalStorage = eventData.saveInLocalStorage;
	}
}

export function get_loginView_username() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isLoginView !== true) {
		return undefined;
	}
	return appState.mainView.username;
}

export function set_loginView_username(eventData) {
	if (!appState.mainView || appState.mainView.isLoginView !== true) {
		appState.mainView = {
			isLoginView : true
		};
	}
	appState.mainView.username = eventData.username;
}

export function reset_loginView_username() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.username = undefined;
}

export function get_loginView_saveInLocalStorage() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isLoginView !== true) {
		return undefined;
	}
	return appState.mainView.saveInLocalStorage;
}

export function set_loginView_saveInLocalStorage(eventData) {
	if (!appState.mainView || appState.mainView.isLoginView !== true) {
		appState.mainView = {
			isLoginView : true
		};
	}
	appState.mainView.saveInLocalStorage = eventData.saveInLocalStorage;
}

export function reset_loginView_saveInLocalStorage() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.saveInLocalStorage = undefined;
}

export function get_registrationView() {
	if (appState.mainView && appState.mainView.isRegistrationView === true) {
		return AppUtils.deepCopy(appState.mainView);
	}
	return undefined;
}

export function set_registrationView(eventData) {
	if (!!eventData.registrationView) {
		appState.mainView = eventData.registrationView;
		appState.mainView.isRegistrationView = true;
	} else {
		appState.mainView = {
			isRegistrationView : true
		};
	}
}

export function reset_registrationView() {
	appState.mainView = undefined;
}

export function merge_registrationView(eventData) {
	if (!appState.mainView) {
		appState.mainView = {
			isRegistrationView : true
		};
	}
	if (eventData.displayUsernameSpinner !== undefined) {
		appState.mainView.displayUsernameSpinner = eventData.displayUsernameSpinner;
	}
	if (eventData.available !== undefined) {
		appState.mainView.available = eventData.available;
	}
	if (eventData.username !== undefined) {
		appState.mainView.username = eventData.username;
	}
	if (eventData.email !== undefined) {
		appState.mainView.email = eventData.email;
	}
	if (eventData.emailInvalid !== undefined) {
		appState.mainView.emailInvalid = eventData.emailInvalid;
	}
	if (eventData.passwordMismatch !== undefined) {
		appState.mainView.passwordMismatch = eventData.passwordMismatch;
	}
}

export function get_registrationView_displayUsernameSpinner() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isRegistrationView !== true) {
		return undefined;
	}
	return appState.mainView.displayUsernameSpinner;
}

export function set_registrationView_displayUsernameSpinner(eventData) {
	if (!appState.mainView || appState.mainView.isRegistrationView !== true) {
		appState.mainView = {
			isRegistrationView : true
		};
	}
	appState.mainView.displayUsernameSpinner = eventData.displayUsernameSpinner;
}

export function reset_registrationView_displayUsernameSpinner() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.displayUsernameSpinner = undefined;
}

export function get_registrationView_available() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isRegistrationView !== true) {
		return undefined;
	}
	return appState.mainView.available;
}

export function set_registrationView_available(eventData) {
	if (!appState.mainView || appState.mainView.isRegistrationView !== true) {
		appState.mainView = {
			isRegistrationView : true
		};
	}
	appState.mainView.available = eventData.available;
}

export function reset_registrationView_available() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.available = undefined;
}

export function get_registrationView_username() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isRegistrationView !== true) {
		return undefined;
	}
	return appState.mainView.username;
}

export function set_registrationView_username(eventData) {
	if (!appState.mainView || appState.mainView.isRegistrationView !== true) {
		appState.mainView = {
			isRegistrationView : true
		};
	}
	appState.mainView.username = eventData.username;
}

export function reset_registrationView_username() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.username = undefined;
}

export function get_registrationView_email() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isRegistrationView !== true) {
		return undefined;
	}
	return appState.mainView.email;
}

export function set_registrationView_email(eventData) {
	if (!appState.mainView || appState.mainView.isRegistrationView !== true) {
		appState.mainView = {
			isRegistrationView : true
		};
	}
	appState.mainView.email = eventData.email;
}

export function reset_registrationView_email() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.email = undefined;
}

export function get_registrationView_emailInvalid() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isRegistrationView !== true) {
		return undefined;
	}
	return appState.mainView.emailInvalid;
}

export function set_registrationView_emailInvalid(eventData) {
	if (!appState.mainView || appState.mainView.isRegistrationView !== true) {
		appState.mainView = {
			isRegistrationView : true
		};
	}
	appState.mainView.emailInvalid = eventData.emailInvalid;
}

export function reset_registrationView_emailInvalid() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.emailInvalid = undefined;
}

export function get_registrationView_passwordMismatch() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isRegistrationView !== true) {
		return undefined;
	}
	return appState.mainView.passwordMismatch;
}

export function set_registrationView_passwordMismatch(eventData) {
	if (!appState.mainView || appState.mainView.isRegistrationView !== true) {
		appState.mainView = {
			isRegistrationView : true
		};
	}
	appState.mainView.passwordMismatch = eventData.passwordMismatch;
}

export function reset_registrationView_passwordMismatch() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.passwordMismatch = undefined;
}

export function get_forgotPasswordView() {
	if (appState.mainView && appState.mainView.isForgotPasswordView === true) {
		return AppUtils.deepCopy(appState.mainView);
	}
	return undefined;
}

export function set_forgotPasswordView(eventData) {
	if (!!eventData.forgotPasswordView) {
		appState.mainView = eventData.forgotPasswordView;
		appState.mainView.isForgotPasswordView = true;
	} else {
		appState.mainView = {
			isForgotPasswordView : true
		};
	}
}

export function reset_forgotPasswordView() {
	appState.mainView = undefined;
}

export function merge_forgotPasswordView(eventData) {
	if (!appState.mainView) {
		appState.mainView = {
			isForgotPasswordView : true
		};
	}
	if (eventData.username !== undefined) {
		appState.mainView.username = eventData.username;
	}
}

export function get_forgotPasswordView_username() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isForgotPasswordView !== true) {
		return undefined;
	}
	return appState.mainView.username;
}

export function set_forgotPasswordView_username(eventData) {
	if (!appState.mainView || appState.mainView.isForgotPasswordView !== true) {
		appState.mainView = {
			isForgotPasswordView : true
		};
	}
	appState.mainView.username = eventData.username;
}

export function reset_forgotPasswordView_username() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.username = undefined;
}

export function get_resetPasswordView() {
	if (appState.mainView && appState.mainView.isResetPasswordView === true) {
		return AppUtils.deepCopy(appState.mainView);
	}
	return undefined;
}

export function set_resetPasswordView(eventData) {
	if (!!eventData.resetPasswordView) {
		appState.mainView = eventData.resetPasswordView;
		appState.mainView.isResetPasswordView = true;
	} else {
		appState.mainView = {
			isResetPasswordView : true
		};
	}
}

export function reset_resetPasswordView() {
	appState.mainView = undefined;
}

export function merge_resetPasswordView(eventData) {
	if (!appState.mainView) {
		appState.mainView = {
			isResetPasswordView : true
		};
	}
	if (eventData.token !== undefined) {
		appState.mainView.token = eventData.token;
	}
	if (eventData.passwordMismatch !== undefined) {
		appState.mainView.passwordMismatch = eventData.passwordMismatch;
	}
}

export function get_resetPasswordView_token() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isResetPasswordView !== true) {
		return undefined;
	}
	return appState.mainView.token;
}

export function set_resetPasswordView_token(eventData) {
	if (!appState.mainView || appState.mainView.isResetPasswordView !== true) {
		appState.mainView = {
			isResetPasswordView : true
		};
	}
	appState.mainView.token = eventData.token;
}

export function reset_resetPasswordView_token() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.token = undefined;
}

export function get_resetPasswordView_passwordMismatch() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isResetPasswordView !== true) {
		return undefined;
	}
	return appState.mainView.passwordMismatch;
}

export function set_resetPasswordView_passwordMismatch(eventData) {
	if (!appState.mainView || appState.mainView.isResetPasswordView !== true) {
		appState.mainView = {
			isResetPasswordView : true
		};
	}
	appState.mainView.passwordMismatch = eventData.passwordMismatch;
}

export function reset_resetPasswordView_passwordMismatch() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.passwordMismatch = undefined;
}

export function get_dashboardView() {
	if (appState.mainView && appState.mainView.isDashboardView === true) {
		return AppUtils.deepCopy(appState.mainView);
	}
	return undefined;
}

export function set_dashboardView(eventData) {
	if (!!eventData.dashboardView) {
		appState.mainView = eventData.dashboardView;
		appState.mainView.isDashboardView = true;
	} else {
		appState.mainView = {
			isDashboardView : true
		};
	}
}

export function reset_dashboardView() {
	appState.mainView = undefined;
}

export function merge_dashboardView(eventData) {
	if (!appState.mainView) {
		appState.mainView = {
			isDashboardView : true
		};
	}
	if (eventData.boxList !== undefined) {
		appState.mainView.boxList = eventData.boxList;
	}
	if (eventData.deleteBox !== undefined) {
		appState.mainView.deleteBox = eventData.deleteBox;
	}
}

export function get_dashboardView_boxList() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isDashboardView !== true) {
		return undefined;
	}
	if (!appState.mainView.boxList) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.mainView.boxList);
}

export function set_dashboardView_boxList(eventData) {
	if (!appState.mainView || appState.mainView.isDashboardView !== true) {
		appState.mainView = {
			isDashboardView : true
		};
	}
	appState.mainView.boxList = eventData.boxList;
}

export function reset_dashboardView_boxList() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.boxList = undefined;
}

export function merge_dashboardView_boxList(eventData) {
	if (!appState.mainView) {
		appState.mainView = {};
	}
	if (!appState.mainView.boxList) {
		appState.mainView.boxList = {};
	}
	if (eventData.openTodaysCards !== undefined) {
		appState.mainView.boxList.openTodaysCards = eventData.openTodaysCards;
	}
	if (eventData.categoryName !== undefined) {
		appState.mainView.boxList.categoryName = eventData.categoryName;
	}
	if (eventData.categoryId !== undefined) {
		appState.mainView.boxList.categoryId = eventData.categoryId;
	}
	if (eventData.boxId !== undefined) {
		appState.mainView.boxList.boxId = eventData.boxId;
	}
	if (eventData.quality0Count !== undefined) {
		appState.mainView.boxList.quality0Count = eventData.quality0Count;
	}
	if (eventData.quality1Count !== undefined) {
		appState.mainView.boxList.quality1Count = eventData.quality1Count;
	}
	if (eventData.quality2Count !== undefined) {
		appState.mainView.boxList.quality2Count = eventData.quality2Count;
	}
	if (eventData.quality3Count !== undefined) {
		appState.mainView.boxList.quality3Count = eventData.quality3Count;
	}
	if (eventData.quality4Count !== undefined) {
		appState.mainView.boxList.quality4Count = eventData.quality4Count;
	}
	if (eventData.quality5Count !== undefined) {
		appState.mainView.boxList.quality5Count = eventData.quality5Count;
	}
	if (eventData.countsPerDayNextWeek !== undefined) {
		appState.mainView.boxList.countsPerDayNextWeek = eventData.countsPerDayNextWeek;
	}
	if (eventData.maxCardsPerDay !== undefined) {
		appState.mainView.boxList.maxCardsPerDay = eventData.maxCardsPerDay;
	}
}

export function get_dashboardView_deleteBox() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isDashboardView !== true) {
		return undefined;
	}
	if (!appState.mainView.deleteBox) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.mainView.deleteBox);
}

export function set_dashboardView_deleteBox(eventData) {
	if (!appState.mainView || appState.mainView.isDashboardView !== true) {
		appState.mainView = {
			isDashboardView : true
		};
	}
	appState.mainView.deleteBox = eventData.deleteBox;
}

export function reset_dashboardView_deleteBox() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.deleteBox = undefined;
}

export function merge_dashboardView_deleteBox(eventData) {
	if (!appState.mainView) {
		appState.mainView = {};
	}
	if (!appState.mainView.deleteBox) {
		appState.mainView.deleteBox = {};
	}
	if (eventData.confirmDelete !== undefined) {
		appState.mainView.deleteBox.confirmDelete = eventData.confirmDelete;
	}
	if (eventData.boxId !== undefined) {
		appState.mainView.deleteBox.boxId = eventData.boxId;
	}
}

export function get_dashboardView_deleteBox_confirmDelete() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isDashboardView !== true) {
		return undefined;
	}
	if (!appState.mainView.deleteBox) {
		return undefined;
	}
	return appState.mainView.deleteBox.confirmDelete;
}

export function set_dashboardView_deleteBox_confirmDelete(eventData) {
	if (!appState.mainView || appState.mainView.isDashboardView !== true) {
		appState.mainView = {
			isDashboardView : true
		};
	}
	if (!appState.mainView.deleteBox) {
		appState.mainView.deleteBox = {};
	}
	appState.mainView.deleteBox.confirmDelete = eventData.confirmDelete;
}

export function reset_dashboardView_deleteBox_confirmDelete() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.deleteBox) {
		return;
	}
	appState.mainView.deleteBox.confirmDelete = undefined;
}

export function get_dashboardView_deleteBox_boxId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isDashboardView !== true) {
		return undefined;
	}
	if (!appState.mainView.deleteBox) {
		return undefined;
	}
	return appState.mainView.deleteBox.boxId;
}

export function set_dashboardView_deleteBox_boxId(eventData) {
	if (!appState.mainView || appState.mainView.isDashboardView !== true) {
		appState.mainView = {
			isDashboardView : true
		};
	}
	if (!appState.mainView.deleteBox) {
		appState.mainView.deleteBox = {};
	}
	appState.mainView.deleteBox.boxId = eventData.boxId;
}

export function reset_dashboardView_deleteBox_boxId() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.deleteBox) {
		return;
	}
	appState.mainView.deleteBox.boxId = undefined;
}

export function get_boxSettingsView() {
	if (appState.mainView && appState.mainView.isBoxSettingsView === true) {
		return AppUtils.deepCopy(appState.mainView);
	}
	return undefined;
}

export function set_boxSettingsView(eventData) {
	if (!!eventData.boxSettingsView) {
		appState.mainView = eventData.boxSettingsView;
		appState.mainView.isBoxSettingsView = true;
	} else {
		appState.mainView = {
			isBoxSettingsView : true
		};
	}
}

export function reset_boxSettingsView() {
	appState.mainView = undefined;
}

export function merge_boxSettingsView(eventData) {
	if (!appState.mainView) {
		appState.mainView = {
			isBoxSettingsView : true
		};
	}
	if (eventData.maxIntervalInvalid !== undefined) {
		appState.mainView.maxIntervalInvalid = eventData.maxIntervalInvalid;
	}
	if (eventData.maxCardsPerDayInvalid !== undefined) {
		appState.mainView.maxCardsPerDayInvalid = eventData.maxCardsPerDayInvalid;
	}
	if (eventData.dictionaryLookupInvalid !== undefined) {
		appState.mainView.dictionaryLookupInvalid = eventData.dictionaryLookupInvalid;
	}
	if (eventData.boxId !== undefined) {
		appState.mainView.boxId = eventData.boxId;
	}
	if (eventData.maxInterval !== undefined) {
		appState.mainView.maxInterval = eventData.maxInterval;
	}
	if (eventData.maxCardsPerDay !== undefined) {
		appState.mainView.maxCardsPerDay = eventData.maxCardsPerDay;
	}
	if (eventData.categoryName !== undefined) {
		appState.mainView.categoryName = eventData.categoryName;
	}
	if (eventData.dictionaryLookup !== undefined) {
		appState.mainView.dictionaryLookup = eventData.dictionaryLookup;
	}
	if (eventData.givenLanguage !== undefined) {
		appState.mainView.givenLanguage = eventData.givenLanguage;
	}
	if (eventData.wantedLanguage !== undefined) {
		appState.mainView.wantedLanguage = eventData.wantedLanguage;
	}
	if (eventData.categoryId !== undefined) {
		appState.mainView.categoryId = eventData.categoryId;
	}
}

export function get_boxSettingsView_maxIntervalInvalid() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isBoxSettingsView !== true) {
		return undefined;
	}
	return appState.mainView.maxIntervalInvalid;
}

export function set_boxSettingsView_maxIntervalInvalid(eventData) {
	if (!appState.mainView || appState.mainView.isBoxSettingsView !== true) {
		appState.mainView = {
			isBoxSettingsView : true
		};
	}
	appState.mainView.maxIntervalInvalid = eventData.maxIntervalInvalid;
}

export function reset_boxSettingsView_maxIntervalInvalid() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.maxIntervalInvalid = undefined;
}

export function get_boxSettingsView_maxCardsPerDayInvalid() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isBoxSettingsView !== true) {
		return undefined;
	}
	return appState.mainView.maxCardsPerDayInvalid;
}

export function set_boxSettingsView_maxCardsPerDayInvalid(eventData) {
	if (!appState.mainView || appState.mainView.isBoxSettingsView !== true) {
		appState.mainView = {
			isBoxSettingsView : true
		};
	}
	appState.mainView.maxCardsPerDayInvalid = eventData.maxCardsPerDayInvalid;
}

export function reset_boxSettingsView_maxCardsPerDayInvalid() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.maxCardsPerDayInvalid = undefined;
}

export function get_boxSettingsView_dictionaryLookupInvalid() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isBoxSettingsView !== true) {
		return undefined;
	}
	return appState.mainView.dictionaryLookupInvalid;
}

export function set_boxSettingsView_dictionaryLookupInvalid(eventData) {
	if (!appState.mainView || appState.mainView.isBoxSettingsView !== true) {
		appState.mainView = {
			isBoxSettingsView : true
		};
	}
	appState.mainView.dictionaryLookupInvalid = eventData.dictionaryLookupInvalid;
}

export function reset_boxSettingsView_dictionaryLookupInvalid() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.dictionaryLookupInvalid = undefined;
}

export function get_boxSettingsView_boxId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isBoxSettingsView !== true) {
		return undefined;
	}
	return appState.mainView.boxId;
}

export function set_boxSettingsView_boxId(eventData) {
	if (!appState.mainView || appState.mainView.isBoxSettingsView !== true) {
		appState.mainView = {
			isBoxSettingsView : true
		};
	}
	appState.mainView.boxId = eventData.boxId;
}

export function reset_boxSettingsView_boxId() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.boxId = undefined;
}

export function get_boxSettingsView_maxInterval() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isBoxSettingsView !== true) {
		return undefined;
	}
	return appState.mainView.maxInterval;
}

export function set_boxSettingsView_maxInterval(eventData) {
	if (!appState.mainView || appState.mainView.isBoxSettingsView !== true) {
		appState.mainView = {
			isBoxSettingsView : true
		};
	}
	appState.mainView.maxInterval = eventData.maxInterval;
}

export function reset_boxSettingsView_maxInterval() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.maxInterval = undefined;
}

export function get_boxSettingsView_maxCardsPerDay() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isBoxSettingsView !== true) {
		return undefined;
	}
	return appState.mainView.maxCardsPerDay;
}

export function set_boxSettingsView_maxCardsPerDay(eventData) {
	if (!appState.mainView || appState.mainView.isBoxSettingsView !== true) {
		appState.mainView = {
			isBoxSettingsView : true
		};
	}
	appState.mainView.maxCardsPerDay = eventData.maxCardsPerDay;
}

export function reset_boxSettingsView_maxCardsPerDay() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.maxCardsPerDay = undefined;
}

export function get_boxSettingsView_categoryName() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isBoxSettingsView !== true) {
		return undefined;
	}
	return appState.mainView.categoryName;
}

export function set_boxSettingsView_categoryName(eventData) {
	if (!appState.mainView || appState.mainView.isBoxSettingsView !== true) {
		appState.mainView = {
			isBoxSettingsView : true
		};
	}
	appState.mainView.categoryName = eventData.categoryName;
}

export function reset_boxSettingsView_categoryName() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.categoryName = undefined;
}

export function get_boxSettingsView_dictionaryLookup() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isBoxSettingsView !== true) {
		return undefined;
	}
	return appState.mainView.dictionaryLookup;
}

export function set_boxSettingsView_dictionaryLookup(eventData) {
	if (!appState.mainView || appState.mainView.isBoxSettingsView !== true) {
		appState.mainView = {
			isBoxSettingsView : true
		};
	}
	appState.mainView.dictionaryLookup = eventData.dictionaryLookup;
}

export function reset_boxSettingsView_dictionaryLookup() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.dictionaryLookup = undefined;
}

export function get_boxSettingsView_givenLanguage() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isBoxSettingsView !== true) {
		return undefined;
	}
	return appState.mainView.givenLanguage;
}

export function set_boxSettingsView_givenLanguage(eventData) {
	if (!appState.mainView || appState.mainView.isBoxSettingsView !== true) {
		appState.mainView = {
			isBoxSettingsView : true
		};
	}
	appState.mainView.givenLanguage = eventData.givenLanguage;
}

export function reset_boxSettingsView_givenLanguage() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.givenLanguage = undefined;
}

export function get_boxSettingsView_wantedLanguage() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isBoxSettingsView !== true) {
		return undefined;
	}
	return appState.mainView.wantedLanguage;
}

export function set_boxSettingsView_wantedLanguage(eventData) {
	if (!appState.mainView || appState.mainView.isBoxSettingsView !== true) {
		appState.mainView = {
			isBoxSettingsView : true
		};
	}
	appState.mainView.wantedLanguage = eventData.wantedLanguage;
}

export function reset_boxSettingsView_wantedLanguage() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.wantedLanguage = undefined;
}

export function get_boxSettingsView_categoryId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isBoxSettingsView !== true) {
		return undefined;
	}
	return appState.mainView.categoryId;
}

export function set_boxSettingsView_categoryId(eventData) {
	if (!appState.mainView || appState.mainView.isBoxSettingsView !== true) {
		appState.mainView = {
			isBoxSettingsView : true
		};
	}
	appState.mainView.categoryId = eventData.categoryId;
}

export function reset_boxSettingsView_categoryId() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.categoryId = undefined;
}

export function get_profileView() {
	if (appState.mainView && appState.mainView.isProfileView === true) {
		return AppUtils.deepCopy(appState.mainView);
	}
	return undefined;
}

export function set_profileView(eventData) {
	if (!!eventData.profileView) {
		appState.mainView = eventData.profileView;
		appState.mainView.isProfileView = true;
	} else {
		appState.mainView = {
			isProfileView : true
		};
	}
}

export function reset_profileView() {
	appState.mainView = undefined;
}

export function merge_profileView(eventData) {
	if (!appState.mainView) {
		appState.mainView = {
			isProfileView : true
		};
	}
	if (eventData.username !== undefined) {
		appState.mainView.username = eventData.username;
	}
	if (eventData.email !== undefined) {
		appState.mainView.email = eventData.email;
	}
	if (eventData.role !== undefined) {
		appState.mainView.role = eventData.role;
	}
	if (eventData.showDeleteUserDialog !== undefined) {
		appState.mainView.showDeleteUserDialog = eventData.showDeleteUserDialog;
	}
}

export function get_profileView_username() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isProfileView !== true) {
		return undefined;
	}
	return appState.mainView.username;
}

export function set_profileView_username(eventData) {
	if (!appState.mainView || appState.mainView.isProfileView !== true) {
		appState.mainView = {
			isProfileView : true
		};
	}
	appState.mainView.username = eventData.username;
}

export function reset_profileView_username() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.username = undefined;
}

export function get_profileView_email() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isProfileView !== true) {
		return undefined;
	}
	return appState.mainView.email;
}

export function set_profileView_email(eventData) {
	if (!appState.mainView || appState.mainView.isProfileView !== true) {
		appState.mainView = {
			isProfileView : true
		};
	}
	appState.mainView.email = eventData.email;
}

export function reset_profileView_email() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.email = undefined;
}

export function get_profileView_role() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isProfileView !== true) {
		return undefined;
	}
	return appState.mainView.role;
}

export function set_profileView_role(eventData) {
	if (!appState.mainView || appState.mainView.isProfileView !== true) {
		appState.mainView = {
			isProfileView : true
		};
	}
	appState.mainView.role = eventData.role;
}

export function reset_profileView_role() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.role = undefined;
}

export function get_profileView_showDeleteUserDialog() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isProfileView !== true) {
		return undefined;
	}
	return appState.mainView.showDeleteUserDialog;
}

export function set_profileView_showDeleteUserDialog(eventData) {
	if (!appState.mainView || appState.mainView.isProfileView !== true) {
		appState.mainView = {
			isProfileView : true
		};
	}
	appState.mainView.showDeleteUserDialog = eventData.showDeleteUserDialog;
}

export function reset_profileView_showDeleteUserDialog() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.showDeleteUserDialog = undefined;
}

export function get_userListView() {
	if (appState.mainView && appState.mainView.isUserListView === true) {
		return AppUtils.deepCopy(appState.mainView);
	}
	return undefined;
}

export function set_userListView(eventData) {
	if (!!eventData.userListView) {
		appState.mainView = eventData.userListView;
		appState.mainView.isUserListView = true;
	} else {
		appState.mainView = {
			isUserListView : true
		};
	}
}

export function reset_userListView() {
	appState.mainView = undefined;
}

export function merge_userListView(eventData) {
	if (!appState.mainView) {
		appState.mainView = {
			isUserListView : true
		};
	}
	if (eventData.userList !== undefined) {
		appState.mainView.userList = eventData.userList;
	}
	if (eventData.showDeleteUserDialog !== undefined) {
		appState.mainView.showDeleteUserDialog = eventData.showDeleteUserDialog;
	}
	if (eventData.usernameToBeDeleted !== undefined) {
		appState.mainView.usernameToBeDeleted = eventData.usernameToBeDeleted;
	}
}

export function get_userListView_userList() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isUserListView !== true) {
		return undefined;
	}
	if (!appState.mainView.userList) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.mainView.userList);
}

export function set_userListView_userList(eventData) {
	if (!appState.mainView || appState.mainView.isUserListView !== true) {
		appState.mainView = {
			isUserListView : true
		};
	}
	appState.mainView.userList = eventData.userList;
}

export function reset_userListView_userList() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.userList = undefined;
}

export function merge_userListView_userList(eventData) {
	if (!appState.mainView) {
		appState.mainView = {};
	}
	if (!appState.mainView.userList) {
		appState.mainView.userList = {};
	}
	if (eventData.userId !== undefined) {
		appState.mainView.userList.userId = eventData.userId;
	}
	if (eventData.username !== undefined) {
		appState.mainView.userList.username = eventData.username;
	}
	if (eventData.password !== undefined) {
		appState.mainView.userList.password = eventData.password;
	}
	if (eventData.email !== undefined) {
		appState.mainView.userList.email = eventData.email;
	}
	if (eventData.role !== undefined) {
		appState.mainView.userList.role = eventData.role;
	}
	if (eventData.emailConfirmed !== undefined) {
		appState.mainView.userList.emailConfirmed = eventData.emailConfirmed;
	}
}

export function get_userListView_showDeleteUserDialog() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isUserListView !== true) {
		return undefined;
	}
	return appState.mainView.showDeleteUserDialog;
}

export function set_userListView_showDeleteUserDialog(eventData) {
	if (!appState.mainView || appState.mainView.isUserListView !== true) {
		appState.mainView = {
			isUserListView : true
		};
	}
	appState.mainView.showDeleteUserDialog = eventData.showDeleteUserDialog;
}

export function reset_userListView_showDeleteUserDialog() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.showDeleteUserDialog = undefined;
}

export function get_userListView_usernameToBeDeleted() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isUserListView !== true) {
		return undefined;
	}
	return appState.mainView.usernameToBeDeleted;
}

export function set_userListView_usernameToBeDeleted(eventData) {
	if (!appState.mainView || appState.mainView.isUserListView !== true) {
		appState.mainView = {
			isUserListView : true
		};
	}
	appState.mainView.usernameToBeDeleted = eventData.usernameToBeDeleted;
}

export function reset_userListView_usernameToBeDeleted() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.usernameToBeDeleted = undefined;
}

export function get_cardView() {
	if (appState.mainView && appState.mainView.isCardView === true) {
		return AppUtils.deepCopy(appState.mainView);
	}
	return undefined;
}

export function set_cardView(eventData) {
	if (!!eventData.cardView) {
		appState.mainView = eventData.cardView;
		appState.mainView.isCardView = true;
	} else {
		appState.mainView = {
			isCardView : true
		};
	}
}

export function reset_cardView() {
	appState.mainView = undefined;
}

export function merge_cardView(eventData) {
	if (!appState.mainView) {
		appState.mainView = {
			isCardView : true
		};
	}
	if (eventData.cardId !== undefined) {
		appState.mainView.cardId = eventData.cardId;
	}
	if (eventData.categoryId !== undefined) {
		appState.mainView.categoryId = eventData.categoryId;
	}
	if (eventData.count !== undefined) {
		appState.mainView.count = eventData.count;
	}
	if (eventData.given !== undefined) {
		appState.mainView.given = eventData.given;
	}
	if (eventData.image !== undefined) {
		appState.mainView.image = eventData.image;
	}
	if (eventData.lastQuality !== undefined) {
		appState.mainView.lastQuality = eventData.lastQuality;
	}
	if (eventData.rootCategoryId !== undefined) {
		appState.mainView.rootCategoryId = eventData.rootCategoryId;
	}
	if (eventData.scheduledCardId !== undefined) {
		appState.mainView.scheduledCardId = eventData.scheduledCardId;
	}
	if (eventData.reinforceCardId !== undefined) {
		appState.mainView.reinforceCardId = eventData.reinforceCardId;
	}
	if (eventData.scheduledDate !== undefined) {
		appState.mainView.scheduledDate = eventData.scheduledDate;
	}
	if (eventData.scoredDate !== undefined) {
		appState.mainView.scoredDate = eventData.scoredDate;
	}
	if (eventData.wanted !== undefined) {
		appState.mainView.wanted = eventData.wanted;
	}
	if (eventData.openTodaysCards !== undefined) {
		appState.mainView.openTodaysCards = eventData.openTodaysCards;
	}
	if (eventData.allTodaysCards !== undefined) {
		appState.mainView.allTodaysCards = eventData.allTodaysCards;
	}
	if (eventData.index !== undefined) {
		appState.mainView.index = eventData.index;
	}
	if (eventData.enableScoreButtons !== undefined) {
		appState.mainView.enableScoreButtons = eventData.enableScoreButtons;
	}
	if (eventData.displayImage !== undefined) {
		appState.mainView.displayImage = eventData.displayImage;
	}
	if (eventData.boxId !== undefined) {
		appState.mainView.boxId = eventData.boxId;
	}
}

export function get_cardView_cardId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isCardView !== true) {
		return undefined;
	}
	return appState.mainView.cardId;
}

export function set_cardView_cardId(eventData) {
	if (!appState.mainView || appState.mainView.isCardView !== true) {
		appState.mainView = {
			isCardView : true
		};
	}
	appState.mainView.cardId = eventData.cardId;
}

export function reset_cardView_cardId() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.cardId = undefined;
}

export function get_cardView_categoryId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isCardView !== true) {
		return undefined;
	}
	return appState.mainView.categoryId;
}

export function set_cardView_categoryId(eventData) {
	if (!appState.mainView || appState.mainView.isCardView !== true) {
		appState.mainView = {
			isCardView : true
		};
	}
	appState.mainView.categoryId = eventData.categoryId;
}

export function reset_cardView_categoryId() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.categoryId = undefined;
}

export function get_cardView_count() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isCardView !== true) {
		return undefined;
	}
	return appState.mainView.count;
}

export function set_cardView_count(eventData) {
	if (!appState.mainView || appState.mainView.isCardView !== true) {
		appState.mainView = {
			isCardView : true
		};
	}
	appState.mainView.count = eventData.count;
}

export function reset_cardView_count() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.count = undefined;
}

export function get_cardView_given() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isCardView !== true) {
		return undefined;
	}
	return appState.mainView.given;
}

export function set_cardView_given(eventData) {
	if (!appState.mainView || appState.mainView.isCardView !== true) {
		appState.mainView = {
			isCardView : true
		};
	}
	appState.mainView.given = eventData.given;
}

export function reset_cardView_given() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.given = undefined;
}

export function get_cardView_image() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isCardView !== true) {
		return undefined;
	}
	return appState.mainView.image;
}

export function set_cardView_image(eventData) {
	if (!appState.mainView || appState.mainView.isCardView !== true) {
		appState.mainView = {
			isCardView : true
		};
	}
	appState.mainView.image = eventData.image;
}

export function reset_cardView_image() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.image = undefined;
}

export function get_cardView_lastQuality() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isCardView !== true) {
		return undefined;
	}
	return appState.mainView.lastQuality;
}

export function set_cardView_lastQuality(eventData) {
	if (!appState.mainView || appState.mainView.isCardView !== true) {
		appState.mainView = {
			isCardView : true
		};
	}
	appState.mainView.lastQuality = eventData.lastQuality;
}

export function reset_cardView_lastQuality() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.lastQuality = undefined;
}

export function get_cardView_rootCategoryId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isCardView !== true) {
		return undefined;
	}
	return appState.mainView.rootCategoryId;
}

export function set_cardView_rootCategoryId(eventData) {
	if (!appState.mainView || appState.mainView.isCardView !== true) {
		appState.mainView = {
			isCardView : true
		};
	}
	appState.mainView.rootCategoryId = eventData.rootCategoryId;
}

export function reset_cardView_rootCategoryId() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.rootCategoryId = undefined;
}

export function get_cardView_scheduledCardId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isCardView !== true) {
		return undefined;
	}
	return appState.mainView.scheduledCardId;
}

export function set_cardView_scheduledCardId(eventData) {
	if (!appState.mainView || appState.mainView.isCardView !== true) {
		appState.mainView = {
			isCardView : true
		};
	}
	appState.mainView.scheduledCardId = eventData.scheduledCardId;
}

export function reset_cardView_scheduledCardId() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.scheduledCardId = undefined;
}

export function get_cardView_reinforceCardId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isCardView !== true) {
		return undefined;
	}
	return appState.mainView.reinforceCardId;
}

export function set_cardView_reinforceCardId(eventData) {
	if (!appState.mainView || appState.mainView.isCardView !== true) {
		appState.mainView = {
			isCardView : true
		};
	}
	appState.mainView.reinforceCardId = eventData.reinforceCardId;
}

export function reset_cardView_reinforceCardId() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.reinforceCardId = undefined;
}

export function get_cardView_scheduledDate() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isCardView !== true) {
		return undefined;
	}
	return appState.mainView.scheduledDate;
}

export function set_cardView_scheduledDate(eventData) {
	if (!appState.mainView || appState.mainView.isCardView !== true) {
		appState.mainView = {
			isCardView : true
		};
	}
	appState.mainView.scheduledDate = eventData.scheduledDate;
}

export function reset_cardView_scheduledDate() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.scheduledDate = undefined;
}

export function get_cardView_scoredDate() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isCardView !== true) {
		return undefined;
	}
	return appState.mainView.scoredDate;
}

export function set_cardView_scoredDate(eventData) {
	if (!appState.mainView || appState.mainView.isCardView !== true) {
		appState.mainView = {
			isCardView : true
		};
	}
	appState.mainView.scoredDate = eventData.scoredDate;
}

export function reset_cardView_scoredDate() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.scoredDate = undefined;
}

export function get_cardView_wanted() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isCardView !== true) {
		return undefined;
	}
	return appState.mainView.wanted;
}

export function set_cardView_wanted(eventData) {
	if (!appState.mainView || appState.mainView.isCardView !== true) {
		appState.mainView = {
			isCardView : true
		};
	}
	appState.mainView.wanted = eventData.wanted;
}

export function reset_cardView_wanted() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.wanted = undefined;
}

export function get_cardView_openTodaysCards() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isCardView !== true) {
		return undefined;
	}
	return appState.mainView.openTodaysCards;
}

export function set_cardView_openTodaysCards(eventData) {
	if (!appState.mainView || appState.mainView.isCardView !== true) {
		appState.mainView = {
			isCardView : true
		};
	}
	appState.mainView.openTodaysCards = eventData.openTodaysCards;
}

export function reset_cardView_openTodaysCards() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.openTodaysCards = undefined;
}

export function get_cardView_allTodaysCards() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isCardView !== true) {
		return undefined;
	}
	return appState.mainView.allTodaysCards;
}

export function set_cardView_allTodaysCards(eventData) {
	if (!appState.mainView || appState.mainView.isCardView !== true) {
		appState.mainView = {
			isCardView : true
		};
	}
	appState.mainView.allTodaysCards = eventData.allTodaysCards;
}

export function reset_cardView_allTodaysCards() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.allTodaysCards = undefined;
}

export function get_cardView_index() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isCardView !== true) {
		return undefined;
	}
	return appState.mainView.index;
}

export function set_cardView_index(eventData) {
	if (!appState.mainView || appState.mainView.isCardView !== true) {
		appState.mainView = {
			isCardView : true
		};
	}
	appState.mainView.index = eventData.index;
}

export function reset_cardView_index() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.index = undefined;
}

export function get_cardView_enableScoreButtons() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isCardView !== true) {
		return undefined;
	}
	return appState.mainView.enableScoreButtons;
}

export function set_cardView_enableScoreButtons(eventData) {
	if (!appState.mainView || appState.mainView.isCardView !== true) {
		appState.mainView = {
			isCardView : true
		};
	}
	appState.mainView.enableScoreButtons = eventData.enableScoreButtons;
}

export function reset_cardView_enableScoreButtons() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.enableScoreButtons = undefined;
}

export function get_cardView_displayImage() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isCardView !== true) {
		return undefined;
	}
	return appState.mainView.displayImage;
}

export function set_cardView_displayImage(eventData) {
	if (!appState.mainView || appState.mainView.isCardView !== true) {
		appState.mainView = {
			isCardView : true
		};
	}
	appState.mainView.displayImage = eventData.displayImage;
}

export function reset_cardView_displayImage() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.displayImage = undefined;
}

export function get_cardView_boxId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isCardView !== true) {
		return undefined;
	}
	return appState.mainView.boxId;
}

export function set_cardView_boxId(eventData) {
	if (!appState.mainView || appState.mainView.isCardView !== true) {
		appState.mainView = {
			isCardView : true
		};
	}
	appState.mainView.boxId = eventData.boxId;
}

export function reset_cardView_boxId() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.boxId = undefined;
}

export function get_authorView() {
	if (appState.mainView && appState.mainView.isAuthorView === true) {
		return AppUtils.deepCopy(appState.mainView);
	}
	return undefined;
}

export function set_authorView(eventData) {
	if (!!eventData.authorView) {
		appState.mainView = eventData.authorView;
		appState.mainView.isAuthorView = true;
	} else {
		appState.mainView = {
			isAuthorView : true
		};
	}
}

export function reset_authorView() {
	appState.mainView = undefined;
}

export function merge_authorView(eventData) {
	if (!appState.mainView) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (eventData.categoryTree !== undefined) {
		appState.mainView.categoryTree = eventData.categoryTree;
	}
	if (eventData.cardView !== undefined) {
		appState.mainView.cardView = eventData.cardView;
	}
}

export function get_authorView_categoryTree() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.mainView.categoryTree);
}

export function set_authorView_categoryTree(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	appState.mainView.categoryTree = eventData.categoryTree;
}

export function reset_authorView_categoryTree() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.categoryTree = undefined;
}

export function merge_authorView_categoryTree(eventData) {
	if (!appState.mainView) {
		appState.mainView = {};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (eventData.selectedCategory !== undefined) {
		appState.mainView.categoryTree.selectedCategory = eventData.selectedCategory;
	}
	if (eventData.rootCategory !== undefined) {
		appState.mainView.categoryTree.rootCategory = eventData.rootCategory;
	}
	if (eventData.displayDeleteCategory !== undefined) {
		appState.mainView.categoryTree.displayDeleteCategory = eventData.displayDeleteCategory;
	}
	if (eventData.categoryName !== undefined) {
		appState.mainView.categoryTree.categoryName = eventData.categoryName;
	}
	if (eventData.displayEditCategory !== undefined) {
		appState.mainView.categoryTree.displayEditCategory = eventData.displayEditCategory;
	}
	if (eventData.displayNewCategory !== undefined) {
		appState.mainView.categoryTree.displayNewCategory = eventData.displayNewCategory;
	}
	if (eventData.dropAllowed !== undefined) {
		appState.mainView.categoryTree.dropAllowed = eventData.dropAllowed;
	}
	if (eventData.dropTargetCategoryId !== undefined) {
		appState.mainView.categoryTree.dropTargetCategoryId = eventData.dropTargetCategoryId;
	}
	if (eventData.movedCategory !== undefined) {
		appState.mainView.categoryTree.movedCategory = eventData.movedCategory;
	}
	if (eventData.previewCsv !== undefined) {
		appState.mainView.categoryTree.previewCsv = eventData.previewCsv;
	}
}

export function get_authorView_categoryTree_selectedCategory() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.mainView.categoryTree.selectedCategory);
}

export function set_authorView_categoryTree_selectedCategory(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	appState.mainView.categoryTree.selectedCategory = eventData.selectedCategory;
}

export function reset_authorView_categoryTree_selectedCategory() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	appState.mainView.categoryTree.selectedCategory = undefined;
}

export function merge_authorView_categoryTree_selectedCategory(eventData) {
	if (!appState.mainView) {
		appState.mainView = {};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		appState.mainView.categoryTree.selectedCategory = {};
	}
	if (eventData.categoryId !== undefined) {
		appState.mainView.categoryTree.selectedCategory.categoryId = eventData.categoryId;
	}
	if (eventData.categoryName !== undefined) {
		appState.mainView.categoryTree.selectedCategory.categoryName = eventData.categoryName;
	}
	if (eventData.categoryIndex !== undefined) {
		appState.mainView.categoryTree.selectedCategory.categoryIndex = eventData.categoryIndex;
	}
	if (eventData.empty !== undefined) {
		appState.mainView.categoryTree.selectedCategory.empty = eventData.empty;
	}
	if (eventData.parentCategoryId !== undefined) {
		appState.mainView.categoryTree.selectedCategory.parentCategoryId = eventData.parentCategoryId;
	}
	if (eventData.dictionaryLookup !== undefined) {
		appState.mainView.categoryTree.selectedCategory.dictionaryLookup = eventData.dictionaryLookup;
	}
	if (eventData.givenLanguage !== undefined) {
		appState.mainView.categoryTree.selectedCategory.givenLanguage = eventData.givenLanguage;
	}
	if (eventData.wantedLanguage !== undefined) {
		appState.mainView.categoryTree.selectedCategory.wantedLanguage = eventData.wantedLanguage;
	}
	if (eventData.rootCategoryId !== undefined) {
		appState.mainView.categoryTree.selectedCategory.rootCategoryId = eventData.rootCategoryId;
	}
	if (eventData.CategoryTreeItem !== undefined) {
		appState.mainView.categoryTree.selectedCategory.CategoryTreeItem = eventData.CategoryTreeItem;
	}
	if (eventData.childCategories !== undefined) {
		appState.mainView.categoryTree.selectedCategory.childCategories = eventData.childCategories;
	}
}

export function get_authorView_categoryTree_selectedCategory_categoryId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.selectedCategory.categoryId;
}

export function set_authorView_categoryTree_selectedCategory_categoryId(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		appState.mainView.categoryTree.selectedCategory = {};
	}
	appState.mainView.categoryTree.selectedCategory.categoryId = eventData.categoryId;
}

export function reset_authorView_categoryTree_selectedCategory_categoryId() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return;
	}
	appState.mainView.categoryTree.selectedCategory.categoryId = undefined;
}

export function get_authorView_categoryTree_selectedCategory_categoryName() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.selectedCategory.categoryName;
}

export function set_authorView_categoryTree_selectedCategory_categoryName(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		appState.mainView.categoryTree.selectedCategory = {};
	}
	appState.mainView.categoryTree.selectedCategory.categoryName = eventData.categoryName;
}

export function reset_authorView_categoryTree_selectedCategory_categoryName() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return;
	}
	appState.mainView.categoryTree.selectedCategory.categoryName = undefined;
}

export function get_authorView_categoryTree_selectedCategory_categoryIndex() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.selectedCategory.categoryIndex;
}

export function set_authorView_categoryTree_selectedCategory_categoryIndex(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		appState.mainView.categoryTree.selectedCategory = {};
	}
	appState.mainView.categoryTree.selectedCategory.categoryIndex = eventData.categoryIndex;
}

export function reset_authorView_categoryTree_selectedCategory_categoryIndex() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return;
	}
	appState.mainView.categoryTree.selectedCategory.categoryIndex = undefined;
}

export function get_authorView_categoryTree_selectedCategory_empty() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.selectedCategory.empty;
}

export function set_authorView_categoryTree_selectedCategory_empty(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		appState.mainView.categoryTree.selectedCategory = {};
	}
	appState.mainView.categoryTree.selectedCategory.empty = eventData.empty;
}

export function reset_authorView_categoryTree_selectedCategory_empty() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return;
	}
	appState.mainView.categoryTree.selectedCategory.empty = undefined;
}

export function get_authorView_categoryTree_selectedCategory_parentCategoryId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.selectedCategory.parentCategoryId;
}

export function set_authorView_categoryTree_selectedCategory_parentCategoryId(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		appState.mainView.categoryTree.selectedCategory = {};
	}
	appState.mainView.categoryTree.selectedCategory.parentCategoryId = eventData.parentCategoryId;
}

export function reset_authorView_categoryTree_selectedCategory_parentCategoryId() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return;
	}
	appState.mainView.categoryTree.selectedCategory.parentCategoryId = undefined;
}

export function get_authorView_categoryTree_selectedCategory_dictionaryLookup() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.selectedCategory.dictionaryLookup;
}

export function set_authorView_categoryTree_selectedCategory_dictionaryLookup(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		appState.mainView.categoryTree.selectedCategory = {};
	}
	appState.mainView.categoryTree.selectedCategory.dictionaryLookup = eventData.dictionaryLookup;
}

export function reset_authorView_categoryTree_selectedCategory_dictionaryLookup() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return;
	}
	appState.mainView.categoryTree.selectedCategory.dictionaryLookup = undefined;
}

export function get_authorView_categoryTree_selectedCategory_givenLanguage() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.selectedCategory.givenLanguage;
}

export function set_authorView_categoryTree_selectedCategory_givenLanguage(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		appState.mainView.categoryTree.selectedCategory = {};
	}
	appState.mainView.categoryTree.selectedCategory.givenLanguage = eventData.givenLanguage;
}

export function reset_authorView_categoryTree_selectedCategory_givenLanguage() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return;
	}
	appState.mainView.categoryTree.selectedCategory.givenLanguage = undefined;
}

export function get_authorView_categoryTree_selectedCategory_wantedLanguage() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.selectedCategory.wantedLanguage;
}

export function set_authorView_categoryTree_selectedCategory_wantedLanguage(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		appState.mainView.categoryTree.selectedCategory = {};
	}
	appState.mainView.categoryTree.selectedCategory.wantedLanguage = eventData.wantedLanguage;
}

export function reset_authorView_categoryTree_selectedCategory_wantedLanguage() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return;
	}
	appState.mainView.categoryTree.selectedCategory.wantedLanguage = undefined;
}

export function get_authorView_categoryTree_selectedCategory_rootCategoryId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.selectedCategory.rootCategoryId;
}

export function set_authorView_categoryTree_selectedCategory_rootCategoryId(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		appState.mainView.categoryTree.selectedCategory = {};
	}
	appState.mainView.categoryTree.selectedCategory.rootCategoryId = eventData.rootCategoryId;
}

export function reset_authorView_categoryTree_selectedCategory_rootCategoryId() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return;
	}
	appState.mainView.categoryTree.selectedCategory.rootCategoryId = undefined;
}

export function get_authorView_categoryTree_selectedCategory_CategoryTreeItem() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.selectedCategory.CategoryTreeItem;
}

export function set_authorView_categoryTree_selectedCategory_CategoryTreeItem(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		appState.mainView.categoryTree.selectedCategory = {};
	}
	appState.mainView.categoryTree.selectedCategory.CategoryTreeItem = eventData.CategoryTreeItem;
}

export function reset_authorView_categoryTree_selectedCategory_CategoryTreeItem() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return;
	}
	appState.mainView.categoryTree.selectedCategory.CategoryTreeItem = undefined;
}

export function get_authorView_categoryTree_selectedCategory_childCategories() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.selectedCategory.childCategories;
}

export function set_authorView_categoryTree_selectedCategory_childCategories(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		appState.mainView.categoryTree.selectedCategory = {};
	}
	appState.mainView.categoryTree.selectedCategory.childCategories = eventData.childCategories;
}

export function reset_authorView_categoryTree_selectedCategory_childCategories() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.selectedCategory) {
		return;
	}
	appState.mainView.categoryTree.selectedCategory.childCategories = undefined;
}

export function get_authorView_categoryTree_rootCategory() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.mainView.categoryTree.rootCategory);
}

export function set_authorView_categoryTree_rootCategory(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	appState.mainView.categoryTree.rootCategory = eventData.rootCategory;
}

export function reset_authorView_categoryTree_rootCategory() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	appState.mainView.categoryTree.rootCategory = undefined;
}

export function merge_authorView_categoryTree_rootCategory(eventData) {
	if (!appState.mainView) {
		appState.mainView = {};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		appState.mainView.categoryTree.rootCategory = {};
	}
	if (eventData.categoryId !== undefined) {
		appState.mainView.categoryTree.rootCategory.categoryId = eventData.categoryId;
	}
	if (eventData.categoryName !== undefined) {
		appState.mainView.categoryTree.rootCategory.categoryName = eventData.categoryName;
	}
	if (eventData.categoryIndex !== undefined) {
		appState.mainView.categoryTree.rootCategory.categoryIndex = eventData.categoryIndex;
	}
	if (eventData.empty !== undefined) {
		appState.mainView.categoryTree.rootCategory.empty = eventData.empty;
	}
	if (eventData.parentCategoryId !== undefined) {
		appState.mainView.categoryTree.rootCategory.parentCategoryId = eventData.parentCategoryId;
	}
	if (eventData.dictionaryLookup !== undefined) {
		appState.mainView.categoryTree.rootCategory.dictionaryLookup = eventData.dictionaryLookup;
	}
	if (eventData.givenLanguage !== undefined) {
		appState.mainView.categoryTree.rootCategory.givenLanguage = eventData.givenLanguage;
	}
	if (eventData.wantedLanguage !== undefined) {
		appState.mainView.categoryTree.rootCategory.wantedLanguage = eventData.wantedLanguage;
	}
	if (eventData.rootCategoryId !== undefined) {
		appState.mainView.categoryTree.rootCategory.rootCategoryId = eventData.rootCategoryId;
	}
	if (eventData.CategoryTreeItem !== undefined) {
		appState.mainView.categoryTree.rootCategory.CategoryTreeItem = eventData.CategoryTreeItem;
	}
	if (eventData.childCategories !== undefined) {
		appState.mainView.categoryTree.rootCategory.childCategories = eventData.childCategories;
	}
}

export function get_authorView_categoryTree_rootCategory_categoryId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.rootCategory.categoryId;
}

export function set_authorView_categoryTree_rootCategory_categoryId(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		appState.mainView.categoryTree.rootCategory = {};
	}
	appState.mainView.categoryTree.rootCategory.categoryId = eventData.categoryId;
}

export function reset_authorView_categoryTree_rootCategory_categoryId() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return;
	}
	appState.mainView.categoryTree.rootCategory.categoryId = undefined;
}

export function get_authorView_categoryTree_rootCategory_categoryName() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.rootCategory.categoryName;
}

export function set_authorView_categoryTree_rootCategory_categoryName(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		appState.mainView.categoryTree.rootCategory = {};
	}
	appState.mainView.categoryTree.rootCategory.categoryName = eventData.categoryName;
}

export function reset_authorView_categoryTree_rootCategory_categoryName() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return;
	}
	appState.mainView.categoryTree.rootCategory.categoryName = undefined;
}

export function get_authorView_categoryTree_rootCategory_categoryIndex() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.rootCategory.categoryIndex;
}

export function set_authorView_categoryTree_rootCategory_categoryIndex(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		appState.mainView.categoryTree.rootCategory = {};
	}
	appState.mainView.categoryTree.rootCategory.categoryIndex = eventData.categoryIndex;
}

export function reset_authorView_categoryTree_rootCategory_categoryIndex() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return;
	}
	appState.mainView.categoryTree.rootCategory.categoryIndex = undefined;
}

export function get_authorView_categoryTree_rootCategory_empty() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.rootCategory.empty;
}

export function set_authorView_categoryTree_rootCategory_empty(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		appState.mainView.categoryTree.rootCategory = {};
	}
	appState.mainView.categoryTree.rootCategory.empty = eventData.empty;
}

export function reset_authorView_categoryTree_rootCategory_empty() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return;
	}
	appState.mainView.categoryTree.rootCategory.empty = undefined;
}

export function get_authorView_categoryTree_rootCategory_parentCategoryId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.rootCategory.parentCategoryId;
}

export function set_authorView_categoryTree_rootCategory_parentCategoryId(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		appState.mainView.categoryTree.rootCategory = {};
	}
	appState.mainView.categoryTree.rootCategory.parentCategoryId = eventData.parentCategoryId;
}

export function reset_authorView_categoryTree_rootCategory_parentCategoryId() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return;
	}
	appState.mainView.categoryTree.rootCategory.parentCategoryId = undefined;
}

export function get_authorView_categoryTree_rootCategory_dictionaryLookup() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.rootCategory.dictionaryLookup;
}

export function set_authorView_categoryTree_rootCategory_dictionaryLookup(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		appState.mainView.categoryTree.rootCategory = {};
	}
	appState.mainView.categoryTree.rootCategory.dictionaryLookup = eventData.dictionaryLookup;
}

export function reset_authorView_categoryTree_rootCategory_dictionaryLookup() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return;
	}
	appState.mainView.categoryTree.rootCategory.dictionaryLookup = undefined;
}

export function get_authorView_categoryTree_rootCategory_givenLanguage() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.rootCategory.givenLanguage;
}

export function set_authorView_categoryTree_rootCategory_givenLanguage(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		appState.mainView.categoryTree.rootCategory = {};
	}
	appState.mainView.categoryTree.rootCategory.givenLanguage = eventData.givenLanguage;
}

export function reset_authorView_categoryTree_rootCategory_givenLanguage() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return;
	}
	appState.mainView.categoryTree.rootCategory.givenLanguage = undefined;
}

export function get_authorView_categoryTree_rootCategory_wantedLanguage() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.rootCategory.wantedLanguage;
}

export function set_authorView_categoryTree_rootCategory_wantedLanguage(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		appState.mainView.categoryTree.rootCategory = {};
	}
	appState.mainView.categoryTree.rootCategory.wantedLanguage = eventData.wantedLanguage;
}

export function reset_authorView_categoryTree_rootCategory_wantedLanguage() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return;
	}
	appState.mainView.categoryTree.rootCategory.wantedLanguage = undefined;
}

export function get_authorView_categoryTree_rootCategory_rootCategoryId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.rootCategory.rootCategoryId;
}

export function set_authorView_categoryTree_rootCategory_rootCategoryId(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		appState.mainView.categoryTree.rootCategory = {};
	}
	appState.mainView.categoryTree.rootCategory.rootCategoryId = eventData.rootCategoryId;
}

export function reset_authorView_categoryTree_rootCategory_rootCategoryId() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return;
	}
	appState.mainView.categoryTree.rootCategory.rootCategoryId = undefined;
}

export function get_authorView_categoryTree_rootCategory_CategoryTreeItem() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.rootCategory.CategoryTreeItem;
}

export function set_authorView_categoryTree_rootCategory_CategoryTreeItem(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		appState.mainView.categoryTree.rootCategory = {};
	}
	appState.mainView.categoryTree.rootCategory.CategoryTreeItem = eventData.CategoryTreeItem;
}

export function reset_authorView_categoryTree_rootCategory_CategoryTreeItem() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return;
	}
	appState.mainView.categoryTree.rootCategory.CategoryTreeItem = undefined;
}

export function get_authorView_categoryTree_rootCategory_childCategories() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.rootCategory.childCategories;
}

export function set_authorView_categoryTree_rootCategory_childCategories(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		appState.mainView.categoryTree.rootCategory = {};
	}
	appState.mainView.categoryTree.rootCategory.childCategories = eventData.childCategories;
}

export function reset_authorView_categoryTree_rootCategory_childCategories() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.rootCategory) {
		return;
	}
	appState.mainView.categoryTree.rootCategory.childCategories = undefined;
}

export function get_authorView_categoryTree_displayDeleteCategory() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	return appState.mainView.categoryTree.displayDeleteCategory;
}

export function set_authorView_categoryTree_displayDeleteCategory(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	appState.mainView.categoryTree.displayDeleteCategory = eventData.displayDeleteCategory;
}

export function reset_authorView_categoryTree_displayDeleteCategory() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	appState.mainView.categoryTree.displayDeleteCategory = undefined;
}

export function get_authorView_categoryTree_categoryName() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	return appState.mainView.categoryTree.categoryName;
}

export function set_authorView_categoryTree_categoryName(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	appState.mainView.categoryTree.categoryName = eventData.categoryName;
}

export function reset_authorView_categoryTree_categoryName() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	appState.mainView.categoryTree.categoryName = undefined;
}

export function get_authorView_categoryTree_displayEditCategory() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	return appState.mainView.categoryTree.displayEditCategory;
}

export function set_authorView_categoryTree_displayEditCategory(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	appState.mainView.categoryTree.displayEditCategory = eventData.displayEditCategory;
}

export function reset_authorView_categoryTree_displayEditCategory() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	appState.mainView.categoryTree.displayEditCategory = undefined;
}

export function get_authorView_categoryTree_displayNewCategory() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	return appState.mainView.categoryTree.displayNewCategory;
}

export function set_authorView_categoryTree_displayNewCategory(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	appState.mainView.categoryTree.displayNewCategory = eventData.displayNewCategory;
}

export function reset_authorView_categoryTree_displayNewCategory() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	appState.mainView.categoryTree.displayNewCategory = undefined;
}

export function get_authorView_categoryTree_dropAllowed() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	return appState.mainView.categoryTree.dropAllowed;
}

export function set_authorView_categoryTree_dropAllowed(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	appState.mainView.categoryTree.dropAllowed = eventData.dropAllowed;
}

export function reset_authorView_categoryTree_dropAllowed() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	appState.mainView.categoryTree.dropAllowed = undefined;
}

export function get_authorView_categoryTree_dropTargetCategoryId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	return appState.mainView.categoryTree.dropTargetCategoryId;
}

export function set_authorView_categoryTree_dropTargetCategoryId(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	appState.mainView.categoryTree.dropTargetCategoryId = eventData.dropTargetCategoryId;
}

export function reset_authorView_categoryTree_dropTargetCategoryId() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	appState.mainView.categoryTree.dropTargetCategoryId = undefined;
}

export function get_authorView_categoryTree_movedCategory() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.mainView.categoryTree.movedCategory);
}

export function set_authorView_categoryTree_movedCategory(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	appState.mainView.categoryTree.movedCategory = eventData.movedCategory;
}

export function reset_authorView_categoryTree_movedCategory() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	appState.mainView.categoryTree.movedCategory = undefined;
}

export function merge_authorView_categoryTree_movedCategory(eventData) {
	if (!appState.mainView) {
		appState.mainView = {};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		appState.mainView.categoryTree.movedCategory = {};
	}
	if (eventData.categoryId !== undefined) {
		appState.mainView.categoryTree.movedCategory.categoryId = eventData.categoryId;
	}
	if (eventData.categoryName !== undefined) {
		appState.mainView.categoryTree.movedCategory.categoryName = eventData.categoryName;
	}
	if (eventData.categoryIndex !== undefined) {
		appState.mainView.categoryTree.movedCategory.categoryIndex = eventData.categoryIndex;
	}
	if (eventData.empty !== undefined) {
		appState.mainView.categoryTree.movedCategory.empty = eventData.empty;
	}
	if (eventData.parentCategoryId !== undefined) {
		appState.mainView.categoryTree.movedCategory.parentCategoryId = eventData.parentCategoryId;
	}
	if (eventData.dictionaryLookup !== undefined) {
		appState.mainView.categoryTree.movedCategory.dictionaryLookup = eventData.dictionaryLookup;
	}
	if (eventData.givenLanguage !== undefined) {
		appState.mainView.categoryTree.movedCategory.givenLanguage = eventData.givenLanguage;
	}
	if (eventData.wantedLanguage !== undefined) {
		appState.mainView.categoryTree.movedCategory.wantedLanguage = eventData.wantedLanguage;
	}
	if (eventData.rootCategoryId !== undefined) {
		appState.mainView.categoryTree.movedCategory.rootCategoryId = eventData.rootCategoryId;
	}
	if (eventData.CategoryTreeItem !== undefined) {
		appState.mainView.categoryTree.movedCategory.CategoryTreeItem = eventData.CategoryTreeItem;
	}
	if (eventData.childCategories !== undefined) {
		appState.mainView.categoryTree.movedCategory.childCategories = eventData.childCategories;
	}
}

export function get_authorView_categoryTree_movedCategory_categoryId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.movedCategory.categoryId;
}

export function set_authorView_categoryTree_movedCategory_categoryId(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		appState.mainView.categoryTree.movedCategory = {};
	}
	appState.mainView.categoryTree.movedCategory.categoryId = eventData.categoryId;
}

export function reset_authorView_categoryTree_movedCategory_categoryId() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return;
	}
	appState.mainView.categoryTree.movedCategory.categoryId = undefined;
}

export function get_authorView_categoryTree_movedCategory_categoryName() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.movedCategory.categoryName;
}

export function set_authorView_categoryTree_movedCategory_categoryName(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		appState.mainView.categoryTree.movedCategory = {};
	}
	appState.mainView.categoryTree.movedCategory.categoryName = eventData.categoryName;
}

export function reset_authorView_categoryTree_movedCategory_categoryName() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return;
	}
	appState.mainView.categoryTree.movedCategory.categoryName = undefined;
}

export function get_authorView_categoryTree_movedCategory_categoryIndex() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.movedCategory.categoryIndex;
}

export function set_authorView_categoryTree_movedCategory_categoryIndex(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		appState.mainView.categoryTree.movedCategory = {};
	}
	appState.mainView.categoryTree.movedCategory.categoryIndex = eventData.categoryIndex;
}

export function reset_authorView_categoryTree_movedCategory_categoryIndex() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return;
	}
	appState.mainView.categoryTree.movedCategory.categoryIndex = undefined;
}

export function get_authorView_categoryTree_movedCategory_empty() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.movedCategory.empty;
}

export function set_authorView_categoryTree_movedCategory_empty(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		appState.mainView.categoryTree.movedCategory = {};
	}
	appState.mainView.categoryTree.movedCategory.empty = eventData.empty;
}

export function reset_authorView_categoryTree_movedCategory_empty() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return;
	}
	appState.mainView.categoryTree.movedCategory.empty = undefined;
}

export function get_authorView_categoryTree_movedCategory_parentCategoryId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.movedCategory.parentCategoryId;
}

export function set_authorView_categoryTree_movedCategory_parentCategoryId(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		appState.mainView.categoryTree.movedCategory = {};
	}
	appState.mainView.categoryTree.movedCategory.parentCategoryId = eventData.parentCategoryId;
}

export function reset_authorView_categoryTree_movedCategory_parentCategoryId() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return;
	}
	appState.mainView.categoryTree.movedCategory.parentCategoryId = undefined;
}

export function get_authorView_categoryTree_movedCategory_dictionaryLookup() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.movedCategory.dictionaryLookup;
}

export function set_authorView_categoryTree_movedCategory_dictionaryLookup(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		appState.mainView.categoryTree.movedCategory = {};
	}
	appState.mainView.categoryTree.movedCategory.dictionaryLookup = eventData.dictionaryLookup;
}

export function reset_authorView_categoryTree_movedCategory_dictionaryLookup() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return;
	}
	appState.mainView.categoryTree.movedCategory.dictionaryLookup = undefined;
}

export function get_authorView_categoryTree_movedCategory_givenLanguage() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.movedCategory.givenLanguage;
}

export function set_authorView_categoryTree_movedCategory_givenLanguage(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		appState.mainView.categoryTree.movedCategory = {};
	}
	appState.mainView.categoryTree.movedCategory.givenLanguage = eventData.givenLanguage;
}

export function reset_authorView_categoryTree_movedCategory_givenLanguage() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return;
	}
	appState.mainView.categoryTree.movedCategory.givenLanguage = undefined;
}

export function get_authorView_categoryTree_movedCategory_wantedLanguage() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.movedCategory.wantedLanguage;
}

export function set_authorView_categoryTree_movedCategory_wantedLanguage(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		appState.mainView.categoryTree.movedCategory = {};
	}
	appState.mainView.categoryTree.movedCategory.wantedLanguage = eventData.wantedLanguage;
}

export function reset_authorView_categoryTree_movedCategory_wantedLanguage() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return;
	}
	appState.mainView.categoryTree.movedCategory.wantedLanguage = undefined;
}

export function get_authorView_categoryTree_movedCategory_rootCategoryId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.movedCategory.rootCategoryId;
}

export function set_authorView_categoryTree_movedCategory_rootCategoryId(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		appState.mainView.categoryTree.movedCategory = {};
	}
	appState.mainView.categoryTree.movedCategory.rootCategoryId = eventData.rootCategoryId;
}

export function reset_authorView_categoryTree_movedCategory_rootCategoryId() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return;
	}
	appState.mainView.categoryTree.movedCategory.rootCategoryId = undefined;
}

export function get_authorView_categoryTree_movedCategory_CategoryTreeItem() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.movedCategory.CategoryTreeItem;
}

export function set_authorView_categoryTree_movedCategory_CategoryTreeItem(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		appState.mainView.categoryTree.movedCategory = {};
	}
	appState.mainView.categoryTree.movedCategory.CategoryTreeItem = eventData.CategoryTreeItem;
}

export function reset_authorView_categoryTree_movedCategory_CategoryTreeItem() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return;
	}
	appState.mainView.categoryTree.movedCategory.CategoryTreeItem = undefined;
}

export function get_authorView_categoryTree_movedCategory_childCategories() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return undefined;
	}
	return appState.mainView.categoryTree.movedCategory.childCategories;
}

export function set_authorView_categoryTree_movedCategory_childCategories(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		appState.mainView.categoryTree.movedCategory = {};
	}
	appState.mainView.categoryTree.movedCategory.childCategories = eventData.childCategories;
}

export function reset_authorView_categoryTree_movedCategory_childCategories() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	if (!appState.mainView.categoryTree.movedCategory) {
		return;
	}
	appState.mainView.categoryTree.movedCategory.childCategories = undefined;
}

export function get_authorView_categoryTree_previewCsv() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.categoryTree) {
		return undefined;
	}
	return appState.mainView.categoryTree.previewCsv;
}

export function set_authorView_categoryTree_previewCsv(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.categoryTree) {
		appState.mainView.categoryTree = {};
	}
	appState.mainView.categoryTree.previewCsv = eventData.previewCsv;
}

export function reset_authorView_categoryTree_previewCsv() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.categoryTree) {
		return;
	}
	appState.mainView.categoryTree.previewCsv = undefined;
}

export function get_authorView_cardView() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.mainView.cardView);
}

export function set_authorView_cardView(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	appState.mainView.cardView = eventData.cardView;
}

export function reset_authorView_cardView() {
	if (!appState.mainView) {
		return;
	}
	appState.mainView.cardView = undefined;
}

export function merge_authorView_cardView(eventData) {
	if (!appState.mainView) {
		appState.mainView = {};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	if (eventData.cardList !== undefined) {
		appState.mainView.cardView.cardList = eventData.cardList;
	}
	if (eventData.naturalInputOrder !== undefined) {
		appState.mainView.cardView.naturalInputOrder = eventData.naturalInputOrder;
	}
	if (eventData.filter !== undefined) {
		appState.mainView.cardView.filter = eventData.filter;
	}
	if (eventData.filterNonScheduled !== undefined) {
		appState.mainView.cardView.filterNonScheduled = eventData.filterNonScheduled;
	}
	if (eventData.editedCard !== undefined) {
		appState.mainView.cardView.editedCard = eventData.editedCard;
	}
	if (eventData.newCard !== undefined) {
		appState.mainView.cardView.newCard = eventData.newCard;
	}
	if (eventData.cardDuplicates !== undefined) {
		appState.mainView.cardView.cardDuplicates = eventData.cardDuplicates;
	}
	if (eventData.deleteCard !== undefined) {
		appState.mainView.cardView.deleteCard = eventData.deleteCard;
	}
	if (eventData.dictionaryValue !== undefined) {
		appState.mainView.cardView.dictionaryValue = eventData.dictionaryValue;
	}
	if (eventData.selectedCardIds !== undefined) {
		appState.mainView.cardView.selectedCardIds = eventData.selectedCardIds;
	}
	if (eventData.movedCardIds !== undefined) {
		appState.mainView.cardView.movedCardIds = eventData.movedCardIds;
	}
	if (eventData.dragTargetCardId !== undefined) {
		appState.mainView.cardView.dragTargetCardId = eventData.dragTargetCardId;
	}
}

export function get_authorView_cardView_cardList() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	if (!appState.mainView.cardView.cardList) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.mainView.cardView.cardList);
}

export function set_authorView_cardView_cardList(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	appState.mainView.cardView.cardList = eventData.cardList;
}

export function reset_authorView_cardView_cardList() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	appState.mainView.cardView.cardList = undefined;
}

export function merge_authorView_cardView_cardList(eventData) {
	if (!appState.mainView) {
		appState.mainView = {};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	if (!appState.mainView.cardView.cardList) {
		appState.mainView.cardView.cardList = {};
	}
	if (eventData.cardId !== undefined) {
		appState.mainView.cardView.cardList.cardId = eventData.cardId;
	}
	if (eventData.given !== undefined) {
		appState.mainView.cardView.cardList.given = eventData.given;
	}
	if (eventData.wanted !== undefined) {
		appState.mainView.cardView.cardList.wanted = eventData.wanted;
	}
	if (eventData.image !== undefined) {
		appState.mainView.cardView.cardList.image = eventData.image;
	}
	if (eventData.cardAuthor !== undefined) {
		appState.mainView.cardView.cardList.cardAuthor = eventData.cardAuthor;
	}
	if (eventData.cardIndex !== undefined) {
		appState.mainView.cardView.cardList.cardIndex = eventData.cardIndex;
	}
	if (eventData.categoryId !== undefined) {
		appState.mainView.cardView.cardList.categoryId = eventData.categoryId;
	}
	if (eventData.rootCategoryId !== undefined) {
		appState.mainView.cardView.cardList.rootCategoryId = eventData.rootCategoryId;
	}
	if (eventData.next !== undefined) {
		appState.mainView.cardView.cardList.next = eventData.next;
	}
}

export function get_authorView_cardView_naturalInputOrder() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	return appState.mainView.cardView.naturalInputOrder;
}

export function set_authorView_cardView_naturalInputOrder(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	appState.mainView.cardView.naturalInputOrder = eventData.naturalInputOrder;
}

export function reset_authorView_cardView_naturalInputOrder() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	appState.mainView.cardView.naturalInputOrder = undefined;
}

export function get_authorView_cardView_filter() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	return appState.mainView.cardView.filter;
}

export function set_authorView_cardView_filter(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	appState.mainView.cardView.filter = eventData.filter;
}

export function reset_authorView_cardView_filter() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	appState.mainView.cardView.filter = undefined;
}

export function get_authorView_cardView_filterNonScheduled() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	return appState.mainView.cardView.filterNonScheduled;
}

export function set_authorView_cardView_filterNonScheduled(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	appState.mainView.cardView.filterNonScheduled = eventData.filterNonScheduled;
}

export function reset_authorView_cardView_filterNonScheduled() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	appState.mainView.cardView.filterNonScheduled = undefined;
}

export function get_authorView_cardView_editedCard() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	if (!appState.mainView.cardView.editedCard) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.mainView.cardView.editedCard);
}

export function set_authorView_cardView_editedCard(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	appState.mainView.cardView.editedCard = eventData.editedCard;
}

export function reset_authorView_cardView_editedCard() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	appState.mainView.cardView.editedCard = undefined;
}

export function merge_authorView_cardView_editedCard(eventData) {
	if (!appState.mainView) {
		appState.mainView = {};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	if (!appState.mainView.cardView.editedCard) {
		appState.mainView.cardView.editedCard = {};
	}
	if (eventData.cardId !== undefined) {
		appState.mainView.cardView.editedCard.cardId = eventData.cardId;
	}
	if (eventData.given !== undefined) {
		appState.mainView.cardView.editedCard.given = eventData.given;
	}
	if (eventData.wanted !== undefined) {
		appState.mainView.cardView.editedCard.wanted = eventData.wanted;
	}
	if (eventData.index !== undefined) {
		appState.mainView.cardView.editedCard.index = eventData.index;
	}
	if (eventData.image !== undefined) {
		appState.mainView.cardView.editedCard.image = eventData.image;
	}
}

export function get_authorView_cardView_editedCard_cardId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	if (!appState.mainView.cardView.editedCard) {
		return undefined;
	}
	return appState.mainView.cardView.editedCard.cardId;
}

export function set_authorView_cardView_editedCard_cardId(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	if (!appState.mainView.cardView.editedCard) {
		appState.mainView.cardView.editedCard = {};
	}
	appState.mainView.cardView.editedCard.cardId = eventData.cardId;
}

export function reset_authorView_cardView_editedCard_cardId() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	if (!appState.mainView.cardView.editedCard) {
		return;
	}
	appState.mainView.cardView.editedCard.cardId = undefined;
}

export function get_authorView_cardView_editedCard_given() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	if (!appState.mainView.cardView.editedCard) {
		return undefined;
	}
	return appState.mainView.cardView.editedCard.given;
}

export function set_authorView_cardView_editedCard_given(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	if (!appState.mainView.cardView.editedCard) {
		appState.mainView.cardView.editedCard = {};
	}
	appState.mainView.cardView.editedCard.given = eventData.given;
}

export function reset_authorView_cardView_editedCard_given() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	if (!appState.mainView.cardView.editedCard) {
		return;
	}
	appState.mainView.cardView.editedCard.given = undefined;
}

export function get_authorView_cardView_editedCard_wanted() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	if (!appState.mainView.cardView.editedCard) {
		return undefined;
	}
	return appState.mainView.cardView.editedCard.wanted;
}

export function set_authorView_cardView_editedCard_wanted(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	if (!appState.mainView.cardView.editedCard) {
		appState.mainView.cardView.editedCard = {};
	}
	appState.mainView.cardView.editedCard.wanted = eventData.wanted;
}

export function reset_authorView_cardView_editedCard_wanted() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	if (!appState.mainView.cardView.editedCard) {
		return;
	}
	appState.mainView.cardView.editedCard.wanted = undefined;
}

export function get_authorView_cardView_editedCard_index() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	if (!appState.mainView.cardView.editedCard) {
		return undefined;
	}
	return appState.mainView.cardView.editedCard.index;
}

export function set_authorView_cardView_editedCard_index(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	if (!appState.mainView.cardView.editedCard) {
		appState.mainView.cardView.editedCard = {};
	}
	appState.mainView.cardView.editedCard.index = eventData.index;
}

export function reset_authorView_cardView_editedCard_index() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	if (!appState.mainView.cardView.editedCard) {
		return;
	}
	appState.mainView.cardView.editedCard.index = undefined;
}

export function get_authorView_cardView_editedCard_image() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	if (!appState.mainView.cardView.editedCard) {
		return undefined;
	}
	return appState.mainView.cardView.editedCard.image;
}

export function set_authorView_cardView_editedCard_image(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	if (!appState.mainView.cardView.editedCard) {
		appState.mainView.cardView.editedCard = {};
	}
	appState.mainView.cardView.editedCard.image = eventData.image;
}

export function reset_authorView_cardView_editedCard_image() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	if (!appState.mainView.cardView.editedCard) {
		return;
	}
	appState.mainView.cardView.editedCard.image = undefined;
}

export function get_authorView_cardView_newCard() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	if (!appState.mainView.cardView.newCard) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.mainView.cardView.newCard);
}

export function set_authorView_cardView_newCard(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	appState.mainView.cardView.newCard = eventData.newCard;
}

export function reset_authorView_cardView_newCard() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	appState.mainView.cardView.newCard = undefined;
}

export function merge_authorView_cardView_newCard(eventData) {
	if (!appState.mainView) {
		appState.mainView = {};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	if (!appState.mainView.cardView.newCard) {
		appState.mainView.cardView.newCard = {};
	}
	if (eventData.given !== undefined) {
		appState.mainView.cardView.newCard.given = eventData.given;
	}
	if (eventData.wanted !== undefined) {
		appState.mainView.cardView.newCard.wanted = eventData.wanted;
	}
	if (eventData.index !== undefined) {
		appState.mainView.cardView.newCard.index = eventData.index;
	}
	if (eventData.image !== undefined) {
		appState.mainView.cardView.newCard.image = eventData.image;
	}
	if (eventData.file !== undefined) {
		appState.mainView.cardView.newCard.file = eventData.file;
	}
	if (eventData.displaySpinner !== undefined) {
		appState.mainView.cardView.newCard.displaySpinner = eventData.displaySpinner;
	}
	if (eventData.displayTranslateSpinner !== undefined) {
		appState.mainView.cardView.newCard.displayTranslateSpinner = eventData.displayTranslateSpinner;
	}
}

export function get_authorView_cardView_newCard_given() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	if (!appState.mainView.cardView.newCard) {
		return undefined;
	}
	return appState.mainView.cardView.newCard.given;
}

export function set_authorView_cardView_newCard_given(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	if (!appState.mainView.cardView.newCard) {
		appState.mainView.cardView.newCard = {};
	}
	appState.mainView.cardView.newCard.given = eventData.given;
}

export function reset_authorView_cardView_newCard_given() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	if (!appState.mainView.cardView.newCard) {
		return;
	}
	appState.mainView.cardView.newCard.given = undefined;
}

export function get_authorView_cardView_newCard_wanted() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	if (!appState.mainView.cardView.newCard) {
		return undefined;
	}
	return appState.mainView.cardView.newCard.wanted;
}

export function set_authorView_cardView_newCard_wanted(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	if (!appState.mainView.cardView.newCard) {
		appState.mainView.cardView.newCard = {};
	}
	appState.mainView.cardView.newCard.wanted = eventData.wanted;
}

export function reset_authorView_cardView_newCard_wanted() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	if (!appState.mainView.cardView.newCard) {
		return;
	}
	appState.mainView.cardView.newCard.wanted = undefined;
}

export function get_authorView_cardView_newCard_index() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	if (!appState.mainView.cardView.newCard) {
		return undefined;
	}
	return appState.mainView.cardView.newCard.index;
}

export function set_authorView_cardView_newCard_index(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	if (!appState.mainView.cardView.newCard) {
		appState.mainView.cardView.newCard = {};
	}
	appState.mainView.cardView.newCard.index = eventData.index;
}

export function reset_authorView_cardView_newCard_index() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	if (!appState.mainView.cardView.newCard) {
		return;
	}
	appState.mainView.cardView.newCard.index = undefined;
}

export function get_authorView_cardView_newCard_image() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	if (!appState.mainView.cardView.newCard) {
		return undefined;
	}
	return appState.mainView.cardView.newCard.image;
}

export function set_authorView_cardView_newCard_image(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	if (!appState.mainView.cardView.newCard) {
		appState.mainView.cardView.newCard = {};
	}
	appState.mainView.cardView.newCard.image = eventData.image;
}

export function reset_authorView_cardView_newCard_image() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	if (!appState.mainView.cardView.newCard) {
		return;
	}
	appState.mainView.cardView.newCard.image = undefined;
}

export function get_authorView_cardView_newCard_file() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	if (!appState.mainView.cardView.newCard) {
		return undefined;
	}
	return appState.mainView.cardView.newCard.file;
}

export function set_authorView_cardView_newCard_file(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	if (!appState.mainView.cardView.newCard) {
		appState.mainView.cardView.newCard = {};
	}
	appState.mainView.cardView.newCard.file = eventData.file;
}

export function reset_authorView_cardView_newCard_file() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	if (!appState.mainView.cardView.newCard) {
		return;
	}
	appState.mainView.cardView.newCard.file = undefined;
}

export function get_authorView_cardView_newCard_displaySpinner() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	if (!appState.mainView.cardView.newCard) {
		return undefined;
	}
	return appState.mainView.cardView.newCard.displaySpinner;
}

export function set_authorView_cardView_newCard_displaySpinner(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	if (!appState.mainView.cardView.newCard) {
		appState.mainView.cardView.newCard = {};
	}
	appState.mainView.cardView.newCard.displaySpinner = eventData.displaySpinner;
}

export function reset_authorView_cardView_newCard_displaySpinner() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	if (!appState.mainView.cardView.newCard) {
		return;
	}
	appState.mainView.cardView.newCard.displaySpinner = undefined;
}

export function get_authorView_cardView_newCard_displayTranslateSpinner() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	if (!appState.mainView.cardView.newCard) {
		return undefined;
	}
	return appState.mainView.cardView.newCard.displayTranslateSpinner;
}

export function set_authorView_cardView_newCard_displayTranslateSpinner(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	if (!appState.mainView.cardView.newCard) {
		appState.mainView.cardView.newCard = {};
	}
	appState.mainView.cardView.newCard.displayTranslateSpinner = eventData.displayTranslateSpinner;
}

export function reset_authorView_cardView_newCard_displayTranslateSpinner() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	if (!appState.mainView.cardView.newCard) {
		return;
	}
	appState.mainView.cardView.newCard.displayTranslateSpinner = undefined;
}

export function get_authorView_cardView_cardDuplicates() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	return appState.mainView.cardView.cardDuplicates;
}

export function set_authorView_cardView_cardDuplicates(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	appState.mainView.cardView.cardDuplicates = eventData.cardDuplicates;
}

export function reset_authorView_cardView_cardDuplicates() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	appState.mainView.cardView.cardDuplicates = undefined;
}

export function get_authorView_cardView_deleteCard() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	if (!appState.mainView.cardView.deleteCard) {
		return undefined;
	}
	return AppUtils.deepCopy(appState.mainView.cardView.deleteCard);
}

export function set_authorView_cardView_deleteCard(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	appState.mainView.cardView.deleteCard = eventData.deleteCard;
}

export function reset_authorView_cardView_deleteCard() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	appState.mainView.cardView.deleteCard = undefined;
}

export function merge_authorView_cardView_deleteCard(eventData) {
	if (!appState.mainView) {
		appState.mainView = {};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	if (!appState.mainView.cardView.deleteCard) {
		appState.mainView.cardView.deleteCard = {};
	}
	if (eventData.confirmDelete !== undefined) {
		appState.mainView.cardView.deleteCard.confirmDelete = eventData.confirmDelete;
	}
	if (eventData.cardId !== undefined) {
		appState.mainView.cardView.deleteCard.cardId = eventData.cardId;
	}
}

export function get_authorView_cardView_deleteCard_confirmDelete() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	if (!appState.mainView.cardView.deleteCard) {
		return undefined;
	}
	return appState.mainView.cardView.deleteCard.confirmDelete;
}

export function set_authorView_cardView_deleteCard_confirmDelete(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	if (!appState.mainView.cardView.deleteCard) {
		appState.mainView.cardView.deleteCard = {};
	}
	appState.mainView.cardView.deleteCard.confirmDelete = eventData.confirmDelete;
}

export function reset_authorView_cardView_deleteCard_confirmDelete() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	if (!appState.mainView.cardView.deleteCard) {
		return;
	}
	appState.mainView.cardView.deleteCard.confirmDelete = undefined;
}

export function get_authorView_cardView_deleteCard_cardId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	if (!appState.mainView.cardView.deleteCard) {
		return undefined;
	}
	return appState.mainView.cardView.deleteCard.cardId;
}

export function set_authorView_cardView_deleteCard_cardId(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	if (!appState.mainView.cardView.deleteCard) {
		appState.mainView.cardView.deleteCard = {};
	}
	appState.mainView.cardView.deleteCard.cardId = eventData.cardId;
}

export function reset_authorView_cardView_deleteCard_cardId() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	if (!appState.mainView.cardView.deleteCard) {
		return;
	}
	appState.mainView.cardView.deleteCard.cardId = undefined;
}

export function get_authorView_cardView_dictionaryValue() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	return appState.mainView.cardView.dictionaryValue;
}

export function set_authorView_cardView_dictionaryValue(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	appState.mainView.cardView.dictionaryValue = eventData.dictionaryValue;
}

export function reset_authorView_cardView_dictionaryValue() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	appState.mainView.cardView.dictionaryValue = undefined;
}

export function get_authorView_cardView_selectedCardIds() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	return appState.mainView.cardView.selectedCardIds;
}

export function set_authorView_cardView_selectedCardIds(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	appState.mainView.cardView.selectedCardIds = eventData.selectedCardIds;
}

export function reset_authorView_cardView_selectedCardIds() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	appState.mainView.cardView.selectedCardIds = undefined;
}

export function get_authorView_cardView_movedCardIds() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	return appState.mainView.cardView.movedCardIds;
}

export function set_authorView_cardView_movedCardIds(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	appState.mainView.cardView.movedCardIds = eventData.movedCardIds;
}

export function reset_authorView_cardView_movedCardIds() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	appState.mainView.cardView.movedCardIds = undefined;
}

export function get_authorView_cardView_dragTargetCardId() {
	if (!appState.mainView) {
		return undefined;
	}
	if (appState.mainView.isAuthorView !== true) {
		return undefined;
	}
	if (!appState.mainView.cardView) {
		return undefined;
	}
	return appState.mainView.cardView.dragTargetCardId;
}

export function set_authorView_cardView_dragTargetCardId(eventData) {
	if (!appState.mainView || appState.mainView.isAuthorView !== true) {
		appState.mainView = {
			isAuthorView : true
		};
	}
	if (!appState.mainView.cardView) {
		appState.mainView.cardView = {};
	}
	appState.mainView.cardView.dragTargetCardId = eventData.dragTargetCardId;
}

export function reset_authorView_cardView_dragTargetCardId() {
	if (!appState.mainView) {
		return;
	}
	if (!appState.mainView.cardView) {
		return;
	}
	appState.mainView.cardView.dragTargetCardId = undefined;
}

