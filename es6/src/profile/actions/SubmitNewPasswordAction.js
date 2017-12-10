import AbstractSubmitNewPasswordAction from "../../../gen/profile/actions/AbstractSubmitNewPasswordAction";

export default class SubmitNewPasswordAction extends AbstractSubmitNewPasswordAction {

    captureActionParam() {
		this.actionParam.username = jQuery("#username").val().trim();
		this.actionParam.password = jQuery("#oldPassword").val().trim();
		this.actionParam.newPassword = CryptoJS.MD5(jQuery("#password").val()).toString();
		this.actionParam.passwordRepetition = CryptoJS.MD5(jQuery("#passwordRepetition").val()).toString();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.newPassword = this.actionParam.newPassword;
		this.actionData.passwordRepetition = this.actionParam.passwordRepetition;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
