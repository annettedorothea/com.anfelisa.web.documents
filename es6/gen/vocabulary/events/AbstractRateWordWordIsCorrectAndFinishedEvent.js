import Event from "../../../gen/ace/Event";

export default class AbstractRateWordWordIsCorrectAndFinishedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'vocabulary.RateWordWordIsCorrectAndFinishedEvent');
    }
	getNotifiedListeners() {
	    return [ "vocabulary.views.VocabularyView.wordIsCorrectAndFinished" ];
	}
}


/*       S.D.G.       */
