import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoginDoNotSaveInLocalStorageEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.LoginDoNotSaveInLocalStorageEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initUser" ];
	}
}


/*       S.D.G.       */
