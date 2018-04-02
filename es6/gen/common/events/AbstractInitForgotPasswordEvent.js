import Event from "../../../gen/ace/Event";

export default class AbstractInitForgotPasswordEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitForgotPasswordEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage" ];
	}
}


/*       S.D.G.       */
