import ACEController from "../ace/ACEController";
import CategoryTreeView from "../../src/category/views/CategoryTreeView";
import CardListView from "../../src/card/views/CardListView";

export default class EventListenerRegistrationCategory {

	static init() {
		ACEController.registerListener('category.LoadCategoryTreeOkEvent', CategoryTreeView.mergeDataAndRoute);
		ACEController.registerListener('category.ExpandTreeItemOkEvent', CategoryTreeView.setCategoryList);
		ACEController.registerListener('category.CollapseTreeItemOkEvent', CategoryTreeView.setCategoryList);
		ACEController.registerListener('category.CollapseTreeItemDeselectCategoryEvent', CategoryTreeView.setCategoryList);
		ACEController.registerListener('category.CollapseTreeItemDeselectCategoryEvent', CategoryTreeView.setSelectedCategory);
		ACEController.registerListener('category.CollapseTreeItemDeselectCategoryEvent', CardListView.hide);
		ACEController.registerListener('category.SelectTreeItemOkEvent', CategoryTreeView.setSelectedCategory);
		ACEController.registerListener('category.DeselectTreeItemOkEvent', CategoryTreeView.setSelectedCategory);
		ACEController.registerListener('category.DeselectTreeItemOkEvent', CardListView.hide);
		ACEController.registerListener('category.NewCategoryClickOkEvent', CategoryTreeView.setCategoryDialogData);
		ACEController.registerListener('category.CancelNewCategoryOkEvent', CategoryTreeView.setCategoryDialogData);
		ACEController.registerListener('category.CategoryNameChangedOkEvent', CategoryTreeView.mergeCategoryDialogData);
		ACEController.registerListener('category.DictionaryLookupChangedOkEvent', CategoryTreeView.mergeCategoryDialogData);
		ACEController.registerListener('category.GivenLanguageChangedOkEvent', CategoryTreeView.mergeCategoryDialogData);
		ACEController.registerListener('category.WantedLanguageChangedOkEvent', CategoryTreeView.mergeCategoryDialogData);
		ACEController.registerListener('category.CreateCategoryOkEvent', CategoryTreeView.setCategoryDialogData);
		ACEController.registerListener('category.CreateCategoryErrorEvent', CategoryTreeView.setCategoryDialogData);
		ACEController.registerListener('category.DeleteCategoryClickOkEvent', CategoryTreeView.setDisplayDeleteCategory);
		ACEController.registerListener('category.CancelDeleteCategoryOkEvent', CategoryTreeView.setDisplayDeleteCategory);
		ACEController.registerListener('category.DeleteCategoryOkEvent', CategoryTreeView.setDisplayDeleteCategory);
		ACEController.registerListener('category.DeleteCategoryErrorEvent', CategoryTreeView.setDisplayDeleteCategory);
		ACEController.registerListener('category.EditCategoryClickOkEvent', CategoryTreeView.setCategoryDialogData);
		ACEController.registerListener('category.CancelEditCategoryOkEvent', CategoryTreeView.setCategoryDialogData);
		ACEController.registerListener('category.UpdateCategoryErrorEvent', CategoryTreeView.setCategoryDialogData);
		ACEController.registerListener('category.CheckDropAllowedOkEvent', CategoryTreeView.setDropData);
		ACEController.registerListener('category.ItemDroppedSelfEvent', CategoryTreeView.resetDropData);
		ACEController.registerListener('category.ItemDroppedSelfEvent', CardListView.resetMovedCards);
	}

}

/*       S.D.G.       */
