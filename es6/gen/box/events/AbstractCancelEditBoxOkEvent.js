import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractCancelEditBoxOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.CancelEditBoxOkEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxListView.cancelEditBox" ];
	}
}


/*       S.D.G.       */
