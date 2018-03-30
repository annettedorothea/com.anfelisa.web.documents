import Event from "../../../gen/ace/Event";

export default class AbstractSubmitNewPasswordOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.SubmitNewPasswordOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.MessageView.renderMessage" ];
	}
}


/*       S.D.G.       */
