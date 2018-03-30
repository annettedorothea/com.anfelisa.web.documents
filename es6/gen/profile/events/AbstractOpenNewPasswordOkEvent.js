import Event from "../../../gen/ace/Event";

export default class AbstractOpenNewPasswordOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.OpenNewPasswordOkEvent');
    }
	getNotifiedListeners() {
	    return [ "profile.views.UserInfoView.renderNewPassword" ];
	}
}


/*       S.D.G.       */
