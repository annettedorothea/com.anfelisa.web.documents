import Event from "../../../gen/ace/Event";

export default class AbstractOpenProfileUserInfoReadEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.OpenProfileUserInfoReadEvent');
    }
	getNotifiedListeners() {
	    return [ "profile.views.UserInfoView.renderUserInfo" ];
	}
}


/*       S.D.G.       */
