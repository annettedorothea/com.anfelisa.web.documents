/* 
 * Copyright (c) 2019, Annette Pohl, Koblenz, Germany
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
 */




import AppUtils from "../../src/app/AppUtils";

export let state;

export function setInitialState(initialState) {
	state = AppUtils.deepCopy(initialState);
}

export function set_state_State_loggedInUser(eventData) {
	state.loggedInUser = eventData.loggedInUser;
}

export function merge_state_State_loggedInUser(eventData) {
	if (eventData.username !== undefined) {
		state.loggedInUser.username = eventData.username;
	}
	if (eventData.userId !== undefined) {
		state.loggedInUser.userId = eventData.userId;
	}
	if (eventData.role !== undefined) {
		state.loggedInUser.role = eventData.role;
	}
	if (eventData.password !== undefined) {
		state.loggedInUser.password = eventData.password;
	}
}

export function reset_state_State_loggedInUser() {
	state.loggedInUser = null;
}

export function init_state_State_loggedInUser() {
	state.loggedInUser = {};
}

export function set_state_State_loggedInUser_LoggedInUser_username(eventData) {
	state.loggedInUser.username = eventData.username;
}

export function reset_state_State_loggedInUser_LoggedInUser_username() {
	state.loggedInUser.username = null;
}

export function init_state_State_loggedInUser_LoggedInUser_username() {
	state.loggedInUser.username = null;
}
export function set_state_State_loggedInUser_LoggedInUser_userId(eventData) {
	state.loggedInUser.userId = eventData.userId;
}

export function reset_state_State_loggedInUser_LoggedInUser_userId() {
	state.loggedInUser.userId = null;
}

export function init_state_State_loggedInUser_LoggedInUser_userId() {
	state.loggedInUser.userId = null;
}
export function set_state_State_loggedInUser_LoggedInUser_role(eventData) {
	state.loggedInUser.role = eventData.role;
}

export function reset_state_State_loggedInUser_LoggedInUser_role() {
	state.loggedInUser.role = null;
}

export function init_state_State_loggedInUser_LoggedInUser_role() {
	state.loggedInUser.role = null;
}
export function set_state_State_loggedInUser_LoggedInUser_password(eventData) {
	state.loggedInUser.password = eventData.password;
}

export function reset_state_State_loggedInUser_LoggedInUser_password() {
	state.loggedInUser.password = null;
}

export function init_state_State_loggedInUser_LoggedInUser_password() {
	state.loggedInUser.password = null;
}

export function set_state_State_hash(eventData) {
	location.hash = eventData.hash;
}

export function reset_state_State_hash() {
	location.hash = "";
}

export function init_state_State_hash() {
	location.hash = "";
}
export function set_state_State_username(eventData) {
	localStorage.setItem("username", eventData.username);
}

export function reset_state_State_username() {
	localStorage.removeItem("username");
}

export function init_state_State_username() {
	localStorage.removeItem("username");
}
export function set_state_State_password(eventData) {
	localStorage.setItem("password", eventData.password);
}

export function reset_state_State_password() {
	localStorage.removeItem("password");
}

export function init_state_State_password() {
	localStorage.removeItem("password");
}
export function set_state_State_displaySpinner(eventData) {
	state.displaySpinner = eventData.displaySpinner;
}

export function reset_state_State_displaySpinner() {
	state.displaySpinner = null;
}

export function init_state_State_displaySpinner() {
	state.displaySpinner = null;
}
export function set_state_State_view(eventData) {
	state.view = eventData.view;
}

export function reset_state_State_view() {
	state.view = null;
}

export function init_state_State_view() {
	state.view = null;
}
export function set_state_State_language(eventData) {
	state.language = eventData.language;
}

export function reset_state_State_language() {
	state.language = null;
}

export function init_state_State_language() {
	state.language = null;
}
export function set_state_State_texts(eventData) {
	state.texts = eventData.texts;
}

export function reset_state_State_texts() {
	state.texts = null;
}

export function init_state_State_texts() {
	state.texts = null;
}
export function set_state_State_message(eventData) {
	state.message = eventData.message;
}

export function merge_state_State_message(eventData) {
	if (eventData.type !== undefined) {
		state.message.type = eventData.type;
	}
	if (eventData.text !== undefined) {
		state.message.text = eventData.text;
	}
}

export function reset_state_State_message() {
	state.message = null;
}

export function init_state_State_message() {
	state.message = {};
}

export function set_state_State_message_Message_type(eventData) {
	state.message.type = eventData.type;
}

export function reset_state_State_message_Message_type() {
	state.message.type = null;
}

export function init_state_State_message_Message_type() {
	state.message.type = null;
}
export function set_state_State_message_Message_text(eventData) {
	state.message.text = eventData.text;
}

export function reset_state_State_message_Message_text() {
	state.message.text = null;
}

export function init_state_State_message_Message_text() {
	state.message.text = null;
}

export function set_state_State_data(eventData) {
	state.data = eventData.data;
}

