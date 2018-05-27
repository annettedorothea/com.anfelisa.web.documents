import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractCancelDeleteBoxOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.CancelDeleteBoxOkEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxListView.hideConfirmDelete" ];
	}
}


/*       S.D.G.       */
