import Event from "../../../gen/ace/Event";

export default class AbstractCreateCategoryUnauthorizedEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'author.CreateCategoryUnauthorizedEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.CommonView.displayError" ];
	}
}


/*       S.D.G.       */
