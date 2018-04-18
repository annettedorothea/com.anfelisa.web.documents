import AbstractSubmitNewPasswordMismatchEvent from "../../../gen/profile/events/AbstractSubmitNewPasswordMismatchEvent";
import AppUtils from "../../app/AppUtils";

export default class SubmitNewPasswordMismatchEvent extends AbstractSubmitNewPasswordMismatchEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
