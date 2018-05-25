import AbstractCategorySelectedOkEvent from "../../../gen/box/events/AbstractCategorySelectedOkEvent";
import AppUtils from "../../app/AppUtils";

export default class CategorySelectedOkEvent extends AbstractCategorySelectedOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
