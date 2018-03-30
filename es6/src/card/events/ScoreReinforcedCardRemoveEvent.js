import AbstractScoreReinforcedCardRemoveEvent from "../../../gen/card/events/AbstractScoreReinforcedCardRemoveEvent";
import AppUtils from "../../app/AppUtils";

export default class ScoreReinforcedCardRemoveEvent extends AbstractScoreReinforcedCardRemoveEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
