import AbstractUpdateBoxUnauthorizedEvent from "../../../gen/box/events/AbstractUpdateBoxUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class UpdateBoxUnauthorizedEvent extends AbstractUpdateBoxUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
