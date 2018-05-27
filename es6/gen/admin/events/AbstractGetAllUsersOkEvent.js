import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractGetAllUsersOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'admin.GetAllUsersOkEvent');
    }
	getNotifiedListeners() {
	    return [ "admin.views.UserListView.render" ];
	}
}


/*       S.D.G.       */
