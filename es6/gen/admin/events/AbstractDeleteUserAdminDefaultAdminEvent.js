import Event from "../../../gen/ace/Event";

export default class AbstractDeleteUserAdminDefaultAdminEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'admin.DeleteUserAdminDefaultAdminEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.MessageView.renderMessage" ];
	}
}


/*       S.D.G.       */
