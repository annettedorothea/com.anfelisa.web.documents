import ACEController from "../ace/ACEController";
import CardListView from "../../src/card/views/CardListView";

export default class EventListenerRegistrationCard {

	static init() {
		ACEController.registerListener('card.LoadCardsOkEvent', CardListView.render);
		ACEController.registerListener('card.LoadCardsNoCategorySelectedEvent', CardListView.hide);
		ACEController.registerListener('card.CreateCardOkEvent', CardListView.resetNewCardValues);
		ACEController.registerListener('card.UpdateCardOkEvent', CardListView.resetEditCardValues);
		ACEController.registerListener('card.DeleteCardOkEvent', CardListView.hideConfirmCardDelete);
		ACEController.registerListener('card.DeleteCardErrorEvent', CardListView.hideConfirmCardDelete);
		ACEController.registerListener('card.GivenOfNewCardChangedOkEvent', CardListView.givenOfNewCardChanged);
		ACEController.registerListener('card.SearchDuplicateCardsOkEvent', CardListView.initDuplicates);
		ACEController.registerListener('card.SearchDuplicateCardsTooShortEvent', CardListView.resetDuplicates);
		ACEController.registerListener('card.WantedOfNewCardChangedOkEvent', CardListView.wantedOfNewCardChanged);
		ACEController.registerListener('card.CancelNewCardOkEvent', CardListView.resetNewCardValues);
		ACEController.registerListener('card.GivenOfEditedCardChangedOkEvent', CardListView.givenOfEditedCardChanged);
		ACEController.registerListener('card.WantedOfEditedCardChangedOkEvent', CardListView.wantedOfEditedCardChanged);
		ACEController.registerListener('card.CancelEditCardOkEvent', CardListView.resetEditCardValues);
		ACEController.registerListener('card.EditCardOkEvent', CardListView.editCard);
		ACEController.registerListener('card.DeleteCardClickOkEvent', CardListView.displayConfirmCardDelete);
		ACEController.registerListener('card.CancelDeleteCardOkEvent', CardListView.hideConfirmCardDelete);
		ACEController.registerListener('card.FilterCardsOkEvent', CardListView.filterChanged);
		ACEController.registerListener('card.TranslateWantedFetchedEvent', CardListView.wantedOfNewCardChanged);
		ACEController.registerListener('card.TranslateGivenFetchedEvent', CardListView.givenOfNewCardChanged);
		ACEController.registerListener('card.PassValueToDictionaryOkEvent', CardListView.setDictionaryValue);
		ACEController.registerListener('card.ToggleInputOrderOkEvent', CardListView.toggleInputOrder);
		ACEController.registerListener('card.ToggleUseDictionaryOkEvent', CardListView.toggleUseDictionary);
		ACEController.registerListener('card.LoadWantedImageOfNewCardOkEvent', CardListView.displayImageOfNewCard);
		ACEController.registerListener('card.LoadWantedImageOfEditedCardOkEvent', CardListView.displayImageOfEditedCard);
		ACEController.registerListener('card.RemoveNewCardImageOkEvent', CardListView.removeNewCardImage);
		ACEController.registerListener('card.RemoveEditedCardImageOkEvent', CardListView.removeEditedCardImage);
		ACEController.registerListener('card.ToggleScheduleCardSelectionOkEvent', CardListView.setScheduleCardSelection);
		ACEController.registerListener('card.ToggleAllScheduleCardSelectionOkEvent', CardListView.setScheduleCardSelection);
	}

}

/*       S.D.G.       */
