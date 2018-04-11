import AbstractUpdatePasswordAdminAction from "../../../gen/admin/actions/AbstractUpdatePasswordAdminAction";
import AppUtils from "../../app/AppUtils";
import CommonView from "../../common/views/CommonView";

export default class UpdatePasswordAdminAction extends AbstractUpdatePasswordAdminAction {

    captureActionParam() {
        const newPassword = jQuery("#" + this.actionParam.editedUsername + "_password").val();
        this.actionParam.newPassword = CryptoJS.MD5(newPassword).toString();
    }

    initActionData() {
        this.actionData.newPassword = this.actionParam.newPassword;
        this.actionData.editedUsername = this.actionParam.editedUsername;
        this.actionData.username = CommonView.getUsername();
        this.actionData.password = CommonView.getPassword();
    }
}

/*       S.D.G.       */
