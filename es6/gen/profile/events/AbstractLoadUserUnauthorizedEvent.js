import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadUserUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'profile.LoadUserUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
