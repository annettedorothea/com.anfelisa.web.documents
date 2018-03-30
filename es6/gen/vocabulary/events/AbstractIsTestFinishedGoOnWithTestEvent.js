import Event from "../../../gen/ace/Event";

export default class AbstractIsTestFinishedGoOnWithTestEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'vocabulary.IsTestFinishedGoOnWithTestEvent');
    }
	getNotifiedListeners() {
	    return [ "vocabulary.views.VocabularyView.displayNextWordButton" ];
	}
}


/*       S.D.G.       */
