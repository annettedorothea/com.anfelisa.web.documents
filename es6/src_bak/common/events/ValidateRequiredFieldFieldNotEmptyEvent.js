import AbstractValidateRequiredFieldFieldNotEmptyEvent
    from "../../../gen/common/events/AbstractValidateRequiredFieldFieldNotEmptyEvent";
import AppUtils from "../../app/AppUtils";

export default class ValidateRequiredFieldFieldNotEmptyEvent extends AbstractValidateRequiredFieldFieldNotEmptyEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
