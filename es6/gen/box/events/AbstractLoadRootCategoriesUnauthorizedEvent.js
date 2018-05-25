import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadRootCategoriesUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'box.LoadRootCategoriesUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
