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
import CancelDeleteBoxAction from "../../src/box/actions/CancelDeleteBoxAction";
import DeleteBoxAction from "../../src/box/actions/DeleteBoxAction";
import PostponeCardsOfBoxAction from "../../src/box/actions/PostponeCardsOfBoxAction";
import LoadNextCardAction from "../../src/box/actions/LoadNextCardAction";
import ScheduleNextCardAction from "../../src/box/actions/ScheduleNextCardAction";
import DisplayWantedAction from "../../src/box/actions/DisplayWantedAction";

export function loadBoxes(actionData) {
    new LoadBoxesAction(actionData).apply();
}

export function loadRootCategories(actionData) {
    new LoadRootCategoriesAction(actionData).apply();
}

export function toggleMaxInterval(actionData) {
    new ToggleMaxIntervalAction(actionData).apply();
}

export function maxIntervalChanged(actionData) {
    new MaxIntervalChangedAction(actionData).apply();
}

export function categorySelected(actionData) {
    new CategorySelectedAction(actionData).apply();
}

export function createBox(actionData) {
    new CreateBoxAction(actionData).apply();
}

export function editBox(actionData) {
    new EditBoxAction(actionData).apply();
}

export function toggleMaxIntervalOfBox(actionData) {
    new ToggleMaxIntervalOfBoxAction(actionData).apply();
}

export function maxIntervalChangedOfBox(actionData) {
    new MaxIntervalChangedOfBoxAction(actionData).apply();
}

export function cancelEditBox(actionData) {
    new CancelEditBoxAction(actionData).apply();
}

export function updateBox(actionData) {
    new UpdateBoxAction(actionData).apply();
}

export function deleteBoxClick(actionData) {
    new DeleteBoxClickAction(actionData).apply();
}

export function cancelDeleteBox(actionData) {
    new CancelDeleteBoxAction(actionData).apply();
}

export function deleteBox(actionData) {
    new DeleteBoxAction(actionData).apply();
}

export function postponeCardsOfBox(actionData) {
    new PostponeCardsOfBoxAction(actionData).apply();
}

export function loadNextCard(actionData) {
    new LoadNextCardAction(actionData).apply();
}

export function scheduleNextCard(actionData) {
    new ScheduleNextCardAction(actionData).apply();
}

export function displayWanted(actionData) {
    new DisplayWantedAction(actionData).apply();
}


/*       S.D.G.       */
