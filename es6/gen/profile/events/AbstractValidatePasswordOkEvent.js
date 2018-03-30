import Event from "../../../gen/ace/Event";

export default class AbstractValidatePasswordOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.ValidatePasswordOkEvent');
    }
	getNotifiedListeners() {
	    return [ "profile.views.UserInfoView.passwordOK" ];
	}
}


/*       S.D.G.       */
