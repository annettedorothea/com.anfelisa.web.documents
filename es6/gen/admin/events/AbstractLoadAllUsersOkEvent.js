import Event from "../../../gen/ace/Event";

export default class AbstractLoadAllUsersOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'admin.LoadAllUsersOkEvent');
    }
	getNotifiedListeners() {
	    return [ "admin.views.AdminView.renderAllUsers" ];
	}
}


/*       S.D.G.       */
