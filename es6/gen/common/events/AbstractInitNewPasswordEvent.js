import Event from "../../../gen/ace/Event";

export default class AbstractInitNewPasswordEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitNewPasswordEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage" ];
	}
}


/*       S.D.G.       */
