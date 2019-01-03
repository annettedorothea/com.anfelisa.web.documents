import ACEController from "../ace/ACEController";
import CategoryTreeView from "../../src/category/views/CategoryTreeView";
import CommonView from "../../src/common/views/CommonView";
import CardListView from "../../src/card/views/CardListView";

export default class EventListenerRegistrationCategory {

	static init() {
		ACEController.registerListener('category.LoadCategoryTreeOkEvent', CategoryTreeView.render);
		ACEController.registerListener('category.ExpandTreeItemOkEvent', CommonView.deepMerge);
		ACEController.registerListener('category.CollapseTreeItemOkEvent', CommonView.deepMerge);
		ACEController.registerListener('category.SelectTreeItemOkEvent', CommonView.deepMerge);
		ACEController.registerListener('category.DeselectTreeItemOkEvent', CommonView.deepMerge);
		ACEController.registerListener('category.DeselectTreeItemOkEvent', CardListView.hide);
		ACEController.registerListener('category.NewCategoryClickOkEvent', CommonView.deepMerge);
		ACEController.registerListener('category.CancelNewCategoryOkEvent', CommonView.deepMerge);
		ACEController.registerListener('category.NameOfNewCategoryChangedOkEvent', CommonView.deepMerge);
		ACEController.registerListener('category.DictionaryLookupChangedOkEvent', CommonView.deepMerge);
		ACEController.registerListener('category.GivenLanguageChangedOkEvent', CommonView.deepMerge);
		ACEController.registerListener('category.WantedLanguageChangedOkEvent', CommonView.deepMerge);
		ACEController.registerListener('category.CreateCategoryErrorEvent', CommonView.deepMerge);
		ACEController.registerListener('category.DeleteCategoryClickOkEvent', CommonView.deepMerge);
		ACEController.registerListener('category.CancelDeleteCategoryOkEvent', CommonView.deepMerge);
	}

}

/*       S.D.G.       */
