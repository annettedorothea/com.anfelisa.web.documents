import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractMaxIntervalChangedOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'box.MaxIntervalChangedOkEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.CreateBoxView.maxIntervalChanged" ];
	}
}


/*       S.D.G.       */
