import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractScheduleNextCardBadRequestEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.ScheduleNextCardBadRequestEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxView.render" ];
	}
}


/*       S.D.G.       */
