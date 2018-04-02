import Event from "../../../gen/ace/Event";

export default class AbstractInitPrivateCoursesEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitPrivateCoursesEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage", "common.views.CommonView.initUserInLocalStorage" ];
	}
}


/*       S.D.G.       */
