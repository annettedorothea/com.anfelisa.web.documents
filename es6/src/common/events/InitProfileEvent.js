import AbstractInitProfileEvent from "../../../gen/common/events/AbstractInitProfileEvent";
import AppUtils from "../../app/AppUtils";

export default class InitProfileEvent extends AbstractInitProfileEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
