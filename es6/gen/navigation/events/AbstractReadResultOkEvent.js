import Event from "../../../gen/ace/Event";

export default class AbstractReadResultOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.ReadResultOkEvent');
    }
	getNotifiedListeners() {
	    return [ "navigation.views.NavigationView.renderPrivateTest", "navigation.views.ContentView.renderPrivateTest", "navigation.views.BreadcrumbsView.renderPrivateTestsBreadcrumbs", "navigation.views.ContentView.renderResult" ];
	}
}


/*       S.D.G.       */
