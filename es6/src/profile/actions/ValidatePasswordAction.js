'use strict';

class ValidatePasswordAction extends AbstractValidatePasswordAction {

    captureActionParam() {
		this.actionParam.newPassword = CryptoJS.MD5(jQuery("#password").val().trim()).toString(CryptoJS.enc.Base64);
		this.actionParam.passwordRepetition = CryptoJS.MD5(jQuery("#passwordRepetition").val().trim()).toString(CryptoJS.enc.Base64);
		this.actionParam.newPasswordEmpty = jQuery("#password").val().trim().length === 0;
		this.actionParam.passwordRepetitionEmpty = jQuery("#passwordRepetition").val().trim().length === 0;
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
