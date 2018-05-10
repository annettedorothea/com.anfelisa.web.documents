import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractRouteChangedRegistrationEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.RouteChangedRegistrationEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.RegistrationView.render" ];
	}
}


/*       S.D.G.       */
