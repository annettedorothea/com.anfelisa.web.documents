import AppUtils from "../../src/app/AppUtils";
import { state } from "./WriteAppState";

export function getState() {
	return AppUtils.deepCopy(state);
}

export function get_state_State_loggedInUser() {
	return AppUtils.deepCopy(state.loggedInUser);
}

export function get_state_State_loggedInUser_LoggedInUser_username() {
	return state.loggedInUser.username;
}

export function get_state_State_loggedInUser_LoggedInUser_userId() {
	return state.loggedInUser.userId;
}

export function get_state_State_loggedInUser_LoggedInUser_role() {
	return state.loggedInUser.role;
}

export function get_state_State_loggedInUser_LoggedInUser_password() {
	return state.loggedInUser.password;
}


export function get_state_State_hash() {
	return location.hash;
}

export function get_state_State_username() {
	return localStorage.getItem("username");
}

export function get_state_State_password() {
	return localStorage.getItem("password");
}

export function get_state_State_displaySpinner() {
	return state.displaySpinner;
}

export function get_state_State_view() {
	return state.view;
}

export function get_state_State_language() {
	return state.language;
}

export function get_state_State_texts() {
	return state.texts;
}

export function get_state_State_message() {
	return AppUtils.deepCopy(state.message);
}

export function get_state_State_message_Message_type() {
	return state.message.type;
}

export function get_state_State_message_Message_text() {
	return state.message.text;
}


export function get_state_State_data() {
	return AppUtils.deepCopy(state.data);
}

export function get_state_State_data_Login_username() {
	return state.data.username;
}

export function get_state_State_data_Login_saveInLocalStorage() {
	return state.data.saveInLocalStorage;
}

export function get_state_State_data_Registration_displayUsernameSpinner() {
	return state.data.displayUsernameSpinner;
}

export function get_state_State_data_Registration_available() {
	return state.data.available;
}

export function get_state_State_data_Registration_username() {
	return state.data.username;
}

export function get_state_State_data_Registration_email() {
	return state.data.email;
}

export function get_state_State_data_Registration_emailInvalid() {
	return state.data.emailInvalid;
}

export function get_state_State_data_Registration_passwordMismatch() {
	return state.data.passwordMismatch;
}

export function get_state_State_data_ForgotPassword_username() {
	return state.data.username;
}

export function get_state_State_data_ResetPassword_token() {
	return state.data.token;
}

export function get_state_State_data_ResetPassword_passwordMismatch() {
	return state.data.passwordMismatch;
}

export function get_state_State_data_Dashboard_boxList() {
	return state.data.boxList;
}

export function get_state_State_data_Dashboard_deleteBox() {
	return AppUtils.deepCopy(state.data.deleteBox);
}

export function get_state_State_data_Dashboard_deleteBox_DeleteBox_confirmDelete() {
	return state.data.deleteBox.confirmDelete;
}

export function get_state_State_data_Dashboard_deleteBox_DeleteBox_boxId() {
	return state.data.deleteBox.boxId;
}


export function get_state_State_data_Profile_username() {
	return state.data.username;
}

export function get_state_State_data_Profile_email() {
	return state.data.email;
}

export function get_state_State_data_Profile_role() {
	return state.data.role;
}

export function get_state_State_data_Profile_showDeleteUserDialog() {
	return state.data.showDeleteUserDialog;
}

export function get_state_State_data_UserList_userList() {
	return state.data.userList;
}

export function get_state_State_data_UserList_showDeleteUserDialog() {
	return state.data.showDeleteUserDialog;
}

export function get_state_State_data_UserList_usernameToBeDeleted() {
	return state.data.usernameToBeDeleted;
}

export function get_state_State_data_Card_index() {
	return state.data.index;
}

export function get_state_State_data_Card_enableScoreButtons() {
	return state.data.enableScoreButtons;
}

export function get_state_State_data_Card_displayImage() {
	return state.data.displayImage;
}

export function get_state_State_data_Card_scheduleNext() {
	return state.data.scheduleNext;
}

