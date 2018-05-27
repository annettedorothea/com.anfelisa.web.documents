import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractRouteChangedForgotPasswordEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.RouteChangedForgotPasswordEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ForgotPasswordView.render" ];
	}
}


/*       S.D.G.       */
