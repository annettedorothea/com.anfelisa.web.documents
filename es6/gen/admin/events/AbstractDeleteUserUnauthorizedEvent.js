import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractDeleteUserUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'admin.DeleteUserUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
