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
 *
 * generated with de.acegen 0.9.5
 *
 */




import LoadCategoryTreeAction from "../../src/category/actions/LoadCategoryTreeAction";
import ExpandTreeItemAction from "../../src/category/actions/ExpandTreeItemAction";
import CollapseTreeItemAction from "../../src/category/actions/CollapseTreeItemAction";
import SelectTreeItemAction from "../../src/category/actions/SelectTreeItemAction";
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

export function loadCategoryTree(rootCategoryId, selectedCategoryId) {
    new LoadCategoryTreeAction(rootCategoryId, selectedCategoryId).apply();
}

export function expandTreeItem(categoryId) {
    new ExpandTreeItemAction(categoryId).apply();
}

export function collapseTreeItem(categoryId) {
    new CollapseTreeItemAction(categoryId).apply();
}

export function selectTreeItem(categoryId) {
    new SelectTreeItemAction(categoryId).apply();
}

export function newCategoryClick() {
    new NewCategoryClickAction().apply();
}

export function cancelNewCategory() {
    new CancelNewCategoryAction().apply();
}

export function categoryNameChanged(categoryName) {
    new CategoryNameChangedAction(categoryName).apply();
}

export function createCategory() {
    new CreateCategoryAction().apply();
}

export function deleteCategoryClick() {
    new DeleteCategoryClickAction().apply();
}

export function cancelDeleteCategory() {
    new CancelDeleteCategoryAction().apply();
}

export function deleteCategory() {
    new DeleteCategoryAction().apply();
}

export function editCategoryClick() {
    new EditCategoryClickAction().apply();
}

export function cancelEditCategory() {
    new CancelEditCategoryAction().apply();
}

export function updateCategory() {
    new UpdateCategoryAction().apply();
}

export function checkDropAllowed(categoryId, altKey, depth) {
    new CheckDropAllowedAction(categoryId, altKey, depth).apply();
}

export function itemDropped() {
    new ItemDroppedAction().apply();
}

export function moveCategoryStarted(movedCategoryId) {
    new MoveCategoryStartedAction(movedCategoryId).apply();
}

export function moveCategory() {
    new MoveCategoryAction().apply();
}

export function changeOrderCategory() {
    new ChangeOrderCategoryAction().apply();
}

export function previewCsv(csv) {
    new PreviewCsvAction(csv).apply();
}

export function cancelPreviewCsv() {
    new CancelPreviewCsvAction().apply();
}

export function swapPreviewCsv() {
    new SwapPreviewCsvAction().apply();
}

export function importCsv() {
    new ImportCsvAction().apply();
}





/******* S.D.G. *******/



