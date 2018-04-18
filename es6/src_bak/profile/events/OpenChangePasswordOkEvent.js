import AbstractOpenChangePasswordOkEvent from "../../../gen/profile/events/AbstractOpenChangePasswordOkEvent";
import AppUtils from "../../app/AppUtils";

export default class OpenChangePasswordOkEvent extends AbstractOpenChangePasswordOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
