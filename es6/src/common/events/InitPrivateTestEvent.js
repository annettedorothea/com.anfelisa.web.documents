import AbstractInitPrivateTestEvent from "../../../gen/common/events/AbstractInitPrivateTestEvent";
import AppUtils from "../../app/AppUtils";

export default class InitPrivateTestEvent extends AbstractInitPrivateTestEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
