import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadNextCardDoNotScheduleNextEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.LoadNextCardDoNotScheduleNextEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxView.render" ];
	}
}


/*       S.D.G.       */
