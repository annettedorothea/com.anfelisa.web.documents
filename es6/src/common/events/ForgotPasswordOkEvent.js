import AbstractForgotPasswordOkEvent from "../../../gen/common/events/AbstractForgotPasswordOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ForgotPasswordOkEvent extends AbstractForgotPasswordOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
