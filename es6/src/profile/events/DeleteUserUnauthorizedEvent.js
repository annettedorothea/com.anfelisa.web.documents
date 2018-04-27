import AbstractDeleteUserUnauthorizedEvent from "../../../gen/profile/events/AbstractDeleteUserUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class DeleteUserUnauthorizedEvent extends AbstractDeleteUserUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
