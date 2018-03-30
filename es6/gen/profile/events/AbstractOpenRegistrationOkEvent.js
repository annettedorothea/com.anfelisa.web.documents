import Event from "../../../gen/ace/Event";

export default class AbstractOpenRegistrationOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.OpenRegistrationOkEvent');
    }
	getNotifiedListeners() {
	    return [ "profile.views.UserInfoView.renderRegistration" ];
	}
}


/*       S.D.G.       */