export function merge_state_State_data(eventData) {
	if (eventData.username !== undefined) {
		state.data.username = eventData.username;
	}
	if (eventData.saveInLocalStorage !== undefined) {
		state.data.saveInLocalStorage = eventData.saveInLocalStorage;
	}
	if (eventData.displayUsernameSpinner !== undefined) {
		state.data.displayUsernameSpinner = eventData.displayUsernameSpinner;
	}
	if (eventData.available !== undefined) {
		state.data.available = eventData.available;
	}
	if (eventData.username !== undefined) {
		state.data.username = eventData.username;
	}
	if (eventData.email !== undefined) {
		state.data.email = eventData.email;
	}
	if (eventData.emailInvalid !== undefined) {
		state.data.emailInvalid = eventData.emailInvalid;
	}
	if (eventData.passwordMismatch !== undefined) {
		state.data.passwordMismatch = eventData.passwordMismatch;
	}
	if (eventData.username !== undefined) {
		state.data.username = eventData.username;
	}
	if (eventData.token !== undefined) {
		state.data.token = eventData.token;
	}
	if (eventData.passwordMismatch !== undefined) {
		state.data.passwordMismatch = eventData.passwordMismatch;
	}
	if (eventData.boxList !== undefined) {
		state.data.boxList = eventData.boxList;
	}
	if (eventData.deleteBox !== undefined) {
		state.data.deleteBox = eventData.deleteBox;
	}
	if (eventData.boxId !== undefined) {
		state.data.boxId = eventData.boxId;
	}
	if (eventData.maxInterval !== undefined) {
		state.data.maxInterval = eventData.maxInterval;
	}
	if (eventData.maxCardsPerDay !== undefined) {
		state.data.maxCardsPerDay = eventData.maxCardsPerDay;
	}
	if (eventData.maxCardsPerDayInvalid !== undefined) {
		state.data.maxCardsPerDayInvalid = eventData.maxCardsPerDayInvalid;
	}
	if (eventData.dictionaryLookup !== undefined) {
		state.data.dictionaryLookup = eventData.dictionaryLookup;
	}
	if (eventData.wantedLanguage !== undefined) {
		state.data.wantedLanguage = eventData.wantedLanguage;
	}
	if (eventData.givenLanguage !== undefined) {
		state.data.givenLanguage = eventData.givenLanguage;
	}
	if (eventData.categoryName !== undefined) {
		state.data.categoryName = eventData.categoryName;
	}
	if (eventData.categoryId !== undefined) {
		state.data.categoryId = eventData.categoryId;
	}
	if (eventData.username !== undefined) {
		state.data.username = eventData.username;
	}
	if (eventData.email !== undefined) {
		state.data.email = eventData.email;
	}
	if (eventData.role !== undefined) {
		state.data.role = eventData.role;
	}
	if (eventData.showDeleteUserDialog !== undefined) {
		state.data.showDeleteUserDialog = eventData.showDeleteUserDialog;
	}
	if (eventData.userList !== undefined) {
		state.data.userList = eventData.userList;
	}
	if (eventData.showDeleteUserDialog !== undefined) {
		state.data.showDeleteUserDialog = eventData.showDeleteUserDialog;
	}
	if (eventData.usernameToBeDeleted !== undefined) {
		state.data.usernameToBeDeleted = eventData.usernameToBeDeleted;
	}
	if (eventData.cardId !== undefined) {
		state.data.cardId = eventData.cardId;
	}
	if (eventData.categoryId !== undefined) {
		state.data.categoryId = eventData.categoryId;
	}
	if (eventData.count !== undefined) {
		state.data.count = eventData.count;
	}
	if (eventData.given !== undefined) {
		state.data.given = eventData.given;
	}
	if (eventData.image !== undefined) {
		state.data.image = eventData.image;
	}
	if (eventData.lastQuality !== undefined) {
		state.data.lastQuality = eventData.lastQuality;
	}
	if (eventData.rootCategoryId !== undefined) {
		state.data.rootCategoryId = eventData.rootCategoryId;
	}
	if (eventData.scheduledCardId !== undefined) {
		state.data.scheduledCardId = eventData.scheduledCardId;
	}
	if (eventData.reinforceCardId !== undefined) {
		state.data.reinforceCardId = eventData.reinforceCardId;
	}
	if (eventData.scheduledDate !== undefined) {
		state.data.scheduledDate = eventData.scheduledDate;
	}
	if (eventData.scoredDate !== undefined) {
		state.data.scoredDate = eventData.scoredDate;
	}
	if (eventData.wanted !== undefined) {
		state.data.wanted = eventData.wanted;
	}
	if (eventData.openTodaysCards !== undefined) {
		state.data.openTodaysCards = eventData.openTodaysCards;
	}
	if (eventData.allTodaysCards !== undefined) {
		state.data.allTodaysCards = eventData.allTodaysCards;
	}
	if (eventData.index !== undefined) {
		state.data.index = eventData.index;
	}
	if (eventData.enableScoreButtons !== undefined) {
		state.data.enableScoreButtons = eventData.enableScoreButtons;
	}
	if (eventData.displayImage !== undefined) {
		state.data.displayImage = eventData.displayImage;
	}
	if (eventData.boxId !== undefined) {
		state.data.boxId = eventData.boxId;
	}
	if (eventData.categoryTree !== undefined) {
		state.data.categoryTree = eventData.categoryTree;
	}
	if (eventData.boxList !== undefined) {
		state.data.boxList = eventData.boxList;
	}
	if (eventData.deleteBox !== undefined) {
		state.data.deleteBox = eventData.deleteBox;
	}
	if (eventData.cardView !== undefined) {
		state.data.cardView = eventData.cardView;
	}
}

export function reset_state_State_data() {
	state.data = null;
}

export function init_state_State_data() {
	state.data = {};
}

export function set_state_State_data_Login_username(eventData) {
	state.data.username = eventData.username;
}

export function reset_state_State_data_Login_username() {
	state.data.username = null;
}

export function init_state_State_data_Login_username() {
	state.data.username = null;
}
export function set_state_State_data_Login_saveInLocalStorage(eventData) {
	state.data.saveInLocalStorage = eventData.saveInLocalStorage;
}

export function reset_state_State_data_Login_saveInLocalStorage() {
	state.data.saveInLocalStorage = null;
}

export function init_state_State_data_Login_saveInLocalStorage() {
	state.data.saveInLocalStorage = null;
}
export function set_state_State_data_Registration_displayUsernameSpinner(eventData) {
	state.data.displayUsernameSpinner = eventData.displayUsernameSpinner;
}

