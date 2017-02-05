'use strict';

class SaveProfileAction extends AbstractSaveProfileAction {

    captureActionParam() {
		this.actionParam.username = localStorage.username;
		this.actionParam.password = localStorage.password;
		this.actionParam.schema = localStorage.schema;
		this.actionParam.name = jQuery("#name").val().trim();
		this.actionParam.prename = jQuery("#prename").val().trim();
		this.actionParam.email = jQuery("#email").val().trim();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.schema = this.actionParam.schema;
		this.actionData.name = this.actionParam.name;
		this.actionData.prename = this.actionParam.prename;
		this.actionData.email = this.actionParam.email;
		this.actionData.username = this.actionParam.username;
    }

    releaseActionParam() {
		localStorage.username = this.actionParam.username;
		localStorage.password = this.actionParam.password;
		localStorage.schema = this.actionParam.schema;
		jQuery("#name").val(this.actionData.name);
		jQuery("#prename").val(this.actionData.prename);
		jQuery("#email").val(this.actionData.email);
    }
}

/*       S.D.G.       */
