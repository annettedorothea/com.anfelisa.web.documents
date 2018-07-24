import AbstractDeleteUserBadRequestEvent from "../../../gen/profile/events/AbstractDeleteUserBadRequestEvent";
import AppUtils from "../../app/AppUtils";

export default class DeleteUserBadRequestEvent extends AbstractDeleteUserBadRequestEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
