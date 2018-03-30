import Event from "../../../gen/ace/Event";

export default class AbstractCorrectWordWordIsNotCorrectEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'vocabulary.CorrectWordWordIsNotCorrectEvent');
    }
	getNotifiedListeners() {
	    return [ "vocabulary.views.VocabularyView.wordIsNotCorrect" ];
	}
}


/*       S.D.G.       */
