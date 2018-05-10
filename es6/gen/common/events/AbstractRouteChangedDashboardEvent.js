import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractRouteChangedDashboardEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.RouteChangedDashboardEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.DashboardView.render" ];
	}
}


/*       S.D.G.       */
