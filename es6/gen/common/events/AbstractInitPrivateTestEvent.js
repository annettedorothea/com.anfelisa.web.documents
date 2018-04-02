import Event from "../../../gen/ace/Event";

export default class AbstractInitPrivateTestEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitPrivateTestEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage", "common.views.CommonView.initUserInLocalStorage" ];
	}
}


/*       S.D.G.       */
