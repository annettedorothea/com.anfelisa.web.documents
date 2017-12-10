import AbstractReadReinforceCardsAction from "../../../gen/navigation/actions/AbstractReadReinforceCardsAction";
import CommonView from "../../common/views/CommonView";

export default class ReadReinforceCardsAction extends AbstractReadReinforceCardsAction {

    captureActionParam() {
        this.actionParam.username = CommonView.getUsername();
        this.actionParam.password = CommonView.getPassword();
    }

    initActionData() {
    	this.actionData.username = this.actionParam.username;
    	this.actionData.password = this.actionParam.password;
        this.actionData.boxId = this.actionParam.boxId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
