import Event from "../../../gen/ace/Event";

export default class AbstractReadStatisticsUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.ReadStatisticsUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
