import Event from "../../../gen/ace/Event";

export default class AbstractCorrectWordWordIsCorrectAndNotFinishedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'vocabulary.CorrectWordWordIsCorrectAndNotFinishedEvent');
    }
	getNotifiedListeners() {
	    return [ "vocabulary.views.VocabularyView.wordIsCorrectAndNotFinished" ];
	}
}


/*       S.D.G.       */
