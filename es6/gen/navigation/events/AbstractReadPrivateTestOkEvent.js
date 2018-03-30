import Event from "../../../gen/ace/Event";

export default class AbstractReadPrivateTestOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'navigation.ReadPrivateTestOkEvent');
    }
	getNotifiedListeners() {
	    return [ "navigation.views.NavigationView.renderPrivateTest", "navigation.views.ContentView.renderPrivateTest", "navigation.views.BreadcrumbsView.renderPrivateTestsBreadcrumbs" ];
	}
}


/*       S.D.G.       */
