import AbstractLoadBoxesUnauthorizedEvent from "../../../gen/box/events/AbstractLoadBoxesUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadBoxesUnauthorizedEvent extends AbstractLoadBoxesUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
