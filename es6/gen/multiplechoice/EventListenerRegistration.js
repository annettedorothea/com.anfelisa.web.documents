import ACEController from "../ace/ACEController";
import MultipleChoiceView from "../../src/multiplechoice/views/MultipleChoiceView";

export default class EventListenerRegistrationMultiplechoice {

	static init() {
		ACEController.registerListener('multiplechoice.ShowFalseMultipleChoiceLastEvent', MultipleChoiceView.showFalse);
		ACEController.registerListener('multiplechoice.ShowFalseMultipleChoiceLastEvent', MultipleChoiceView.showCorrecture);
		ACEController.registerListener('multiplechoice.ShowFalseMultipleChoiceNotLastEvent', MultipleChoiceView.showFalse);
		ACEController.registerListener('multiplechoice.ShowFalseMultipleChoiceNotLastEvent', MultipleChoiceView.showCorrecture);
		ACEController.registerListener('multiplechoice.ShowFalseMultipleChoiceNotLastEvent', MultipleChoiceView.enableNextButton);
		ACEController.registerListener('multiplechoice.ShowCorrectMultipleChoiceLastEvent', MultipleChoiceView.showCorrect);
		ACEController.registerListener('multiplechoice.ShowCorrectMultipleChoiceLastEvent', MultipleChoiceView.showCorrecture);
		ACEController.registerListener('multiplechoice.ShowCorrectMultipleChoiceNotLastEvent', MultipleChoiceView.showCorrect);
		ACEController.registerListener('multiplechoice.ShowCorrectMultipleChoiceNotLastEvent', MultipleChoiceView.showCorrecture);
		ACEController.registerListener('multiplechoice.ShowCorrectMultipleChoiceNotLastEvent', MultipleChoiceView.enableNextButton);
		ACEController.registerListener('multiplechoice.DisplayNextQuestionGoEvent', MultipleChoiceView.displayNextQuestion);
	}

}

/*       S.D.G.       */
