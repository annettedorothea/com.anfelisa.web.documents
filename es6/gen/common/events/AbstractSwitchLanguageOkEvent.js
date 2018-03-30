import Event from "../../../gen/ace/Event";

export default class AbstractSwitchLanguageOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.SwitchLanguageOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage" ];
	}
}


/*       S.D.G.       */
