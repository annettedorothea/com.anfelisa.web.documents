import AbstractScoreReinforceCardUnauthorizedEvent
    from "../../../gen/box/events/AbstractScoreReinforceCardUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class ScoreReinforceCardUnauthorizedEvent extends AbstractScoreReinforceCardUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
