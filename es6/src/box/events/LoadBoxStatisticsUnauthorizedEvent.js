import AbstractLoadBoxStatisticsUnauthorizedEvent from "../../../gen/box/events/AbstractLoadBoxStatisticsUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadBoxStatisticsUnauthorizedEvent extends AbstractLoadBoxStatisticsUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
