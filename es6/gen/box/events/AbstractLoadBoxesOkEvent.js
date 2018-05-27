import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadBoxesOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.LoadBoxesOkEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxListView.render" ];
	}
}


/*       S.D.G.       */
