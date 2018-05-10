import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractForgotPasswordOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.ForgotPasswordOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayMessage" ];
	}
}


/*       S.D.G.       */
