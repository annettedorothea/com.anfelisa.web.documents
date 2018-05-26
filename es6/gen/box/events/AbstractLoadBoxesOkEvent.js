import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadBoxesOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'box.LoadBoxesOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.DashboardView.render" ];
	}
}


/*       S.D.G.       */
