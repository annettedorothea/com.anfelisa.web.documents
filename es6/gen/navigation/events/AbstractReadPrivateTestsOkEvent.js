import Event from "../../../gen/ace/Event";

export default class AbstractReadPrivateTestsOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.ReadPrivateTestsOkEvent');
    }
	getNotifiedListeners() {
	    return [ "navigation.views.NavigationView.renderPrivateTests", "navigation.views.ContentView.renderPrivateTests", "navigation.views.BreadcrumbsView.renderPrivateTestsBreadcrumbs" ];
	}
}


/*       S.D.G.       */
