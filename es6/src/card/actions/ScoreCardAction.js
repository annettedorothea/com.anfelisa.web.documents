import AbstractScoreCardAction from "../../../gen/card/actions/AbstractScoreCardAction";
import CommonView from "../../common/views/CommonView";

export default class ScoreCardAction extends AbstractScoreCardAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.quality = this.actionParam.quality;
		this.actionData.boxId = this.actionParam.boxId;
		this.actionData.cardOfBoxId = this.actionParam.cardOfBoxId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
