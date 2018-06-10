import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractScoreCardUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.ScoreCardUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
