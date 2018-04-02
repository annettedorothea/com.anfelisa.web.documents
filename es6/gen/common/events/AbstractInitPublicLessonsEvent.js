import Event from "../../../gen/ace/Event";

export default class AbstractInitPublicLessonsEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitPublicLessonsEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage" ];
	}
}


/*       S.D.G.       */
