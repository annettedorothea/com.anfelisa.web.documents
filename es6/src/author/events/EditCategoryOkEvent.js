import AbstractEditCategoryOkEvent from "../../../gen/author/events/AbstractEditCategoryOkEvent";
import AppUtils from "../../app/AppUtils";

export default class EditCategoryOkEvent extends AbstractEditCategoryOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
