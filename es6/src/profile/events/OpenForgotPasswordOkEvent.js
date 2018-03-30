import AbstractOpenForgotPasswordOkEvent from "../../../gen/profile/events/AbstractOpenForgotPasswordOkEvent";
import AppUtils from "../../app/AppUtils";

export default class OpenForgotPasswordOkEvent extends AbstractOpenForgotPasswordOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
