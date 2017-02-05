'use strict';

class ReadResultAction extends AbstractReadResultAction {

    captureActionParam() {
		this.actionParam.username = localStorage.username;
		this.actionParam.password = localStorage.password;
		this.actionParam.schema = localStorage.schema;
		this.actionParam.language = localStorage.language;
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.schema = this.actionParam.schema;
		this.actionData.language = this.actionParam.language;
		this.actionData.resultId = this.actionParam.resultId;
    }

    releaseActionParam() {
		localStorage.username = this.actionParam.username;
		localStorage.password = this.actionParam.password;
		localStorage.schema = this.actionParam.schema;
		localStorage.language = this.actionParam.language;
    }
}

/*       S.D.G.       */
