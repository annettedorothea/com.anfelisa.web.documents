'use strict';

class EventListenerRegistrationMultiplechoice {

	static init() {
    	ACEController.registerListener('ShowFalseMultipleChoiceEvent', MultipleChoiceView.showFalse);
    	ACEController.registerListener('ShowFalseMultipleChoiceEvent', MultipleChoiceView.showCorrecture);
    	ACEController.registerListener('ShowCorrectMultipleChoiceEvent', MultipleChoiceView.showCorrect);
    	ACEController.registerListener('ShowCorrectMultipleChoiceEvent', MultipleChoiceView.showCorrecture);
    	ACEController.registerListener('EnableNextButtonEvent', MultipleChoiceView.enableNextButton);
    	ACEController.registerListener('DisplayNextQuestionEvent', MultipleChoiceView.displayNextQuestion);
	}

}

EventListenerRegistrationMultiplechoice.init();

/*       S.D.G.       */
