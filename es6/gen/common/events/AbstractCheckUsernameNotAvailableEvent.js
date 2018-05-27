import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractCheckUsernameNotAvailableEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.CheckUsernameNotAvailableEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.RegistrationView.usernameNotAvailable" ];
	}
}


/*       S.D.G.       */
