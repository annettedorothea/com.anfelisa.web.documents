import Event from "../../../gen/ace/Event";

export default class AbstractReadPublicTestOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.ReadPublicTestOkEvent');
    }
	getNotifiedListeners() {
	    return [ "navigation.views.NavigationView.renderPublicTest", "navigation.views.ContentView.renderPublicTest", "navigation.views.BreadcrumbsView.renderPublicTestsBreadcrumbs" ];
	}
}


/*       S.D.G.       */
