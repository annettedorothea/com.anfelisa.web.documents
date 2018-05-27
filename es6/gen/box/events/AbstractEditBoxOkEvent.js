import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractEditBoxOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.EditBoxOkEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxListView.editBox" ];
	}
}


/*       S.D.G.       */
