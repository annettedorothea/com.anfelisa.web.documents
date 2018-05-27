import AbstractDeleteCategoryClickOkEvent from "../../../gen/author/events/AbstractDeleteCategoryClickOkEvent";
import AppUtils from "../../app/AppUtils";

export default class DeleteCategoryClickOkEvent extends AbstractDeleteCategoryClickOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
