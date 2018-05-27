import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractEditBoxOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'box.EditBoxOkEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxListView.editBox" ];
	}
}


/*       S.D.G.       */
