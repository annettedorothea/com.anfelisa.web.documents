import AbstractSubmitRegistrationAction from "../../../gen/profile/actions/AbstractSubmitRegistrationAction";
import CommonView from "../../common/views/CommonView";

export default class SubmitRegistrationAction extends AbstractSubmitRegistrationAction {

    captureActionParam() {
		this.actionParam.language = CommonView.getLanguage();
		this.actionParam.username = jQuery("#username").val().trim();
		this.actionParam.usernameExists = jQuery(".usernameNotAvailable").is(':visible');
		this.actionParam.email = jQuery("#email").val().trim();
		this.actionParam.password = CryptoJS.MD5(jQuery("#password").val()).toString();
		this.actionParam.passwordRepetition = CryptoJS.MD5(jQuery("#passwordRepetition").val()).toString();
    }

    initActionData() {
		this.actionData.language = this.actionParam.language;
		this.actionData.username = this.actionParam.username;
		this.actionData.usernameExists = this.actionParam.usernameExists;
		this.actionData.email = this.actionParam.email;
		this.actionData.password = this.actionParam.password;
		this.actionData.passwordRepetition = this.actionParam.passwordRepetition;
    }

    releaseActionParam() {
		jQuery("#username").val(this.actionData.username);
		jQuery("#email").val(this.actionData.email);
    }
}

/*       S.D.G.       */
