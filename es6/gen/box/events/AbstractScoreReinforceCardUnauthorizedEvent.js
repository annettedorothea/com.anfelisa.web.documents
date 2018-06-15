import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractScoreReinforceCardUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.ScoreReinforceCardUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
