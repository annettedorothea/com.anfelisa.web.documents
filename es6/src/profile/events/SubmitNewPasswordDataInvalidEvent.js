import AbstractSubmitNewPasswordDataInvalidEvent from "../../../gen/profile/events/AbstractSubmitNewPasswordDataInvalidEvent";
import AppUtils from "../../app/AppUtils";

export default class SubmitNewPasswordDataInvalidEvent extends AbstractSubmitNewPasswordDataInvalidEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
