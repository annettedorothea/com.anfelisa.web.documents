import Event from "../../../gen/ace/Event";

export default class AbstractLoadBoxErrorEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.LoadBoxErrorEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
