import Event from "../../../gen/ace/Event";

export default class AbstractRouteChangedResetPasswordEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.RouteChangedResetPasswordEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ResetPasswordView.render" ];
	}
}


/*       S.D.G.       */
