import Event from "../../../gen/ace/Event";

export default class AbstractInitPublicCoursesEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitPublicCoursesEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage", "navigation.views.ContentView.renderPublicCourses", "common.views.HeaderView.renderLogin", "navigation.views.BoxesView.hideBoxes" ];
	}
}


/*       S.D.G.       */
