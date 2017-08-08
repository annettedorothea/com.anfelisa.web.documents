'use strict';

class DisplayNextReinforceCardAction extends AbstractDisplayNextReinforceCardAction {

    captureActionParam() {
        this.actionParam.username = CommonView.getUsername();
        this.actionParam.password = CommonView.getPassword();
    }

    initActionData() {
    	this.actionData.username = this.actionParam.username;
    	this.actionData.password = this.actionParam.password;
        this.actionData.cardCount = ReinforceCardList.reinforceCardList !== null? ReinforceCardList.reinforceCardList.length : 0;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
