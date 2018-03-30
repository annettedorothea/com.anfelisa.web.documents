import AbstractSubmitNewPasswordOkEvent from "../../../gen/profile/events/AbstractSubmitNewPasswordOkEvent";
import AppUtils from "../../app/AppUtils";

export default class SubmitNewPasswordOkEvent extends AbstractSubmitNewPasswordOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
