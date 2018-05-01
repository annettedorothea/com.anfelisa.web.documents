import AbstractSaveRoleAction from "../../../gen/admin/actions/AbstractSaveRoleAction";

export default class SaveRoleAction extends AbstractSaveRoleAction {

    initActionData() {
        this.actionData.userId = this.actionParam.userId;
        this.actionData.role = this.actionParam.role;
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
    }

}

/*       S.D.G.       */
