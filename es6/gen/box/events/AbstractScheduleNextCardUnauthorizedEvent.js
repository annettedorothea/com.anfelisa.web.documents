import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractScheduleNextCardUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.ScheduleNextCardUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
