import AbstractCreateCategoryUnauthorizedEvent from "../../../gen/author/events/AbstractCreateCategoryUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class CreateCategoryUnauthorizedEvent extends AbstractCreateCategoryUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
