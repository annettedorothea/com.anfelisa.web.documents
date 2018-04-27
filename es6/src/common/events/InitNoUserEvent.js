import AbstractInitNoUserEvent from "../../../gen/common/events/AbstractInitNoUserEvent";
import AppUtils from "../../app/AppUtils";

export default class InitNoUserEvent extends AbstractInitNoUserEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
