import Event from "../../../gen/ace/Event";

export default class AbstractRenderLogoutOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.RenderLogoutOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.HeaderView.renderLogout" ];
	}
}


/*       S.D.G.       */
