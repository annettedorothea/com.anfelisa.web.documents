import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractInitialLoginOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.InitialLoginOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initUser" ];
	}
}


/*       S.D.G.       */
