'use strict';

class SubmitForgotPasswordRequestAction extends AbstractSubmitForgotPasswordRequestAction {

    captureActionParam() {
		this.actionParam.schema = localStorage.schema;
		this.actionParam.language = localStorage.language;
		this.actionParam.username = jQuery("#username").val().trim();
    }

    initActionData() {
		this.actionData.schema = this.actionParam.schema;
		this.actionData.language = this.actionParam.language;
		this.actionData.username = this.actionParam.username;
    }

    releaseActionParam() {
		localStorage.schema = this.actionParam.schema;
		localStorage.language = this.actionParam.language;
		jQuery("#username").val(this.actionData.username);
    }
}

/*       S.D.G.       */
