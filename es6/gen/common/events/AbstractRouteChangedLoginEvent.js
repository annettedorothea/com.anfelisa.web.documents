import Event from "../../../gen/ace/Event";

export default class AbstractRouteChangedLoginEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.RouteChangedLoginEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.LoginView.render" ];
	}
}


/*       S.D.G.       */
