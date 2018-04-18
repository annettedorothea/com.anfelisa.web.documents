import Event from "../../../gen/ace/Event";

export default class AbstractInitLoginEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitLoginEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initTexts", "common.views.LoginView.render" ];
	}
}


/*       S.D.G.       */
