import Event from "../../../gen/ace/Event";

export default class AbstractShowNextWordOfTestShowNextWordOfTestEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'vocabulary.ShowNextWordOfTestShowNextWordOfTestEvent');
    }
	getNotifiedListeners() {
	    return [ "vocabulary.views.VocabularyView.showNextWordOfTest" ];
	}
}


/*       S.D.G.       */
