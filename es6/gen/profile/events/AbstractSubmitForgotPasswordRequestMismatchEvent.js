import Event from "../../../gen/ace/Event";

export default class AbstractSubmitForgotPasswordRequestMismatchEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.SubmitForgotPasswordRequestMismatchEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
