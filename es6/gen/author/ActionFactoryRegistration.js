import ACEController from "../ace/ACEController";
import LoadCategoriesAction from "../../src/author/actions/LoadCategoriesAction";
import CreateCategoryAction from "../../src/author/actions/CreateCategoryAction";
import UpdateCategoryAction from "../../src/author/actions/UpdateCategoryAction";
import DeleteCategoryAction from "../../src/author/actions/DeleteCategoryAction";
import NameOfNewCategoryChangedAction from "../../src/author/actions/NameOfNewCategoryChangedAction";
import CancelNewCategoryAction from "../../src/author/actions/CancelNewCategoryAction";
import NameOfEditedCategoryChangedAction from "../../src/author/actions/NameOfEditedCategoryChangedAction";
import CancelEditCategoryAction from "../../src/author/actions/CancelEditCategoryAction";
import EditCategoryAction from "../../src/author/actions/EditCategoryAction";
import DeleteCategoryClickAction from "../../src/author/actions/DeleteCategoryClickAction";
import CancelDeleteCategoryAction from "../../src/author/actions/CancelDeleteCategoryAction";
import CreateCardAction from "../../src/author/actions/CreateCardAction";
import UpdateCardAction from "../../src/author/actions/UpdateCardAction";
import DeleteCardAction from "../../src/author/actions/DeleteCardAction";
import GivenOfNewCardChangedAction from "../../src/author/actions/GivenOfNewCardChangedAction";
import SearchDuplicateCardsAction from "../../src/author/actions/SearchDuplicateCardsAction";
import WantedOfNewCardChangedAction from "../../src/author/actions/WantedOfNewCardChangedAction";
import CancelNewCardAction from "../../src/author/actions/CancelNewCardAction";
import GivenOfEditedCardChangedAction from "../../src/author/actions/GivenOfEditedCardChangedAction";
import WantedOfEditedCardChangedAction from "../../src/author/actions/WantedOfEditedCardChangedAction";
import CancelEditCardAction from "../../src/author/actions/CancelEditCardAction";
import EditCardAction from "../../src/author/actions/EditCardAction";
import DeleteCardClickAction from "../../src/author/actions/DeleteCardClickAction";
import CancelDeleteCardAction from "../../src/author/actions/CancelDeleteCardAction";
import FilterCardsAction from "../../src/author/actions/FilterCardsAction";
import TranslateAction from "../../src/author/actions/TranslateAction";
import PassValueToDictionaryAction from "../../src/author/actions/PassValueToDictionaryAction";
import ToggleDictionaryLookupOfNewCategoryAction from "../../src/author/actions/ToggleDictionaryLookupOfNewCategoryAction";
import ToggleDictionaryLookupOfEditedCategoryAction from "../../src/author/actions/ToggleDictionaryLookupOfEditedCategoryAction";
import GivenLanguageOfNewCategoryChangedAction from "../../src/author/actions/GivenLanguageOfNewCategoryChangedAction";
import GivenLanguageOfEditedCategoryChangedAction from "../../src/author/actions/GivenLanguageOfEditedCategoryChangedAction";
import WantedLanguageOfNewCategoryChangedAction from "../../src/author/actions/WantedLanguageOfNewCategoryChangedAction";
import WantedLanguageOfEditedCategoryChangedAction from "../../src/author/actions/WantedLanguageOfEditedCategoryChangedAction";
import ToggleInputOrderAction from "../../src/author/actions/ToggleInputOrderAction";
import ToggleUseDictionaryAction from "../../src/author/actions/ToggleUseDictionaryAction";
import LoadWantedImageOfNewCardAction from "../../src/author/actions/LoadWantedImageOfNewCardAction";
import LoadWantedImageOfEditedCardAction from "../../src/author/actions/LoadWantedImageOfEditedCardAction";
import RemoveNewCardImageAction from "../../src/author/actions/RemoveNewCardImageAction";
import RemoveEditedCardImageAction from "../../src/author/actions/RemoveEditedCardImageAction";
import ToggleScheduleCardSelectionAction from "../../src/author/actions/ToggleScheduleCardSelectionAction";
import ToggleAllScheduleCardSelectionAction from "../../src/author/actions/ToggleAllScheduleCardSelectionAction";
import ScheduleSelectedCardsAction from "../../src/author/actions/ScheduleSelectedCardsAction";

export default class ActionFactoryRegistrationAuthor {

