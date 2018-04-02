import AbstractInitReinforceEvent from "../../../gen/common/events/AbstractInitReinforceEvent";
import AppUtils from "../../app/AppUtils";

export default class InitReinforceEvent extends AbstractInitReinforceEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
