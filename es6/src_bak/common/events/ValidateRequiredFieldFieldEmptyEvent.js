import AbstractValidateRequiredFieldFieldEmptyEvent
    from "../../../gen/common/events/AbstractValidateRequiredFieldFieldEmptyEvent";
import AppUtils from "../../app/AppUtils";

export default class ValidateRequiredFieldFieldEmptyEvent extends AbstractValidateRequiredFieldFieldEmptyEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
