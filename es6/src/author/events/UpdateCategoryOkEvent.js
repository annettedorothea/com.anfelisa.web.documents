import AbstractUpdateCategoryOkEvent from "../../../gen/author/events/AbstractUpdateCategoryOkEvent";
import AppUtils from "../../app/AppUtils";

export default class UpdateCategoryOkEvent extends AbstractUpdateCategoryOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
