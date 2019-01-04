import ACEController from "../ace/ACEController";
import LoadCardsAction from "../../src/card/actions/LoadCardsAction";
import CreateCardAction from "../../src/card/actions/CreateCardAction";
import UpdateCardAction from "../../src/card/actions/UpdateCardAction";
import DeleteCardAction from "../../src/card/actions/DeleteCardAction";
import GivenOfNewCardChangedAction from "../../src/card/actions/GivenOfNewCardChangedAction";
import SearchDuplicateCardsAction from "../../src/card/actions/SearchDuplicateCardsAction";
import WantedOfNewCardChangedAction from "../../src/card/actions/WantedOfNewCardChangedAction";
import CancelNewCardAction from "../../src/card/actions/CancelNewCardAction";
import GivenOfEditedCardChangedAction from "../../src/card/actions/GivenOfEditedCardChangedAction";
import WantedOfEditedCardChangedAction from "../../src/card/actions/WantedOfEditedCardChangedAction";
import CancelEditCardAction from "../../src/card/actions/CancelEditCardAction";
import EditCardAction from "../../src/card/actions/EditCardAction";
import DeleteCardClickAction from "../../src/card/actions/DeleteCardClickAction";
import CancelDeleteCardAction from "../../src/card/actions/CancelDeleteCardAction";
import FilterCardsAction from "../../src/card/actions/FilterCardsAction";
import TranslateAction from "../../src/card/actions/TranslateAction";
import PassValueToDictionaryAction from "../../src/card/actions/PassValueToDictionaryAction";
import ToggleInputOrderAction from "../../src/card/actions/ToggleInputOrderAction";
import ToggleUseDictionaryAction from "../../src/card/actions/ToggleUseDictionaryAction";
import LoadWantedImageOfNewCardAction from "../../src/card/actions/LoadWantedImageOfNewCardAction";
import LoadWantedImageOfEditedCardAction from "../../src/card/actions/LoadWantedImageOfEditedCardAction";
import RemoveNewCardImageAction from "../../src/card/actions/RemoveNewCardImageAction";
import RemoveEditedCardImageAction from "../../src/card/actions/RemoveEditedCardImageAction";
import ToggleScheduleCardSelectionAction from "../../src/card/actions/ToggleScheduleCardSelectionAction";
import ToggleAllScheduleCardSelectionAction from "../../src/card/actions/ToggleAllScheduleCardSelectionAction";
import ScheduleSelectedCardsAction from "../../src/card/actions/ScheduleSelectedCardsAction";

export default class ActionFactoryRegistrationCard {

	static init() {
		ACEController.registerFactory('card.LoadCardsAction', (actionData) => new LoadCardsAction(actionData, 'card.LoadCardsAction'));
		ACEController.registerFactory('card.CreateCardAction', (actionData) => new CreateCardAction(actionData, 'card.CreateCardAction'));
		ACEController.registerFactory('card.UpdateCardAction', (actionData) => new UpdateCardAction(actionData, 'card.UpdateCardAction'));
		ACEController.registerFactory('card.DeleteCardAction', (actionData) => new DeleteCardAction(actionData, 'card.DeleteCardAction'));
		ACEController.registerFactory('card.GivenOfNewCardChangedAction', (actionData) => new GivenOfNewCardChangedAction(actionData, 'card.GivenOfNewCardChangedAction'));
		ACEController.registerFactory('card.SearchDuplicateCardsAction', (actionData) => new SearchDuplicateCardsAction(actionData, 'card.SearchDuplicateCardsAction'));
		ACEController.registerFactory('card.WantedOfNewCardChangedAction', (actionData) => new WantedOfNewCardChangedAction(actionData, 'card.WantedOfNewCardChangedAction'));
		ACEController.registerFactory('card.CancelNewCardAction', (actionData) => new CancelNewCardAction(actionData, 'card.CancelNewCardAction'));
		ACEController.registerFactory('card.GivenOfEditedCardChangedAction', (actionData) => new GivenOfEditedCardChangedAction(actionData, 'card.GivenOfEditedCardChangedAction'));
		ACEController.registerFactory('card.WantedOfEditedCardChangedAction', (actionData) => new WantedOfEditedCardChangedAction(actionData, 'card.WantedOfEditedCardChangedAction'));
		ACEController.registerFactory('card.CancelEditCardAction', (actionData) => new CancelEditCardAction(actionData, 'card.CancelEditCardAction'));
		ACEController.registerFactory('card.EditCardAction', (actionData) => new EditCardAction(actionData, 'card.EditCardAction'));
		ACEController.registerFactory('card.DeleteCardClickAction', (actionData) => new DeleteCardClickAction(actionData, 'card.DeleteCardClickAction'));
		ACEController.registerFactory('card.CancelDeleteCardAction', (actionData) => new CancelDeleteCardAction(actionData, 'card.CancelDeleteCardAction'));
		ACEController.registerFactory('card.FilterCardsAction', (actionData) => new FilterCardsAction(actionData, 'card.FilterCardsAction'));
		ACEController.registerFactory('card.TranslateAction', (actionData) => new TranslateAction(actionData, 'card.TranslateAction'));
		ACEController.registerFactory('card.PassValueToDictionaryAction', (actionData) => new PassValueToDictionaryAction(actionData, 'card.PassValueToDictionaryAction'));
		ACEController.registerFactory('card.ToggleInputOrderAction', (actionData) => new ToggleInputOrderAction(actionData, 'card.ToggleInputOrderAction'));
		ACEController.registerFactory('card.ToggleUseDictionaryAction', (actionData) => new ToggleUseDictionaryAction(actionData, 'card.ToggleUseDictionaryAction'));
		ACEController.registerFactory('card.LoadWantedImageOfNewCardAction', (actionData) => new LoadWantedImageOfNewCardAction(actionData, 'card.LoadWantedImageOfNewCardAction'));
		ACEController.registerFactory('card.LoadWantedImageOfEditedCardAction', (actionData) => new LoadWantedImageOfEditedCardAction(actionData, 'card.LoadWantedImageOfEditedCardAction'));
		ACEController.registerFactory('card.RemoveNewCardImageAction', (actionData) => new RemoveNewCardImageAction(actionData, 'card.RemoveNewCardImageAction'));
		ACEController.registerFactory('card.RemoveEditedCardImageAction', (actionData) => new RemoveEditedCardImageAction(actionData, 'card.RemoveEditedCardImageAction'));
		ACEController.registerFactory('card.ToggleScheduleCardSelectionAction', (actionData) => new ToggleScheduleCardSelectionAction(actionData, 'card.ToggleScheduleCardSelectionAction'));
		ACEController.registerFactory('card.ToggleAllScheduleCardSelectionAction', (actionData) => new ToggleAllScheduleCardSelectionAction(actionData, 'card.ToggleAllScheduleCardSelectionAction'));
		ACEController.registerFactory('card.ScheduleSelectedCardsAction', (actionData) => new ScheduleSelectedCardsAction(actionData, 'card.ScheduleSelectedCardsAction'));
	}

}

/*       S.D.G.       */
