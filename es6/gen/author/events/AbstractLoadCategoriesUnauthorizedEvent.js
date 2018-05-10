import Event from "../../../gen/ace/AsynchronousEvent";

export default class AbstractLoadCategoriesUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.LoadCategoriesUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
