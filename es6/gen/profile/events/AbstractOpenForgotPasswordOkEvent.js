import Event from "../../../gen/ace/Event";

export default class AbstractOpenForgotPasswordOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.OpenForgotPasswordOkEvent');
    }
	getNotifiedListeners() {
	    return [ "profile.views.UserInfoView.renderForgotPassword" ];
	}
}


/*       S.D.G.       */
