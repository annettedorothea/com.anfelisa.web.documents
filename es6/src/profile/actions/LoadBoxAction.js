import AbstractLoadBoxAction from "../../../gen/profile/actions/AbstractLoadBoxAction";
import CommonView from "../../common/views/CommonView";

export default class LoadBoxAction extends AbstractLoadBoxAction {

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
