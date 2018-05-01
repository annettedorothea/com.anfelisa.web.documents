import AbstractGetAllUsersAction from "../../../gen/admin/actions/AbstractGetAllUsersAction";

export default class GetAllUsersAction extends AbstractGetAllUsersAction {

    initActionData() {
        this.actionData.username = this.actionParam.username;
        this.actionData.password = this.actionParam.password;
    }

}

/*       S.D.G.       */
