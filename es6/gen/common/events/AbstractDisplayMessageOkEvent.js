import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractDisplayMessageOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.DisplayMessageOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayMessage" ];
	}
}


/*       S.D.G.       */
