import AbstractCreateUserAction from "../../../gen/common/actions/AbstractCreateUserAction";

export default class CreateUserAction extends AbstractCreateUserAction {

    initActionData() {
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
        this.actionData.email = this.actionParam.email;
        this.actionData.language = this.actionParam.language;
    }

}

/*       S.D.G.       */
