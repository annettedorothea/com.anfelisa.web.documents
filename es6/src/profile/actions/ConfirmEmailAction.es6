'use strict';

class ConfirmEmailAction extends AbstractConfirmEmailAction {

    captureActionParam() {
        this.actionParam.schema = CommonView.getSchema();
    }

    initActionData() {
   		this.actionData.username = this.actionParam.username;
   		this.actionData.password = this.actionParam.password;
   		this.actionData.schema = this.actionParam.schema;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
