import Event from "../../../gen/ace/Event";

export default class AbstractReadStatisticsOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.ReadStatisticsOkEvent');
    }
	getNotifiedListeners() {
	    return [ "navigation.views.ContentView.renderStatistics" ];
	}
}


/*       S.D.G.       */
