import LoadBoxesAction from "../../src/box/actions/LoadBoxesAction";
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
import ToggleScheduleNextAction from "../../src/box/actions/ToggleScheduleNextAction";
import DisplayWantedAction from "../../src/box/actions/DisplayWantedAction";
import ScoreCardAction from "../../src/box/actions/ScoreCardAction";
import LoadNextReinforceCardAction from "../../src/box/actions/LoadNextReinforceCardAction";
import DisplayWantedReinforceAction from "../../src/box/actions/DisplayWantedReinforceAction";
import ScoreReinforceCardAction from "../../src/box/actions/ScoreReinforceCardAction";
import LoadBoxStatisticsAction from "../../src/box/actions/LoadBoxStatisticsAction";

export function loadBoxes(actionData) {
    new LoadBoxesAction(actionData).apply();
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

export function toggleScheduleNext(actionData) {
    new ToggleScheduleNextAction(actionData).apply();
}

export function displayWanted(actionData) {
    new DisplayWantedAction(actionData).apply();
}

export function scoreCard(actionData) {
    new ScoreCardAction(actionData).apply();
}

export function loadNextReinforceCard(actionData) {
    new LoadNextReinforceCardAction(actionData).apply();
}

export function displayWantedReinforce(actionData) {
    new DisplayWantedReinforceAction(actionData).apply();
}

export function scoreReinforceCard(actionData) {
    new ScoreReinforceCardAction(actionData).apply();
}

export function loadBoxStatistics(actionData) {
    new LoadBoxStatisticsAction(actionData).apply();
}


/*       S.D.G.       */
