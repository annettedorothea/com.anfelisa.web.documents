import AbstractScoreCardUnauthorizedEvent from "../../../gen/box/events/AbstractScoreCardUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class ScoreCardUnauthorizedEvent extends AbstractScoreCardUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
