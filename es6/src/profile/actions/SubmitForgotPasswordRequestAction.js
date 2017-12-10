import AbstractSubmitForgotPasswordRequestAction from "../../../gen/profile/actions/AbstractSubmitForgotPasswordRequestAction";
import CommonView from "../../common/views/CommonView";

export default class SubmitForgotPasswordRequestAction extends AbstractSubmitForgotPasswordRequestAction {

    captureActionParam() {
		this.actionParam.language = CommonView.getLanguage();
		this.actionParam.username = jQuery("#username").val().trim();
    }

    initActionData() {
		this.actionData.language = this.actionParam.language;
		this.actionData.username = this.actionParam.username;
    }

    releaseActionParam() {
		jQuery("#username").val(this.actionData.username);
    }
}

/*       S.D.G.       */
