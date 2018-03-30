import Event from "../../../gen/ace/Event";

export default class AbstractReadPrivateLessonsOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.ReadPrivateLessonsOkEvent');
    }
	getNotifiedListeners() {
	    return [ "navigation.views.NavigationView.renderPrivateLessons", "navigation.views.ContentView.renderPrivateLessons", "navigation.views.BreadcrumbsView.renderPrivateLessonsBreadcrumbs" ];
	}
}


/*       S.D.G.       */
