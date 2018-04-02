import AbstractInitPrivateLessonsEvent from "../../../gen/common/events/AbstractInitPrivateLessonsEvent";
import AppUtils from "../../app/AppUtils";

export default class InitPrivateLessonsEvent extends AbstractInitPrivateLessonsEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
