import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractConfirmEmailErrorEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.ConfirmEmailErrorEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
