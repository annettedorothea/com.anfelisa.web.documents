import AbstractTranslateWantedFetchedEvent from "../../../gen/author/events/AbstractTranslateWantedFetchedEvent";
import AppUtils from "../../app/AppUtils";

export default class TranslateWantedFetchedEvent extends AbstractTranslateWantedFetchedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
