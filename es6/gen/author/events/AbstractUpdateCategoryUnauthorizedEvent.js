import Event from "../../../gen/ace/Event";

export default class AbstractUpdateCategoryUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.UpdateCategoryUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
