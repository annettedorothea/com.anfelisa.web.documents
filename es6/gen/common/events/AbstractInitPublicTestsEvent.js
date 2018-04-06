import Event from "../../../gen/ace/Event";

export default class AbstractInitPublicTestsEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitPublicTestsEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initLanguageInLocalStorage", "common.views.HeaderView.renderLogin", "navigation.views.BoxesView.hideBoxes" ];
	}
}


/*       S.D.G.       */
