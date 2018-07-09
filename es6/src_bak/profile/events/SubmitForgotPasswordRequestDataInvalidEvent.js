import AbstractSubmitForgotPasswordRequestDataInvalidEvent
    from "../../../gen/profile/events/AbstractSubmitForgotPasswordRequestDataInvalidEvent";
import AppUtils from "../../app/AppUtils";

export default class SubmitForgotPasswordRequestDataInvalidEvent extends AbstractSubmitForgotPasswordRequestDataInvalidEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
