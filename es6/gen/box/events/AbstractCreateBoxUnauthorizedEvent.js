import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractCreateBoxUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.CreateBoxUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
