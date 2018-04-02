import Event from "../../../gen/ace/Event";

export default class AbstractInitProfileCoursesEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitProfileCoursesEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage", "common.views.CommonView.initUserInLocalStorage" ];
	}
}


/*       S.D.G.       */
