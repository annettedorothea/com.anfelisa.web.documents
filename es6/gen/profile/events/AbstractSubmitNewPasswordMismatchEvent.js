import Event from "../../../gen/ace/Event";

export default class AbstractSubmitNewPasswordMismatchEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.SubmitNewPasswordMismatchEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
