import AbstractInitForgotPasswordEvent from "../../../gen/common/events/AbstractInitForgotPasswordEvent";
import AppUtils from "../../app/AppUtils";

export default class InitForgotPasswordEvent extends AbstractInitForgotPasswordEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
