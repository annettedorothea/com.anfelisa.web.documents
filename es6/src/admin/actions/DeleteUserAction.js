import AbstractDeleteUserAction from "../../../gen/admin/actions/AbstractDeleteUserAction";

export default class DeleteUserAction extends AbstractDeleteUserAction {

    initActionData() {
        this.actionData.deletedUsername = this.actionParam.deletedUsername;
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
    }

}

/*       S.D.G.       */
