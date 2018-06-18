import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadBoxStatisticsOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.LoadBoxStatisticsOkEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxView.renderStatistics" ];
	}
}


/*       S.D.G.       */
