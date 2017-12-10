import AbstractOpenNewPasswordAction from "../../../gen/profile/actions/AbstractOpenNewPasswordAction";

export default class OpenNewPasswordAction extends AbstractOpenNewPasswordAction {

    captureActionParam() {
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
