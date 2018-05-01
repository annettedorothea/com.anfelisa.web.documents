import AbstractRegisterUserAction from "../../../gen/common/actions/AbstractRegisterUserAction";

export default class RegisterUserAction extends AbstractRegisterUserAction {

    initActionData() {
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
        this.actionData.email = this.actionParam.email;
        this.actionData.language = this.actionParam.language;
    }

}

/*       S.D.G.       */
