'use strict';

class CheckUsernameAction extends AbstractCheckUsernameAction {

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
