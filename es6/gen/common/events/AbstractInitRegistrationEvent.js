import Event from "../../../gen/ace/Event";

export default class AbstractInitRegistrationEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.InitRegistrationEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initTexts", "common.views.RegistrationView.render" ];
	}
}


/*       S.D.G.       */
