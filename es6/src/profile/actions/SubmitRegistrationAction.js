'use strict';

class SubmitRegistrationAction extends AbstractSubmitRegistrationAction {

    captureActionParam() {
		this.actionParam.language = CommonView.getLanguage();
		this.actionParam.username = jQuery("#username").val().trim();
		this.actionParam.usernameExists = jQuery(".usernameNotAvailable").is(':visible');
		this.actionParam.name = jQuery("#name").val().trim();
		this.actionParam.prename = jQuery("#prename").val().trim();
		this.actionParam.email = jQuery("#email").val().trim();
		this.actionParam.password = CryptoJS.MD5(jQuery("#password").val()).toString();
		this.actionParam.passwordRepetition = CryptoJS.MD5(jQuery("#passwordRepetition").val()).toString();
    }

    initActionData() {
		this.actionData.language = this.actionParam.language;
		this.actionData.username = this.actionParam.username;
		this.actionData.usernameExists = this.actionParam.usernameExists;
		this.actionData.name = this.actionParam.name;
		this.actionData.prename = this.actionParam.prename;
		this.actionData.email = this.actionParam.email;
		this.actionData.password = this.actionParam.password;
		this.actionData.passwordRepetition = this.actionParam.passwordRepetition;
    }

    releaseActionParam() {
		jQuery("#username").val(this.actionData.username);
		jQuery("#name").val(this.actionData.name);
		jQuery("#prename").val(this.actionData.prename);
		jQuery("#email").val(this.actionData.email);
    }
}

/*       S.D.G.       */