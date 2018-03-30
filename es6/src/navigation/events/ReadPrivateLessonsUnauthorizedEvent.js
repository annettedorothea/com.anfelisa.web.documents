import AbstractReadPrivateLessonsUnauthorizedEvent from "../../../gen/navigation/events/AbstractReadPrivateLessonsUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class ReadPrivateLessonsUnauthorizedEvent extends AbstractReadPrivateLessonsUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
