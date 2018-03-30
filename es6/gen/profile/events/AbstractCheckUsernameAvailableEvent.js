import Event from "../../../gen/ace/Event";

export default class AbstractCheckUsernameAvailableEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.CheckUsernameAvailableEvent');
    }
	getNotifiedListeners() {
	    return [ "profile.views.UserInfoView.renderUsernameIsAvailable" ];
	}
}


/*       S.D.G.       */
