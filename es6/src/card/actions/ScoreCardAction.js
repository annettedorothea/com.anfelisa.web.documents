import AbstractScoreCardAction from "../../../gen/card/actions/AbstractScoreCardAction";
import CommonView from "../../common/views/CommonView";

export default class ScoreCardAction extends AbstractScoreCardAction {

    initActionData() {
		this.actionData.username = CommonView.getUsername();
		this.actionData.password = CommonView.getPassword();
		this.actionData.quality = this.actionParam.quality;
		this.actionData.boxId = this.actionParam.boxId;
		this.actionData.cardOfBoxId = this.actionParam.cardOfBoxId;
    }

}

/*       S.D.G.       */
