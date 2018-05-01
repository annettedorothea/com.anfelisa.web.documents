import AbstractRegisterUserErrorEvent from "../../../gen/common/events/AbstractRegisterUserErrorEvent";
import AppUtils from "../../app/AppUtils";

export default class RegisterUserErrorEvent extends AbstractRegisterUserErrorEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
