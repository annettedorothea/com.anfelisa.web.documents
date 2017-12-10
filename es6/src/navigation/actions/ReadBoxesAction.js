import AbstractReadBoxesAction from "../../../gen/navigation/actions/AbstractReadBoxesAction";
import CommonView from "../../common/views/CommonView";

export default class ReadBoxesAction extends AbstractReadBoxesAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
