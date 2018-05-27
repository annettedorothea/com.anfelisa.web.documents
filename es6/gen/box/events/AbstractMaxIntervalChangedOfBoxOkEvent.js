import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractMaxIntervalChangedOfBoxOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.MaxIntervalChangedOfBoxOkEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxListView.maxIntervalChanged" ];
	}
}


/*       S.D.G.       */
