import AbstractCreateUserErrorEvent from "../../../gen/common/events/AbstractCreateUserErrorEvent";
import AppUtils from "../../app/AppUtils";

export default class CreateUserErrorEvent extends AbstractCreateUserErrorEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
