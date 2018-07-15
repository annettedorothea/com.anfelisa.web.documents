import AbstractLoginSaveInLocalStorageEvent from "../../../gen/common/events/AbstractLoginSaveInLocalStorageEvent";
import AppUtils from "../../app/AppUtils";

export default class LoginSaveInLocalStorageEvent extends AbstractLoginSaveInLocalStorageEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
