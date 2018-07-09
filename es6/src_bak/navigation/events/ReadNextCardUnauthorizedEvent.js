import AbstractReadNextCardUnauthorizedEvent
    from "../../../gen/navigation/events/AbstractReadNextCardUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class ReadNextCardUnauthorizedEvent extends AbstractReadNextCardUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
