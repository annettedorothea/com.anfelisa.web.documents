/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import ACEController from "../ace/ACEController";
import * as AppState from "../ace/AppState";

export default class EventListenerRegistrationCard {

	static init() {
		ACEController.registerListener('card.LoadCardsOkEvent', AppState.merge_rootContainer_authorView_cardView);
		ACEController.registerListener('card.LoadCardsNoCategorySelectedEvent', AppState.set_rootContainer_authorView_cardView_cardList);
		ACEController.registerListener('card.CreateCardOkEvent', AppState.set_rootContainer_authorView_cardView_newCard);
		ACEController.registerListener('card.UpdateCardOkEvent', AppState.set_rootContainer_authorView_cardView_editedCard);
		ACEController.registerListener('card.DeleteCardOkEvent', AppState.set_rootContainer_authorView_cardView_deleteCard);
		ACEController.registerListener('card.GivenOfNewCardChangedOkEvent', AppState.merge_rootContainer_authorView_cardView_newCard);
		ACEController.registerListener('card.WantedOfNewCardChangedOkEvent', AppState.merge_rootContainer_authorView_cardView_newCard);
		ACEController.registerListener('card.CancelNewCardOkEvent', AppState.set_rootContainer_authorView_cardView_newCard);
		ACEController.registerListener('card.GivenOfEditedCardChangedOkEvent', AppState.merge_rootContainer_authorView_cardView_editedCard);
		ACEController.registerListener('card.WantedOfEditedCardChangedOkEvent', AppState.merge_rootContainer_authorView_cardView_editedCard);
		ACEController.registerListener('card.CancelEditCardOkEvent', AppState.set_rootContainer_authorView_cardView_editedCard);
		ACEController.registerListener('card.EditCardOkEvent', AppState.set_rootContainer_authorView_cardView_editedCard);
		ACEController.registerListener('card.DeleteCardClickOkEvent', AppState.set_rootContainer_authorView_cardView_deleteCard);
		ACEController.registerListener('card.CancelDeleteCardOkEvent', AppState.set_rootContainer_authorView_cardView_deleteCard);
		ACEController.registerListener('card.FilterCardsOkEvent', AppState.set_rootContainer_authorView_cardView_filter);
		ACEController.registerListener('card.PassValueToDictionaryOkEvent', AppState.set_rootContainer_authorView_cardView_dictionaryValue);
		ACEController.registerListener('card.ToggleInputOrderOkEvent', AppState.set_rootContainer_authorView_cardView_naturalInputOrder);
		ACEController.registerListener('card.ToggleScheduleCardSelectionOkEvent', AppState.set_rootContainer_authorView_cardView_selectedCardIds);
		ACEController.registerListener('card.ToggleAllScheduleCardSelectionOkEvent', AppState.set_rootContainer_authorView_cardView_selectedCardIds);
		ACEController.registerListener('card.MoveCardsStartedOkEvent', AppState.set_rootContainer_authorView_cardView_movedCardIds);
		ACEController.registerListener('card.MoveCardsOkEvent', AppState.set_rootContainer_authorView_cardView_movedCardIds);
		ACEController.registerListener('card.MoveCardsOkEvent', AppState.set_rootContainer_authorView_categoryTree_dropTargetCategoryId);
		ACEController.registerListener('card.MoveCardsOkEvent', AppState.set_rootContainer_authorView_categoryTree_dropAllowed);
		ACEController.registerListener('card.ChangeCardOrderOkEvent', AppState.set_rootContainer_authorView_cardView_movedCardIds);
		ACEController.registerListener('card.ChangeCardOrderOkEvent', AppState.set_rootContainer_authorView_cardView_dragTargetCardId);
		ACEController.registerListener('card.OnDragEnterOkEvent', AppState.set_rootContainer_authorView_cardView_dragTargetCardId);
		ACEController.registerListener('card.OnDragExitOkEvent', AppState.set_rootContainer_authorView_cardView_dragTargetCardId);
		ACEController.registerListener('card.SearchDuplicateCardsOkEvent', AppState.set_rootContainer_authorView_cardView_cardDuplicates);
		ACEController.registerListener('card.TranslateWantedFetchedEvent', AppState.merge_rootContainer_authorView_cardView_newCard);
		ACEController.registerListener('card.TranslateGivenFetchedEvent', AppState.merge_rootContainer_authorView_cardView_newCard);
	}

}




/******* S.D.G. *******/



