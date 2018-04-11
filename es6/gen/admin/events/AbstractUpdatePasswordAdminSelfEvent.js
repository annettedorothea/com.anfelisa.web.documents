import Event from "../../../gen/ace/Event";

export default class AbstractUpdatePasswordAdminSelfEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'admin.UpdatePasswordAdminSelfEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initUserInLocalStorage" ];
	}
}


/*       S.D.G.       */
