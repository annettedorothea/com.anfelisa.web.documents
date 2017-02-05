'use strict';

class CheckUsernameAction extends AbstractCheckUsernameAction {

    captureActionParam() {
        this.actionParam.schema = localStorage.schema;
		this.actionParam.username = jQuery("#username").val().trim();
    }

    initActionData() {
   		this.actionData.username = this.actionParam.username;
   		this.actionData.schema = this.actionParam.schema;
    }

    releaseActionParam() {
   		localStorage.schema = this.actionParam.schema;
		jQuery("#username").val(this.actionData.username);
    }
}

/*       S.D.G.       */
