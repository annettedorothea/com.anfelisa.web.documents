import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractResetPasswordErrorEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.ResetPasswordErrorEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
