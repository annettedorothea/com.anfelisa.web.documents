import AbstractValidatePasswordOkEvent from "../../../gen/profile/events/AbstractValidatePasswordOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ValidatePasswordOkEvent extends AbstractValidatePasswordOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