export function get_state_State_data_Card_cardId() {
	return state.data.cardId;
}

export function get_state_State_data_Card_categoryId() {
	return state.data.categoryId;
}

export function get_state_State_data_Card_count() {
	return state.data.count;
}

export function get_state_State_data_Card_given() {
	return state.data.given;
}

export function get_state_State_data_Card_image() {
	return state.data.image;
}

export function get_state_State_data_Card_lastQuality() {
	return state.data.lastQuality;
}

export function get_state_State_data_Card_rootCategoryId() {
	return state.data.rootCategoryId;
}

export function get_state_State_data_Card_scheduledCardId() {
	return state.data.scheduledCardId;
}

export function get_state_State_data_Card_scheduledDate() {
	return state.data.scheduledDate;
}

export function get_state_State_data_Card_scoredDate() {
	return state.data.scoredDate;
}

export function get_state_State_data_Card_wanted() {
	return state.data.wanted;
}

export function get_state_State_data_Card_boxId() {
	return state.data.boxId;
}

export function get_state_State_data_Card_categoryName() {
	return state.data.categoryName;
}

export function get_state_State_data_Card_daysBehindSchedule() {
	return state.data.daysBehindSchedule;
}

export function get_state_State_data_Card_maxInterval() {
	return state.data.maxInterval;
}

export function get_state_State_data_Card_maxCardsPerDay() {
	return state.data.maxCardsPerDay;
}

export function get_state_State_data_Card_myCards() {
	return state.data.myCards;
}

export function get_state_State_data_Card_quality0Count() {
	return state.data.quality0Count;
}

export function get_state_State_data_Card_quality1Count() {
	return state.data.quality1Count;
}

export function get_state_State_data_Card_quality2Count() {
	return state.data.quality2Count;
}

export function get_state_State_data_Card_quality3Count() {
	return state.data.quality3Count;
}

export function get_state_State_data_Card_quality4Count() {
	return state.data.quality4Count;
}

export function get_state_State_data_Card_quality5Count() {
	return state.data.quality5Count;
}

export function get_state_State_data_Card_reinforceCards() {
	return state.data.reinforceCards;
}

export function get_state_State_data_Card_todaysCards() {
	return state.data.todaysCards;
}

export function get_state_State_data_Card_totalCards() {
	return state.data.totalCards;
}

export function get_state_State_data_Card_editMaxInterval() {
	return state.data.editMaxInterval;
}

export function get_state_State_data_Card_editedMaxInterval() {
	return state.data.editedMaxInterval;
}

export function get_state_State_data_Card_editMaxCardsPerDay() {
	return state.data.editMaxCardsPerDay;
}

export function get_state_State_data_Card_editedMaxCardsPerDay() {
	return state.data.editedMaxCardsPerDay;
}

export function get_state_State_data_Card_reinforceCardId() {
	return state.data.reinforceCardId;
}

export function get_state_State_data_Card_changeDate() {
	return state.data.changeDate;
}

