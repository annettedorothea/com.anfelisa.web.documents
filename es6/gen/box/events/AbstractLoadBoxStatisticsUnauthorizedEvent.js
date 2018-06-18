import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadBoxStatisticsUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.LoadBoxStatisticsUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
