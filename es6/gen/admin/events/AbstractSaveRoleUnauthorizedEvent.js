import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractSaveRoleUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'admin.SaveRoleUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
