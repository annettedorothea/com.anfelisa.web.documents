import Event from "../../../gen/ace/Event";

export default class AbstractRateWordWordIsCorrectAndNotFinishedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'vocabulary.RateWordWordIsCorrectAndNotFinishedEvent');
    }
	getNotifiedListeners() {
	    return [ "vocabulary.views.VocabularyView.wordIsCorrectAndNotFinished" ];
	}
}


/*       S.D.G.       */
