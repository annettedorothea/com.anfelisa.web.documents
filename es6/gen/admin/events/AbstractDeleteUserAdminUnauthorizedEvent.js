import Event from "../../../gen/ace/Event";

export default class AbstractDeleteUserAdminUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'admin.DeleteUserAdminUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
