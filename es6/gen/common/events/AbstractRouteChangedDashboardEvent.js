import Event from "../../../gen/ace/Event";

export default class AbstractRouteChangedDashboardEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.RouteChangedDashboardEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.DashboardView.render" ];
	}
}


/*       S.D.G.       */
