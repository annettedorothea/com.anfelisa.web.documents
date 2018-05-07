import AbstractDeleteCategoryOkEvent from "../../../gen/author/events/AbstractDeleteCategoryOkEvent";
import AppUtils from "../../app/AppUtils";

export default class DeleteCategoryOkEvent extends AbstractDeleteCategoryOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
