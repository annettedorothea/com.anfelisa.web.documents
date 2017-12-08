import ACEController from "../ace/ACEController";
import ShowFalseMultipleChoiceAction from "../../src/multiplechoice/actions/ShowFalseMultipleChoiceAction";
import ShowCorrectMultipleChoiceAction from "../../src/multiplechoice/actions/ShowCorrectMultipleChoiceAction";
import DisplayNextQuestionAction from "../../src/multiplechoice/actions/DisplayNextQuestionAction";

export default class ActionFactoryRegistrationMultiplechoice {

	static init() {
		ACEController.registerFactory('multiplechoice.ShowFalseMultipleChoiceAction', (actionParam) => new ShowFalseMultipleChoiceAction(actionParam));
		ACEController.registerFactory('multiplechoice.ShowCorrectMultipleChoiceAction', (actionParam) => new ShowCorrectMultipleChoiceAction(actionParam));
		ACEController.registerFactory('multiplechoice.DisplayNextQuestionAction', (actionParam) => new DisplayNextQuestionAction(actionParam));
	}

}

/*       S.D.G.       */
