import LoadBoxesAction from "../../src/box/actions/LoadBoxesAction";
import LoadRootCategoriesAction from "../../src/box/actions/LoadRootCategoriesAction";
import ToggleMaxIntervalAction from "../../src/box/actions/ToggleMaxIntervalAction";
import MaxIntervalChangedAction from "../../src/box/actions/MaxIntervalChangedAction";
import CategorySelectedAction from "../../src/box/actions/CategorySelectedAction";
import CreateBoxAction from "../../src/box/actions/CreateBoxAction";
import EditBoxAction from "../../src/box/actions/EditBoxAction";
import ToggleMaxIntervalOfBoxAction from "../../src/box/actions/ToggleMaxIntervalOfBoxAction";
import MaxIntervalChangedOfBoxAction from "../../src/box/actions/MaxIntervalChangedOfBoxAction";
import CancelEditBoxAction from "../../src/box/actions/CancelEditBoxAction";
import UpdateBoxAction from "../../src/box/actions/UpdateBoxAction";
import DeleteBoxClickAction from "../../src/box/actions/DeleteBoxClickAction";
import CancelDeleteCategoryAction from "../../src/box/actions/CancelDeleteCategoryAction";
import DeleteBoxAction from "../../src/box/actions/DeleteBoxAction";
import PostponeCardsOfBoxAction from "../../src/box/actions/PostponeCardsOfBoxAction";

export function loadBoxes(actionParam) {
    new LoadBoxesAction(actionParam).apply();
}

export function loadRootCategories(actionParam) {
    new LoadRootCategoriesAction(actionParam).apply();
}

export function toggleMaxInterval(actionParam) {
    new ToggleMaxIntervalAction(actionParam).apply();
}

export function maxIntervalChanged(actionParam) {
    new MaxIntervalChangedAction(actionParam).apply();
}

export function categorySelected(actionParam) {
    new CategorySelectedAction(actionParam).apply();
}

export function createBox(actionParam) {
    new CreateBoxAction(actionParam).apply();
}

export function editBox(actionParam) {
    new EditBoxAction(actionParam).apply();
}

export function toggleMaxIntervalOfBox(actionParam) {
    new ToggleMaxIntervalOfBoxAction(actionParam).apply();
}

export function maxIntervalChangedOfBox(actionParam) {
    new MaxIntervalChangedOfBoxAction(actionParam).apply();
}

export function cancelEditBox(actionParam) {
    new CancelEditBoxAction(actionParam).apply();
}

export function updateBox(actionParam) {
    new UpdateBoxAction(actionParam).apply();
}

export function deleteBoxClick(actionParam) {
    new DeleteBoxClickAction(actionParam).apply();
}

export function cancelDeleteCategory(actionParam) {
    new CancelDeleteCategoryAction(actionParam).apply();
}

export function deleteBox(actionParam) {
    new DeleteBoxAction(actionParam).apply();
}

export function postponeCardsOfBox(actionParam) {
    new PostponeCardsOfBoxAction(actionParam).apply();
}


/*       S.D.G.       */
