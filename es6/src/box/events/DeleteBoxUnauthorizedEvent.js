import AbstractDeleteBoxUnauthorizedEvent from "../../../gen/box/events/AbstractDeleteBoxUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class DeleteBoxUnauthorizedEvent extends AbstractDeleteBoxUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
