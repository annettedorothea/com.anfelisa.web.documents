import Event from "../../../gen/ace/Event";

export default class AbstractSubmitForgotPasswordRequestOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.SubmitForgotPasswordRequestOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.MessageView.renderMessage" ];
	}
}


/*       S.D.G.       */
