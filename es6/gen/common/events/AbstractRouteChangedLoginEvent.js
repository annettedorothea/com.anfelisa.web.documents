import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractRouteChangedLoginEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.RouteChangedLoginEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.LoginView.render" ];
	}
}


/*       S.D.G.       */
