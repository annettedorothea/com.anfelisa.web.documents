import ACEController from "../ace/ACEController";
import LoadCategoryTreeAction from "../../src/category/actions/LoadCategoryTreeAction";
import ExpandTreeItemAction from "../../src/category/actions/ExpandTreeItemAction";
import CollapseTreeItemAction from "../../src/category/actions/CollapseTreeItemAction";
import SelectTreeItemAction from "../../src/category/actions/SelectTreeItemAction";
import DeselectTreeItemAction from "../../src/category/actions/DeselectTreeItemAction";
import NewCategoryClickAction from "../../src/category/actions/NewCategoryClickAction";
import CancelNewCategoryAction from "../../src/category/actions/CancelNewCategoryAction";
import NameOfNewCategoryChangedAction from "../../src/category/actions/NameOfNewCategoryChangedAction";
import DictionaryLookupChangedAction from "../../src/category/actions/DictionaryLookupChangedAction";
import GivenLanguageChangedAction from "../../src/category/actions/GivenLanguageChangedAction";
import WantedLanguageChangedAction from "../../src/category/actions/WantedLanguageChangedAction";
import CreateCategoryAction from "../../src/category/actions/CreateCategoryAction";
import DeleteCategoryClickAction from "../../src/category/actions/DeleteCategoryClickAction";
import CancelDeleteCategoryAction from "../../src/category/actions/CancelDeleteCategoryAction";

export default class ActionFactoryRegistrationCategory {

	static init() {
		ACEController.registerFactory('category.LoadCategoryTreeAction', (actionData) => new LoadCategoryTreeAction(actionData, 'category.LoadCategoryTreeAction'));
		ACEController.registerFactory('category.ExpandTreeItemAction', (actionData) => new ExpandTreeItemAction(actionData, 'category.ExpandTreeItemAction'));
		ACEController.registerFactory('category.CollapseTreeItemAction', (actionData) => new CollapseTreeItemAction(actionData, 'category.CollapseTreeItemAction'));
		ACEController.registerFactory('category.SelectTreeItemAction', (actionData) => new SelectTreeItemAction(actionData, 'category.SelectTreeItemAction'));
		ACEController.registerFactory('category.DeselectTreeItemAction', (actionData) => new DeselectTreeItemAction(actionData, 'category.DeselectTreeItemAction'));
		ACEController.registerFactory('category.NewCategoryClickAction', (actionData) => new NewCategoryClickAction(actionData, 'category.NewCategoryClickAction'));
		ACEController.registerFactory('category.CancelNewCategoryAction', (actionData) => new CancelNewCategoryAction(actionData, 'category.CancelNewCategoryAction'));
		ACEController.registerFactory('category.NameOfNewCategoryChangedAction', (actionData) => new NameOfNewCategoryChangedAction(actionData, 'category.NameOfNewCategoryChangedAction'));
		ACEController.registerFactory('category.DictionaryLookupChangedAction', (actionData) => new DictionaryLookupChangedAction(actionData, 'category.DictionaryLookupChangedAction'));
		ACEController.registerFactory('category.GivenLanguageChangedAction', (actionData) => new GivenLanguageChangedAction(actionData, 'category.GivenLanguageChangedAction'));
		ACEController.registerFactory('category.WantedLanguageChangedAction', (actionData) => new WantedLanguageChangedAction(actionData, 'category.WantedLanguageChangedAction'));
		ACEController.registerFactory('category.CreateCategoryAction', (actionData) => new CreateCategoryAction(actionData, 'category.CreateCategoryAction'));
		ACEController.registerFactory('category.DeleteCategoryClickAction', (actionData) => new DeleteCategoryClickAction(actionData, 'category.DeleteCategoryClickAction'));
		ACEController.registerFactory('category.CancelDeleteCategoryAction', (actionData) => new CancelDeleteCategoryAction(actionData, 'category.CancelDeleteCategoryAction'));
	}

}

/*       S.D.G.       */
