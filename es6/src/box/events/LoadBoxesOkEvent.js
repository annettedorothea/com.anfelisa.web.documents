import AbstractLoadBoxesOkEvent from "../../../gen/box/events/AbstractLoadBoxesOkEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadBoxesOkEvent extends AbstractLoadBoxesOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
