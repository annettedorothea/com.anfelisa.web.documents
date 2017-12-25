import ShowNextCardItemAction from "../../src/card/actions/ShowNextCardItemAction";
import CheckIfComplexCardIsFinishedAction from "../../src/card/actions/CheckIfComplexCardIsFinishedAction";
import FinishCardAction from "../../src/card/actions/FinishCardAction";
import ScoreCardAction from "../../src/card/actions/ScoreCardAction";
import RemoveCardFromBoxAction from "../../src/card/actions/RemoveCardFromBoxAction";
import DisplayNextReinforceCardAction from "../../src/card/actions/DisplayNextReinforceCardAction";
import ScoreReinforcedCardAction from "../../src/card/actions/ScoreReinforcedCardAction";
import RecalculateScheduledCardsAction from "../../src/card/actions/RecalculateScheduledCardsAction";

export function showNextCardItem(actionParam) {
    new ShowNextCardItemAction(actionParam).apply();
}

export function checkIfComplexCardIsFinished(actionParam) {
    new CheckIfComplexCardIsFinishedAction(actionParam).apply();
}

export function finishCard(actionParam) {
    new FinishCardAction(actionParam).apply();
}

export function scoreCard(actionParam) {
    new ScoreCardAction(actionParam).apply();
}

export function removeCardFromBox(actionParam) {
    new RemoveCardFromBoxAction(actionParam).apply();
}

export function displayNextReinforceCard(actionParam) {
    new DisplayNextReinforceCardAction(actionParam).apply();
}

export function scoreReinforcedCard(actionParam) {
    new ScoreReinforcedCardAction(actionParam).apply();
}

export function recalculateScheduledCards(actionParam) {
    new RecalculateScheduledCardsAction(actionParam).apply();
}


/*       S.D.G.       */
