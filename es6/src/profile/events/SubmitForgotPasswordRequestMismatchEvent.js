import AbstractSubmitForgotPasswordRequestMismatchEvent from "../../../gen/profile/events/AbstractSubmitForgotPasswordRequestMismatchEvent";
import AppUtils from "../../app/AppUtils";

export default class SubmitForgotPasswordRequestMismatchEvent extends AbstractSubmitForgotPasswordRequestMismatchEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
