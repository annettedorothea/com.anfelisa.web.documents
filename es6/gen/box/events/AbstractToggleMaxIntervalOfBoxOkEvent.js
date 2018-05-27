import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractToggleMaxIntervalOfBoxOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.ToggleMaxIntervalOfBoxOkEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxListView.toggleMaxInterval" ];
	}
}


/*       S.D.G.       */
