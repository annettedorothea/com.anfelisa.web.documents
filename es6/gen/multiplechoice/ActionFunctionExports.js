import ShowFalseMultipleChoiceAction from "../../src/multiplechoice/actions/ShowFalseMultipleChoiceAction";
import ShowCorrectMultipleChoiceAction from "../../src/multiplechoice/actions/ShowCorrectMultipleChoiceAction";
import DisplayNextQuestionAction from "../../src/multiplechoice/actions/DisplayNextQuestionAction";

export function showFalseMultipleChoice(actionParam) {
    new ShowFalseMultipleChoiceAction(actionParam).apply();
}

export function showCorrectMultipleChoice(actionParam) {
    new ShowCorrectMultipleChoiceAction(actionParam).apply();
}

export function displayNextQuestion(actionParam) {
    new DisplayNextQuestionAction(actionParam).apply();
}


/*       S.D.G.       */
