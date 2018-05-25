import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadUserUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.LoadUserUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
