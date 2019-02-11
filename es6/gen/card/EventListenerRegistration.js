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




import ACEController from "../ace/ACEController";
import * as AppState from "../ace/WriteAppState";

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




/******* S.D.G. *******/



