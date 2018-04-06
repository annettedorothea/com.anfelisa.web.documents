import Event from "../../../gen/ace/Event";

export default class AbstractInitRegisterEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitRegisterEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage", "common.views.HeaderView.renderLogin", "navigation.views.BoxesView.hideBoxes" ];
	}
}


/*       S.D.G.       */
