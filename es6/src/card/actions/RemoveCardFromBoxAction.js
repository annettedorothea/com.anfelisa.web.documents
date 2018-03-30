import AbstractRemoveCardFromBoxAction from "../../../gen/card/actions/AbstractRemoveCardFromBoxAction";
import CommonView from "../../common/views/CommonView";

export default class RemoveCardFromBoxAction extends AbstractRemoveCardFromBoxAction {

    captureActionParam() {
        this.actionParam.username = CommonView.getUsername();
        this.actionParam.password = CommonView.getPassword();
    }

    initActionData() {
    	this.actionData.username = this.actionParam.username;
    	this.actionData.password = this.actionParam.password;
        this.actionData.boxId = this.actionParam.boxId;
        this.actionData.cardOfBoxId = this.actionParam.cardOfBoxId;
    }

}

/*       S.D.G.       */
