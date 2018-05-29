import AbstractLoginSaveInLocalstorageEvent from "../../../gen/common/events/AbstractLoginSaveInLocalstorageEvent";
import AppUtils from "../../app/AppUtils";

export default class LoginSaveInLocalstorageEvent extends AbstractLoginSaveInLocalstorageEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
