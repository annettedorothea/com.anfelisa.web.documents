import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractResetPasswordOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.ResetPasswordOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayMessage" ];
	}
}


/*       S.D.G.       */
