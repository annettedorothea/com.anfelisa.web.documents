import AbstractScoreReinforcedCardAction from "../../../gen/card/actions/AbstractScoreReinforcedCardAction";
import CommonView from "../../common/views/CommonView";

export default class ScoreReinforcedCardAction extends AbstractScoreReinforcedCardAction {

    captureActionParam() {
        this.actionParam.username = CommonView.getUsername();
        this.actionParam.password = CommonView.getPassword();
    }

    initActionData() {
    	this.actionData.username = this.actionParam.username;
    	this.actionData.password = this.actionParam.password;
        this.actionData.quality = this.actionParam.quality;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
