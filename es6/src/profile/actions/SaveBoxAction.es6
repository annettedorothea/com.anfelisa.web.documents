'use strict';

class SaveBoxAction extends AbstractSaveBoxAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
		this.actionParam.schema = CommonView.getSchema();
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
    }
}

/*       S.D.G.       */
