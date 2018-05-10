import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractLoadUserOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.LoadUserOkEvent');
    }
	getNotifiedListeners() {
	    return [ "profile.views.ProfileView.render" ];
	}
}


/*       S.D.G.       */
