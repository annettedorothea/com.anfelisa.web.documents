import AbstractSubmitNewPasswordSavedEvent from "../../../gen/profile/events/AbstractSubmitNewPasswordSavedEvent";
import AppUtils from "../../app/AppUtils";

export default class SubmitNewPasswordSavedEvent extends AbstractSubmitNewPasswordSavedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
