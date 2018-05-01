import AbstractDeleteCategoryUnauthorizedEvent from "../../../gen/author/events/AbstractDeleteCategoryUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class DeleteCategoryUnauthorizedEvent extends AbstractDeleteCategoryUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
