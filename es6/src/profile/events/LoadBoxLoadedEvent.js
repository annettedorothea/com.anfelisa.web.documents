import AbstractLoadBoxLoadedEvent from "../../../gen/profile/events/AbstractLoadBoxLoadedEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadBoxLoadedEvent extends AbstractLoadBoxLoadedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
        this.eventData.data.courseToBoxAdditionList.forEach((item) => {
            if (item.autoAdd === null) {
                item.nullSelected = true;
            } else if (item.autoAdd === false) {
                item.falseSelected = true;
            } else if (item.autoAdd === true) {
                item.trueSelected = true;
            }
        });
    }
}

/*       S.D.G.       */
