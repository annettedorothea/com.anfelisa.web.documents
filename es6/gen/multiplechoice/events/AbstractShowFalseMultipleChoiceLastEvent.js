import Event from "../../../gen/ace/Event";

export default class AbstractShowFalseMultipleChoiceLastEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'multiplechoice.ShowFalseMultipleChoiceLastEvent');
    }
	getNotifiedListeners() {
	    return [ "multiplechoice.views.MultipleChoiceView.showFalse", "multiplechoice.views.MultipleChoiceView.showCorrecture" ];
	}
}


/*       S.D.G.       */
