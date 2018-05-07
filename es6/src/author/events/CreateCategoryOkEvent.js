import AbstractCreateCategoryOkEvent from "../../../gen/author/events/AbstractCreateCategoryOkEvent";
import AppUtils from "../../app/AppUtils";

export default class CreateCategoryOkEvent extends AbstractCreateCategoryOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
