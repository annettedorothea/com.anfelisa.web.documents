import AbstractRegisterUserOkEvent from "../../../gen/common/events/AbstractRegisterUserOkEvent";
import AppUtils from "../../app/AppUtils";

export default class RegisterUserOkEvent extends AbstractRegisterUserOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
