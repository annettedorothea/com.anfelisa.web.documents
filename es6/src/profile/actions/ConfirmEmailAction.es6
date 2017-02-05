'use strict';

class ConfirmEmailAction extends AbstractConfirmEmailAction {

    captureActionParam() {
        this.actionParam.schema = localStorage.schema;
    }

    initActionData() {
   		this.actionData.username = this.actionParam.username;
   		this.actionData.password = this.actionParam.password;
   		this.actionData.schema = this.actionParam.schema;
    }

    releaseActionParam() {
   		localStorage.schema = this.actionParam.schema;
    }
}

/*       S.D.G.       */
