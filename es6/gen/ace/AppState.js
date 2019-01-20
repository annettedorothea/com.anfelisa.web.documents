import AppUtils from "../../src/app/AppUtils";

let state;

export function getState() {
	return AppUtils.deepCopy(state);
}

export function setInitialState(initialState) {
	state = AppUtils.deepCopy(initialState);
}

export function set_state_State_loggedInUser(eventData) {
	state.loggedInUser = eventData.loggedInUser;
}

export function get_state_State_loggedInUser() {
	return AppUtils.deepCopy(state.loggedInUser);
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

export function set_state_State_loggedInUser_LoggedInUser_username(eventData) {
	state.loggedInUser.username = eventData.username;
}

export function get_state_State_loggedInUser_LoggedInUser_username() {
	return state.loggedInUser.username;
}

export function reset_state_State_loggedInUser_LoggedInUser_username() {
	state.loggedInUser.username = null;
}
export function set_state_State_loggedInUser_LoggedInUser_userId(eventData) {
	state.loggedInUser.userId = eventData.userId;
}

export function get_state_State_loggedInUser_LoggedInUser_userId() {
	return state.loggedInUser.userId;
}

export function reset_state_State_loggedInUser_LoggedInUser_userId() {
	state.loggedInUser.userId = null;
}
export function set_state_State_loggedInUser_LoggedInUser_role(eventData) {
	state.loggedInUser.role = eventData.role;
}

export function get_state_State_loggedInUser_LoggedInUser_role() {
	return state.loggedInUser.role;
}

export function reset_state_State_loggedInUser_LoggedInUser_role() {
	state.loggedInUser.role = null;
}
export function set_state_State_loggedInUser_LoggedInUser_password(eventData) {
	state.loggedInUser.password = eventData.password;
}

export function get_state_State_loggedInUser_LoggedInUser_password() {
	return state.loggedInUser.password;
}

export function reset_state_State_loggedInUser_LoggedInUser_password() {
	state.loggedInUser.password = null;
}

export function set_state_State_hash(eventData) {
	location.hash = eventData.hash;
}

export function get_state_State_hash() {
	return location.hash;
}

export function reset_state_State_hash() {
	location.hash = "";
}
export function set_state_State_username(eventData) {
	localStorage.setItem("username", eventData.username);
}

export function get_state_State_username() {
	return localStorage.getItem("username");
}

export function reset_state_State_username() {
	localStorage.removeItem("username");
}
export function set_state_State_password(eventData) {
	localStorage.setItem("password", eventData.password);
}

export function get_state_State_password() {
	return localStorage.getItem("password");
}

export function reset_state_State_password() {
	localStorage.removeItem("password");
}
export function set_state_State_displaySpinner(eventData) {
	state.displaySpinner = eventData.displaySpinner;
}

export function get_state_State_displaySpinner() {
	return state.displaySpinner;
}

export function reset_state_State_displaySpinner() {
	state.displaySpinner = null;
}
export function set_state_State_view(eventData) {
	state.view = eventData.view;
}

export function get_state_State_view() {
	return state.view;
}

export function reset_state_State_view() {
	state.view = null;
}
export function set_state_State_language(eventData) {
	state.language = eventData.language;
}

export function get_state_State_language() {
	return state.language;
}

export function reset_state_State_language() {
	state.language = null;
}
export function set_state_State_texts(eventData) {
	state.texts = eventData.texts;
}

export function get_state_State_texts() {
	return state.texts;
}

export function reset_state_State_texts() {
	state.texts = null;
}
export function set_state_State_message(eventData) {
	state.message = eventData.message;
}

export function get_state_State_message() {
	return AppUtils.deepCopy(state.message);
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

export function set_state_State_message_Message_type(eventData) {
	state.message.type = eventData.type;
}

export function get_state_State_message_Message_type() {
	return state.message.type;
}

export function reset_state_State_message_Message_type() {
	state.message.type = null;
}
export function set_state_State_message_Message_text(eventData) {
	state.message.text = eventData.text;
}

export function get_state_State_message_Message_text() {
	return state.message.text;
}

export function reset_state_State_message_Message_text() {
	state.message.text = null;
}

export function set_state_State_data(eventData) {
	state.data = eventData.data;
}

export function get_state_State_data() {
	return AppUtils.deepCopy(state.data);
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
	if (eventData.index !== undefined) {
		state.data.index = eventData.index;
	}
	if (eventData.enableScoreButtons !== undefined) {
		state.data.enableScoreButtons = eventData.enableScoreButtons;
	}
	if (eventData.displayImage !== undefined) {
		state.data.displayImage = eventData.displayImage;
	}
	if (eventData.scheduleNext !== undefined) {
		state.data.scheduleNext = eventData.scheduleNext;
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
	if (eventData.scheduledDate !== undefined) {
		state.data.scheduledDate = eventData.scheduledDate;
	}
	if (eventData.scoredDate !== undefined) {
		state.data.scoredDate = eventData.scoredDate;
	}
	if (eventData.wanted !== undefined) {
		state.data.wanted = eventData.wanted;
	}
	if (eventData.boxId !== undefined) {
		state.data.boxId = eventData.boxId;
	}
	if (eventData.categoryName !== undefined) {
		state.data.categoryName = eventData.categoryName;
	}
	if (eventData.daysBehindSchedule !== undefined) {
		state.data.daysBehindSchedule = eventData.daysBehindSchedule;
	}
	if (eventData.maxInterval !== undefined) {
		state.data.maxInterval = eventData.maxInterval;
	}
	if (eventData.myCards !== undefined) {
		state.data.myCards = eventData.myCards;
	}
	if (eventData.quality0Count !== undefined) {
		state.data.quality0Count = eventData.quality0Count;
	}
	if (eventData.quality1Count !== undefined) {
		state.data.quality1Count = eventData.quality1Count;
	}
	if (eventData.quality2Count !== undefined) {
		state.data.quality2Count = eventData.quality2Count;
	}
	if (eventData.quality3Count !== undefined) {
		state.data.quality3Count = eventData.quality3Count;
	}
	if (eventData.quality4Count !== undefined) {
		state.data.quality4Count = eventData.quality4Count;
	}
	if (eventData.quality5Count !== undefined) {
		state.data.quality5Count = eventData.quality5Count;
	}
	if (eventData.reinforceCards !== undefined) {
		state.data.reinforceCards = eventData.reinforceCards;
	}
	if (eventData.todaysCards !== undefined) {
		state.data.todaysCards = eventData.todaysCards;
	}
	if (eventData.totalCards !== undefined) {
		state.data.totalCards = eventData.totalCards;
	}
	if (eventData.editMaxInterval !== undefined) {
		state.data.editMaxInterval = eventData.editMaxInterval;
	}
	if (eventData.editedMaxInterval !== undefined) {
		state.data.editedMaxInterval = eventData.editedMaxInterval;
	}
	if (eventData.reinforceCardId !== undefined) {
		state.data.reinforceCardId = eventData.reinforceCardId;
	}
	if (eventData.changeDate !== undefined) {
		state.data.changeDate = eventData.changeDate;
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

export function set_state_State_data_Login_username(eventData) {
	state.data.username = eventData.username;
}

export function get_state_State_data_Login_username() {
	return state.data.username;
}

export function reset_state_State_data_Login_username() {
	state.data.username = null;
}
export function set_state_State_data_Login_saveInLocalStorage(eventData) {
	state.data.saveInLocalStorage = eventData.saveInLocalStorage;
}

export function get_state_State_data_Login_saveInLocalStorage() {
	return state.data.saveInLocalStorage;
}

export function reset_state_State_data_Login_saveInLocalStorage() {
	state.data.saveInLocalStorage = null;
}
export function set_state_State_data_Registration_displayUsernameSpinner(eventData) {
	state.data.displayUsernameSpinner = eventData.displayUsernameSpinner;
}

export function get_state_State_data_Registration_displayUsernameSpinner() {
	return state.data.displayUsernameSpinner;
}

export function reset_state_State_data_Registration_displayUsernameSpinner() {
	state.data.displayUsernameSpinner = null;
}
export function set_state_State_data_Registration_available(eventData) {
	state.data.available = eventData.available;
}

export function get_state_State_data_Registration_available() {
	return state.data.available;
}

export function reset_state_State_data_Registration_available() {
	state.data.available = null;
}
export function set_state_State_data_Registration_username(eventData) {
	state.data.username = eventData.username;
}

export function get_state_State_data_Registration_username() {
	return state.data.username;
}

export function reset_state_State_data_Registration_username() {
	state.data.username = null;
}
export function set_state_State_data_Registration_email(eventData) {
	state.data.email = eventData.email;
}

export function get_state_State_data_Registration_email() {
	return state.data.email;
}

export function reset_state_State_data_Registration_email() {
	state.data.email = null;
}
export function set_state_State_data_Registration_emailInvalid(eventData) {
	state.data.emailInvalid = eventData.emailInvalid;
}

export function get_state_State_data_Registration_emailInvalid() {
	return state.data.emailInvalid;
}

export function reset_state_State_data_Registration_emailInvalid() {
	state.data.emailInvalid = null;
}
export function set_state_State_data_Registration_passwordMismatch(eventData) {
	state.data.passwordMismatch = eventData.passwordMismatch;
}

export function get_state_State_data_Registration_passwordMismatch() {
	return state.data.passwordMismatch;
}

export function reset_state_State_data_Registration_passwordMismatch() {
	state.data.passwordMismatch = null;
}
export function set_state_State_data_ForgotPassword_username(eventData) {
	state.data.username = eventData.username;
}

export function get_state_State_data_ForgotPassword_username() {
	return state.data.username;
}

export function reset_state_State_data_ForgotPassword_username() {
	state.data.username = null;
}
export function set_state_State_data_ResetPassword_token(eventData) {
	state.data.token = eventData.token;
}

export function get_state_State_data_ResetPassword_token() {
	return state.data.token;
}

export function reset_state_State_data_ResetPassword_token() {
	state.data.token = null;
}
export function set_state_State_data_ResetPassword_passwordMismatch(eventData) {
	state.data.passwordMismatch = eventData.passwordMismatch;
}

export function get_state_State_data_ResetPassword_passwordMismatch() {
	return state.data.passwordMismatch;
}

export function reset_state_State_data_ResetPassword_passwordMismatch() {
	state.data.passwordMismatch = null;
}
export function set_state_State_data_Dashboard_boxList(eventData) {
	state.data.boxList = eventData.boxList;
}

export function get_state_State_data_Dashboard_boxList() {
	return state.data.boxList;
}

export function reset_state_State_data_Dashboard_boxList() {
	state.data.boxList = null;
}
export function set_state_State_data_Dashboard_deleteBox(eventData) {
	state.data.deleteBox = eventData.deleteBox;
}

export function get_state_State_data_Dashboard_deleteBox() {
	return AppUtils.deepCopy(state.data.deleteBox);
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

export function set_state_State_data_Dashboard_deleteBox_DeleteBox_confirmDelete(eventData) {
	state.data.deleteBox.confirmDelete = eventData.confirmDelete;
}

export function get_state_State_data_Dashboard_deleteBox_DeleteBox_confirmDelete() {
	return state.data.deleteBox.confirmDelete;
}

export function reset_state_State_data_Dashboard_deleteBox_DeleteBox_confirmDelete() {
	state.data.deleteBox.confirmDelete = null;
}
export function set_state_State_data_Dashboard_deleteBox_DeleteBox_boxId(eventData) {
	state.data.deleteBox.boxId = eventData.boxId;
}

export function get_state_State_data_Dashboard_deleteBox_DeleteBox_boxId() {
	return state.data.deleteBox.boxId;
}

export function reset_state_State_data_Dashboard_deleteBox_DeleteBox_boxId() {
	state.data.deleteBox.boxId = null;
}

export function set_state_State_data_Profile_username(eventData) {
	state.data.username = eventData.username;
}

export function get_state_State_data_Profile_username() {
	return state.data.username;
}

export function reset_state_State_data_Profile_username() {
	state.data.username = null;
}
export function set_state_State_data_Profile_email(eventData) {
	state.data.email = eventData.email;
}

export function get_state_State_data_Profile_email() {
	return state.data.email;
}

export function reset_state_State_data_Profile_email() {
	state.data.email = null;
}
export function set_state_State_data_Profile_role(eventData) {
	state.data.role = eventData.role;
}

export function get_state_State_data_Profile_role() {
	return state.data.role;
}

export function reset_state_State_data_Profile_role() {
	state.data.role = null;
}
export function set_state_State_data_Profile_showDeleteUserDialog(eventData) {
	state.data.showDeleteUserDialog = eventData.showDeleteUserDialog;
}

export function get_state_State_data_Profile_showDeleteUserDialog() {
	return state.data.showDeleteUserDialog;
}

export function reset_state_State_data_Profile_showDeleteUserDialog() {
	state.data.showDeleteUserDialog = null;
}
export function set_state_State_data_UserList_userList(eventData) {
	state.data.userList = eventData.userList;
}

export function get_state_State_data_UserList_userList() {
	return state.data.userList;
}

export function reset_state_State_data_UserList_userList() {
	state.data.userList = null;
}
export function set_state_State_data_UserList_showDeleteUserDialog(eventData) {
	state.data.showDeleteUserDialog = eventData.showDeleteUserDialog;
}

export function get_state_State_data_UserList_showDeleteUserDialog() {
	return state.data.showDeleteUserDialog;
}

export function reset_state_State_data_UserList_showDeleteUserDialog() {
	state.data.showDeleteUserDialog = null;
}
export function set_state_State_data_UserList_usernameToBeDeleted(eventData) {
	state.data.usernameToBeDeleted = eventData.usernameToBeDeleted;
}

export function get_state_State_data_UserList_usernameToBeDeleted() {
	return state.data.usernameToBeDeleted;
}

export function reset_state_State_data_UserList_usernameToBeDeleted() {
	state.data.usernameToBeDeleted = null;
}
export function set_state_State_data_Card_index(eventData) {
	state.data.index = eventData.index;
}

export function get_state_State_data_Card_index() {
	return state.data.index;
}

export function reset_state_State_data_Card_index() {
	state.data.index = null;
}
export function set_state_State_data_Card_enableScoreButtons(eventData) {
	state.data.enableScoreButtons = eventData.enableScoreButtons;
}

export function get_state_State_data_Card_enableScoreButtons() {
	return state.data.enableScoreButtons;
}

export function reset_state_State_data_Card_enableScoreButtons() {
	state.data.enableScoreButtons = null;
}
export function set_state_State_data_Card_displayImage(eventData) {
	state.data.displayImage = eventData.displayImage;
}

export function get_state_State_data_Card_displayImage() {
	return state.data.displayImage;
}

export function reset_state_State_data_Card_displayImage() {
	state.data.displayImage = null;
}
export function set_state_State_data_Card_scheduleNext(eventData) {
	state.data.scheduleNext = eventData.scheduleNext;
}

export function get_state_State_data_Card_scheduleNext() {
	return state.data.scheduleNext;
}

export function reset_state_State_data_Card_scheduleNext() {
	state.data.scheduleNext = null;
}
export function set_state_State_data_Card_cardId(eventData) {
	state.data.cardId = eventData.cardId;
}

export function get_state_State_data_Card_cardId() {
	return state.data.cardId;
}

export function reset_state_State_data_Card_cardId() {
	state.data.cardId = null;
}
export function set_state_State_data_Card_categoryId(eventData) {
	state.data.categoryId = eventData.categoryId;
}

export function get_state_State_data_Card_categoryId() {
	return state.data.categoryId;
}

export function reset_state_State_data_Card_categoryId() {
	state.data.categoryId = null;
}
export function set_state_State_data_Card_count(eventData) {
	state.data.count = eventData.count;
}

export function get_state_State_data_Card_count() {
	return state.data.count;
}

export function reset_state_State_data_Card_count() {
	state.data.count = null;
}
export function set_state_State_data_Card_given(eventData) {
	state.data.given = eventData.given;
}

export function get_state_State_data_Card_given() {
	return state.data.given;
}

export function reset_state_State_data_Card_given() {
	state.data.given = null;
}
export function set_state_State_data_Card_image(eventData) {
	state.data.image = eventData.image;
}

export function get_state_State_data_Card_image() {
	return state.data.image;
}

export function reset_state_State_data_Card_image() {
	state.data.image = null;
}
export function set_state_State_data_Card_lastQuality(eventData) {
	state.data.lastQuality = eventData.lastQuality;
}

export function get_state_State_data_Card_lastQuality() {
	return state.data.lastQuality;
}

export function reset_state_State_data_Card_lastQuality() {
	state.data.lastQuality = null;
}
export function set_state_State_data_Card_rootCategoryId(eventData) {
	state.data.rootCategoryId = eventData.rootCategoryId;
}

export function get_state_State_data_Card_rootCategoryId() {
	return state.data.rootCategoryId;
}

export function reset_state_State_data_Card_rootCategoryId() {
	state.data.rootCategoryId = null;
}
export function set_state_State_data_Card_scheduledCardId(eventData) {
	state.data.scheduledCardId = eventData.scheduledCardId;
}

export function get_state_State_data_Card_scheduledCardId() {
	return state.data.scheduledCardId;
}

export function reset_state_State_data_Card_scheduledCardId() {
	state.data.scheduledCardId = null;
}
export function set_state_State_data_Card_scheduledDate(eventData) {
	state.data.scheduledDate = eventData.scheduledDate;
}

export function get_state_State_data_Card_scheduledDate() {
	return state.data.scheduledDate;
}

export function reset_state_State_data_Card_scheduledDate() {
	state.data.scheduledDate = null;
}
export function set_state_State_data_Card_scoredDate(eventData) {
	state.data.scoredDate = eventData.scoredDate;
}

export function get_state_State_data_Card_scoredDate() {
	return state.data.scoredDate;
}

export function reset_state_State_data_Card_scoredDate() {
	state.data.scoredDate = null;
}
export function set_state_State_data_Card_wanted(eventData) {
	state.data.wanted = eventData.wanted;
}

export function get_state_State_data_Card_wanted() {
	return state.data.wanted;
}

export function reset_state_State_data_Card_wanted() {
	state.data.wanted = null;
}
export function set_state_State_data_Card_boxId(eventData) {
	state.data.boxId = eventData.boxId;
}

export function get_state_State_data_Card_boxId() {
	return state.data.boxId;
}

export function reset_state_State_data_Card_boxId() {
	state.data.boxId = null;
}
export function set_state_State_data_Card_categoryName(eventData) {
	state.data.categoryName = eventData.categoryName;
}

export function get_state_State_data_Card_categoryName() {
	return state.data.categoryName;
}

export function reset_state_State_data_Card_categoryName() {
	state.data.categoryName = null;
}
export function set_state_State_data_Card_daysBehindSchedule(eventData) {
	state.data.daysBehindSchedule = eventData.daysBehindSchedule;
}

export function get_state_State_data_Card_daysBehindSchedule() {
	return state.data.daysBehindSchedule;
}

export function reset_state_State_data_Card_daysBehindSchedule() {
	state.data.daysBehindSchedule = null;
}
export function set_state_State_data_Card_maxInterval(eventData) {
	state.data.maxInterval = eventData.maxInterval;
}

export function get_state_State_data_Card_maxInterval() {
	return state.data.maxInterval;
}

export function reset_state_State_data_Card_maxInterval() {
	state.data.maxInterval = null;
}
export function set_state_State_data_Card_myCards(eventData) {
	state.data.myCards = eventData.myCards;
}

export function get_state_State_data_Card_myCards() {
	return state.data.myCards;
}

export function reset_state_State_data_Card_myCards() {
	state.data.myCards = null;
}
export function set_state_State_data_Card_quality0Count(eventData) {
	state.data.quality0Count = eventData.quality0Count;
}

export function get_state_State_data_Card_quality0Count() {
	return state.data.quality0Count;
}

export function reset_state_State_data_Card_quality0Count() {
	state.data.quality0Count = null;
}
export function set_state_State_data_Card_quality1Count(eventData) {
	state.data.quality1Count = eventData.quality1Count;
}

export function get_state_State_data_Card_quality1Count() {
	return state.data.quality1Count;
}

export function reset_state_State_data_Card_quality1Count() {
	state.data.quality1Count = null;
}
export function set_state_State_data_Card_quality2Count(eventData) {
	state.data.quality2Count = eventData.quality2Count;
}

export function get_state_State_data_Card_quality2Count() {
	return state.data.quality2Count;
}

export function reset_state_State_data_Card_quality2Count() {
	state.data.quality2Count = null;
}
export function set_state_State_data_Card_quality3Count(eventData) {
	state.data.quality3Count = eventData.quality3Count;
}

export function get_state_State_data_Card_quality3Count() {
	return state.data.quality3Count;
}

export function reset_state_State_data_Card_quality3Count() {
	state.data.quality3Count = null;
}
export function set_state_State_data_Card_quality4Count(eventData) {
	state.data.quality4Count = eventData.quality4Count;
}

export function get_state_State_data_Card_quality4Count() {
	return state.data.quality4Count;
}

export function reset_state_State_data_Card_quality4Count() {
	state.data.quality4Count = null;
}
export function set_state_State_data_Card_quality5Count(eventData) {
	state.data.quality5Count = eventData.quality5Count;
}

export function get_state_State_data_Card_quality5Count() {
	return state.data.quality5Count;
}

export function reset_state_State_data_Card_quality5Count() {
	state.data.quality5Count = null;
}
export function set_state_State_data_Card_reinforceCards(eventData) {
	state.data.reinforceCards = eventData.reinforceCards;
}

export function get_state_State_data_Card_reinforceCards() {
	return state.data.reinforceCards;
}

export function reset_state_State_data_Card_reinforceCards() {
	state.data.reinforceCards = null;
}
export function set_state_State_data_Card_todaysCards(eventData) {
	state.data.todaysCards = eventData.todaysCards;
}

export function get_state_State_data_Card_todaysCards() {
	return state.data.todaysCards;
}

export function reset_state_State_data_Card_todaysCards() {
	state.data.todaysCards = null;
}
export function set_state_State_data_Card_totalCards(eventData) {
	state.data.totalCards = eventData.totalCards;
}

export function get_state_State_data_Card_totalCards() {
	return state.data.totalCards;
}

export function reset_state_State_data_Card_totalCards() {
	state.data.totalCards = null;
}
export function set_state_State_data_Card_editMaxInterval(eventData) {
	state.data.editMaxInterval = eventData.editMaxInterval;
}

export function get_state_State_data_Card_editMaxInterval() {
	return state.data.editMaxInterval;
}

export function reset_state_State_data_Card_editMaxInterval() {
	state.data.editMaxInterval = null;
}
export function set_state_State_data_Card_editedMaxInterval(eventData) {
	state.data.editedMaxInterval = eventData.editedMaxInterval;
}

export function get_state_State_data_Card_editedMaxInterval() {
	return state.data.editedMaxInterval;
}

export function reset_state_State_data_Card_editedMaxInterval() {
	state.data.editedMaxInterval = null;
}
export function set_state_State_data_Card_reinforceCardId(eventData) {
	state.data.reinforceCardId = eventData.reinforceCardId;
}

export function get_state_State_data_Card_reinforceCardId() {
	return state.data.reinforceCardId;
}

export function reset_state_State_data_Card_reinforceCardId() {
	state.data.reinforceCardId = null;
}
export function set_state_State_data_Card_changeDate(eventData) {
	state.data.changeDate = eventData.changeDate;
}

export function get_state_State_data_Card_changeDate() {
	return state.data.changeDate;
}

export function reset_state_State_data_Card_changeDate() {
	state.data.changeDate = null;
}
export function set_state_State_data_AuthorView_categoryTree(eventData) {
	state.data.categoryTree = eventData.categoryTree;
}

export function get_state_State_data_AuthorView_categoryTree() {
	return AppUtils.deepCopy(state.data.categoryTree);
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
	if (eventData.dictionaryLookup !== undefined) {
		state.data.categoryTree.dictionaryLookup = eventData.dictionaryLookup;
	}
	if (eventData.wantedLanguage !== undefined) {
		state.data.categoryTree.wantedLanguage = eventData.wantedLanguage;
	}
	if (eventData.givenLanguage !== undefined) {
		state.data.categoryTree.givenLanguage = eventData.givenLanguage;
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
	if (eventData.displayInviteUser !== undefined) {
		state.data.categoryTree.displayInviteUser = eventData.displayInviteUser;
	}
	if (eventData.invitedUsername !== undefined) {
		state.data.categoryTree.invitedUsername = eventData.invitedUsername;
	}
	if (eventData.userList !== undefined) {
		state.data.categoryTree.userList = eventData.userList;
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
}

export function reset_state_State_data_AuthorView_categoryTree() {
	state.data.categoryTree = null;
}

export function set_state_State_data_AuthorView_categoryTree_CategoryTree_selectedCategory(eventData) {
	state.data.categoryTree.selectedCategory = eventData.selectedCategory;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_selectedCategory() {
	return state.data.categoryTree.selectedCategory;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_selectedCategory() {
	state.data.categoryTree.selectedCategory = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_categoryList(eventData) {
	state.data.categoryTree.categoryList = eventData.categoryList;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_categoryList() {
	return state.data.categoryTree.categoryList;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_categoryList() {
	state.data.categoryTree.categoryList = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_displayDeleteCategory(eventData) {
	state.data.categoryTree.displayDeleteCategory = eventData.displayDeleteCategory;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_displayDeleteCategory() {
	return state.data.categoryTree.displayDeleteCategory;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_displayDeleteCategory() {
	state.data.categoryTree.displayDeleteCategory = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_dictionaryLookup(eventData) {
	state.data.categoryTree.dictionaryLookup = eventData.dictionaryLookup;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_dictionaryLookup() {
	return state.data.categoryTree.dictionaryLookup;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_dictionaryLookup() {
	state.data.categoryTree.dictionaryLookup = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_wantedLanguage(eventData) {
	state.data.categoryTree.wantedLanguage = eventData.wantedLanguage;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_wantedLanguage() {
	return state.data.categoryTree.wantedLanguage;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_wantedLanguage() {
	state.data.categoryTree.wantedLanguage = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_givenLanguage(eventData) {
	state.data.categoryTree.givenLanguage = eventData.givenLanguage;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_givenLanguage() {
	return state.data.categoryTree.givenLanguage;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_givenLanguage() {
	state.data.categoryTree.givenLanguage = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_categoryName(eventData) {
	state.data.categoryTree.categoryName = eventData.categoryName;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_categoryName() {
	return state.data.categoryTree.categoryName;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_categoryName() {
	state.data.categoryTree.categoryName = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_displayEditCategory(eventData) {
	state.data.categoryTree.displayEditCategory = eventData.displayEditCategory;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_displayEditCategory() {
	return state.data.categoryTree.displayEditCategory;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_displayEditCategory() {
	state.data.categoryTree.displayEditCategory = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_displayNewCategory(eventData) {
	state.data.categoryTree.displayNewCategory = eventData.displayNewCategory;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_displayNewCategory() {
	return state.data.categoryTree.displayNewCategory;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_displayNewCategory() {
	state.data.categoryTree.displayNewCategory = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_displayInviteUser(eventData) {
	state.data.categoryTree.displayInviteUser = eventData.displayInviteUser;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_displayInviteUser() {
	return state.data.categoryTree.displayInviteUser;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_displayInviteUser() {
	state.data.categoryTree.displayInviteUser = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_invitedUsername(eventData) {
	state.data.categoryTree.invitedUsername = eventData.invitedUsername;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_invitedUsername() {
	return state.data.categoryTree.invitedUsername;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_invitedUsername() {
	state.data.categoryTree.invitedUsername = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_userList(eventData) {
	state.data.categoryTree.userList = eventData.userList;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_userList() {
	return state.data.categoryTree.userList;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_userList() {
	state.data.categoryTree.userList = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_dropAllowed(eventData) {
	state.data.categoryTree.dropAllowed = eventData.dropAllowed;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_dropAllowed() {
	return state.data.categoryTree.dropAllowed;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_dropAllowed() {
	state.data.categoryTree.dropAllowed = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_dropTargetCategoryId(eventData) {
	state.data.categoryTree.dropTargetCategoryId = eventData.dropTargetCategoryId;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_dropTargetCategoryId() {
	return state.data.categoryTree.dropTargetCategoryId;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_dropTargetCategoryId() {
	state.data.categoryTree.dropTargetCategoryId = null;
}
export function set_state_State_data_AuthorView_categoryTree_CategoryTree_movedCategory(eventData) {
	state.data.categoryTree.movedCategory = eventData.movedCategory;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_movedCategory() {
	return state.data.categoryTree.movedCategory;
}

export function reset_state_State_data_AuthorView_categoryTree_CategoryTree_movedCategory() {
	state.data.categoryTree.movedCategory = null;
}

export function set_state_State_data_AuthorView_boxList(eventData) {
	state.data.boxList = eventData.boxList;
}

export function get_state_State_data_AuthorView_boxList() {
	return state.data.boxList;
}

export function reset_state_State_data_AuthorView_boxList() {
	state.data.boxList = null;
}
export function set_state_State_data_AuthorView_deleteBox(eventData) {
	state.data.deleteBox = eventData.deleteBox;
}

export function get_state_State_data_AuthorView_deleteBox() {
	return AppUtils.deepCopy(state.data.deleteBox);
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

export function set_state_State_data_AuthorView_deleteBox_DeleteBox_confirmDelete(eventData) {
	state.data.deleteBox.confirmDelete = eventData.confirmDelete;
}

export function get_state_State_data_AuthorView_deleteBox_DeleteBox_confirmDelete() {
	return state.data.deleteBox.confirmDelete;
}

export function reset_state_State_data_AuthorView_deleteBox_DeleteBox_confirmDelete() {
	state.data.deleteBox.confirmDelete = null;
}
export function set_state_State_data_AuthorView_deleteBox_DeleteBox_boxId(eventData) {
	state.data.deleteBox.boxId = eventData.boxId;
}

export function get_state_State_data_AuthorView_deleteBox_DeleteBox_boxId() {
	return state.data.deleteBox.boxId;
}

export function reset_state_State_data_AuthorView_deleteBox_DeleteBox_boxId() {
	state.data.deleteBox.boxId = null;
}

export function set_state_State_data_AuthorView_cardView(eventData) {
	state.data.cardView = eventData.cardView;
}

export function get_state_State_data_AuthorView_cardView() {
	return AppUtils.deepCopy(state.data.cardView);
}

export function merge_state_State_data_AuthorView_cardView(eventData) {
	if (eventData.cardList !== undefined) {
		state.data.cardView.cardList = eventData.cardList;
	}
	if (eventData.naturalInputOrder !== undefined) {
		state.data.cardView.naturalInputOrder = eventData.naturalInputOrder;
	}
	if (eventData.useDictionary !== undefined) {
		state.data.cardView.useDictionary = eventData.useDictionary;
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
}

export function reset_state_State_data_AuthorView_cardView() {
	state.data.cardView = null;
}

export function set_state_State_data_AuthorView_cardView_CardView_cardList(eventData) {
	state.data.cardView.cardList = eventData.cardList;
}

export function get_state_State_data_AuthorView_cardView_CardView_cardList() {
	return state.data.cardView.cardList;
}

export function reset_state_State_data_AuthorView_cardView_CardView_cardList() {
	state.data.cardView.cardList = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_naturalInputOrder(eventData) {
	state.data.cardView.naturalInputOrder = eventData.naturalInputOrder;
}

export function get_state_State_data_AuthorView_cardView_CardView_naturalInputOrder() {
	return state.data.cardView.naturalInputOrder;
}

export function reset_state_State_data_AuthorView_cardView_CardView_naturalInputOrder() {
	state.data.cardView.naturalInputOrder = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_useDictionary(eventData) {
	state.data.cardView.useDictionary = eventData.useDictionary;
}

export function get_state_State_data_AuthorView_cardView_CardView_useDictionary() {
	return state.data.cardView.useDictionary;
}

export function reset_state_State_data_AuthorView_cardView_CardView_useDictionary() {
	state.data.cardView.useDictionary = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_filter(eventData) {
	state.data.cardView.filter = eventData.filter;
}

export function get_state_State_data_AuthorView_cardView_CardView_filter() {
	return state.data.cardView.filter;
}

export function reset_state_State_data_AuthorView_cardView_CardView_filter() {
	state.data.cardView.filter = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_editedCard(eventData) {
	state.data.cardView.editedCard = eventData.editedCard;
}

export function get_state_State_data_AuthorView_cardView_CardView_editedCard() {
	return AppUtils.deepCopy(state.data.cardView.editedCard);
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

export function set_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_cardId(eventData) {
	state.data.cardView.editedCard.cardId = eventData.cardId;
}

export function get_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_cardId() {
	return state.data.cardView.editedCard.cardId;
}

export function reset_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_cardId() {
	state.data.cardView.editedCard.cardId = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_given(eventData) {
	state.data.cardView.editedCard.given = eventData.given;
}

export function get_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_given() {
	return state.data.cardView.editedCard.given;
}

export function reset_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_given() {
	state.data.cardView.editedCard.given = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_wanted(eventData) {
	state.data.cardView.editedCard.wanted = eventData.wanted;
}

export function get_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_wanted() {
	return state.data.cardView.editedCard.wanted;
}

export function reset_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_wanted() {
	state.data.cardView.editedCard.wanted = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_index(eventData) {
	state.data.cardView.editedCard.index = eventData.index;
}

export function get_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_index() {
	return state.data.cardView.editedCard.index;
}

export function reset_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_index() {
	state.data.cardView.editedCard.index = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_image(eventData) {
	state.data.cardView.editedCard.image = eventData.image;
}

export function get_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_image() {
	return state.data.cardView.editedCard.image;
}

export function reset_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_image() {
	state.data.cardView.editedCard.image = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_selectedCardIds(eventData) {
	state.data.cardView.editedCard.selectedCardIds = eventData.selectedCardIds;
}

export function get_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_selectedCardIds() {
	return state.data.cardView.editedCard.selectedCardIds;
}

export function reset_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_selectedCardIds() {
	state.data.cardView.editedCard.selectedCardIds = null;
}

export function set_state_State_data_AuthorView_cardView_CardView_newCard(eventData) {
	state.data.cardView.newCard = eventData.newCard;
}

export function get_state_State_data_AuthorView_cardView_CardView_newCard() {
	return AppUtils.deepCopy(state.data.cardView.newCard);
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

export function set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_given(eventData) {
	state.data.cardView.newCard.given = eventData.given;
}

export function get_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_given() {
	return state.data.cardView.newCard.given;
}

export function reset_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_given() {
	state.data.cardView.newCard.given = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_wanted(eventData) {
	state.data.cardView.newCard.wanted = eventData.wanted;
}

export function get_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_wanted() {
	return state.data.cardView.newCard.wanted;
}

export function reset_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_wanted() {
	state.data.cardView.newCard.wanted = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_index(eventData) {
	state.data.cardView.newCard.index = eventData.index;
}

export function get_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_index() {
	return state.data.cardView.newCard.index;
}

export function reset_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_index() {
	state.data.cardView.newCard.index = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_image(eventData) {
	state.data.cardView.newCard.image = eventData.image;
}

export function get_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_image() {
	return state.data.cardView.newCard.image;
}

export function reset_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_image() {
	state.data.cardView.newCard.image = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_selectedCardIds(eventData) {
	state.data.cardView.newCard.selectedCardIds = eventData.selectedCardIds;
}

export function get_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_selectedCardIds() {
	return state.data.cardView.newCard.selectedCardIds;
}

export function reset_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_selectedCardIds() {
	state.data.cardView.newCard.selectedCardIds = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_file(eventData) {
	state.data.cardView.newCard.file = eventData.file;
}

export function get_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_file() {
	return state.data.cardView.newCard.file;
}

export function reset_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_file() {
	state.data.cardView.newCard.file = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_displaySpinner(eventData) {
	state.data.cardView.newCard.displaySpinner = eventData.displaySpinner;
}

export function get_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_displaySpinner() {
	return state.data.cardView.newCard.displaySpinner;
}

export function reset_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_displaySpinner() {
	state.data.cardView.newCard.displaySpinner = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_displayTranslateSpinner(eventData) {
	state.data.cardView.newCard.displayTranslateSpinner = eventData.displayTranslateSpinner;
}

export function get_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_displayTranslateSpinner() {
	return state.data.cardView.newCard.displayTranslateSpinner;
}

export function reset_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_displayTranslateSpinner() {
	state.data.cardView.newCard.displayTranslateSpinner = null;
}

export function set_state_State_data_AuthorView_cardView_CardView_cardDuplicates(eventData) {
	state.data.cardView.cardDuplicates = eventData.cardDuplicates;
}

export function get_state_State_data_AuthorView_cardView_CardView_cardDuplicates() {
	return state.data.cardView.cardDuplicates;
}

export function reset_state_State_data_AuthorView_cardView_CardView_cardDuplicates() {
	state.data.cardView.cardDuplicates = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_deleteCard(eventData) {
	state.data.cardView.deleteCard = eventData.deleteCard;
}

export function get_state_State_data_AuthorView_cardView_CardView_deleteCard() {
	return AppUtils.deepCopy(state.data.cardView.deleteCard);
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

export function set_state_State_data_AuthorView_cardView_CardView_deleteCard_DeleteCard_confirmDelete(eventData) {
	state.data.cardView.deleteCard.confirmDelete = eventData.confirmDelete;
}

export function get_state_State_data_AuthorView_cardView_CardView_deleteCard_DeleteCard_confirmDelete() {
	return state.data.cardView.deleteCard.confirmDelete;
}

export function reset_state_State_data_AuthorView_cardView_CardView_deleteCard_DeleteCard_confirmDelete() {
	state.data.cardView.deleteCard.confirmDelete = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_deleteCard_DeleteCard_cardId(eventData) {
	state.data.cardView.deleteCard.cardId = eventData.cardId;
}

export function get_state_State_data_AuthorView_cardView_CardView_deleteCard_DeleteCard_cardId() {
	return state.data.cardView.deleteCard.cardId;
}

export function reset_state_State_data_AuthorView_cardView_CardView_deleteCard_DeleteCard_cardId() {
	state.data.cardView.deleteCard.cardId = null;
}

export function set_state_State_data_AuthorView_cardView_CardView_dictionaryValue(eventData) {
	state.data.cardView.dictionaryValue = eventData.dictionaryValue;
}

export function get_state_State_data_AuthorView_cardView_CardView_dictionaryValue() {
	return state.data.cardView.dictionaryValue;
}

export function reset_state_State_data_AuthorView_cardView_CardView_dictionaryValue() {
	state.data.cardView.dictionaryValue = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_selectedCardIds(eventData) {
	state.data.cardView.selectedCardIds = eventData.selectedCardIds;
}

export function get_state_State_data_AuthorView_cardView_CardView_selectedCardIds() {
	return state.data.cardView.selectedCardIds;
}

export function reset_state_State_data_AuthorView_cardView_CardView_selectedCardIds() {
	state.data.cardView.selectedCardIds = null;
}
export function set_state_State_data_AuthorView_cardView_CardView_movedCardIds(eventData) {
	state.data.cardView.movedCardIds = eventData.movedCardIds;
}

export function get_state_State_data_AuthorView_cardView_CardView_movedCardIds() {
	return state.data.cardView.movedCardIds;
}

export function reset_state_State_data_AuthorView_cardView_CardView_movedCardIds() {
	state.data.cardView.movedCardIds = null;
}


