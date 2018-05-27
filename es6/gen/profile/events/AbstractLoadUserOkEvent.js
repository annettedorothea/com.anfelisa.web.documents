import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadUserOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'profile.LoadUserOkEvent');
    }
	getNotifiedListeners() {
	    return [ "profile.views.ProfileView.render" ];
	}
}


/*       S.D.G.       */
