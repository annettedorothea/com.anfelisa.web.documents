import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractLogoutOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.LogoutOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.resetUser" ];
	}
}


/*       S.D.G.       */
