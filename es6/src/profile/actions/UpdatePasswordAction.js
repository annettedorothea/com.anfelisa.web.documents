'use strict';

class UpdatePasswordAction extends AbstractUpdatePasswordAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
		this.actionParam.newPassword = CryptoJS.MD5(jQuery("#password").val()).toString();
		this.actionParam.passwordRepetition = CryptoJS.MD5(jQuery("#passwordRepetition").val().trim()).toString();
		this.actionParam.newPasswordEmpty = jQuery("#password").val().length === 0;
		this.actionParam.passwordRepetitionEmpty = jQuery("#passwordRepetition").val().length === 0;
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