export function reset_state_State_data_Registration_displayUsernameSpinner() {
	state.data.displayUsernameSpinner = null;
}

export function init_state_State_data_Registration_displayUsernameSpinner() {
	state.data.displayUsernameSpinner = null;
}
export function set_state_State_data_Registration_available(eventData) {
	state.data.available = eventData.available;
}

export function reset_state_State_data_Registration_available() {
	state.data.available = null;
}

export function init_state_State_data_Registration_available() {
	state.data.available = null;
}
export function set_state_State_data_Registration_username(eventData) {
	state.data.username = eventData.username;
}

export function reset_state_State_data_Registration_username() {
	state.data.username = null;
}

export function init_state_State_data_Registration_username() {
	state.data.username = null;
}
export function set_state_State_data_Registration_email(eventData) {
	state.data.email = eventData.email;
}

export function reset_state_State_data_Registration_email() {
	state.data.email = null;
}

export function init_state_State_data_Registration_email() {
	state.data.email = null;
}
export function set_state_State_data_Registration_emailInvalid(eventData) {
	state.data.emailInvalid = eventData.emailInvalid;
}

export function reset_state_State_data_Registration_emailInvalid() {
	state.data.emailInvalid = null;
}

export function init_state_State_data_Registration_emailInvalid() {
	state.data.emailInvalid = null;
}
export function set_state_State_data_Registration_passwordMismatch(eventData) {
	state.data.passwordMismatch = eventData.passwordMismatch;
}

export function reset_state_State_data_Registration_passwordMismatch() {
	state.data.passwordMismatch = null;
}

export function init_state_State_data_Registration_passwordMismatch() {
	state.data.passwordMismatch = null;
}
export function set_state_State_data_ForgotPassword_username(eventData) {
	state.data.username = eventData.username;
}

export function reset_state_State_data_ForgotPassword_username() {
	state.data.username = null;
}

export function init_state_State_data_ForgotPassword_username() {
	state.data.username = null;
}
export function set_state_State_data_ResetPassword_token(eventData) {
	state.data.token = eventData.token;
}

export function reset_state_State_data_ResetPassword_token() {
	state.data.token = null;
}

export function init_state_State_data_ResetPassword_token() {
	state.data.token = null;
}
export function set_state_State_data_ResetPassword_passwordMismatch(eventData) {
	state.data.passwordMismatch = eventData.passwordMismatch;
}

export function reset_state_State_data_ResetPassword_passwordMismatch() {
	state.data.passwordMismatch = null;
}

export function init_state_State_data_ResetPassword_passwordMismatch() {
	state.data.passwordMismatch = null;
}
export function set_state_State_data_Dashboard_boxList(eventData) {
	state.data.boxList = eventData.boxList;
}

export function reset_state_State_data_Dashboard_boxList() {
	state.data.boxList = null;
}

export function init_state_State_data_Dashboard_boxList() {
	state.data.boxList = null;
}
export function set_state_State_data_Dashboard_deleteBox(eventData) {
	state.data.deleteBox = eventData.deleteBox;
}

export function merge_state_State_data_Dashboard_deleteBox(eventData) {
	if (eventData.confirmDelete !== undefined) {
		state.data.deleteBox.confirmDelete = eventData.confirmDelete;
	}
	if (eventData.boxId !== undefined) {
		state.data.deleteBox.boxId = eventData.boxId;
	}
}

export function reset_state_State_data_Dashboard_deleteBox() {
	state.data.deleteBox = null;
}

export function init_state_State_data_Dashboard_deleteBox() {
	state.data.deleteBox = {};
}

export function set_state_State_data_Dashboard_deleteBox_DeleteBox_confirmDelete(eventData) {
	state.data.deleteBox.confirmDelete = eventData.confirmDelete;
}

export function reset_state_State_data_Dashboard_deleteBox_DeleteBox_confirmDelete() {
	state.data.deleteBox.confirmDelete = null;
}

export function init_state_State_data_Dashboard_deleteBox_DeleteBox_confirmDelete() {
	state.data.deleteBox.confirmDelete = null;
}
export function set_state_State_data_Dashboard_deleteBox_DeleteBox_boxId(eventData) {
	state.data.deleteBox.boxId = eventData.boxId;
}

export function reset_state_State_data_Dashboard_deleteBox_DeleteBox_boxId() {
	state.data.deleteBox.boxId = null;
}

export function init_state_State_data_Dashboard_deleteBox_DeleteBox_boxId() {
	state.data.deleteBox.boxId = null;
}

export function set_state_State_data_BoxSettings_boxId(eventData) {
	state.data.boxId = eventData.boxId;
}

export function reset_state_State_data_BoxSettings_boxId() {
	state.data.boxId = null;
}

export function init_state_State_data_BoxSettings_boxId() {
	state.data.boxId = null;
}
export function set_state_State_data_BoxSettings_maxInterval(eventData) {
	state.data.maxInterval = eventData.maxInterval;
}

export function reset_state_State_data_BoxSettings_maxInterval() {
	state.data.maxInterval = null;
}

export function init_state_State_data_BoxSettings_maxInterval() {
	state.data.maxInterval = null;
}
export function set_state_State_data_BoxSettings_maxCardsPerDay(eventData) {
	state.data.maxCardsPerDay = eventData.maxCardsPerDay;
}

export function reset_state_State_data_BoxSettings_maxCardsPerDay() {
	state.data.maxCardsPerDay = null;
}

export function init_state_State_data_BoxSettings_maxCardsPerDay() {
	state.data.maxCardsPerDay = null;
}
export function set_state_State_data_BoxSettings_maxCardsPerDayInvalid(eventData) {
	state.data.maxCardsPerDayInvalid = eventData.maxCardsPerDayInvalid;
}

