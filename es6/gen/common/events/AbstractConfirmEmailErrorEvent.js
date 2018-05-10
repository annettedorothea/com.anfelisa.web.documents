import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractConfirmEmailErrorEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.ConfirmEmailErrorEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
