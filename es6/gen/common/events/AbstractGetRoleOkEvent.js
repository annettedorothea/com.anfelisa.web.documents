import Event from "../../../gen/ace/Event";

export default class AbstractGetRoleOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.GetRoleOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initRoleInLocalStorage", "common.views.HeaderView.renderLogout" ];
	}
}


/*       S.D.G.       */
