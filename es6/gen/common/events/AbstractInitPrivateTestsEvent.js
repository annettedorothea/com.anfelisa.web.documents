import Event from "../../../gen/ace/Event";

export default class AbstractInitPrivateTestsEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitPrivateTestsEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage", "common.views.CommonView.initUserInLocalStorage" ];
	}
}


/*       S.D.G.       */
