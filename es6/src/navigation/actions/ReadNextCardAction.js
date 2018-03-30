import AbstractReadNextCardAction from "../../../gen/navigation/actions/AbstractReadNextCardAction";
import CommonView from "../../common/views/CommonView";

export default class ReadNextCardAction extends AbstractReadNextCardAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
    	this.actionData.boxId = this.actionParam.boxId;
    }

}

/*       S.D.G.       */
