import Event from "../../../gen/ace/Event";

export default class AbstractCheckUsernameNotAvailableEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.CheckUsernameNotAvailableEvent');
    }
	getNotifiedListeners() {
	    return [ "profile.views.UserInfoView.renderUsernameIsNotAvailable" ];
	}
}


/*       S.D.G.       */
