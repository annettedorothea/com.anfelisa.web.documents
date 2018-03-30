import Event from "../../../gen/ace/Event";

export default class AbstractReadPrivateCoursesOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.ReadPrivateCoursesOkEvent');
    }
	getNotifiedListeners() {
	    return [ "navigation.views.NavigationView.renderPrivateCourses", "navigation.views.BreadcrumbsView.renderPrivateCoursesBreadcrumbs" ];
	}
}


/*       S.D.G.       */
