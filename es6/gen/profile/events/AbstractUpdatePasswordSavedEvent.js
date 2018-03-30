import Event from "../../../gen/ace/Event";

export default class AbstractUpdatePasswordSavedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.UpdatePasswordSavedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initUserInLocalStorage" ];
	}
}


/*       S.D.G.       */
