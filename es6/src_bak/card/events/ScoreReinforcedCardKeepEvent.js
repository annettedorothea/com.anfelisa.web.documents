import AbstractScoreReinforcedCardKeepEvent from "../../../gen/card/events/AbstractScoreReinforcedCardKeepEvent";
import AppUtils from "../../app/AppUtils";

export default class ScoreReinforcedCardKeepEvent extends AbstractScoreReinforcedCardKeepEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
