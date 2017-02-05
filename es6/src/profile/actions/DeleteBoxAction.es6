'use strict';

class DeleteBoxAction extends AbstractDeleteBoxAction {

    captureActionParam() {
	        this.actionParam.username = localStorage.username;
	        this.actionParam.password = localStorage.password;
	        this.actionParam.schema = localStorage.schema;
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.schema = this.actionParam.schema;
		this.actionData.boxId = this.actionParam.boxId;
    }

    releaseActionParam() {
		localStorage.username = this.actionParam.username;
		localStorage.password = this.actionParam.password;
		localStorage.schema = this.actionParam.schema;
		bootbox.hideAll();
    }
}

/*       S.D.G.       */
