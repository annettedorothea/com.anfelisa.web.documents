/********************************************************************************
 * generated by de.acegen 0.9.12
 ********************************************************************************/




import ACEController from "../ace/ACEController";
import LoadCardsOkEvent from "./events/LoadCardsOkEvent";
import LoadCardsNoCategorySelectedEvent from "./events/LoadCardsNoCategorySelectedEvent";
import CreateCardOkEvent from "./events/CreateCardOkEvent";
import UpdateCardOkEvent from "./events/UpdateCardOkEvent";
import DeleteCardOkEvent from "./events/DeleteCardOkEvent";
import DeleteCardErrorEvent from "./events/DeleteCardErrorEvent";
import GivenOfNewCardChangedOkEvent from "./events/GivenOfNewCardChangedOkEvent";
import WantedOfNewCardChangedOkEvent from "./events/WantedOfNewCardChangedOkEvent";
import CancelNewCardOkEvent from "./events/CancelNewCardOkEvent";
import GivenOfEditedCardChangedOkEvent from "./events/GivenOfEditedCardChangedOkEvent";
import WantedOfEditedCardChangedOkEvent from "./events/WantedOfEditedCardChangedOkEvent";
import CancelEditCardOkEvent from "./events/CancelEditCardOkEvent";
import EditCardOkEvent from "./events/EditCardOkEvent";
import DeleteCardClickOkEvent from "./events/DeleteCardClickOkEvent";
import CancelDeleteCardOkEvent from "./events/CancelDeleteCardOkEvent";
import FilterCardsOkEvent from "./events/FilterCardsOkEvent";
import FilterNonScheduledCardsOkEvent from "./events/FilterNonScheduledCardsOkEvent";
import PassValueToDictionaryOkEvent from "./events/PassValueToDictionaryOkEvent";
import ToggleInputOrderOkEvent from "./events/ToggleInputOrderOkEvent";
import LoadWantedImageOfNewCardOkEvent from "./events/LoadWantedImageOfNewCardOkEvent";
import LoadWantedImageOfEditedCardOkEvent from "./events/LoadWantedImageOfEditedCardOkEvent";
import RemoveNewCardImageOkEvent from "./events/RemoveNewCardImageOkEvent";
import RemoveEditedCardImageOkEvent from "./events/RemoveEditedCardImageOkEvent";
import ToggleScheduleCardSelectionOkEvent from "./events/ToggleScheduleCardSelectionOkEvent";
import ToggleAllScheduleCardSelectionOkEvent from "./events/ToggleAllScheduleCardSelectionOkEvent";
import MoveCardsStartedOkEvent from "./events/MoveCardsStartedOkEvent";
import MoveCardsOkEvent from "./events/MoveCardsOkEvent";
import ChangeCardOrderOkEvent from "./events/ChangeCardOrderOkEvent";
import OnDragEnterOkEvent from "./events/OnDragEnterOkEvent";
import OnDragExitOkEvent from "./events/OnDragExitOkEvent";
import SearchDuplicateCardsOkEvent from "./events/SearchDuplicateCardsOkEvent";
import TranslateWantedFetchedEvent from "./events/TranslateWantedFetchedEvent";
import TranslateGivenFetchedEvent from "./events/TranslateGivenFetchedEvent";

export default class EventFactoryRegistrationCard {

