import AbstractUpdatePasswordSavedEvent from "../../../gen/profile/events/AbstractUpdatePasswordSavedEvent";
import AppUtils from "../../app/AppUtils";

export default class UpdatePasswordSavedEvent extends AbstractUpdatePasswordSavedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
