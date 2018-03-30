import Event from "../../../gen/ace/Event";

export default class AbstractReadPublicLessonsOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.ReadPublicLessonsOkEvent');
    }
	getNotifiedListeners() {
	    return [ "navigation.views.NavigationView.renderPublicLessons", "navigation.views.ContentView.renderPublicLessons", "navigation.views.BreadcrumbsView.renderPublicLessonsBreadcrumbs" ];
	}
}


/*       S.D.G.       */
