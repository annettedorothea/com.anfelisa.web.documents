/* 
 * Copyright (c) 2020, Annette Pohl, Koblenz, Germany
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.

 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */




import ACEController from "../ace/ACEController";
import * as AppState from "../ace/AppState";

export default class EventListenerRegistrationCategory {

	static init() {
		ACEController.registerListener('category.LoadCategoryTreeOkEvent', AppState.set_authorView);
		ACEController.registerListener('category.ExpandTreeItemOkEvent', AppState.set_authorView_categoryTree_rootCategory);
		ACEController.registerListener('category.CollapseTreeItemOkEvent', AppState.set_authorView_categoryTree_rootCategory);
		ACEController.registerListener('category.CollapseTreeItemSelectParentCategoryEvent', AppState.set_authorView_categoryTree_rootCategory);
		ACEController.registerListener('category.SelectTreeItemOkEvent', AppState.set_authorView_categoryTree_selectedCategory);
		ACEController.registerListener('category.NewCategoryClickOkEvent', AppState.merge_authorView_categoryTree);
		ACEController.registerListener('category.CancelNewCategoryOkEvent', AppState.merge_authorView_categoryTree);
		ACEController.registerListener('category.CategoryNameChangedOkEvent', AppState.merge_authorView_categoryTree);
		ACEController.registerListener('category.CreateCategoryOkEvent', AppState.merge_authorView_categoryTree);
		ACEController.registerListener('category.CreateCategoryErrorEvent', AppState.merge_authorView_categoryTree);
		ACEController.registerListener('category.DeleteCategoryClickOkEvent', AppState.merge_authorView_categoryTree);
		ACEController.registerListener('category.CancelDeleteCategoryOkEvent', AppState.merge_authorView_categoryTree);
		ACEController.registerListener('category.DeleteCategoryOkEvent', AppState.merge_authorView_categoryTree);
		ACEController.registerListener('category.DeleteCategoryErrorEvent', AppState.merge_authorView_categoryTree);
		ACEController.registerListener('category.EditCategoryClickOkEvent', AppState.merge_authorView_categoryTree);
		ACEController.registerListener('category.CancelEditCategoryOkEvent', AppState.merge_authorView_categoryTree);
		ACEController.registerListener('category.UpdateCategoryOkEvent', AppState.merge_authorView_categoryTree);
		ACEController.registerListener('category.UpdateCategoryErrorEvent', AppState.merge_authorView_categoryTree);
		ACEController.registerListener('category.CheckDropAllowedOkEvent', AppState.merge_authorView_categoryTree);
		ACEController.registerListener('category.MoveCategoryStartedOkEvent', AppState.merge_authorView_categoryTree);
		ACEController.registerListener('category.MoveCategoryOkEvent', AppState.reset_authorView_categoryTree_movedCategory);
		ACEController.registerListener('category.ChangeOrderCategoryOkEvent', AppState.reset_authorView_categoryTree_movedCategory);
		ACEController.registerListener('category.PreviewCsvOkEvent', AppState.set_authorView_categoryTree_previewCsv);
		ACEController.registerListener('category.CancelPreviewCsvOkEvent', AppState.reset_authorView_categoryTree_previewCsv);
		ACEController.registerListener('category.SwapPreviewCsvOkEvent', AppState.set_authorView_categoryTree_previewCsv);
		ACEController.registerListener('category.ImportCsvOkEvent', AppState.reset_authorView_categoryTree_previewCsv);
	}

}




/******* S.D.G. *******/



