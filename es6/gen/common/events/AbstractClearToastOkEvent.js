import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractClearToastOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.ClearToastOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.clearToast" ];
	}
}


/*       S.D.G.       */
