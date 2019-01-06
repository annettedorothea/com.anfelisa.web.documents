import LoadBoxesAction from "../../src/box/actions/LoadBoxesAction";
import CreateBoxAction from "../../src/box/actions/CreateBoxAction";
import EditBoxAction from "../../src/box/actions/EditBoxAction";
import CancelEditBoxAction from "../../src/box/actions/CancelEditBoxAction";
import MaxIntervalChangedAction from "../../src/box/actions/MaxIntervalChangedAction";
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
import ScoreReinforceCardAction from "../../src/box/actions/ScoreReinforceCardAction";
import LoadBoxStatisticsAction from "../../src/box/actions/LoadBoxStatisticsAction";

export function loadBoxes() {
    new LoadBoxesAction().apply();
}

export function createBox() {
    new CreateBoxAction().apply();
}

export function editBox(maxInterval) {
    new EditBoxAction(maxInterval).apply();
}

export function cancelEditBox() {
    new CancelEditBoxAction().apply();
}

export function maxIntervalChanged(maxInterval) {
    new MaxIntervalChangedAction(maxInterval).apply();
}

export function updateBox() {
    new UpdateBoxAction().apply();
}

export function deleteBoxClick(boxId) {
    new DeleteBoxClickAction(boxId).apply();
}

export function cancelDeleteBox() {
    new CancelDeleteBoxAction().apply();
}

export function deleteBox(boxId) {
    new DeleteBoxAction(boxId).apply();
}

export function postponeCardsOfBox(boxId) {
    new PostponeCardsOfBoxAction(boxId).apply();
}

export function loadNextCard(boxId) {
    new LoadNextCardAction(boxId).apply();
}

export function scheduleNextCard() {
    new ScheduleNextCardAction().apply();
}

export function toggleScheduleNext() {
    new ToggleScheduleNextAction().apply();
}

export function displayWanted(wantedItemsLength, index, hasImage) {
    new DisplayWantedAction(wantedItemsLength, index, hasImage).apply();
}

export function scoreCard(scoredCardQuality) {
    new ScoreCardAction(scoredCardQuality).apply();
}

export function loadNextReinforceCard(boxId) {
    new LoadNextReinforceCardAction(boxId).apply();
}

export function scoreReinforceCard(quality) {
    new ScoreReinforceCardAction(quality).apply();
}

export function loadBoxStatistics(boxId) {
    new LoadBoxStatisticsAction(boxId).apply();
}


/*       S.D.G.       */