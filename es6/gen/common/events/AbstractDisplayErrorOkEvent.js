import Event from "../../../gen/ace/SynchronousEvent";

export default class AbstractDisplayErrorOkEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.DisplayErrorOkEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
