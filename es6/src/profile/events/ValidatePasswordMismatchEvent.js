import AbstractValidatePasswordMismatchEvent from "../../../gen/profile/events/AbstractValidatePasswordMismatchEvent";
import AppUtils from "../../app/AppUtils";

export default class ValidatePasswordMismatchEvent extends AbstractValidatePasswordMismatchEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
