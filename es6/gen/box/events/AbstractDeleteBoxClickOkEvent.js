import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractDeleteBoxClickOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.DeleteBoxClickOkEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxListView.displayConfirmDelete" ];
	}
}


/*       S.D.G.       */
