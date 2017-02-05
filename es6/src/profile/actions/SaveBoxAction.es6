'use strict';

class SaveBoxAction extends AbstractSaveBoxAction {

    captureActionParam() {
		this.actionParam.username = localStorage.username;
		this.actionParam.password = localStorage.password;
		this.actionParam.schema = localStorage.schema;
		this.actionParam.name = jQuery("#name").val().trim();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.schema = this.actionParam.schema;
		this.actionData.role = this.actionParam.role;
		this.actionData.name = this.actionParam.name;
		this.actionData.boxId = this.actionParam.boxId;
    }

    releaseActionParam() {
		localStorage.username = this.actionParam.username;
		localStorage.password = this.actionParam.password;
		localStorage.schema = this.actionParam.schema;
    }
}

/*       S.D.G.       */
