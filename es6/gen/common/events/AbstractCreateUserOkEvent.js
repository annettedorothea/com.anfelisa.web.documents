import Event from "../../../gen/ace/Event";

export default class AbstractCreateUserOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.CreateUserOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initUser" ];
	}
}


/*       S.D.G.       */
