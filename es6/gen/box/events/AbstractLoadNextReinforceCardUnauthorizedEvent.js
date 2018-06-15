import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadNextReinforceCardUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.LoadNextReinforceCardUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
