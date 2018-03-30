import AbstractOpenNewPasswordAction from "../../../gen/profile/actions/AbstractOpenNewPasswordAction";

export default class OpenNewPasswordAction extends AbstractOpenNewPasswordAction {

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
    }

}

/*       S.D.G.       */
