import AbstractSaveBoxDataInvalidEvent from "../../../gen/profile/events/AbstractSaveBoxDataInvalidEvent";
import AppUtils from "../../app/AppUtils";

export default class SaveBoxDataInvalidEvent extends AbstractSaveBoxDataInvalidEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
