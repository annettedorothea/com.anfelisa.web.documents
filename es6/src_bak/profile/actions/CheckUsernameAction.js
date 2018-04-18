import AbstractCheckUsernameAction from "../../../gen/profile/actions/AbstractCheckUsernameAction";

export default class CheckUsernameAction extends AbstractCheckUsernameAction {

    captureActionParam() {
		this.actionParam.username = jQuery("#username").val().trim();
    }

    initActionData() {
   		this.actionData.username = this.actionParam.username;
    }

    releaseActionParam() {
		jQuery("#username").val(this.actionData.username);
    }
}

/*       S.D.G.       */
