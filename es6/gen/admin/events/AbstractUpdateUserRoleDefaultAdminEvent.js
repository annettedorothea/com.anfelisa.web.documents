import Event from "../../../gen/ace/Event";

export default class AbstractUpdateUserRoleDefaultAdminEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'admin.UpdateUserRoleDefaultAdminEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.MessageView.renderMessage" ];
	}
}


/*       S.D.G.       */
