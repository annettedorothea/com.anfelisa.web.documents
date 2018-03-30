import Event from "../../../gen/ace/Event";

export default class AbstractRateWordWordIsNotCorrectEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'vocabulary.RateWordWordIsNotCorrectEvent');
    }
	getNotifiedListeners() {
	    return [ "vocabulary.views.VocabularyView.wordIsNotCorrect" ];
	}
}


/*       S.D.G.       */
