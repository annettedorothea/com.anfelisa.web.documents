import Event from "../../../gen/ace/Event";

export default class AbstractLoadCoursesErrorEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'profile.LoadCoursesErrorEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ErrorView.renderError" ];
	}
}


/*       S.D.G.       */
