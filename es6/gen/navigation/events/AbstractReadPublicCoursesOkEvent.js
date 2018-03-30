import Event from "../../../gen/ace/Event";

export default class AbstractReadPublicCoursesOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.ReadPublicCoursesOkEvent');
    }
	getNotifiedListeners() {
	    return [ "navigation.views.NavigationView.renderPublicCourses", "navigation.views.BreadcrumbsView.renderPublicCoursesBreadcrumbs" ];
	}
}


/*       S.D.G.       */
