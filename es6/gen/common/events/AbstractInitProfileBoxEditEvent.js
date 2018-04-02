import Event from "../../../gen/ace/Event";

export default class AbstractInitProfileBoxEditEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitProfileBoxEditEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage", "common.views.CommonView.initUserInLocalStorage" ];
	}
}


/*       S.D.G.       */
