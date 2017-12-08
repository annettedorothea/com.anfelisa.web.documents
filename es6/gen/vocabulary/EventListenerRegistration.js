import ACEController from "../ace/ACEController";
import VocabularyView from "../../src/vocabulary/views/VocabularyView";

export default class EventListenerRegistrationVocabulary {

	static init() {
	    	ACEController.registerListener('vocabulary.WordIsCorrectAndFinishedEvent', VocabularyView.wordIsCorrectAndFinished);
	    	ACEController.registerListener('vocabulary.WordIsCorrectAndNotFinishedEvent', VocabularyView.wordIsCorrectAndNotFinished);
	    	ACEController.registerListener('vocabulary.WordIsNotCorrectEvent', VocabularyView.wordIsNotCorrect);
	    	ACEController.registerListener('vocabulary.DisplayNextWordButtonEvent', VocabularyView.displayNextWordButton);
	    	ACEController.registerListener('vocabulary.ShowNextWordOfTestEvent', VocabularyView.showNextWordOfTest);
	    	ACEController.registerListener('vocabulary.ShowWordEvent', VocabularyView.showWord);
	    	ACEController.registerListener('vocabulary.TestStartedEvent', VocabularyView.testStarted);
	}

}

/*       S.D.G.       */
