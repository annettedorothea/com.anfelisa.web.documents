import Event from "../../../gen/ace/Event";

export default class AbstractReadResultUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.ReadResultUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
