import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractCheckUsernameAvailableEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.CheckUsernameAvailableEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.RegistrationView.usernameAvailable" ];
	}
}


/*       S.D.G.       */
