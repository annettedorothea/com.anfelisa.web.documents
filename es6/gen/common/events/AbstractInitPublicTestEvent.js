import Event from "../../../gen/ace/Event";

export default class AbstractInitPublicTestEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitPublicTestEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage" ];
	}
}


/*       S.D.G.       */
