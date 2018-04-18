import AbstractLoginAction from "../../../gen/common/actions/AbstractLoginAction";

export default class LoginAction extends AbstractLoginAction {

    initActionData() {
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
    }

}

/*       S.D.G.       */
