import AbstractSaveProfileAction from "../../../gen/profile/actions/AbstractSaveProfileAction";
import CommonView from "../../common/views/CommonView";

export default class SaveProfileAction extends AbstractSaveProfileAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
		this.actionParam.name = jQuery("#name").val().trim();
		this.actionParam.prename = jQuery("#prename").val().trim();
		this.actionParam.email = jQuery("#email").val().trim();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.name = this.actionParam.name;
		this.actionData.prename = this.actionParam.prename;
		this.actionData.email = this.actionParam.email;
		this.actionData.username = this.actionParam.username;
    }

    releaseActionParam() {
		jQuery("#name").val(this.actionData.name);
		jQuery("#prename").val(this.actionData.prename);
		jQuery("#email").val(this.actionData.email);
    }
}

/*       S.D.G.       */
