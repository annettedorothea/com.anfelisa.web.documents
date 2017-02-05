'use strict';

class SubmitNewPasswordAction extends AbstractSubmitNewPasswordAction {

    captureActionParam() {
        this.actionParam.schema = localStorage.schema;
		this.actionParam.username = jQuery("#username").val().trim();
		this.actionParam.password = jQuery("#oldPassword").val().trim();
		this.actionParam.newPassword = CryptoJS.MD5(jQuery("#password").val().trim()).toString(CryptoJS.enc.Base64);
		this.actionParam.passwordRepetition = CryptoJS.MD5(jQuery("#passwordRepetition").val().trim()).toString(CryptoJS.enc.Base64);
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.newPassword = this.actionParam.newPassword;
		this.actionData.passwordRepetition = this.actionParam.passwordRepetition;
   		this.actionData.schema = this.actionParam.schema;
    }

    releaseActionParam() {
		localStorage.schema = this.actionParam.schema;
		localStorage.language = this.actionParam.language;
    }
}

/*       S.D.G.       */
