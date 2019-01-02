import ACEController from "../ace/ACEController";
import CategoryTreeView from "../../src/category/views/CategoryTreeView";

export default class EventListenerRegistrationCategory {

	static init() {
		ACEController.registerListener('category.LoadCategoryTreeOkEvent', CategoryTreeView.render);
		ACEController.registerListener('category.ExpandTreeItemOkEvent', CategoryTreeView.expandTreeItem);
		ACEController.registerListener('category.CollapseTreeItemOkEvent', CategoryTreeView.collapseTreeItem);
	}

}

/*       S.D.G.       */
