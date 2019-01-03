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

export function loadCategoryTree(actionData) {
    new LoadCategoryTreeAction(actionData).apply();
}

export function expandTreeItem(actionData) {
    new ExpandTreeItemAction(actionData).apply();
}

export function collapseTreeItem(actionData) {
    new CollapseTreeItemAction(actionData).apply();
}

export function selectTreeItem(actionData) {
    new SelectTreeItemAction(actionData).apply();
}

export function deselectTreeItem(actionData) {
    new DeselectTreeItemAction(actionData).apply();
}

export function newCategoryClick(actionData) {
    new NewCategoryClickAction(actionData).apply();
}

export function cancelNewCategory(actionData) {
    new CancelNewCategoryAction(actionData).apply();
}

export function categoryNameChanged(actionData) {
    new CategoryNameChangedAction(actionData).apply();
}

export function dictionaryLookupChanged(actionData) {
    new DictionaryLookupChangedAction(actionData).apply();
}

export function givenLanguageChanged(actionData) {
    new GivenLanguageChangedAction(actionData).apply();
}

export function wantedLanguageChanged(actionData) {
    new WantedLanguageChangedAction(actionData).apply();
}

export function createCategory(actionData) {
    new CreateCategoryAction(actionData).apply();
}

export function deleteCategoryClick(actionData) {
    new DeleteCategoryClickAction(actionData).apply();
}

export function cancelDeleteCategory(actionData) {
    new CancelDeleteCategoryAction(actionData).apply();
}

export function deleteCategory(actionData) {
    new DeleteCategoryAction(actionData).apply();
}

export function editCategoryClick(actionData) {
    new EditCategoryClickAction(actionData).apply();
}

export function cancelEditCategory(actionData) {
    new CancelEditCategoryAction(actionData).apply();
}

export function updateCategory(actionData) {
    new UpdateCategoryAction(actionData).apply();
}


/*       S.D.G.       */
