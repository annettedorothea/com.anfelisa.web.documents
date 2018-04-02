import AbstractSaveProfileAction from "../../../gen/profile/actions/AbstractSaveProfileAction";
import CommonView from "../../common/views/CommonView";

export default class SaveProfileAction extends AbstractSaveProfileAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
		this.actionParam.email = jQuery("#email").val().trim();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.email = this.actionParam.email;
		this.actionData.username = this.actionParam.username;
    }

    releaseActionParam() {
		jQuery("#email").val(this.actionData.email);
    }
}

/*       S.D.G.       */
