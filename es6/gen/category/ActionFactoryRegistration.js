import ACEController from "../ace/ACEController";
import LoadCategoryTreeAction from "../../src/category/actions/LoadCategoryTreeAction";
import ExpandTreeItemAction from "../../src/category/actions/ExpandTreeItemAction";
import CollapseTreeItemAction from "../../src/category/actions/CollapseTreeItemAction";
import SelectTreeItemAction from "../../src/category/actions/SelectTreeItemAction";
import DeselectTreeItemAction from "../../src/category/actions/DeselectTreeItemAction";
import NewCategoryClickAction from "../../src/category/actions/NewCategoryClickAction";
import CancelNewCategoryAction from "../../src/category/actions/CancelNewCategoryAction";
import CategoryNameChangedAction from "../../src/category/actions/CategoryNameChangedAction";
import DictionaryLookupChangedAction from "../../src/category/actions/DictionaryLookupChangedAction";
import GivenLanguageChangedAction from "../../src/category/actions/GivenLanguageChangedAction";
import WantedLanguageChangedAction from "../../src/category/actions/WantedLanguageChangedAction";
import CreateCategoryAction from "../../src/category/actions/CreateCategoryAction";
import DeleteCategoryClickAction from "../../src/category/actions/DeleteCategoryClickAction";
import CancelDeleteCategoryAction from "../../src/category/actions/CancelDeleteCategoryAction";
import DeleteCategoryAction from "../../src/category/actions/DeleteCategoryAction";
import EditCategoryClickAction from "../../src/category/actions/EditCategoryClickAction";
import CancelEditCategoryAction from "../../src/category/actions/CancelEditCategoryAction";
import UpdateCategoryAction from "../../src/category/actions/UpdateCategoryAction";
import CheckDropAllowedAction from "../../src/category/actions/CheckDropAllowedAction";
import ItemDroppedAction from "../../src/category/actions/ItemDroppedAction";

export default class ActionFactoryRegistrationCategory {

	static init() {
		ACEController.registerFactory('category.LoadCategoryTreeAction', 
			(actionData) => new LoadCategoryTreeAction(actionData.pathToSelected, actionData.selectedCategoryId));
		ACEController.registerFactory('category.ExpandTreeItemAction', 
			(actionData) => new ExpandTreeItemAction(actionData.categoryId));
		ACEController.registerFactory('category.CollapseTreeItemAction', 
			(actionData) => new CollapseTreeItemAction(actionData.categoryId));
		ACEController.registerFactory('category.SelectTreeItemAction', 
			(actionData) => new SelectTreeItemAction(actionData.categoryId));
		ACEController.registerFactory('category.DeselectTreeItemAction', 
			(actionData) => new DeselectTreeItemAction());
		ACEController.registerFactory('category.NewCategoryClickAction', 
			(actionData) => new NewCategoryClickAction());
		ACEController.registerFactory('category.CancelNewCategoryAction', 
			(actionData) => new CancelNewCategoryAction());
		ACEController.registerFactory('category.CategoryNameChangedAction', 
			(actionData) => new CategoryNameChangedAction(actionData.categoryName));
		ACEController.registerFactory('category.DictionaryLookupChangedAction', 
			(actionData) => new DictionaryLookupChangedAction());
		ACEController.registerFactory('category.GivenLanguageChangedAction', 
			(actionData) => new GivenLanguageChangedAction(actionData.givenLanguage));
		ACEController.registerFactory('category.WantedLanguageChangedAction', 
			(actionData) => new WantedLanguageChangedAction(actionData.wantedLanguage));
		ACEController.registerFactory('category.CreateCategoryAction', 
			(actionData) => new CreateCategoryAction());
		ACEController.registerFactory('category.DeleteCategoryClickAction', 
			(actionData) => new DeleteCategoryClickAction());
		ACEController.registerFactory('category.CancelDeleteCategoryAction', 
			(actionData) => new CancelDeleteCategoryAction());
		ACEController.registerFactory('category.DeleteCategoryAction', 
			(actionData) => new DeleteCategoryAction());
		ACEController.registerFactory('category.EditCategoryClickAction', 
			(actionData) => new EditCategoryClickAction());
		ACEController.registerFactory('category.CancelEditCategoryAction', 
			(actionData) => new CancelEditCategoryAction());
		ACEController.registerFactory('category.UpdateCategoryAction', 
			(actionData) => new UpdateCategoryAction());
		ACEController.registerFactory('category.CheckDropAllowedAction', 
			(actionData) => new CheckDropAllowedAction(actionData.categoryId));
		ACEController.registerFactory('category.ItemDroppedAction', 
			(actionData) => new ItemDroppedAction());
	}

}

/*       S.D.G.       */
