import Event from "../../../gen/ace/Event";

export default class AbstractLoadCoursesLoadedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.LoadCoursesLoadedEvent');
    }
	getNotifiedListeners() {
	    return [ "profile.views.UserInfoView.renderCourseToBox" ];
	}
}


/*       S.D.G.       */
