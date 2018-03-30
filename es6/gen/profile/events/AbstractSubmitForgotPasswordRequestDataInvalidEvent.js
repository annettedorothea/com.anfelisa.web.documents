import Event from "../../../gen/ace/Event";

export default class AbstractSubmitForgotPasswordRequestDataInvalidEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.SubmitForgotPasswordRequestDataInvalidEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
