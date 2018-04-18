import AbstractValidatePasswordEmptyEvent from "../../../gen/profile/events/AbstractValidatePasswordEmptyEvent";
import AppUtils from "../../app/AppUtils";

export default class ValidatePasswordEmptyEvent extends AbstractValidatePasswordEmptyEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
