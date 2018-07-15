import AbstractLoginDoNotSaveInLocalStorageEvent from "../../../gen/common/events/AbstractLoginDoNotSaveInLocalStorageEvent";
import AppUtils from "../../app/AppUtils";

export default class LoginDoNotSaveInLocalStorageEvent extends AbstractLoginDoNotSaveInLocalStorageEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
