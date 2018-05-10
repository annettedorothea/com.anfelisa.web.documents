import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractCheckUsernameNotAvailableEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.CheckUsernameNotAvailableEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.RegistrationView.usernameNotAvailable" ];
	}
}


/*       S.D.G.       */
