import Event from "../../../gen/ace/Event";

export default class AbstractLogoutOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.LogoutOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.resetUser" ];
	}
}


/*       S.D.G.       */
