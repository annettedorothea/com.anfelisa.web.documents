import Event from "../../../gen/ace/Event";

export default class AbstractValidatePasswordEmptyEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.ValidatePasswordEmptyEvent');
    }
	getNotifiedListeners() {
	    return [ "profile.views.UserInfoView.passwordEmpty" ];
	}
}


/*       S.D.G.       */
