'use strict';

class EventListenerRegistrationVocabulary {

	static init() {
    	ACEController.registerListener('WordIsCorrectAndFinishedEvent', VocabularyView.wordIsCorrectAndFinished);
    	ACEController.registerListener('WordIsCorrectAndNotFinishedEvent', VocabularyView.wordIsCorrectAndNotFinished);
    	ACEController.registerListener('WordIsNotCorrectEvent', VocabularyView.wordIsNotCorrect);
    	ACEController.registerListener('DisplayNextWordButtonEvent', VocabularyView.displayNextWordButton);
    	ACEController.registerListener('ShowNextWordOfTestEvent', VocabularyView.showNextWordOfTest);
    	ACEController.registerListener('ShowWordEvent', VocabularyView.showWord);
    	ACEController.registerListener('TestStartedEvent', VocabularyView.testStarted);
	}

}

EventListenerRegistrationVocabulary.init();

/*       S.D.G.       */
