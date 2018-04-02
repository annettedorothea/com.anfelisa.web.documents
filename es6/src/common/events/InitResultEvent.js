import AbstractInitResultEvent from "../../../gen/common/events/AbstractInitResultEvent";
import AppUtils from "../../app/AppUtils";

export default class InitResultEvent extends AbstractInitResultEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
