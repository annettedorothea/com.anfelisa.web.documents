'use strict';

class LoadBoxAction extends AbstractLoadBoxAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.boxId = this.actionParam.boxId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
