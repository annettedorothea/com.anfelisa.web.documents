import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractDeleteBoxClickOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'box.DeleteBoxClickOkEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxListView.displayConfirmDelete" ];
	}
}


/*       S.D.G.       */
