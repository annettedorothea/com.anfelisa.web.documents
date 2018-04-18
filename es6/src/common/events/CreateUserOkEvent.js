import AbstractCreateUserOkEvent from "../../../gen/common/events/AbstractCreateUserOkEvent";
import AppUtils from "../../app/AppUtils";

export default class CreateUserOkEvent extends AbstractCreateUserOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