export function get_state_State_data_AuthorView_categoryTree() {
	return AppUtils.deepCopy(state.data.categoryTree);
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_selectedCategory() {
	return state.data.categoryTree.selectedCategory;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_categoryList() {
	return state.data.categoryTree.categoryList;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_displayDeleteCategory() {
	return state.data.categoryTree.displayDeleteCategory;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_dictionaryLookup() {
	return state.data.categoryTree.dictionaryLookup;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_wantedLanguage() {
	return state.data.categoryTree.wantedLanguage;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_givenLanguage() {
	return state.data.categoryTree.givenLanguage;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_categoryName() {
	return state.data.categoryTree.categoryName;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_displayEditCategory() {
	return state.data.categoryTree.displayEditCategory;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_displayNewCategory() {
	return state.data.categoryTree.displayNewCategory;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_displayInviteUser() {
	return state.data.categoryTree.displayInviteUser;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_invitedUsername() {
	return state.data.categoryTree.invitedUsername;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_userList() {
	return state.data.categoryTree.userList;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_dropAllowed() {
	return state.data.categoryTree.dropAllowed;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_dropTargetCategoryId() {
	return state.data.categoryTree.dropTargetCategoryId;
}

export function get_state_State_data_AuthorView_categoryTree_CategoryTree_movedCategory() {
	return state.data.categoryTree.movedCategory;
}


export function get_state_State_data_AuthorView_boxList() {
	return state.data.boxList;
}

export function get_state_State_data_AuthorView_deleteBox() {
	return AppUtils.deepCopy(state.data.deleteBox);
}

export function get_state_State_data_AuthorView_deleteBox_DeleteBox_confirmDelete() {
	return state.data.deleteBox.confirmDelete;
}

export function get_state_State_data_AuthorView_deleteBox_DeleteBox_boxId() {
	return state.data.deleteBox.boxId;
}


export function get_state_State_data_AuthorView_cardView() {
	return AppUtils.deepCopy(state.data.cardView);
}

export function get_state_State_data_AuthorView_cardView_CardView_cardList() {
	return state.data.cardView.cardList;
}

export function get_state_State_data_AuthorView_cardView_CardView_naturalInputOrder() {
	return state.data.cardView.naturalInputOrder;
}

export function get_state_State_data_AuthorView_cardView_CardView_useDictionary() {
	return state.data.cardView.useDictionary;
}

export function get_state_State_data_AuthorView_cardView_CardView_filter() {
	return state.data.cardView.filter;
}

export function get_state_State_data_AuthorView_cardView_CardView_editedCard() {
	return AppUtils.deepCopy(state.data.cardView.editedCard);
}

export function get_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_cardId() {
	return state.data.cardView.editedCard.cardId;
}

export function get_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_given() {
	return state.data.cardView.editedCard.given;
}

export function get_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_wanted() {
	return state.data.cardView.editedCard.wanted;
}

export function get_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_index() {
	return state.data.cardView.editedCard.index;
}

export function get_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_image() {
	return state.data.cardView.editedCard.image;
}

export function get_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_selectedCardIds() {
	return state.data.cardView.editedCard.selectedCardIds;
}


export function get_state_State_data_AuthorView_cardView_CardView_newCard() {
	return AppUtils.deepCopy(state.data.cardView.newCard);
}

export function get_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_given() {
	return state.data.cardView.newCard.given;
}

export function get_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_wanted() {
	return state.data.cardView.newCard.wanted;
}

export function get_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_index() {
	return state.data.cardView.newCard.index;
}

export function get_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_image() {
	return state.data.cardView.newCard.image;
}

export function get_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_selectedCardIds() {
	return state.data.cardView.newCard.selectedCardIds;
}

export function get_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_file() {
	return state.data.cardView.newCard.file;
}

export function get_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_displaySpinner() {
	return state.data.cardView.newCard.displaySpinner;
}

export function get_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_displayTranslateSpinner() {
	return state.data.cardView.newCard.displayTranslateSpinner;
}


export function get_state_State_data_AuthorView_cardView_CardView_cardDuplicates() {
	return state.data.cardView.cardDuplicates;
}

export function get_state_State_data_AuthorView_cardView_CardView_deleteCard() {
	return AppUtils.deepCopy(state.data.cardView.deleteCard);
}

export function get_state_State_data_AuthorView_cardView_CardView_deleteCard_DeleteCard_confirmDelete() {
	return state.data.cardView.deleteCard.confirmDelete;
}

export function get_state_State_data_AuthorView_cardView_CardView_deleteCard_DeleteCard_cardId() {
	return state.data.cardView.deleteCard.cardId;
}


export function get_state_State_data_AuthorView_cardView_CardView_dictionaryValue() {
	return state.data.cardView.dictionaryValue;
}

export function get_state_State_data_AuthorView_cardView_CardView_selectedCardIds() {
	return state.data.cardView.selectedCardIds;
}

export function get_state_State_data_AuthorView_cardView_CardView_movedCardIds() {
	return state.data.cardView.movedCardIds;
}



