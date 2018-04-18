import Event from "../../../gen/ace/Event";

export default class AbstractInitDashboardEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitDashboardEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initTexts", "common.views.CommonView.initUser" ];
	}
}


/*       S.D.G.       */
