import Event from "../../../gen/ace/Event";

export default class AbstractCheckUsernameEmptyEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.CheckUsernameEmptyEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ValidationView.fieldEmpty" ];
	}
}


/*       S.D.G.       */
