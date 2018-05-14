import AbstractTranslateGivenFetchedEvent from "../../../gen/author/events/AbstractTranslateGivenFetchedEvent";
import AppUtils from "../../app/AppUtils";

export default class TranslateGivenFetchedEvent extends AbstractTranslateGivenFetchedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
