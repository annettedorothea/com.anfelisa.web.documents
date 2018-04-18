import AbstractUpdateUserRoleAction from "../../../gen/admin/actions/AbstractUpdateUserRoleAction";
import CommonView from "../../common/views/CommonView";

export default class UpdateUserRoleAction extends AbstractUpdateUserRoleAction {

    captureActionParam() {
        this.actionParam.role = $("#" + this.actionParam.editedUsername + "_role").val();
    }

    initActionData() {
    	this.actionData.role = this.actionParam.role;
    	this.actionData.editedUsername = this.actionParam.editedUsername;
        this.actionData.username = CommonView.getUsername();
        this.actionData.password = CommonView.getPassword();
    }

}

/*       S.D.G.       */
