import AbstractOpenNewPasswordOkEvent from "../../../gen/profile/events/AbstractOpenNewPasswordOkEvent";
import AppUtils from "../../app/AppUtils";

export default class OpenNewPasswordOkEvent extends AbstractOpenNewPasswordOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
