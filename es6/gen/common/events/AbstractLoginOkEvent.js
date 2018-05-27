import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoginOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.LoginOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initUser" ];
	}
}


/*       S.D.G.       */