export function reset_state_State_data_BoxSettings_maxCardsPerDayInvalid() {
	state.data.maxCardsPerDayInvalid = null;
}

export function init_state_State_data_BoxSettings_maxCardsPerDayInvalid() {
	state.data.maxCardsPerDayInvalid = null;
}
export function set_state_State_data_BoxSettings_dictionaryLookup(eventData) {
	state.data.dictionaryLookup = eventData.dictionaryLookup;
}

export function reset_state_State_data_BoxSettings_dictionaryLookup() {
	state.data.dictionaryLookup = null;
}

export function init_state_State_data_BoxSettings_dictionaryLookup() {
	state.data.dictionaryLookup = null;
}
export function set_state_State_data_BoxSettings_wantedLanguage(eventData) {
	state.data.wantedLanguage = eventData.wantedLanguage;
}

export function reset_state_State_data_BoxSettings_wantedLanguage() {
	state.data.wantedLanguage = null;
}

export function init_state_State_data_BoxSettings_wantedLanguage() {
	state.data.wantedLanguage = null;
}
export function set_state_State_data_BoxSettings_givenLanguage(eventData) {
	state.data.givenLanguage = eventData.givenLanguage;
}

export function reset_state_State_data_BoxSettings_givenLanguage() {
	state.data.givenLanguage = null;
}

export function init_state_State_data_BoxSettings_givenLanguage() {
	state.data.givenLanguage = null;
}
export function set_state_State_data_BoxSettings_categoryName(eventData) {
	state.data.categoryName = eventData.categoryName;
}

export function reset_state_State_data_BoxSettings_categoryName() {
	state.data.categoryName = null;
}

export function init_state_State_data_BoxSettings_categoryName() {
	state.data.categoryName = null;
}
export function set_state_State_data_BoxSettings_categoryId(eventData) {
	state.data.categoryId = eventData.categoryId;
}

export function reset_state_State_data_BoxSettings_categoryId() {
	state.data.categoryId = null;
}

export function init_state_State_data_BoxSettings_categoryId() {
	state.data.categoryId = null;
}
export function set_state_State_data_Profile_username(eventData) {
	state.data.username = eventData.username;
}

export function reset_state_State_data_Profile_username() {
	state.data.username = null;
}

export function init_state_State_data_Profile_username() {
	state.data.username = null;
}
export function set_state_State_data_Profile_email(eventData) {
	state.data.email = eventData.email;
}

export function reset_state_State_data_Profile_email() {
	state.data.email = null;
}

export function init_state_State_data_Profile_email() {
	state.data.email = null;
}
export function set_state_State_data_Profile_role(eventData) {
	state.data.role = eventData.role;
}

export function reset_state_State_data_Profile_role() {
	state.data.role = null;
}

export function init_state_State_data_Profile_role() {
	state.data.role = null;
}
export function set_state_State_data_Profile_showDeleteUserDialog(eventData) {
	state.data.showDeleteUserDialog = eventData.showDeleteUserDialog;
}

export function reset_state_State_data_Profile_showDeleteUserDialog() {
	state.data.showDeleteUserDialog = null;
}

export function init_state_State_data_Profile_showDeleteUserDialog() {
	state.data.showDeleteUserDialog = null;
}
export function set_state_State_data_UserList_userList(eventData) {
	state.data.userList = eventData.userList;
}

export function reset_state_State_data_UserList_userList() {
	state.data.userList = null;
}

export function init_state_State_data_UserList_userList() {
	state.data.userList = null;
}
export function set_state_State_data_UserList_showDeleteUserDialog(eventData) {
	state.data.showDeleteUserDialog = eventData.showDeleteUserDialog;
}

export function reset_state_State_data_UserList_showDeleteUserDialog() {
	state.data.showDeleteUserDialog = null;
}

export function init_state_State_data_UserList_showDeleteUserDialog() {
	state.data.showDeleteUserDialog = null;
}
export function set_state_State_data_UserList_usernameToBeDeleted(eventData) {
	state.data.usernameToBeDeleted = eventData.usernameToBeDeleted;
}

export function reset_state_State_data_UserList_usernameToBeDeleted() {
	state.data.usernameToBeDeleted = null;
}

export function init_state_State_data_UserList_usernameToBeDeleted() {
	state.data.usernameToBeDeleted = null;
}
export function set_state_State_data_Card_cardId(eventData) {
	state.data.cardId = eventData.cardId;
}

export function reset_state_State_data_Card_cardId() {
	state.data.cardId = null;
}

export function init_state_State_data_Card_cardId() {
	state.data.cardId = null;
}
export function set_state_State_data_Card_categoryId(eventData) {
	state.data.categoryId = eventData.categoryId;
}

export function reset_state_State_data_Card_categoryId() {
	state.data.categoryId = null;
}

export function init_state_State_data_Card_categoryId() {
	state.data.categoryId = null;
}
export function set_state_State_data_Card_count(eventData) {
	state.data.count = eventData.count;
}

export function reset_state_State_data_Card_count() {
	state.data.count = null;
}

export function init_state_State_data_Card_count() {
	state.data.count = null;
}
export function set_state_State_data_Card_given(eventData) {
	state.data.given = eventData.given;
}

export function reset_state_State_data_Card_given() {
	state.data.given = null;
}

export function init_state_State_data_Card_given() {
	state.data.given = null;
}
export function set_state_State_data_Card_image(eventData) {
	state.data.image = eventData.image;
}

export function reset_state_State_data_Card_image() {
	state.data.image = null;
}

export function init_state_State_data_Card_image() {
	state.data.image = null;
}
export function set_state_State_data_Card_lastQuality(eventData) {
	state.data.lastQuality = eventData.lastQuality;
}

export function reset_state_State_data_Card_lastQuality() {
	state.data.lastQuality = null;
}