	static init() {
		ACEController.registerFactory('author.LoadCategoriesAction', (actionData) => new LoadCategoriesAction(actionData));
		ACEController.registerFactory('author.CreateCategoryAction', (actionData) => new CreateCategoryAction(actionData));
		ACEController.registerFactory('author.UpdateCategoryAction', (actionData) => new UpdateCategoryAction(actionData));
		ACEController.registerFactory('author.DeleteCategoryAction', (actionData) => new DeleteCategoryAction(actionData));
		ACEController.registerFactory('author.NameOfNewCategoryChangedAction', (actionData) => new NameOfNewCategoryChangedAction(actionData));
		ACEController.registerFactory('author.CancelNewCategoryAction', (actionData) => new CancelNewCategoryAction(actionData));
		ACEController.registerFactory('author.NameOfEditedCategoryChangedAction', (actionData) => new NameOfEditedCategoryChangedAction(actionData));
		ACEController.registerFactory('author.CancelEditCategoryAction', (actionData) => new CancelEditCategoryAction(actionData));
		ACEController.registerFactory('author.EditCategoryAction', (actionData) => new EditCategoryAction(actionData));
		ACEController.registerFactory('author.DeleteCategoryClickAction', (actionData) => new DeleteCategoryClickAction(actionData));
		ACEController.registerFactory('author.CancelDeleteCategoryAction', (actionData) => new CancelDeleteCategoryAction(actionData));
		ACEController.registerFactory('author.CreateCardAction', (actionData) => new CreateCardAction(actionData));
		ACEController.registerFactory('author.UpdateCardAction', (actionData) => new UpdateCardAction(actionData));
		ACEController.registerFactory('author.DeleteCardAction', (actionData) => new DeleteCardAction(actionData));
		ACEController.registerFactory('author.GivenOfNewCardChangedAction', (actionData) => new GivenOfNewCardChangedAction(actionData));
		ACEController.registerFactory('author.SearchDuplicateCardsAction', (actionData) => new SearchDuplicateCardsAction(actionData));
		ACEController.registerFactory('author.WantedOfNewCardChangedAction', (actionData) => new WantedOfNewCardChangedAction(actionData));
		ACEController.registerFactory('author.CancelNewCardAction', (actionData) => new CancelNewCardAction(actionData));
		ACEController.registerFactory('author.GivenOfEditedCardChangedAction', (actionData) => new GivenOfEditedCardChangedAction(actionData));
		ACEController.registerFactory('author.WantedOfEditedCardChangedAction', (actionData) => new WantedOfEditedCardChangedAction(actionData));
		ACEController.registerFactory('author.CancelEditCardAction', (actionData) => new CancelEditCardAction(actionData));
		ACEController.registerFactory('author.EditCardAction', (actionData) => new EditCardAction(actionData));
		ACEController.registerFactory('author.DeleteCardClickAction', (actionData) => new DeleteCardClickAction(actionData));
		ACEController.registerFactory('author.CancelDeleteCardAction', (actionData) => new CancelDeleteCardAction(actionData));
		ACEController.registerFactory('author.FilterCardsAction', (actionData) => new FilterCardsAction(actionData));
		ACEController.registerFactory('author.TranslateAction', (actionData) => new TranslateAction(actionData));
		ACEController.registerFactory('author.PassValueToDictionaryAction', (actionData) => new PassValueToDictionaryAction(actionData));
		ACEController.registerFactory('author.ToggleDictionaryLookupOfNewCategoryAction', (actionData) => new ToggleDictionaryLookupOfNewCategoryAction(actionData));
		ACEController.registerFactory('author.ToggleDictionaryLookupOfEditedCategoryAction', (actionData) => new ToggleDictionaryLookupOfEditedCategoryAction(actionData));
		ACEController.registerFactory('author.GivenLanguageOfNewCategoryChangedAction', (actionData) => new GivenLanguageOfNewCategoryChangedAction(actionData));
		ACEController.registerFactory('author.GivenLanguageOfEditedCategoryChangedAction', (actionData) => new GivenLanguageOfEditedCategoryChangedAction(actionData));
		ACEController.registerFactory('author.WantedLanguageOfNewCategoryChangedAction', (actionData) => new WantedLanguageOfNewCategoryChangedAction(actionData));
		ACEController.registerFactory('author.WantedLanguageOfEditedCategoryChangedAction', (actionData) => new WantedLanguageOfEditedCategoryChangedAction(actionData));
		ACEController.registerFactory('author.ToggleInputOrderAction', (actionData) => new ToggleInputOrderAction(actionData));
		ACEController.registerFactory('author.ToggleUseDictionaryAction', (actionData) => new ToggleUseDictionaryAction(actionData));
		ACEController.registerFactory('author.LoadWantedImageOfNewCardAction', (actionData) => new LoadWantedImageOfNewCardAction(actionData));
		ACEController.registerFactory('author.LoadWantedImageOfEditedCardAction', (actionData) => new LoadWantedImageOfEditedCardAction(actionData));
		ACEController.registerFactory('author.RemoveNewCardImageAction', (actionData) => new RemoveNewCardImageAction(actionData));
		ACEController.registerFactory('author.RemoveEditedCardImageAction', (actionData) => new RemoveEditedCardImageAction(actionData));
		ACEController.registerFactory('author.ToggleScheduleCardSelectionAction', (actionData) => new ToggleScheduleCardSelectionAction(actionData));
		ACEController.registerFactory('author.ToggleAllScheduleCardSelectionAction', (actionData) => new ToggleAllScheduleCardSelectionAction(actionData));
		ACEController.registerFactory('author.ScheduleSelectedCardsAction', (actionData) => new ScheduleSelectedCardsAction(actionData));
	}

}

/*       S.D.G.       */
