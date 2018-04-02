import Event from "../../../gen/ace/Event";

export default class AbstractInitPrivateLessonsEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitPrivateLessonsEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage", "common.views.CommonView.initUserInLocalStorage" ];
	}
}


/*       S.D.G.       */
