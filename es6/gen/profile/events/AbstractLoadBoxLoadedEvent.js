import Event from "../../../gen/ace/Event";

export default class AbstractLoadBoxLoadedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.LoadBoxLoadedEvent');
    }
	getNotifiedListeners() {
	    return [ "profile.views.UserInfoView.renderBox" ];
	}
}


/*       S.D.G.       */
