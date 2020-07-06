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
 * generated with de.acegen 0.9.2
 *
 */




import ACEController from "../ace/ACEController";
import LoadCardsAction from "../../src/card/actions/LoadCardsAction";
import CreateCardAction from "../../src/card/actions/CreateCardAction";
import UpdateCardAction from "../../src/card/actions/UpdateCardAction";
import DeleteCardAction from "../../src/card/actions/DeleteCardAction";
import GivenOfNewCardChangedAction from "../../src/card/actions/GivenOfNewCardChangedAction";
import WantedOfNewCardChangedAction from "../../src/card/actions/WantedOfNewCardChangedAction";
import CancelNewCardAction from "../../src/card/actions/CancelNewCardAction";
import GivenOfEditedCardChangedAction from "../../src/card/actions/GivenOfEditedCardChangedAction";
import WantedOfEditedCardChangedAction from "../../src/card/actions/WantedOfEditedCardChangedAction";
import CancelEditCardAction from "../../src/card/actions/CancelEditCardAction";
import EditCardAction from "../../src/card/actions/EditCardAction";
import DeleteCardClickAction from "../../src/card/actions/DeleteCardClickAction";
import CancelDeleteCardAction from "../../src/card/actions/CancelDeleteCardAction";
import FilterCardsAction from "../../src/card/actions/FilterCardsAction";
import FilterNonScheduledCardsAction from "../../src/card/actions/FilterNonScheduledCardsAction";
import PassValueToDictionaryAction from "../../src/card/actions/PassValueToDictionaryAction";
import ToggleInputOrderAction from "../../src/card/actions/ToggleInputOrderAction";
import LoadWantedImageOfNewCardAction from "../../src/card/actions/LoadWantedImageOfNewCardAction";
import LoadWantedImageOfEditedCardAction from "../../src/card/actions/LoadWantedImageOfEditedCardAction";
import RemoveNewCardImageAction from "../../src/card/actions/RemoveNewCardImageAction";
import RemoveEditedCardImageAction from "../../src/card/actions/RemoveEditedCardImageAction";
import ToggleScheduleCardSelectionAction from "../../src/card/actions/ToggleScheduleCardSelectionAction";
import ToggleAllScheduleCardSelectionAction from "../../src/card/actions/ToggleAllScheduleCardSelectionAction";
import ScheduleSelectedCardsAction from "../../src/card/actions/ScheduleSelectedCardsAction";
import SortSelectedCardsOutAction from "../../src/card/actions/SortSelectedCardsOutAction";
import MoveCardsStartedAction from "../../src/card/actions/MoveCardsStartedAction";
import MoveCardsAction from "../../src/card/actions/MoveCardsAction";
import ChangeCardOrderAction from "../../src/card/actions/ChangeCardOrderAction";
import OnDragEnterAction from "../../src/card/actions/OnDragEnterAction";
import OnDragExitAction from "../../src/card/actions/OnDragExitAction";
import SearchDuplicateCardsAction from "../../src/card/actions/SearchDuplicateCardsAction";
import TranslateAction from "../../src/card/actions/TranslateAction";

export default class ActionFactoryRegistrationCard {

	static init() {
		ACEController.registerFactory('card.LoadCardsAction', 
			(actionData) => new LoadCardsAction());
		ACEController.registerFactory('card.CreateCardAction', 
			(actionData) => new CreateCardAction());
		ACEController.registerFactory('card.UpdateCardAction', 
			(actionData) => new UpdateCardAction());
		ACEController.registerFactory('card.DeleteCardAction', 
			(actionData) => new DeleteCardAction());
		ACEController.registerFactory('card.GivenOfNewCardChangedAction', 
			(actionData) => new GivenOfNewCardChangedAction(actionData.given));
		ACEController.registerFactory('card.WantedOfNewCardChangedAction', 
			(actionData) => new WantedOfNewCardChangedAction(actionData.wanted));
		ACEController.registerFactory('card.CancelNewCardAction', 
			(actionData) => new CancelNewCardAction());
		ACEController.registerFactory('card.GivenOfEditedCardChangedAction', 
			(actionData) => new GivenOfEditedCardChangedAction(actionData.given));
		ACEController.registerFactory('card.WantedOfEditedCardChangedAction', 
			(actionData) => new WantedOfEditedCardChangedAction(actionData.wanted));
		ACEController.registerFactory('card.CancelEditCardAction', 
			(actionData) => new CancelEditCardAction());
		ACEController.registerFactory('card.EditCardAction', 
			(actionData) => new EditCardAction(actionData.cardId));
		ACEController.registerFactory('card.DeleteCardClickAction', 
			(actionData) => new DeleteCardClickAction(actionData.cardId));
		ACEController.registerFactory('card.CancelDeleteCardAction', 
			(actionData) => new CancelDeleteCardAction());
		ACEController.registerFactory('card.FilterCardsAction', 
			(actionData) => new FilterCardsAction(actionData.filter));
		ACEController.registerFactory('card.FilterNonScheduledCardsAction', 
			(actionData) => new FilterNonScheduledCardsAction());
		ACEController.registerFactory('card.PassValueToDictionaryAction', 
			(actionData) => new PassValueToDictionaryAction());
		ACEController.registerFactory('card.ToggleInputOrderAction', 
			(actionData) => new ToggleInputOrderAction());
		ACEController.registerFactory('card.LoadWantedImageOfNewCardAction', 
			(actionData) => new LoadWantedImageOfNewCardAction(actionData.image));
		ACEController.registerFactory('card.LoadWantedImageOfEditedCardAction', 
			(actionData) => new LoadWantedImageOfEditedCardAction(actionData.image));
		ACEController.registerFactory('card.RemoveNewCardImageAction', 
			(actionData) => new RemoveNewCardImageAction());
		ACEController.registerFactory('card.RemoveEditedCardImageAction', 
			(actionData) => new RemoveEditedCardImageAction());
		ACEController.registerFactory('card.ToggleScheduleCardSelectionAction', 
			(actionData) => new ToggleScheduleCardSelectionAction(actionData.cardId));
		ACEController.registerFactory('card.ToggleAllScheduleCardSelectionAction', 
			(actionData) => new ToggleAllScheduleCardSelectionAction());
		ACEController.registerFactory('card.ScheduleSelectedCardsAction', 
			(actionData) => new ScheduleSelectedCardsAction());
		ACEController.registerFactory('card.SortSelectedCardsOutAction', 
			(actionData) => new SortSelectedCardsOutAction());
		ACEController.registerFactory('card.MoveCardsStartedAction', 
			(actionData) => new MoveCardsStartedAction());
		ACEController.registerFactory('card.MoveCardsAction', 
			(actionData) => new MoveCardsAction());
		ACEController.registerFactory('card.ChangeCardOrderAction', 
			(actionData) => new ChangeCardOrderAction(actionData.cardId));
		ACEController.registerFactory('card.OnDragEnterAction', 
			(actionData) => new OnDragEnterAction(actionData.dragTargetCardId));
		ACEController.registerFactory('card.OnDragExitAction', 
			(actionData) => new OnDragExitAction(actionData.dragTargetCardId));
		ACEController.registerFactory('card.SearchDuplicateCardsAction', 
			(actionData) => new SearchDuplicateCardsAction());
		ACEController.registerFactory('card.TranslateAction', 
			(actionData) => new TranslateAction());
	}

}




/******* S.D.G. *******/



