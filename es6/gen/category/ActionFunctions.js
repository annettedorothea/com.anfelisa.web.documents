/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import LoadCategoryTreeAction from "../../src/category/actions/LoadCategoryTreeAction";
import ReloadCategoryTreeAction from "../../src/category/actions/ReloadCategoryTreeAction";
import ExpandTreeItemAction from "../../src/category/actions/ExpandTreeItemAction";
import CollapseTreeItemAction from "../../src/category/actions/CollapseTreeItemAction";
import SelectTreeItemAction from "../../src/category/actions/SelectTreeItemAction";
import NewCategoryClickAction from "../../src/category/actions/NewCategoryClickAction";
import CancelCategoryDialogAction from "../../src/category/actions/CancelCategoryDialogAction";
import CategoryNameChangedAction from "../../src/category/actions/CategoryNameChangedAction";
import CreateCategoryAction from "../../src/category/actions/CreateCategoryAction";
import EditCategoryClickAction from "../../src/category/actions/EditCategoryClickAction";
import UpdateCategoryAction from "../../src/category/actions/UpdateCategoryAction";
import InviteUserClickAction from "../../src/category/actions/InviteUserClickAction";
import GetInvitedUsernamesAction from "../../src/category/actions/GetInvitedUsernamesAction";
import CancelInviteUserAction from "../../src/category/actions/CancelInviteUserAction";
import InvitedUsernameChangedAction from "../../src/category/actions/InvitedUsernameChangedAction";
import SearchUsernameAction from "../../src/category/actions/SearchUsernameAction";
import InviteUserAction from "../../src/category/actions/InviteUserAction";
import DeleteCategoryClickAction from "../../src/category/actions/DeleteCategoryClickAction";
import CancelDeleteCategoryAction from "../../src/category/actions/CancelDeleteCategoryAction";
import DeleteCategoryAction from "../../src/category/actions/DeleteCategoryAction";
import CheckDropAllowedAction from "../../src/category/actions/CheckDropAllowedAction";
import ItemDroppedAction from "../../src/category/actions/ItemDroppedAction";
import MoveCategoryStartedAction from "../../src/category/actions/MoveCategoryStartedAction";
import MoveCategoryAction from "../../src/category/actions/MoveCategoryAction";
import ChangeOrderCategoryAction from "../../src/category/actions/ChangeOrderCategoryAction";
import FilterNonScheduledCardsAction from "../../src/category/actions/FilterNonScheduledCardsAction";
import PriorityChangedAction from "../../src/category/actions/PriorityChangedAction";
import CreateReverseBoxAction from "../../src/category/actions/CreateReverseBoxAction";

export function loadCategoryTree(rootCategoryId, selectedCategoryId) {
    new LoadCategoryTreeAction().apply({rootCategoryId, selectedCategoryId});
}

export function reloadCategoryTree(selectedCategoryId, categoryIdToBeExpanded) {
    new ReloadCategoryTreeAction().apply({selectedCategoryId, categoryIdToBeExpanded});
}

export function expandTreeItem(categoryId) {
    new ExpandTreeItemAction().apply({categoryId});
}

export function collapseTreeItem(categoryId) {
    new CollapseTreeItemAction().apply({categoryId});
}

export function selectTreeItem(categoryId) {
    new SelectTreeItemAction().apply({categoryId});
}

export function newCategoryClick() {
    new NewCategoryClickAction().apply({});
}

export function cancelCategoryDialog() {
    new CancelCategoryDialogAction().apply({});
}

export function categoryNameChanged(categoryName) {
    new CategoryNameChangedAction().apply({categoryName});
}

export function createCategory() {
    new CreateCategoryAction().apply({});
}

export function editCategoryClick() {
    new EditCategoryClickAction().apply({});
}

export function updateCategory() {
    new UpdateCategoryAction().apply({});
}

export function inviteUserClick() {
    new InviteUserClickAction().apply({});
}

export function getInvitedUsernames() {
    new GetInvitedUsernamesAction().apply({});
}

export function cancelInviteUser() {
    new CancelInviteUserAction().apply({});
}

export function invitedUsernameChanged(usernameSearchString) {
    new InvitedUsernameChangedAction().apply({usernameSearchString});
}

export function searchUsername() {
    new SearchUsernameAction().apply({});
}

export function inviteUser(invitedUsername) {
    new InviteUserAction().apply({invitedUsername});
}

export function deleteCategoryClick() {
    new DeleteCategoryClickAction().apply({});
}

export function cancelDeleteCategory() {
    new CancelDeleteCategoryAction().apply({});
}

export function deleteCategory() {
    new DeleteCategoryAction().apply({});
}

export function checkDropAllowed(categoryId, altKey, depth) {
    new CheckDropAllowedAction().apply({categoryId, altKey, depth});
}

export function itemDropped(alt) {
    new ItemDroppedAction().apply({alt});
}

export function moveCategoryStarted(movedCategoryId) {
    new MoveCategoryStartedAction().apply({movedCategoryId});
}

export function moveCategory() {
    new MoveCategoryAction().apply({});
}

export function changeOrderCategory() {
    new ChangeOrderCategoryAction().apply({});
}

export function filterNonScheduledCards() {
    new FilterNonScheduledCardsAction().apply({});
}

export function priorityChanged(priority) {
    new PriorityChangedAction().apply({priority});
}

export function createReverseBox() {
    new CreateReverseBoxAction().apply({});
}





/******* S.D.G. *******/



