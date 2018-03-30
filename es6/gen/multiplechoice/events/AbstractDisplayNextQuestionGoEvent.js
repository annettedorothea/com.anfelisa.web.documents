import Event from "../../../gen/ace/Event";

export default class AbstractDisplayNextQuestionGoEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'multiplechoice.DisplayNextQuestionGoEvent');
    }
	getNotifiedListeners() {
	    return [ "multiplechoice.views.MultipleChoiceView.displayNextQuestion" ];
	}
}


/*       S.D.G.       */
