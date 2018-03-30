import AbstractReadPrivateCoursesOkEvent from "../../../gen/navigation/events/AbstractReadPrivateCoursesOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ReadPrivateCoursesOkEvent extends AbstractReadPrivateCoursesOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
