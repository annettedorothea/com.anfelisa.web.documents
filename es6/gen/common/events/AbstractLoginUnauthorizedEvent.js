import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoginUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.LoginUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
