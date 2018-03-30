import Event from "../../../gen/ace/Event";

export default class AbstractLogoutOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.LogoutOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.removeUserFromLocalStorage", "navigation.views.BoxesView.hideBoxes" ];
	}
}


/*       S.D.G.       */
