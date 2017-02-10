'use strict';

class SubmitForgotPasswordRequestAction extends AbstractSubmitForgotPasswordRequestAction {

    captureActionParam() {
		this.actionParam.schema = CommonView.getSchema();
		this.actionParam.language = CommonView.getLanguage();
		this.actionParam.username = jQuery("#username").val().trim();
    }

    initActionData() {
		this.actionData.schema = this.actionParam.schema;
		this.actionData.language = this.actionParam.language;
		this.actionData.username = this.actionParam.username;
    }

    releaseActionParam() {
		jQuery("#username").val(this.actionData.username);
    }
}

/*       S.D.G.       */
