import AbstractInitPublicTestsEvent from "../../../gen/common/events/AbstractInitPublicTestsEvent";
import AppUtils from "../../app/AppUtils";

export default class InitPublicTestsEvent extends AbstractInitPublicTestsEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
