import AbstractInitBoxEvent from "../../../gen/common/events/AbstractInitBoxEvent";
import AppUtils from "../../app/AppUtils";

export default class InitBoxEvent extends AbstractInitBoxEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
