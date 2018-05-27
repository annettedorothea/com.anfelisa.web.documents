import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractDisplayErrorOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.DisplayErrorOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