export function init_state_State_data_Card_lastQuality() {
	state.data.lastQuality = null;
}
export function set_state_State_data_Card_rootCategoryId(eventData) {
	state.data.rootCategoryId = eventData.rootCategoryId;
}

export function reset_state_State_data_Card_rootCategoryId() {
	state.data.rootCategoryId = null;
}

export function init_state_State_data_Card_rootCategoryId() {
	state.data.rootCategoryId = null;
}
export function set_state_State_data_Card_scheduledCardId(eventData) {
	state.data.scheduledCardId = eventData.scheduledCardId;
}

export function reset_state_State_data_Card_scheduledCardId() {
	state.data.scheduledCardId = null;
}

export function init_state_State_data_Card_scheduledCardId() {
	state.data.scheduledCardId = null;
}
export function set_state_State_data_Card_reinforceCardId(eventData) {
	state.data.reinforceCardId = eventData.reinforceCardId;
}

export function reset_state_State_data_Card_reinforceCardId() {
	state.data.reinforceCardId = null;
}

export function init_state_State_data_Card_reinforceCardId() {
	state.data.reinforceCardId = null;
}
export function set_state_State_data_Card_scheduledDate(eventData) {
	state.data.scheduledDate = eventData.scheduledDate;
}

export function reset_state_State_data_Card_scheduledDate() {
	state.data.scheduledDate = null;
}

export function init_state_State_data_Card_scheduledDate() {
	state.data.scheduledDate = null;
}
export function set_state_State_data_Card_scoredDate(eventData) {
	state.data.scoredDate = eventData.scoredDate;
}

export function reset_state_State_data_Card_scoredDate() {
	state.data.scoredDate = null;
}

export function init_state_State_data_Card_scoredDate() {
	state.data.scoredDate = null;
}
export function set_state_State_data_Card_wanted(eventData) {
	state.data.wanted = eventData.wanted;
}

export function reset_state_State_data_Card_wanted() {
	state.data.wanted = null;
}

export function init_state_State_data_Card_wanted() {
	state.data.wanted = null;
}
export function set_state_State_data_Card_openTodaysCards(eventData) {
	state.data.openTodaysCards = eventData.openTodaysCards;
}

export function reset_state_State_data_Card_openTodaysCards() {
	state.data.openTodaysCards = null;
}

export function init_state_State_data_Card_openTodaysCards() {
	state.data.openTodaysCards = null;
}
export function set_state_State_data_Card_allTodaysCards(eventData) {
	state.data.allTodaysCards = eventData.allTodaysCards;
}

export function reset_state_State_data_Card_allTodaysCards() {
	state.data.allTodaysCards = null;
}

export function init_state_State_data_Card_allTodaysCards() {
	state.data.allTodaysCards = null;
}
export function set_state_State_data_Card_index(eventData) {
	state.data.index = eventData.index;
}

export function reset_state_State_data_Card_index() {
	state.data.index = null;
}

export function init_state_State_data_Card_index() {
	state.data.index = null;
}
export function set_state_State_data_Card_enableScoreButtons(eventData) {
	state.data.enableScoreButtons = eventData.enableScoreButtons;
}

export function reset_state_State_data_Card_enableScoreButtons() {
	state.data.enableScoreButtons = null;
}

export function init_state_State_data_Card_enableScoreButtons() {
	state.data.enableScoreButtons = null;
}
export function set_state_State_data_Card_displayImage(eventData) {
	state.data.displayImage = eventData.displayImage;
}

export function reset_state_State_data_Card_displayImage() {
	state.data.displayImage = null;
}

export function init_state_State_data_Card_displayImage() {
	state.data.displayImage = null;
}
export function set_state_State_data_Card_boxId(eventData) {
	state.data.boxId = eventData.boxId;
}

export function reset_state_State_data_Card_boxId() {
	state.data.boxId = null;
}

export function init_state_State_data_Card_boxId() {
	state.data.boxId = null;
}
export function set_state_State_data_AuthorView_categoryTree(eventData) {
	state.data.categoryTree = eventData.categoryTree;
}

export function merge_state_State_data_AuthorView_categoryTree(eventData) {
	if (eventData.selectedCategory !== undefined) {
		state.data.categoryTree.selectedCategory = eventData.selectedCategory;
	}
	if (eventData.categoryList !== undefined) {
		state.data.categoryTree.categoryList = eventData.categoryList;
	}
	if (eventData.displayDeleteCategory !== undefined) {
		state.data.categoryTree.displayDeleteCategory = eventData.displayDeleteCategory;
	}
	if (eventData.categoryName !== undefined) {
		state.data.categoryTree.categoryName = eventData.categoryName;
	}
	if (eventData.displayEditCategory !== undefined) {
		state.data.categoryTree.displayEditCategory = eventData.displayEditCategory;
	}
	if (eventData.displayNewCategory !== undefined) {
		state.data.categoryTree.displayNewCategory = eventData.displayNewCategory;
	}
	if (eventData.dropAllowed !== undefined) {
		state.data.categoryTree.dropAllowed = eventData.dropAllowed;
	}
	if (eventData.dropTargetCategoryId !== undefined) {
		state.data.categoryTree.dropTargetCategoryId = eventData.dropTargetCategoryId;
	}
	if (eventData.movedCategory !== undefined) {
		state.data.categoryTree.movedCategory = eventData.movedCategory;
	}
	if (eventData.previewCsv !== undefined) {
		state.data.categoryTree.previewCsv = eventData.previewCsv;
	}
}

export function reset_state_State_data_AuthorView_categoryTree() {
	state.data.categoryTree = null;
}

export function init_state_State_data_AuthorView_categoryTree() {
	state.data.categoryTree = {};
}

