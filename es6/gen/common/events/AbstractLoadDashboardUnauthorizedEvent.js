import Event from "../../../gen/ace/Event";

export default class AbstractLoadDashboardUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.LoadDashboardUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
