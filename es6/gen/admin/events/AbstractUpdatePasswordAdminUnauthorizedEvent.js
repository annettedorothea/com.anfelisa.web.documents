import Event from "../../../gen/ace/Event";

export default class AbstractUpdatePasswordAdminUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'admin.UpdatePasswordAdminUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
