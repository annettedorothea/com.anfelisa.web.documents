import Event from "../../../gen/ace/Event";

export default class AbstractInitNewPasswordEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitNewPasswordEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage", "common.views.HeaderView.renderLogin", "navigation.views.BoxesView.hideBoxes" ];
	}
}


/*       S.D.G.       */
