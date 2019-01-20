import ACEController from "../ace/ACEController";
import * as AppState from "../ace/AppState";

export default class EventListenerRegistrationCard {

	static init() {
		ACEController.registerListener('card.LoadCardsOkEvent', AppState.merge_state_State_data_AuthorView_cardView);
		ACEController.registerListener('card.LoadCardsNoCategorySelectedEvent', AppState.reset_state_State_data_AuthorView_cardView_CardView_cardList);
		ACEController.registerListener('card.CreateCardOkEvent', AppState.merge_state_State_data_AuthorView_cardView);
		ACEController.registerListener('card.UpdateCardOkEvent', AppState.merge_state_State_data_AuthorView_cardView);
		ACEController.registerListener('card.DeleteCardOkEvent', AppState.merge_state_State_data_AuthorView_cardView);
		ACEController.registerListener('card.DeleteCardErrorEvent', AppState.merge_state_State_data_AuthorView_cardView);
		ACEController.registerListener('card.GivenOfNewCardChangedOkEvent', AppState.merge_state_State_data_AuthorView_cardView_CardView_newCard);
		ACEController.registerListener('card.SearchDuplicateCardsOkEvent', AppState.set_state_State_data_AuthorView_cardView_CardView_cardDuplicates);
		ACEController.registerListener('card.WantedOfNewCardChangedOkEvent', AppState.merge_state_State_data_AuthorView_cardView_CardView_newCard);
		ACEController.registerListener('card.CancelNewCardOkEvent', AppState.set_state_State_data_AuthorView_cardView_CardView_newCard);
		ACEController.registerListener('card.GivenOfEditedCardChangedOkEvent', AppState.merge_state_State_data_AuthorView_cardView_CardView_editedCard);
		ACEController.registerListener('card.WantedOfEditedCardChangedOkEvent', AppState.merge_state_State_data_AuthorView_cardView_CardView_editedCard);
		ACEController.registerListener('card.CancelEditCardOkEvent', AppState.set_state_State_data_AuthorView_cardView_CardView_editedCard);
		ACEController.registerListener('card.EditCardOkEvent', AppState.set_state_State_data_AuthorView_cardView_CardView_editedCard);
		ACEController.registerListener('card.DeleteCardClickOkEvent', AppState.set_state_State_data_AuthorView_cardView_CardView_deleteCard);
		ACEController.registerListener('card.CancelDeleteCardOkEvent', AppState.set_state_State_data_AuthorView_cardView_CardView_deleteCard);
		ACEController.registerListener('card.FilterCardsOkEvent', AppState.set_state_State_data_AuthorView_cardView_CardView_filter);
		ACEController.registerListener('card.TranslateWantedFetchedEvent', AppState.merge_state_State_data_AuthorView_cardView_CardView_newCard);
		ACEController.registerListener('card.TranslateGivenFetchedEvent', AppState.merge_state_State_data_AuthorView_cardView_CardView_newCard);
		ACEController.registerListener('card.PassValueToDictionaryOkEvent', AppState.set_state_State_data_AuthorView_cardView_CardView_dictionaryValue);
		ACEController.registerListener('card.ToggleInputOrderOkEvent', AppState.set_state_State_data_AuthorView_cardView_CardView_naturalInputOrder);
		ACEController.registerListener('card.ToggleUseDictionaryOkEvent', AppState.set_state_State_data_AuthorView_cardView_CardView_useDictionary);
		ACEController.registerListener('card.LoadWantedImageOfNewCardOkEvent', AppState.set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_image);
		ACEController.registerListener('card.LoadWantedImageOfEditedCardOkEvent', AppState.set_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_image);
		ACEController.registerListener('card.RemoveNewCardImageOkEvent', AppState.set_state_State_data_AuthorView_cardView_CardView_newCard_NewCard_image);
		ACEController.registerListener('card.RemoveEditedCardImageOkEvent', AppState.set_state_State_data_AuthorView_cardView_CardView_editedCard_EditedCard_image);
		ACEController.registerListener('card.ToggleScheduleCardSelectionOkEvent', AppState.set_state_State_data_AuthorView_cardView_CardView_selectedCardIds);
		ACEController.registerListener('card.ToggleAllScheduleCardSelectionOkEvent', AppState.set_state_State_data_AuthorView_cardView_CardView_selectedCardIds);
		ACEController.registerListener('card.MoveCardsStartedOkEvent', AppState.set_state_State_data_AuthorView_cardView_CardView_movedCardIds);
		ACEController.registerListener('card.MoveCardsOkEvent', AppState.reset_state_State_data_AuthorView_cardView_CardView_movedCardIds);
	}

}

/*       S.D.G.       */
