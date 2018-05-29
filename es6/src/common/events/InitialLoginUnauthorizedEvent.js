import AbstractInitialLoginUnauthorizedEvent from "../../../gen/common/events/AbstractInitialLoginUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class InitialLoginUnauthorizedEvent extends AbstractInitialLoginUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
