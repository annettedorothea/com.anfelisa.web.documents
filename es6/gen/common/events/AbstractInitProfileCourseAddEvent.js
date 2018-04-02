import Event from "../../../gen/ace/Event";

export default class AbstractInitProfileCourseAddEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitProfileCourseAddEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage", "common.views.CommonView.initUserInLocalStorage" ];
	}
}


/*       S.D.G.       */
