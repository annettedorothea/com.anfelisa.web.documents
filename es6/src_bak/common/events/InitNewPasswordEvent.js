import AbstractInitNewPasswordEvent from "../../../gen/common/events/AbstractInitNewPasswordEvent";
import AppUtils from "../../app/AppUtils";

export default class InitNewPasswordEvent extends AbstractInitNewPasswordEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
