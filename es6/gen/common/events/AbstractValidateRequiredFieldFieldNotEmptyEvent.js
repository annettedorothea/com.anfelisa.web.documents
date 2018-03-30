import Event from "../../../gen/ace/Event";

export default class AbstractValidateRequiredFieldFieldNotEmptyEvent extends Event {
    constructor(eventParam) {
        super(eventParam, 'common.ValidateRequiredFieldFieldNotEmptyEvent');
    }
	getNotifiedListeners() {
	    return [ "common.views.ValidationView.fieldNotEmpty" ];
	}
}


/*       S.D.G.       */
