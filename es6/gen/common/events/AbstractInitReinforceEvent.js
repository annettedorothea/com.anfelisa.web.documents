import Event from "../../../gen/ace/Event";

export default class AbstractInitReinforceEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitReinforceEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage", "common.views.CommonView.initUserInLocalStorage" ];
	}
}


/*       S.D.G.       */
