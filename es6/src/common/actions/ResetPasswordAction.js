import AbstractResetPasswordAction from "../../../gen/common/actions/AbstractResetPasswordAction";

export default class ResetPasswordAction extends AbstractResetPasswordAction {

    initActionData() {
        this.actionData.token = this.actionParam.token;
        this.actionData.password = this.actionParam.password;
    }

}

/*       S.D.G.       */
