import Event from "../../../gen/ace/Event";

export default class AbstractOpenCourseSelectionCoursesReadEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.OpenCourseSelectionCoursesReadEvent');
    }
	getNotifiedListeners() {
	    return [ "profile.views.UserInfoView.renderCourseSelection" ];
	}
}


/*       S.D.G.       */
