import AbstractConfirmEmailSavedEvent from "../../../gen/profile/events/AbstractConfirmEmailSavedEvent";
import AppUtils from "../../app/AppUtils";

export default class ConfirmEmailSavedEvent extends AbstractConfirmEmailSavedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
