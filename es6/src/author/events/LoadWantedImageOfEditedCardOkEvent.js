import AbstractLoadWantedImageOfEditedCardOkEvent from "../../../gen/author/events/AbstractLoadWantedImageOfEditedCardOkEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadWantedImageOfEditedCardOkEvent extends AbstractLoadWantedImageOfEditedCardOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
