import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractRouteOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.RouteOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.updateHash" ];
	}
}


/*       S.D.G.       */
