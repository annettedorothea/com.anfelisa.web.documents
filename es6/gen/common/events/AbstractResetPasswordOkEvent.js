import Event from "../../../gen/ace/Event";

export default class AbstractResetPasswordOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.ResetPasswordOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayMessage" ];
	}
}


/*       S.D.G.       */
