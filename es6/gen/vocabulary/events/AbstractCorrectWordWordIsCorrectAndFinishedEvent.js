import Event from "../../../gen/ace/Event";

export default class AbstractCorrectWordWordIsCorrectAndFinishedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'vocabulary.CorrectWordWordIsCorrectAndFinishedEvent');
    }
	getNotifiedListeners() {
	    return [ "vocabulary.views.VocabularyView.wordIsCorrectAndFinished" ];
	}
}


/*       S.D.G.       */
