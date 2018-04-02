import Event from "../../../gen/ace/Event";

export default class AbstractInitProfileBoxCreateEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitProfileBoxCreateEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage", "common.views.CommonView.initUserInLocalStorage" ];
	}
}


/*       S.D.G.       */
