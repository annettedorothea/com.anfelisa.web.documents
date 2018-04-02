import Event from "../../../gen/ace/Event";

export default class AbstractInitProfilePasswordEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitProfilePasswordEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage", "common.views.CommonView.initUserInLocalStorage" ];
	}
}


/*       S.D.G.       */
