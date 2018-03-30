import Event from "../../../gen/ace/Event";

export default class AbstractRouteHomeOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.RouteHomeOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.updateHash" ];
	}
}


/*       S.D.G.       */