export function set_state_State_data_AuthorView_categoryTree_CategoryTree_selectedCategory(eventData) {
	state.data.categoryTree.selectedCategory = eventData.selectedCategory;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_selectedCategory() {
	state.data.categoryTree.selectedCategory = null;
}

export function init_state_State_data_AuthorView_categoryTree_CategoryTree_selectedCategory() {
	state.data.categoryTree.selectedCategory = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_categoryList(eventData) {
	state.data.categoryTree.categoryList = eventData.categoryList;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_categoryList() {
	state.data.categoryTree.categoryList = null;
}

export function init_state_State_data_AuthorView_categoryTree_CategoryTree_categoryList() {
	state.data.categoryTree.categoryList = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_displayDeleteCategory(eventData) {
	state.data.categoryTree.displayDeleteCategory = eventData.displayDeleteCategory;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_displayDeleteCategory() {
	state.data.categoryTree.displayDeleteCategory = null;
}

export function init_state_State_data_AuthorView_categoryTree_CategoryTree_displayDeleteCategory() {
	state.data.categoryTree.displayDeleteCategory = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_categoryName(eventData) {
	state.data.categoryTree.categoryName = eventData.categoryName;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_categoryName() {
	state.data.categoryTree.categoryName = null;
}

export function init_state_State_data_AuthorView_categoryTree_CategoryTree_categoryName() {
	state.data.categoryTree.categoryName = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_displayEditCategory(eventData) {
	state.data.categoryTree.displayEditCategory = eventData.displayEditCategory;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_displayEditCategory() {
	state.data.categoryTree.displayEditCategory = null;
}

export function init_state_State_data_AuthorView_categoryTree_CategoryTree_displayEditCategory() {
	state.data.categoryTree.displayEditCategory = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_displayNewCategory(eventData) {
	state.data.categoryTree.displayNewCategory = eventData.displayNewCategory;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_displayNewCategory() {
	state.data.categoryTree.displayNewCategory = null;
}

export function init_state_State_data_AuthorView_categoryTree_CategoryTree_displayNewCategory() {
	state.data.categoryTree.displayNewCategory = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_dropAllowed(eventData) {
	state.data.categoryTree.dropAllowed = eventData.dropAllowed;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_dropAllowed() {
	state.data.categoryTree.dropAllowed = null;
}

export function init_state_State_data_AuthorView_categoryTree_CategoryTree_dropAllowed() {
	state.data.categoryTree.dropAllowed = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_dropTargetCategoryId(eventData) {
	state.data.categoryTree.dropTargetCategoryId = eventData.dropTargetCategoryId;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_dropTargetCategoryId() {
	state.data.categoryTree.dropTargetCategoryId = null;
}

export function init_state_State_data_AuthorView_categoryTree_CategoryTree_dropTargetCategoryId() {
	state.data.categoryTree.dropTargetCategoryId = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_movedCategory(eventData) {
	state.data.categoryTree.movedCategory = eventData.movedCategory;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_movedCategory() {
	state.data.categoryTree.movedCategory = null;
}

export function init_state_State_data_AuthorView_categoryTree_CategoryTree_movedCategory() {
	state.data.categoryTree.movedCategory = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_previewCsv(eventData) {
	state.data.categoryTree.previewCsv = eventData.previewCsv;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_previewCsv() {
	state.data.categoryTree.previewCsv = null;
}

export function init_state_State_data_AuthorView_categoryTree_CategoryTree_previewCsv() {
	state.data.categoryTree.previewCsv = null;
}

export function set_state_State_data_AuthorView_boxList(eventData) {
	state.data.boxList = eventData.boxList;
}

export function reset_state_State_data_AuthorView_boxList() {
	state.data.boxList = null;
}

export function init_state_State_data_AuthorView_boxList() {
	state.data.boxList = null;
}
export function set_state_State_data_AuthorView_deleteBox(eventData) {
	state.data.deleteBox = eventData.deleteBox;
}

export function merge_state_State_data_AuthorView_deleteBox(eventData) {
	if (eventData.confirmDelete !== undefined) {
		state.data.deleteBox.confirmDelete = eventData.confirmDelete;
	}
	if (eventData.boxId !== undefined) {
		state.data.deleteBox.boxId = eventData.boxId;
	}
}

export function reset_state_State_data_AuthorView_deleteBox() {
	state.data.deleteBox = null;
}

export function init_state_State_data_AuthorView_deleteBox() {
	state.data.deleteBox = {};
}

export function set_state_State_data_AuthorView_deleteBox_DeleteBox_confirmDelete(eventData) {
	state.data.deleteBox.confirmDelete = eventData.confirmDelete;
}

export function reset_state_State_data_AuthorView_deleteBox_DeleteBox_confirmDelete() {
	state.data.deleteBox.confirmDelete = null;
}

export function init_state_State_data_AuthorView_deleteBox_DeleteBox_confirmDelete() {
	state.data.deleteBox.confirmDelete = null;
}
export function set_state_State_data_AuthorView_deleteBox_DeleteBox_boxId(eventData) {
	state.data.deleteBox.boxId = eventData.boxId;
}

export function reset_state_State_data_AuthorView_deleteBox_DeleteBox_boxId() {
	state.data.deleteBox.boxId = null;
}

export function init_state_State_data_AuthorView_deleteBox_DeleteBox_boxId() {
	state.data.deleteBox.boxId = null;
}

export function set_state_State_data_AuthorView_cardView(eventData) {
	state.data.cardView = eventData.cardView;
}

export function merge_state_State_data_AuthorView_cardView(eventData) {
	if (eventData.cardList !== undefined) {
		state.data.cardView.cardList = eventData.cardList;
	}
	if (eventData.naturalInputOrder !== undefined) {
		state.data.cardView.naturalInputOrder = eventData.naturalInputOrder;
	}
	if (eventData.filter !== undefined) {
		state.data.cardView.filter = eventData.filter;
	}
	if (eventData.editedCard !== undefined) {
		state.data.cardView.editedCard = eventData.editedCard;
	}
	if (eventData.newCard !== undefined) {
		state.data.cardView.newCard = eventData.newCard;
	}
	if (eventData.cardDuplicates !== undefined) {
		state.data.cardView.cardDuplicates = eventData.cardDuplicates;
	}
	if (eventData.deleteCard !== undefined) {
		state.data.cardView.deleteCard = eventData.deleteCard;
	}
	if (eventData.dictionaryValue !== undefined) {
		state.data.cardView.dictionaryValue = eventData.dictionaryValue;
	}
	if (eventData.selectedCardIds !== undefined) {
		state.data.cardView.selectedCardIds = eventData.selectedCardIds;
	}
	if (eventData.movedCardIds !== undefined) {
		state.data.cardView.movedCardIds = eventData.movedCardIds;
	}
	if (eventData.dragTargetCardId !== undefined) {
		state.data.cardView.dragTargetCardId = eventData.dragTargetCardId;
	}
}

export function reset_state_State_data_AuthorView_cardView() {
	state.data.cardView = null;
}

export function init_state_State_data_AuthorView_cardView() {
	state.data.cardView = {};
}

export function set_state_State_data_AuthorView_cardView_CardView_cardList(eventData) {
	state.data.cardView.cardList = eventData.cardList;
}

export function reset_state_State_data_AuthorView_cardView_CardView_cardList() {
	state.data.cardView.cardList = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_cardList() {
	state.data.cardView.cardList = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_naturalInputOrder(eventData) {
	state.data.cardView.naturalInputOrder = eventData.naturalInputOrder;
}

export function reset_state_State_data_AuthorView_cardView_CardView_naturalInputOrder() {
	state.data.cardView.naturalInputOrder = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_naturalInputOrder() {
	state.data.cardView.naturalInputOrder = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_filter(eventData) {
	state.data.cardView.filter = eventData.filter;
}

export function reset_state_State_data_AuthorView_cardView_CardView_filter() {
	state.data.cardView.filter = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_filter() {
	state.data.cardView.filter = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_editedCard(eventData) {
	state.data.cardView.editedCard = eventData.editedCard;
}

export function merge_state_State_data_AuthorView_cardView_CardView_editedCard(eventData) {
	if (eventData.cardId !== undefined) {
		state.data.cardView.editedCard.cardId = eventData.cardId;
	}
	if (eventData.given !== undefined) {
		state.data.cardView.editedCard.given = eventData.given;
	}
	if (eventData.wanted !== undefined) {
		state.data.cardView.editedCard.wanted = eventData.wanted;
	}
	if (eventData.index !== undefined) {
		state.data.cardView.editedCard.index = eventData.index;
	}
	if (eventData.image !== undefined) {
		state.data.cardView.editedCard.image = eventData.image;
	}
	if (eventData.selectedCardIds !== undefined) {
		state.data.cardView.editedCard.selectedCardIds = eventData.selectedCardIds;
	}
}

export function reset_state_State_data_AuthorView_cardView_CardView_editedCard() {
	state.data.cardView.editedCard = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_editedCard() {
	state.data.cardView.editedCard = {};
}

export function set_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_cardId(eventData) {
	state.data.cardView.editedCard.cardId = eventData.cardId;
}

export function reset_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_cardId() {
	state.data.cardView.editedCard.cardId = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_cardId() {
	state.data.cardView.editedCard.cardId = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_given(eventData) {
	state.data.cardView.editedCard.given = eventData.given;
}

export function reset_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_given() {
	state.data.cardView.editedCard.given = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_given() {
	state.data.cardView.editedCard.given = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_wanted(eventData) {
	state.data.cardView.editedCard.wanted = eventData.wanted;
}

export function reset_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_wanted() {
	state.data.cardView.editedCard.wanted = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_wanted() {
	state.data.cardView.editedCard.wanted = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_index(eventData) {
	state.data.cardView.editedCard.index = eventData.index;
}

export function reset_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_index() {
	state.data.cardView.editedCard.index = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_index() {
	state.data.cardView.editedCard.index = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_image(eventData) {
	state.data.cardView.editedCard.image = eventData.image;
}

export function reset_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_image() {
	state.data.cardView.editedCard.image = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_image() {
	state.data.cardView.editedCard.image = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_selectedCardIds(eventData) {
	state.data.cardView.editedCard.selectedCardIds = eventData.selectedCardIds;
}

export function reset_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_selectedCardIds() {
	state.data.cardView.editedCard.selectedCardIds = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_selectedCardIds() {
	state.data.cardView.editedCard.selectedCardIds = null;
}

export function set_state_State_data_AuthorView_cardView_CardView_newCard(eventData) {
	state.data.cardView.newCard = eventData.newCard;
}

export function merge_state_State_data_AuthorView_cardView_CardView_newCard(eventData) {
	if (eventData.given !== undefined) {
		state.data.cardView.newCard.given = eventData.given;
	}
	if (eventData.wanted !== undefined) {
		state.data.cardView.newCard.wanted = eventData.wanted;
	}
	if (eventData.index !== undefined) {
		state.data.cardView.newCard.index = eventData.index;
	}
	if (eventData.image !== undefined) {
		state.data.cardView.newCard.image = eventData.image;
	}
	if (eventData.selectedCardIds !== undefined) {
		state.data.cardView.newCard.selectedCardIds = eventData.selectedCardIds;
	}
	if (eventData.file !== undefined) {
		state.data.cardView.newCard.file = eventData.file;
	}
	if (eventData.displaySpinner !== undefined) {
		state.data.cardView.newCard.displaySpinner = eventData.displaySpinner;
	}
	if (eventData.displayTranslateSpinner !== undefined) {
		state.data.cardView.newCard.displayTranslateSpinner = eventData.displayTranslateSpinner;
	}
}

export function reset_state_State_data_AuthorView_cardView_CardView_newCard() {
	state.data.cardView.newCard = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_newCard() {
	state.data.cardView.newCard = {};
}

export function set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_given(eventData) {
	state.data.cardView.newCard.given = eventData.given;
}

export function reset_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_given() {
	state.data.cardView.newCard.given = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_given() {
	state.data.cardView.newCard.given = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_wanted(eventData) {
	state.data.cardView.newCard.wanted = eventData.wanted;
}

export function reset_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_wanted() {
	state.data.cardView.newCard.wanted = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_wanted() {
	state.data.cardView.newCard.wanted = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_index(eventData) {
	state.data.cardView.newCard.index = eventData.index;
}

export function reset_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_index() {
	state.data.cardView.newCard.index = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_index() {
	state.data.cardView.newCard.index = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_image(eventData) {
	state.data.cardView.newCard.image = eventData.image;
}

export function reset_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_image() {
	state.data.cardView.newCard.image = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_image() {
	state.data.cardView.newCard.image = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_selectedCardIds(eventData) {
	state.data.cardView.newCard.selectedCardIds = eventData.selectedCardIds;
}

export function reset_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_selectedCardIds() {
	state.data.cardView.newCard.selectedCardIds = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_selectedCardIds() {
	state.data.cardView.newCard.selectedCardIds = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_file(eventData) {
	state.data.cardView.newCard.file = eventData.file;
}

export function reset_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_file() {
	state.data.cardView.newCard.file = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_file() {
	state.data.cardView.newCard.file = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_displaySpinner(eventData) {
	state.data.cardView.newCard.displaySpinner = eventData.displaySpinner;
}

export function reset_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_displaySpinner() {
	state.data.cardView.newCard.displaySpinner = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_displaySpinner() {
	state.data.cardView.newCard.displaySpinner = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_displayTranslateSpinner(eventData) {
	state.data.cardView.newCard.displayTranslateSpinner = eventData.displayTranslateSpinner;
}

export function reset_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_displayTranslateSpinner() {
	state.data.cardView.newCard.displayTranslateSpinner = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_displayTranslateSpinner() {
	state.data.cardView.newCard.displayTranslateSpinner = null;
}

export function set_state_State_data_AuthorView_cardView_CardView_cardDuplicates(eventData) {
	state.data.cardView.cardDuplicates = eventData.cardDuplicates;
}

export function reset_state_State_data_AuthorView_cardView_CardView_cardDuplicates() {
	state.data.cardView.cardDuplicates = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_cardDuplicates() {
	state.data.cardView.cardDuplicates = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_deleteCard(eventData) {
	state.data.cardView.deleteCard = eventData.deleteCard;
}

export function merge_state_State_data_AuthorView_cardView_CardView_deleteCard(eventData) {
	if (eventData.confirmDelete !== undefined) {
		state.data.cardView.deleteCard.confirmDelete = eventData.confirmDelete;
	}
	if (eventData.cardId !== undefined) {
		state.data.cardView.deleteCard.cardId = eventData.cardId;
	}
}

export function reset_state_State_data_AuthorView_cardView_CardView_deleteCard() {
	state.data.cardView.deleteCard = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_deleteCard() {
	state.data.cardView.deleteCard = {};
}

export function set_state_State_data_AuthorView_cardView_CardView_deleteCard_DeleteCard_confirmDelete(eventData) {
	state.data.cardView.deleteCard.confirmDelete = eventData.confirmDelete;
}

export function reset_state_State_data_AuthorView_cardView_CardView_deleteCard_DeleteCard_confirmDelete() {
	state.data.cardView.deleteCard.confirmDelete = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_deleteCard_DeleteCard_confirmDelete() {
	state.data.cardView.deleteCard.confirmDelete = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_deleteCard_DeleteCard_cardId(eventData) {
	state.data.cardView.deleteCard.cardId = eventData.cardId;
}

export function reset_state_State_data_AuthorView_cardView_CardView_deleteCard_DeleteCard_cardId() {
	state.data.cardView.deleteCard.cardId = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_deleteCard_DeleteCard_cardId() {
	state.data.cardView.deleteCard.cardId = null;
}

export function set_state_State_data_AuthorView_cardView_CardView_dictionaryValue(eventData) {
	state.data.cardView.dictionaryValue = eventData.dictionaryValue;
}

export function reset_state_State_data_AuthorView_cardView_CardView_dictionaryValue() {
	state.data.cardView.dictionaryValue = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_dictionaryValue() {
	state.data.cardView.dictionaryValue = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_selectedCardIds(eventData) {
	state.data.cardView.selectedCardIds = eventData.selectedCardIds;
}

export function reset_state_State_data_AuthorView_cardView_CardView_selectedCardIds() {
	state.data.cardView.selectedCardIds = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_selectedCardIds() {
	state.data.cardView.selectedCardIds = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_movedCardIds(eventData) {
	state.data.cardView.movedCardIds = eventData.movedCardIds;
}

export function reset_state_State_data_AuthorView_cardView_CardView_movedCardIds() {
	state.data.cardView.movedCardIds = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_movedCardIds() {
	state.data.cardView.movedCardIds = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_dragTargetCardId(eventData) {
	state.data.cardView.dragTargetCardId = eventData.dragTargetCardId;
}

export function reset_state_State_data_AuthorView_cardView_CardView_dragTargetCardId() {
	state.data.cardView.dragTargetCardId = null;
}

export function init_state_State_data_AuthorView_cardView_CardView_dragTargetCardId() {
	state.data.cardView.dragTargetCardId = null;
}


