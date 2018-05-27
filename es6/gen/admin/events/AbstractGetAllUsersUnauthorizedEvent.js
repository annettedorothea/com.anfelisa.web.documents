import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractGetAllUsersUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'admin.GetAllUsersUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
