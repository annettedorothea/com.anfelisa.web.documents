'use strict';

class RemoveCardFromBoxAction extends AbstractRemoveCardFromBoxAction {

    captureActionParam() {
        this.actionParam.username = CommonView.getUsername();
        this.actionParam.password = CommonView.getPassword();
    }

    initActionData() {
    	this.actionData.username = this.actionParam.username;
    	this.actionData.password = this.actionParam.password;
        this.actionData.boxId = this.actionParam.boxId;
        this.actionData.cardOfBoxId = this.actionParam.cardOfBoxId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
