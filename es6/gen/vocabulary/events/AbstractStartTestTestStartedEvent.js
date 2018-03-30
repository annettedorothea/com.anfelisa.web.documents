import Event from "../../../gen/ace/Event";

export default class AbstractStartTestTestStartedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'vocabulary.StartTestTestStartedEvent');
    }
	getNotifiedListeners() {
	    return [ "vocabulary.views.VocabularyView.testStarted" ];
	}
}


/*       S.D.G.       */
