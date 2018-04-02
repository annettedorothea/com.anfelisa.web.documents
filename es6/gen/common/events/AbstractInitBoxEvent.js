import Event from "../../../gen/ace/Event";

export default class AbstractInitBoxEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitBoxEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage", "common.views.CommonView.initUserInLocalStorage" ];
	}
}


/*       S.D.G.       */
