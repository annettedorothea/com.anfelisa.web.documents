import Event from "../../../gen/ace/Event";

export default class AbstractLoadDashboardOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.LoadDashboardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.DashboardView.render" ];
	}
}


/*       S.D.G.       */
