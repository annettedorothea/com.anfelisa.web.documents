import Event from "../../../gen/ace/Event";

export default class AbstractReadPublicTestsOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.ReadPublicTestsOkEvent');
    }
	getNotifiedListeners() {
	    return [ "navigation.views.NavigationView.renderPublicTests", "navigation.views.ContentView.renderPublicTests", "navigation.views.BreadcrumbsView.renderPublicTestsBreadcrumbs" ];
	}
}


/*       S.D.G.       */
