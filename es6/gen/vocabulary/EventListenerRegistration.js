import ACEController from "../ace/ACEController";
import VocabularyView from "../../src/vocabulary/views/VocabularyView";

export default class EventListenerRegistrationVocabulary {

	static init() {
		ACEController.registerListener('vocabulary.CorrectWordWordIsCorrectAndFinishedEvent', VocabularyView.wordIsCorrectAndFinished);
		ACEController.registerListener('vocabulary.CorrectWordWordIsCorrectAndNotFinishedEvent', VocabularyView.wordIsCorrectAndNotFinished);
		ACEController.registerListener('vocabulary.CorrectWordWordIsNotCorrectEvent', VocabularyView.wordIsNotCorrect);
		ACEController.registerListener('vocabulary.IsTestFinishedGoOnWithTestEvent', VocabularyView.displayNextWordButton);
		ACEController.registerListener('vocabulary.ShowNextWordOfTestShowNextWordOfTestEvent', VocabularyView.showNextWordOfTest);
		ACEController.registerListener('vocabulary.ShowWordShowWordEvent', VocabularyView.showWord);
		ACEController.registerListener('vocabulary.StartTestTestStartedEvent', VocabularyView.testStarted);
		ACEController.registerListener('vocabulary.RateWordWordIsCorrectAndFinishedEvent', VocabularyView.wordIsCorrectAndFinished);
		ACEController.registerListener('vocabulary.RateWordWordIsCorrectAndNotFinishedEvent', VocabularyView.wordIsCorrectAndNotFinished);
		ACEController.registerListener('vocabulary.RateWordWordIsNotCorrectEvent', VocabularyView.wordIsNotCorrect);
	}

}

/*       S.D.G.       */
