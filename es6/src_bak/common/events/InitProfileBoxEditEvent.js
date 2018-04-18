import AbstractInitProfileBoxEditEvent from "../../../gen/common/events/AbstractInitProfileBoxEditEvent";
import AppUtils from "../../app/AppUtils";

export default class InitProfileBoxEditEvent extends AbstractInitProfileBoxEditEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
