import AbstractUpdatePasswordAction from "../../../gen/profile/actions/AbstractUpdatePasswordAction";
import CommonView from "../../common/views/CommonView";

export default class UpdatePasswordAction extends AbstractUpdatePasswordAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
		const password = jQuery("#password");
		const passwordRepetition = jQuery("#passwordRepetition");
		this.actionParam.newPassword = CryptoJS.MD5(password.val()).toString();
		this.actionParam.passwordRepetition = CryptoJS.MD5(passwordRepetition.val().trim()).toString();
		this.actionParam.newPasswordEmpty = password.val().length === 0;
		this.actionParam.passwordRepetitionEmpty = passwordRepetition.val().length === 0;
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.newPassword = this.actionParam.newPassword;
		this.actionData.passwordRepetition = this.actionParam.passwordRepetition;
		this.actionData.newPasswordEmpty = this.actionParam.newPasswordEmpty;
		this.actionData.passwordRepetitionEmpty = this.actionParam.passwordRepetitionEmpty;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
