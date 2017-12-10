import AbstractValidatePasswordAction from "../../../gen/profile/actions/AbstractValidatePasswordAction";

export default class ValidatePasswordAction extends AbstractValidatePasswordAction {

    captureActionParam() {
    	const password = jQuery("#password");
    	const passwordRepetition = jQuery("#passwordRepetition");
		this.actionParam.newPassword = CryptoJS.MD5(password.val().trim()).toString(CryptoJS.enc.Base64);
		this.actionParam.passwordRepetition = CryptoJS.MD5(passwordRepetition.val().trim()).toString(CryptoJS.enc.Base64);
		this.actionParam.newPasswordEmpty = password.val().trim().length === 0;
		this.actionParam.passwordRepetitionEmpty = passwordRepetition.val().trim().length === 0;
    }

    initActionData() {
		this.actionData.newPassword = this.actionParam.newPassword;
		this.actionData.passwordRepetition = this.actionParam.passwordRepetition;
		this.actionData.newPasswordEmpty = this.actionParam.newPasswordEmpty;
		this.actionData.passwordRepetitionEmpty = this.actionParam.passwordRepetitionEmpty;
    }

    releaseActionParam() {
		jQuery("#password").val(this.actionData.newPassword);
		jQuery("#passwordRepetition").val(this.actionData.passwordRepetition);
    }
}

/*       S.D.G.       */
