import Event from "../../../gen/ace/Event";

export default class AbstractGetAllUsersUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'admin.GetAllUsersUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
