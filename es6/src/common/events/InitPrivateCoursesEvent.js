import AbstractInitPrivateCoursesEvent from "../../../gen/common/events/AbstractInitPrivateCoursesEvent";
import AppUtils from "../../app/AppUtils";

export default class InitPrivateCoursesEvent extends AbstractInitPrivateCoursesEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
