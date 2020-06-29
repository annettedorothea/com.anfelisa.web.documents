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
 */




import ACEController from "../ace/ACEController";
import * as AppState from "../ace/AppState";

export default class EventListenerRegistrationCard {

	static init() {
		ACEController.registerListener('card.LoadCardsOkEvent', AppState.merge_authorView_cardView);
		ACEController.registerListener('card.LoadCardsNoCategorySelectedEvent', AppState.reset_authorView_cardView_cardList);
		ACEController.registerListener('card.CreateCardOkEvent', AppState.merge_authorView_cardView);
		ACEController.registerListener('card.UpdateCardOkEvent', AppState.merge_authorView_cardView);
		ACEController.registerListener('card.DeleteCardOkEvent', AppState.merge_authorView_cardView);
		ACEController.registerListener('card.DeleteCardErrorEvent', AppState.merge_authorView_cardView);
		ACEController.registerListener('card.GivenOfNewCardChangedOkEvent', AppState.merge_authorView_cardView_newCard);
		ACEController.registerListener('card.WantedOfNewCardChangedOkEvent', AppState.merge_authorView_cardView_newCard);
		ACEController.registerListener('card.CancelNewCardOkEvent', AppState.set_authorView_cardView_newCard);
		ACEController.registerListener('card.GivenOfEditedCardChangedOkEvent', AppState.merge_authorView_cardView_editedCard);
		ACEController.registerListener('card.WantedOfEditedCardChangedOkEvent', AppState.merge_authorView_cardView_editedCard);
		ACEController.registerListener('card.CancelEditCardOkEvent', AppState.set_authorView_cardView_editedCard);
		ACEController.registerListener('card.EditCardOkEvent', AppState.set_authorView_cardView_editedCard);
		ACEController.registerListener('card.DeleteCardClickOkEvent', AppState.set_authorView_cardView_deleteCard);
		ACEController.registerListener('card.CancelDeleteCardOkEvent', AppState.set_authorView_cardView_deleteCard);
		ACEController.registerListener('card.FilterCardsOkEvent', AppState.set_authorView_cardView_filter);
		ACEController.registerListener('card.FilterNonScheduledCardsOkEvent', AppState.set_authorView_cardView_filterNonScheduled);
		ACEController.registerListener('card.PassValueToDictionaryOkEvent', AppState.set_authorView_cardView_dictionaryValue);
		ACEController.registerListener('card.ToggleInputOrderOkEvent', AppState.set_authorView_cardView_naturalInputOrder);
		ACEController.registerListener('card.LoadWantedImageOfNewCardOkEvent', AppState.set_authorView_cardView_newCard_image);
		ACEController.registerListener('card.LoadWantedImageOfEditedCardOkEvent', AppState.set_authorView_cardView_editedCard_image);
		ACEController.registerListener('card.RemoveNewCardImageOkEvent', AppState.set_authorView_cardView_newCard_image);
		ACEController.registerListener('card.RemoveEditedCardImageOkEvent', AppState.set_authorView_cardView_editedCard_image);
		ACEController.registerListener('card.ToggleScheduleCardSelectionOkEvent', AppState.set_authorView_cardView_selectedCardIds);
		ACEController.registerListener('card.ToggleAllScheduleCardSelectionOkEvent', AppState.set_authorView_cardView_selectedCardIds);
		ACEController.registerListener('card.MoveCardsStartedOkEvent', AppState.set_authorView_cardView_movedCardIds);
		ACEController.registerListener('card.MoveCardsOkEvent', AppState.reset_authorView_cardView_movedCardIds);
		ACEController.registerListener('card.ChangeCardOrderOkEvent', AppState.reset_authorView_cardView_movedCardIds);
		ACEController.registerListener('card.OnDragEnterOkEvent', AppState.set_authorView_cardView_dragTargetCardId);
		ACEController.registerListener('card.OnDragExitOkEvent', AppState.reset_authorView_cardView_dragTargetCardId);
		ACEController.registerListener('card.SearchDuplicateCardsOkEvent', AppState.set_authorView_cardView_cardDuplicates);
		ACEController.registerListener('card.TranslateWantedFetchedEvent', AppState.merge_authorView_cardView_newCard);
		ACEController.registerListener('card.TranslateGivenFetchedEvent', AppState.merge_authorView_cardView_newCard);
	}

}




/******* S.D.G. *******/



