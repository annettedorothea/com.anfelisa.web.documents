import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractToggleMaxIntervalOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.ToggleMaxIntervalOkEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.CreateBoxView.toggleMaxInterval" ];
	}
}


/*       S.D.G.       */
