import Event from "../../../gen/ace/Event";

export default class AbstractInitRegisterEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitRegisterEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage" ];
	}
}


/*       S.D.G.       */
