import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractInviteUserOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.InviteUserOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayMessage" ];
	}
}


/*       S.D.G.       */
