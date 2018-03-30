import AbstractReadStatisticsOkEvent from "../../../gen/navigation/events/AbstractReadStatisticsOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ReadStatisticsOkEvent extends AbstractReadStatisticsOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