	static init() {
		ACEController.registerFactory('card.LoadCardsOkEvent', 
			(eventData) => new LoadCardsOkEvent(eventData));
		ACEController.registerFactory('card.LoadCardsNoCategorySelectedEvent', 
			(eventData) => new LoadCardsNoCategorySelectedEvent(eventData));
		ACEController.registerFactory('card.CreateCardOkEvent', 
			(eventData) => new CreateCardOkEvent(eventData));
		ACEController.registerFactory('card.UpdateCardOkEvent', 
			(eventData) => new UpdateCardOkEvent(eventData));
		ACEController.registerFactory('card.DeleteCardOkEvent', 
			(eventData) => new DeleteCardOkEvent(eventData));
		ACEController.registerFactory('card.DeleteCardErrorEvent', 
			(eventData) => new DeleteCardErrorEvent(eventData));
		ACEController.registerFactory('card.GivenOfNewCardChangedOkEvent', 
			(eventData) => new GivenOfNewCardChangedOkEvent(eventData));
		ACEController.registerFactory('card.WantedOfNewCardChangedOkEvent', 
			(eventData) => new WantedOfNewCardChangedOkEvent(eventData));
		ACEController.registerFactory('card.CancelNewCardOkEvent', 
			(eventData) => new CancelNewCardOkEvent(eventData));
		ACEController.registerFactory('card.GivenOfEditedCardChangedOkEvent', 
			(eventData) => new GivenOfEditedCardChangedOkEvent(eventData));
		ACEController.registerFactory('card.WantedOfEditedCardChangedOkEvent', 
			(eventData) => new WantedOfEditedCardChangedOkEvent(eventData));
		ACEController.registerFactory('card.CancelEditCardOkEvent', 
			(eventData) => new CancelEditCardOkEvent(eventData));
		ACEController.registerFactory('card.EditCardOkEvent', 
			(eventData) => new EditCardOkEvent(eventData));
		ACEController.registerFactory('card.DeleteCardClickOkEvent', 
			(eventData) => new DeleteCardClickOkEvent(eventData));
		ACEController.registerFactory('card.CancelDeleteCardOkEvent', 
			(eventData) => new CancelDeleteCardOkEvent(eventData));
		ACEController.registerFactory('card.FilterCardsOkEvent', 
			(eventData) => new FilterCardsOkEvent(eventData));
		ACEController.registerFactory('card.FilterNonScheduledCardsOkEvent', 
			(eventData) => new FilterNonScheduledCardsOkEvent(eventData));
		ACEController.registerFactory('card.PassValueToDictionaryOkEvent', 
			(eventData) => new PassValueToDictionaryOkEvent(eventData));
		ACEController.registerFactory('card.ToggleInputOrderOkEvent', 
			(eventData) => new ToggleInputOrderOkEvent(eventData));
		ACEController.registerFactory('card.LoadWantedImageOfNewCardOkEvent', 
			(eventData) => new LoadWantedImageOfNewCardOkEvent(eventData));
		ACEController.registerFactory('card.LoadWantedImageOfEditedCardOkEvent', 
			(eventData) => new LoadWantedImageOfEditedCardOkEvent(eventData));
		ACEController.registerFactory('card.RemoveNewCardImageOkEvent', 
			(eventData) => new RemoveNewCardImageOkEvent(eventData));
		ACEController.registerFactory('card.RemoveEditedCardImageOkEvent', 
			(eventData) => new RemoveEditedCardImageOkEvent(eventData));
		ACEController.registerFactory('card.ToggleScheduleCardSelectionOkEvent', 
			(eventData) => new ToggleScheduleCardSelectionOkEvent(eventData));
		ACEController.registerFactory('card.ToggleAllScheduleCardSelectionOkEvent', 
			(eventData) => new ToggleAllScheduleCardSelectionOkEvent(eventData));
		ACEController.registerFactory('card.MoveCardsStartedOkEvent', 
			(eventData) => new MoveCardsStartedOkEvent(eventData));
		ACEController.registerFactory('card.MoveCardsOkEvent', 
			(eventData) => new MoveCardsOkEvent(eventData));
		ACEController.registerFactory('card.ChangeCardOrderOkEvent', 
			(eventData) => new ChangeCardOrderOkEvent(eventData));
		ACEController.registerFactory('card.OnDragEnterOkEvent', 
			(eventData) => new OnDragEnterOkEvent(eventData));
		ACEController.registerFactory('card.OnDragExitOkEvent', 
			(eventData) => new OnDragExitOkEvent(eventData));
		ACEController.registerFactory('card.SearchDuplicateCardsOkEvent', 
			(eventData) => new SearchDuplicateCardsOkEvent(eventData));
		ACEController.registerFactory('card.TranslateWantedFetchedEvent', 
			(eventData) => new TranslateWantedFetchedEvent(eventData));
		ACEController.registerFactory('card.TranslateGivenFetchedEvent', 
			(eventData) => new TranslateGivenFetchedEvent(eventData));
	}

}




/******* S.D.G. *******/



