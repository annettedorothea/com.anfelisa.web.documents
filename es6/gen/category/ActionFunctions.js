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
import CheckDropAllowedAction from "../../src/category/actions/CheckDropAllowedAction";
import ItemDroppedAction from "../../src/category/actions/ItemDroppedAction";
import MoveCategoryStartedAction from "../../src/category/actions/MoveCategoryStartedAction";
import MoveCategoryAction from "../../src/category/actions/MoveCategoryAction";
import InviteUserClickAction from "../../src/category/actions/InviteUserClickAction";
import CloseInviteUserAction from "../../src/category/actions/CloseInviteUserAction";
import InvitedUsernameChangedAction from "../../src/category/actions/InvitedUsernameChangedAction";
import InviteUserAction from "../../src/category/actions/InviteUserAction";
import RevokeUserAccessAction from "../../src/category/actions/RevokeUserAccessAction";

export function loadCategoryTree(pathToSelected, selectedCategoryId) {
    new LoadCategoryTreeAction(pathToSelected, selectedCategoryId).apply();
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

export function deselectTreeItem() {
    new DeselectTreeItemAction().apply();
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

export function dictionaryLookupChanged() {
    new DictionaryLookupChangedAction().apply();
}

export function givenLanguageChanged(givenLanguage) {
    new GivenLanguageChangedAction(givenLanguage).apply();
}

export function wantedLanguageChanged(wantedLanguage) {
    new WantedLanguageChangedAction(wantedLanguage).apply();
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

export function checkDropAllowed(categoryId) {
    new CheckDropAllowedAction(categoryId).apply();
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

export function inviteUserClick() {
    new InviteUserClickAction().apply();
}

export function closeInviteUser() {
    new CloseInviteUserAction().apply();
}

export function invitedUsernameChanged(invitedUsername) {
    new InvitedUsernameChangedAction(invitedUsername).apply();
}

export function inviteUser() {
    new InviteUserAction().apply();
}

export function revokeUserAccess(revokedUserId) {
    new RevokeUserAccessAction(revokedUserId).apply();
}


/*       S.D.G.       */
