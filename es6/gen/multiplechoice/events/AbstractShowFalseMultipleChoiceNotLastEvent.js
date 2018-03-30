import Event from "../../../gen/ace/Event";

export default class AbstractShowFalseMultipleChoiceNotLastEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'multiplechoice.ShowFalseMultipleChoiceNotLastEvent');
    }
	getNotifiedListeners() {
	    return [ "multiplechoice.views.MultipleChoiceView.showFalse", "multiplechoice.views.MultipleChoiceView.showCorrecture", "multiplechoice.views.MultipleChoiceView.enableNextButton" ];
	}
}


/*       S.D.G.       */
