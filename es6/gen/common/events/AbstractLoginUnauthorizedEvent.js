import Event from "../../../gen/ace/Event";

export default class AbstractLoginUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.LoginUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
