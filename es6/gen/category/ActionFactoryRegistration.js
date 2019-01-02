import ACEController from "../ace/ACEController";
import LoadCategoryTreeAction from "../../src/category/actions/LoadCategoryTreeAction";
import ExpandTreeItemAction from "../../src/category/actions/ExpandTreeItemAction";
import CollapseTreeItemAction from "../../src/category/actions/CollapseTreeItemAction";

export default class ActionFactoryRegistrationCategory {

	static init() {
		ACEController.registerFactory('category.LoadCategoryTreeAction', (actionData) => new LoadCategoryTreeAction(actionData, 'category.LoadCategoryTreeAction'));
		ACEController.registerFactory('category.ExpandTreeItemAction', (actionData) => new ExpandTreeItemAction(actionData, 'category.ExpandTreeItemAction'));
		ACEController.registerFactory('category.CollapseTreeItemAction', (actionData) => new CollapseTreeItemAction(actionData, 'category.CollapseTreeItemAction'));
	}

}

/*       S.D.G.       */
