import AbstractInitProfileBoxCreateEvent from "../../../gen/common/events/AbstractInitProfileBoxCreateEvent";
import AppUtils from "../../app/AppUtils";

export default class InitProfileBoxCreateEvent extends AbstractInitProfileBoxCreateEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
