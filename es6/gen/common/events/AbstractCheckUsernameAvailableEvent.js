import Event from "../../../gen/ace/Event";

export default class AbstractCheckUsernameAvailableEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.CheckUsernameAvailableEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.RegistrationView.usernameAvailable" ];
	}
}


/*       S.D.G.       */
