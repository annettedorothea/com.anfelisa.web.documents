import AbstractInitRegisterEvent from "../../../gen/common/events/AbstractInitRegisterEvent";
import AppUtils from "../../app/AppUtils";

export default class InitRegisterEvent extends AbstractInitRegisterEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
