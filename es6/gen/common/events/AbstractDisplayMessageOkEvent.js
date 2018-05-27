import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractDisplayMessageOkEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.DisplayMessageOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayMessage" ];
	}
}


/*       S.D.G.       */
