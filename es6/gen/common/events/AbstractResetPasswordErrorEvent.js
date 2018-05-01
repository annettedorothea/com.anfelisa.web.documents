import Event from "../../../gen/ace/Event";

export default class AbstractResetPasswordErrorEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.ResetPasswordErrorEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
