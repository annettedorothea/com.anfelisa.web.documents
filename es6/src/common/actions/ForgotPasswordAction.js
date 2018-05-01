import AbstractForgotPasswordAction from "../../../gen/common/actions/AbstractForgotPasswordAction";

export default class ForgotPasswordAction extends AbstractForgotPasswordAction {

    initActionData() {
        this.actionData.username = this.actionParam.username;
        this.actionData.language = this.actionParam.language;
    }

}

/*       S.D.G.       */
