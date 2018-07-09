import AbstractUpdateCategoryUnauthorizedEvent
    from "../../../gen/author/events/AbstractUpdateCategoryUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class UpdateCategoryUnauthorizedEvent extends AbstractUpdateCategoryUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
