import Event from "../../../gen/ace/Event";

export default class AbstractGetRoleUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.GetRoleUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
