import ACEController from "../ace/ACEController";
import * as AppState from "../ace/AppState";

export default class EventListenerRegistrationCategory {

	static init() {
		ACEController.registerListener('category.LoadCategoryTreeOkEvent', AppState.set_state_State_data);
		ACEController.registerListener('category.LoadCategoryTreeOkEvent', AppState.set_state_State_view);
		ACEController.registerListener('category.ExpandTreeItemOkEvent', AppState.set_state_State_data_AuthorView_categoryTree_CategoryTree_categoryList);
		ACEController.registerListener('category.CollapseTreeItemOkEvent', AppState.set_state_State_data_AuthorView_categoryTree_CategoryTree_categoryList);
		ACEController.registerListener('category.CollapseTreeItemDeselectCategoryEvent', AppState.set_state_State_data_AuthorView_categoryTree_CategoryTree_categoryList);
		ACEController.registerListener('category.CollapseTreeItemDeselectCategoryEvent', AppState.reset_state_State_data_AuthorView_categoryTree_CategoryTree_selectedCategory);
		ACEController.registerListener('category.CollapseTreeItemDeselectCategoryEvent', AppState.reset_state_State_data_AuthorView_cardView_CardView_cardList);
		ACEController.registerListener('category.SelectTreeItemOkEvent', AppState.set_state_State_data_AuthorView_categoryTree_CategoryTree_selectedCategory);
		ACEController.registerListener('category.DeselectTreeItemOkEvent', AppState.reset_state_State_data_AuthorView_categoryTree_CategoryTree_selectedCategory);
		ACEController.registerListener('category.DeselectTreeItemOkEvent', AppState.reset_state_State_data_AuthorView_cardView_CardView_cardList);
		ACEController.registerListener('category.NewCategoryClickOkEvent', AppState.merge_state_State_data_AuthorView_categoryTree);
		ACEController.registerListener('category.CancelNewCategoryOkEvent', AppState.merge_state_State_data_AuthorView_categoryTree);
		ACEController.registerListener('category.CategoryNameChangedOkEvent', AppState.merge_state_State_data_AuthorView_categoryTree);
		ACEController.registerListener('category.DictionaryLookupChangedOkEvent', AppState.merge_state_State_data_AuthorView_categoryTree);
		ACEController.registerListener('category.GivenLanguageChangedOkEvent', AppState.merge_state_State_data_AuthorView_categoryTree);
		ACEController.registerListener('category.WantedLanguageChangedOkEvent', AppState.merge_state_State_data_AuthorView_categoryTree);
		ACEController.registerListener('category.CreateCategoryOkEvent', AppState.merge_state_State_data_AuthorView_categoryTree);
		ACEController.registerListener('category.CreateCategoryErrorEvent', AppState.merge_state_State_data_AuthorView_categoryTree);
		ACEController.registerListener('category.DeleteCategoryClickOkEvent', AppState.merge_state_State_data_AuthorView_categoryTree);
		ACEController.registerListener('category.CancelDeleteCategoryOkEvent', AppState.merge_state_State_data_AuthorView_categoryTree);
		ACEController.registerListener('category.DeleteCategoryOkEvent', AppState.merge_state_State_data_AuthorView_categoryTree);
		ACEController.registerListener('category.DeleteCategoryErrorEvent', AppState.merge_state_State_data_AuthorView_categoryTree);
		ACEController.registerListener('category.EditCategoryClickOkEvent', AppState.merge_state_State_data_AuthorView_categoryTree);
		ACEController.registerListener('category.CancelEditCategoryOkEvent', AppState.merge_state_State_data_AuthorView_categoryTree);
		ACEController.registerListener('category.UpdateCategoryOkEvent', AppState.merge_state_State_data_AuthorView_categoryTree);
		ACEController.registerListener('category.UpdateCategoryErrorEvent', AppState.merge_state_State_data_AuthorView_categoryTree);
		ACEController.registerListener('category.InviteUserClickOkEvent', AppState.merge_state_State_data_AuthorView_categoryTree);
		ACEController.registerListener('category.CloseInviteUserOkEvent', AppState.merge_state_State_data_AuthorView_categoryTree);
		ACEController.registerListener('category.InvitedUsernameChangedOkEvent', AppState.merge_state_State_data_AuthorView_categoryTree);
		ACEController.registerListener('category.CheckDropAllowedOkEvent', AppState.merge_state_State_data_AuthorView_categoryTree);
		ACEController.registerListener('category.MoveCategoryStartedOkEvent', AppState.merge_state_State_data_AuthorView_categoryTree);
		ACEController.registerListener('category.MoveCategoryOkEvent', AppState.reset_state_State_data_AuthorView_categoryTree_CategoryTree_movedCategory);
	}

}

/*       S.D.G.       */
