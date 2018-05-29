import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoginSaveInLocalStorageEvent extends Event {
    constructor(eventData) {
        super(eventData, 'common.LoginSaveInLocalStorageEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.initUser", "common.views.CommonView.saveInLocalStorage" ];
	}
}


/*       S.D.G.       */
