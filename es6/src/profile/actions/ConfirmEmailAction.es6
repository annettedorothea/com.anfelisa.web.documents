'use strict';

class ConfirmEmailAction extends AbstractConfirmEmailAction {

    captureActionParam() {
    }

    initActionData() {
   		this.actionData.username = this.actionParam.username;
   		this.actionData.password = this.actionParam.password;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
