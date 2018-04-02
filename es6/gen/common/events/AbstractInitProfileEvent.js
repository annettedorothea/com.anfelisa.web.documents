import Event from "../../../gen/ace/Event";

export default class AbstractInitProfileEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitProfileEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage", "common.views.CommonView.initUserInLocalStorage" ];
	}
}


/*       S.D.G.       */
