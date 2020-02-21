/* 
 * Copyright (c) 2019, Annette Pohl, Koblenz, Germany
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
import LoadCategoryTreeAction from "../../src/category/actions/LoadCategoryTreeAction";
import ExpandTreeItemAction from "../../src/category/actions/ExpandTreeItemAction";
import CollapseTreeItemAction from "../../src/category/actions/CollapseTreeItemAction";
import SelectTreeItemAction from "../../src/category/actions/SelectTreeItemAction";
import DeselectTreeItemAction from "../../src/category/actions/DeselectTreeItemAction";
import NewCategoryClickAction from "../../src/category/actions/NewCategoryClickAction";
import CancelNewCategoryAction from "../../src/category/actions/CancelNewCategoryAction";
import CategoryNameChangedAction from "../../src/category/actions/CategoryNameChangedAction";
import CreateCategoryAction from "../../src/category/actions/CreateCategoryAction";
import DeleteCategoryClickAction from "../../src/category/actions/DeleteCategoryClickAction";
import CancelDeleteCategoryAction from "../../src/category/actions/CancelDeleteCategoryAction";
import DeleteCategoryAction from "../../src/category/actions/DeleteCategoryAction";
import EditCategoryClickAction from "../../src/category/actions/EditCategoryClickAction";
import CancelEditCategoryAction from "../../src/category/actions/CancelEditCategoryAction";
import UpdateCategoryAction from "../../src/category/actions/UpdateCategoryAction";
import CheckDropAllowedAction from "../../src/category/actions/CheckDropAllowedAction";
import ItemDroppedAction from "../../src/category/actions/ItemDroppedAction";
import MoveCategoryStartedAction from "../../src/category/actions/MoveCategoryStartedAction";
import MoveCategoryAction from "../../src/category/actions/MoveCategoryAction";
import ChangeOrderCategoryAction from "../../src/category/actions/ChangeOrderCategoryAction";
import PreviewCsvAction from "../../src/category/actions/PreviewCsvAction";
import CancelPreviewCsvAction from "../../src/category/actions/CancelPreviewCsvAction";
import SwapPreviewCsvAction from "../../src/category/actions/SwapPreviewCsvAction";
import ImportCsvAction from "../../src/category/actions/ImportCsvAction";

export default class ActionFactoryRegistrationCategory {

	static init() {
		ACEController.registerFactory('category.LoadCategoryTreeAction', 
			(actionData) => new LoadCategoryTreeAction(actionData.selectedCategoryId));
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
			(actionData) => new CheckDropAllowedAction(actionData.categoryId, actionData.altKey, actionData.depth));
		ACEController.registerFactory('category.ItemDroppedAction', 
			(actionData) => new ItemDroppedAction());
		ACEController.registerFactory('category.MoveCategoryStartedAction', 
			(actionData) => new MoveCategoryStartedAction(actionData.movedCategoryId));
		ACEController.registerFactory('category.MoveCategoryAction', 
			(actionData) => new MoveCategoryAction());
		ACEController.registerFactory('category.ChangeOrderCategoryAction', 
			(actionData) => new ChangeOrderCategoryAction());
		ACEController.registerFactory('category.PreviewCsvAction', 
			(actionData) => new PreviewCsvAction(actionData.csv));
		ACEController.registerFactory('category.CancelPreviewCsvAction', 
			(actionData) => new CancelPreviewCsvAction());
		ACEController.registerFactory('category.SwapPreviewCsvAction', 
			(actionData) => new SwapPreviewCsvAction());
		ACEController.registerFactory('category.ImportCsvAction', 
			(actionData) => new ImportCsvAction());
	}

}




/******* S.D.G. *******/



