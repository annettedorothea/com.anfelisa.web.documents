import Event from "../../../gen/ace/Event";

export default class AbstractRenderHomeOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.RenderHomeOkEvent');
    }
	getNotifiedListeners() {
	    return [ "navigation.views.ContentView.renderPublicCourses" ];
	}
}


/*       S.D.G.       */
