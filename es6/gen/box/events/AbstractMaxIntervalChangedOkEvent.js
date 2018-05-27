import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractMaxIntervalChangedOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.MaxIntervalChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.CreateBoxView.maxIntervalChanged" ];
	}
}


/*       S.D.G.       */
