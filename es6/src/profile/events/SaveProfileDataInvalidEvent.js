import AbstractSaveProfileDataInvalidEvent from "../../../gen/profile/events/AbstractSaveProfileDataInvalidEvent";
import AppUtils from "../../app/AppUtils";

export default class SaveProfileDataInvalidEvent extends AbstractSaveProfileDataInvalidEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
