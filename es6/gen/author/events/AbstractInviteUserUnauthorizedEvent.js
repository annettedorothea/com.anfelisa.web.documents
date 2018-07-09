import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractInviteUserUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.InviteUserUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
