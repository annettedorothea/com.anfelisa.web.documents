import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractCancelDeleteCategoryOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'box.CancelDeleteCategoryOkEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxListView.hideConfirmDelete" ];
	}
}


/*       S.D.G.       */
