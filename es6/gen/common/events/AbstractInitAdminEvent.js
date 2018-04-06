import Event from "../../../gen/ace/Event";

export default class AbstractInitAdminEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitAdminEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage", "common.views.CommonView.initUserInLocalStorage" ];
	}
}


/*       S.D.G.       */
