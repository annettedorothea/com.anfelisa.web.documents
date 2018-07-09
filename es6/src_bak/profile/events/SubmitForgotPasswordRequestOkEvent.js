import AbstractSubmitForgotPasswordRequestOkEvent
    from "../../../gen/profile/events/AbstractSubmitForgotPasswordRequestOkEvent";
import AppUtils from "../../app/AppUtils";

export default class SubmitForgotPasswordRequestOkEvent extends AbstractSubmitForgotPasswordRequestOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
