import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadNextCardUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.LoadNextCardUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
