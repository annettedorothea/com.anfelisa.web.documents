import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractGetAllUsersOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'admin.GetAllUsersOkEvent');
    }
	getNotifiedListeners() {
	    return [ "admin.views.UserListView.render" ];
	}
}


/*       S.D.G.       */
