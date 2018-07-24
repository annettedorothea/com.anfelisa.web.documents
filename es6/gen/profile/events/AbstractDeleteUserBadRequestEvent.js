import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractDeleteUserBadRequestEvent extends Event {
    constructor(eventData) {
        super(eventData, 'profile.DeleteUserBadRequestEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
