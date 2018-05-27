import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractCancelEditBoxOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'box.CancelEditBoxOkEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxListView.cancelEditBox" ];
	}
}


/*       S.D.G.       */
