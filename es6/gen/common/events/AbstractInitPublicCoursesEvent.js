import Event from "../../../gen/ace/Event";

export default class AbstractInitPublicCoursesEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitPublicCoursesEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage" ];
	}
}


/*       S.D.G.       */
