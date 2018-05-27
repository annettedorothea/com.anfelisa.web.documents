import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractDeleteUserUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'profile.DeleteUserUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
