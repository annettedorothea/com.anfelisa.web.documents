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

export default class ActionFactoryRegistrationAuthor {

	static init() {
		ACEController.registerFactory('author.LoadCategoriesAction', (actionParam) => new LoadCategoriesAction(actionParam));
		ACEController.registerFactory('author.CreateCategoryAction', (actionParam) => new CreateCategoryAction(actionParam));
		ACEController.registerFactory('author.UpdateCategoryAction', (actionParam) => new UpdateCategoryAction(actionParam));
		ACEController.registerFactory('author.DeleteCategoryAction', (actionParam) => new DeleteCategoryAction(actionParam));
		ACEController.registerFactory('author.NameOfNewCategoryChangedAction', (actionParam) => new NameOfNewCategoryChangedAction(actionParam));
		ACEController.registerFactory('author.CancelNewCategoryAction', (actionParam) => new CancelNewCategoryAction(actionParam));
		ACEController.registerFactory('author.NameOfEditedCategoryChangedAction', (actionParam) => new NameOfEditedCategoryChangedAction(actionParam));
		ACEController.registerFactory('author.CancelEditCategoryAction', (actionParam) => new CancelEditCategoryAction(actionParam));
		ACEController.registerFactory('author.EditCategoryAction', (actionParam) => new EditCategoryAction(actionParam));
		ACEController.registerFactory('author.DeleteCategoryClickAction', (actionParam) => new DeleteCategoryClickAction(actionParam));
		ACEController.registerFactory('author.CancelDeleteCategoryAction', (actionParam) => new CancelDeleteCategoryAction(actionParam));
		ACEController.registerFactory('author.CreateCardAction', (actionParam) => new CreateCardAction(actionParam));
		ACEController.registerFactory('author.UpdateCardAction', (actionParam) => new UpdateCardAction(actionParam));
		ACEController.registerFactory('author.DeleteCardAction', (actionParam) => new DeleteCardAction(actionParam));
		ACEController.registerFactory('author.GivenOfNewCardChangedAction', (actionParam) => new GivenOfNewCardChangedAction(actionParam));
		ACEController.registerFactory('author.SearchDuplicateCardsAction', (actionParam) => new SearchDuplicateCardsAction(actionParam));
		ACEController.registerFactory('author.WantedOfNewCardChangedAction', (actionParam) => new WantedOfNewCardChangedAction(actionParam));
		ACEController.registerFactory('author.CancelNewCardAction', (actionParam) => new CancelNewCardAction(actionParam));
		ACEController.registerFactory('author.GivenOfEditedCardChangedAction', (actionParam) => new GivenOfEditedCardChangedAction(actionParam));
		ACEController.registerFactory('author.WantedOfEditedCardChangedAction', (actionParam) => new WantedOfEditedCardChangedAction(actionParam));
		ACEController.registerFactory('author.CancelEditCardAction', (actionParam) => new CancelEditCardAction(actionParam));
		ACEController.registerFactory('author.EditCardAction', (actionParam) => new EditCardAction(actionParam));
		ACEController.registerFactory('author.DeleteCardClickAction', (actionParam) => new DeleteCardClickAction(actionParam));
		ACEController.registerFactory('author.CancelDeleteCardAction', (actionParam) => new CancelDeleteCardAction(actionParam));
		ACEController.registerFactory('author.FilterCardsAction', (actionParam) => new FilterCardsAction(actionParam));
		ACEController.registerFactory('author.TranslateAction', (actionParam) => new TranslateAction(actionParam));
		ACEController.registerFactory('author.ToggleDictionaryLookupOfNewCategoryAction', (actionParam) => new ToggleDictionaryLookupOfNewCategoryAction(actionParam));
		ACEController.registerFactory('author.ToggleDictionaryLookupOfEditedCategoryAction', (actionParam) => new ToggleDictionaryLookupOfEditedCategoryAction(actionParam));
		ACEController.registerFactory('author.GivenLanguageOfNewCategoryChangedAction', (actionParam) => new GivenLanguageOfNewCategoryChangedAction(actionParam));
		ACEController.registerFactory('author.GivenLanguageOfEditedCategoryChangedAction', (actionParam) => new GivenLanguageOfEditedCategoryChangedAction(actionParam));
		ACEController.registerFactory('author.WantedLanguageOfNewCategoryChangedAction', (actionParam) => new WantedLanguageOfNewCategoryChangedAction(actionParam));
		ACEController.registerFactory('author.WantedLanguageOfEditedCategoryChangedAction', (actionParam) => new WantedLanguageOfEditedCategoryChangedAction(actionParam));
		ACEController.registerFactory('author.ToggleInputOrderAction', (actionParam) => new ToggleInputOrderAction(actionParam));
		ACEController.registerFactory('author.ToggleUseDictionaryAction', (actionParam) => new ToggleUseDictionaryAction(actionParam));
		ACEController.registerFactory('author.LoadWantedImageOfNewCardAction', (actionParam) => new LoadWantedImageOfNewCardAction(actionParam));
		ACEController.registerFactory('author.LoadWantedImageOfEditedCardAction', (actionParam) => new LoadWantedImageOfEditedCardAction(actionParam));
		ACEController.registerFactory('author.RemoveNewCardImageAction', (actionParam) => new RemoveNewCardImageAction(actionParam));
		ACEController.registerFactory('author.RemoveEditedCardImageAction', (actionParam) => new RemoveEditedCardImageAction(actionParam));
	}

}

/*       S.D.G.       */
