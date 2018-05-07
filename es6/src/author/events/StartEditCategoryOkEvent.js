import AbstractStartEditCategoryOkEvent from "../../../gen/author/events/AbstractStartEditCategoryOkEvent";
import AppUtils from "../../app/AppUtils";

export default class StartEditCategoryOkEvent extends AbstractStartEditCategoryOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
