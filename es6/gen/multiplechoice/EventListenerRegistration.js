import ACEController from "../ace/ACEController";
import MultipleChoiceView from "../../src/multiplechoice/views/MultipleChoiceView";

export default class EventListenerRegistrationMultiplechoice {

	static init() {
		ACEController.registerListener('multiplechoice.ShowFalseMultipleChoiceEvent', MultipleChoiceView.showFalse);
		ACEController.registerListener('multiplechoice.ShowFalseMultipleChoiceEvent', MultipleChoiceView.showCorrecture);
		ACEController.registerListener('multiplechoice.ShowCorrectMultipleChoiceEvent', MultipleChoiceView.showCorrect);
		ACEController.registerListener('multiplechoice.ShowCorrectMultipleChoiceEvent', MultipleChoiceView.showCorrecture);
		ACEController.registerListener('multiplechoice.EnableNextButtonEvent', MultipleChoiceView.enableNextButton);
		ACEController.registerListener('multiplechoice.DisplayNextQuestionEvent', MultipleChoiceView.displayNextQuestion);
	}

}

/*       S.D.G.       */
