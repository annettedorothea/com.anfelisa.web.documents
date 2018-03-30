import Event from "../../../gen/ace/Event";

export default class AbstractValidatePasswordMismatchEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.ValidatePasswordMismatchEvent');
    }
	getNotifiedListeners() {
	    return [ "profile.views.UserInfoView.passwordMismatch" ];
	}
}


/*       S.D.G.       */
