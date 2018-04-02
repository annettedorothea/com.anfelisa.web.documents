import AbstractInitPublicTestEvent from "../../../gen/common/events/AbstractInitPublicTestEvent";
import AppUtils from "../../app/AppUtils";

export default class InitPublicTestEvent extends AbstractInitPublicTestEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
