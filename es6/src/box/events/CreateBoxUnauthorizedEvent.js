import AbstractCreateBoxUnauthorizedEvent from "../../../gen/box/events/AbstractCreateBoxUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class CreateBoxUnauthorizedEvent extends AbstractCreateBoxUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
