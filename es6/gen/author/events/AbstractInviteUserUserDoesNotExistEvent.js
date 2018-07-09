import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractInviteUserUserDoesNotExistEvent extends Event {
    constructor(eventData) {
        super(eventData, 'author.InviteUserUserDoesNotExistEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
