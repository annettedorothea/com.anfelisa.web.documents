import Event from "../../../gen/ace/Event";

export default class AbstractLoadAllUsersUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'admin.LoadAllUsersUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
