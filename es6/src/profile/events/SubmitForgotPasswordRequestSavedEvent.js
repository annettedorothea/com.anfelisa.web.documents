import AbstractSubmitForgotPasswordRequestSavedEvent from "../../../gen/profile/events/AbstractSubmitForgotPasswordRequestSavedEvent";
import AppUtils from "../../app/AppUtils";

export default class SubmitForgotPasswordRequestSavedEvent extends AbstractSubmitForgotPasswordRequestSavedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
