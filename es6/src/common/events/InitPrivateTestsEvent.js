import AbstractInitPrivateTestsEvent from "../../../gen/common/events/AbstractInitPrivateTestsEvent";
import AppUtils from "../../app/AppUtils";

export default class InitPrivateTestsEvent extends AbstractInitPrivateTestsEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
