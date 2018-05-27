import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractUpdateBoxUnauthorizedEvent extends Event {
    constructor(eventData) {
        super(eventData, 'box.UpdateBoxUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
