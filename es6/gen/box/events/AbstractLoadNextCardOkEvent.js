import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadNextCardOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.LoadNextCardOkEvent');
    }
	getNotifiedListeners() {
	    return [ "box.views.BoxView.render" ];
	}
}


/*       S.D.G.       */
