import Event from "../../../gen/ace/Event";

export default class AbstractRegisterUserOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.RegisterUserOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initUser" ];
	}
}


/*       S.D.G.       */
