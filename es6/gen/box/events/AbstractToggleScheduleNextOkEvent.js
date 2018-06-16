import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractToggleScheduleNextOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.ToggleScheduleNextOkEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxView.toggleScheduleNext" ];
	}
}


/*       S.D.G.       */
