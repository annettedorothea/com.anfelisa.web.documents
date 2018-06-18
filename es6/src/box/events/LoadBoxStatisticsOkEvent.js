import AbstractLoadBoxStatisticsOkEvent from "../../../gen/box/events/AbstractLoadBoxStatisticsOkEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadBoxStatisticsOkEvent extends AbstractLoadBoxStatisticsOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
