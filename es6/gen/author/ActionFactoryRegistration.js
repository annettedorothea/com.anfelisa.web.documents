import ACEController from "../ace/ACEController";
import LoadCategoriesAction from "../../src/author/actions/LoadCategoriesAction";
import CreateCategoryAction from "../../src/author/actions/CreateCategoryAction";
import UpdateCategoryAction from "../../src/author/actions/UpdateCategoryAction";
import DeleteCategoryAction from "../../src/author/actions/DeleteCategoryAction";
import NameOfNewCategoryChangedAction from "../../src/author/actions/NameOfNewCategoryChangedAction";
import IndexOfNewCategoryChangedAction from "../../src/author/actions/IndexOfNewCategoryChangedAction";
import CancelNewCategoryAction from "../../src/author/actions/CancelNewCategoryAction";
import NameOfEditedCategoryChangedAction from "../../src/author/actions/NameOfEditedCategoryChangedAction";
import IndexOfEditedCategoryChangedAction from "../../src/author/actions/IndexOfEditedCategoryChangedAction";
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
import IndexOfNewCardChangedAction from "../../src/author/actions/IndexOfNewCardChangedAction";
import CancelNewCardAction from "../../src/author/actions/CancelNewCardAction";
import GivenOfEditedCardChangedAction from "../../src/author/actions/GivenOfEditedCardChangedAction";
import WantedOfEditedCardChangedAction from "../../src/author/actions/WantedOfEditedCardChangedAction";
import IndexOfEditedCardChangedAction from "../../src/author/actions/IndexOfEditedCardChangedAction";
import CancelEditCardAction from "../../src/author/actions/CancelEditCardAction";
import EditCardAction from "../../src/author/actions/EditCardAction";
import DeleteCardClickAction from "../../src/author/actions/DeleteCardClickAction";
import CancelDeleteCardAction from "../../src/author/actions/CancelDeleteCardAction";
import FilterCardsAction from "../../src/author/actions/FilterCardsAction";

export default class ActionFactoryRegistrationAuthor {

	static init() {
		ACEController.registerFactory('author.LoadCategoriesAction', (actionParam) => new LoadCategoriesAction(actionParam));
		ACEController.registerFactory('author.CreateCategoryAction', (actionParam) => new CreateCategoryAction(actionParam));
		ACEController.registerFactory('author.UpdateCategoryAction', (actionParam) => new UpdateCategoryAction(actionParam));
		ACEController.registerFactory('author.DeleteCategoryAction', (actionParam) => new DeleteCategoryAction(actionParam));
		ACEController.registerFactory('author.NameOfNewCategoryChangedAction', (actionParam) => new NameOfNewCategoryChangedAction(actionParam));
		ACEController.registerFactory('author.IndexOfNewCategoryChangedAction', (actionParam) => new IndexOfNewCategoryChangedAction(actionParam));
		ACEController.registerFactory('author.CancelNewCategoryAction', (actionParam) => new CancelNewCategoryAction(actionParam));
		ACEController.registerFactory('author.NameOfEditedCategoryChangedAction', (actionParam) => new NameOfEditedCategoryChangedAction(actionParam));
		ACEController.registerFactory('author.IndexOfEditedCategoryChangedAction', (actionParam) => new IndexOfEditedCategoryChangedAction(actionParam));
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
		ACEController.registerFactory('author.IndexOfNewCardChangedAction', (actionParam) => new IndexOfNewCardChangedAction(actionParam));
		ACEController.registerFactory('author.CancelNewCardAction', (actionParam) => new CancelNewCardAction(actionParam));
		ACEController.registerFactory('author.GivenOfEditedCardChangedAction', (actionParam) => new GivenOfEditedCardChangedAction(actionParam));
		ACEController.registerFactory('author.WantedOfEditedCardChangedAction', (actionParam) => new WantedOfEditedCardChangedAction(actionParam));
		ACEController.registerFactory('author.IndexOfEditedCardChangedAction', (actionParam) => new IndexOfEditedCardChangedAction(actionParam));
		ACEController.registerFactory('author.CancelEditCardAction', (actionParam) => new CancelEditCardAction(actionParam));
		ACEController.registerFactory('author.EditCardAction', (actionParam) => new EditCardAction(actionParam));
		ACEController.registerFactory('author.DeleteCardClickAction', (actionParam) => new DeleteCardClickAction(actionParam));
		ACEController.registerFactory('author.CancelDeleteCardAction', (actionParam) => new CancelDeleteCardAction(actionParam));
		ACEController.registerFactory('author.FilterCardsAction', (actionParam) => new FilterCardsAction(actionParam));
	}

}

/*       S.D.G.       */
