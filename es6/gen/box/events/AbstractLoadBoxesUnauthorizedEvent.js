import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadBoxesUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'box.LoadBoxesUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
