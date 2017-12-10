import AbstractDeleteBoxAction from "../../../gen/profile/actions/AbstractDeleteBoxAction";
import CommonView from "../../common/views/CommonView";

export default class DeleteBoxAction extends AbstractDeleteBoxAction {

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
		bootbox.hideAll();
    }
}

/*       S.D.G.       */
