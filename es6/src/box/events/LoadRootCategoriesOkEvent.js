import AbstractLoadRootCategoriesOkEvent from "../../../gen/box/events/AbstractLoadRootCategoriesOkEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadRootCategoriesOkEvent extends AbstractLoadRootCategoriesOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
