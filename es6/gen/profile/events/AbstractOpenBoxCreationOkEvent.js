import Event from "../../../gen/ace/Event";

export default class AbstractOpenBoxCreationOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.OpenBoxCreationOkEvent');
    }
	getNotifiedListeners() {
	    return [ "profile.views.UserInfoView.renderBox" ];
	}
}


/*       S.D.G.       */
