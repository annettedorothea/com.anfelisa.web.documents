import AbstractInitPublicLessonsEvent from "../../../gen/common/events/AbstractInitPublicLessonsEvent";
import AppUtils from "../../app/AppUtils";

export default class InitPublicLessonsEvent extends AbstractInitPublicLessonsEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
