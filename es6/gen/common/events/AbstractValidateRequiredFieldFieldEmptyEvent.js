import Event from "../../../gen/ace/Event";

export default class AbstractValidateRequiredFieldFieldEmptyEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.ValidateRequiredFieldFieldEmptyEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ValidationView.fieldEmpty" ];
	}
}


/*       S.D.G.       */
