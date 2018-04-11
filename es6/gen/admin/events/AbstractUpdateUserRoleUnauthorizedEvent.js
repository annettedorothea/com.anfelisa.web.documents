import Event from "../../../gen/ace/Event";

export default class AbstractUpdateUserRoleUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'admin.UpdateUserRoleUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
