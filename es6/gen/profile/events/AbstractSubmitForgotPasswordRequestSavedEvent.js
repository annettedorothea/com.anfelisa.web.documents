import Event from "../../../gen/ace/Event";

export default class AbstractSubmitForgotPasswordRequestSavedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.SubmitForgotPasswordRequestSavedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initUserInLocalStorage" ];
	}
}


/*       S.D.G.       */
