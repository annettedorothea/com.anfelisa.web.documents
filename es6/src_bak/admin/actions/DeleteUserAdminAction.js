import AbstractDeleteUserAdminAction from "../../../gen/admin/actions/AbstractDeleteUserAdminAction";
import CommonView from "../../common/views/CommonView";

export default class DeleteUserAdminAction extends AbstractDeleteUserAdminAction {

    initActionData() {
        this.actionData.deletedUsername = this.actionParam.deletedUsername;
        this.actionData.username = CommonView.getUsername();
        this.actionData.password = CommonView.getPassword();
    }

}

/*       S.D.G.       */
