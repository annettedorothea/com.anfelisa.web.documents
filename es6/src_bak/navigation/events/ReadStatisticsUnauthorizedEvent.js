import AbstractReadStatisticsUnauthorizedEvent
    from "../../../gen/navigation/events/AbstractReadStatisticsUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class ReadStatisticsUnauthorizedEvent extends AbstractReadStatisticsUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
