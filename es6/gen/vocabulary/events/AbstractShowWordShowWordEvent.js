import Event from "../../../gen/ace/Event";

export default class AbstractShowWordShowWordEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'vocabulary.ShowWordShowWordEvent');
    }
	getNotifiedListeners() {
	    return [ "vocabulary.views.VocabularyView.showWord" ];
	}
}


/*       S.D.G.       */
