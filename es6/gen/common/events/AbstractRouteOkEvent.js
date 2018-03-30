import Event from "../../../gen/ace/Event";

export default class AbstractRouteOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.RouteOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.updateHash" ];
	}
}


/*       S.D.G.       */
