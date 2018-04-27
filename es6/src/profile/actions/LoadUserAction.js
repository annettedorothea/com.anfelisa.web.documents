import AbstractLoadUserAction from "../../../gen/profile/actions/AbstractLoadUserAction";

export default class LoadUserAction extends AbstractLoadUserAction {

    initActionData() {
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
    }

}

/*       S.D.G.       */
