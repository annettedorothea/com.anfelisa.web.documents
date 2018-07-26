import AbstractToggleSaveInLocalStorageOkEvent from "../../../gen/common/events/AbstractToggleSaveInLocalStorageOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ToggleSaveInLocalStorageOkEvent extends AbstractToggleSaveInLocalStorageOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
