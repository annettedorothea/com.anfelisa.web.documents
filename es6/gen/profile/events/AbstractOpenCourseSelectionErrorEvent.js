import Event from "../../../gen/ace/Event";

export default class AbstractOpenCourseSelectionErrorEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.OpenCourseSelectionErrorEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
