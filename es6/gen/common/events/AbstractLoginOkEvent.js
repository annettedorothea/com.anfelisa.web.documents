import Event from "../../../gen/ace/Event";

export default class AbstractLoginOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.LoginOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initUser" ];
	}
}


/*       S.D.G.       */
