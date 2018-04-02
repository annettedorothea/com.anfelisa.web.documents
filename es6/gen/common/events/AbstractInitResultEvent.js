import Event from "../../../gen/ace/Event";

export default class AbstractInitResultEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitResultEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage", "common.views.CommonView.initUserInLocalStorage" ];
	}
}


/*       S.D.G.       */
