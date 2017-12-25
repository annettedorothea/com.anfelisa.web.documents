import CorrectWordAction from "../../src/vocabulary/actions/CorrectWordAction";
import IsTestFinishedAction from "../../src/vocabulary/actions/IsTestFinishedAction";
import IsRatedTestFinishedAction from "../../src/vocabulary/actions/IsRatedTestFinishedAction";
import ShowNextWordOfTestAction from "../../src/vocabulary/actions/ShowNextWordOfTestAction";
import ShowWordAction from "../../src/vocabulary/actions/ShowWordAction";
import StartTestAction from "../../src/vocabulary/actions/StartTestAction";
import RateWordAction from "../../src/vocabulary/actions/RateWordAction";
import RepeatComplexCardAction from "../../src/vocabulary/actions/RepeatComplexCardAction";

export function correctWord(actionParam) {
    new CorrectWordAction(actionParam).apply();
}

export function isTestFinished(actionParam) {
    new IsTestFinishedAction(actionParam).apply();
}

export function isRatedTestFinished(actionParam) {
    new IsRatedTestFinishedAction(actionParam).apply();
}

export function showNextWordOfTest(actionParam) {
    new ShowNextWordOfTestAction(actionParam).apply();
}

export function showWord(actionParam) {
    new ShowWordAction(actionParam).apply();
}

export function startTest(actionParam) {
    new StartTestAction(actionParam).apply();
}

export function rateWord(actionParam) {
    new RateWordAction(actionParam).apply();
}

export function repeatComplexCard(actionParam) {
    new RepeatComplexCardAction(actionParam).apply();
}


/*       S.D.G.       */
