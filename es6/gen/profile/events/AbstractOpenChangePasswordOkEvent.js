import Event from "../../../gen/ace/Event";

export default class AbstractOpenChangePasswordOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.OpenChangePasswordOkEvent');
    }
	getNotifiedListeners() {
	    return [ "profile.views.UserInfoView.renderPasswordChange" ];
	}
}


/*       S.D.G.       */
