'use strict';

class ScoreCardAction extends AbstractScoreCardAction {

    captureActionParam() {
		this.actionParam.username = CommonView.getUsername();
		this.actionParam.password = CommonView.getPassword();
		this.actionParam.schema = CommonView.getSchema();
    }

    initActionData() {
		this.actionData.username = this.actionParam.username;
		this.actionData.password = this.actionParam.password;
		this.actionData.schema = this.actionParam.schema;
		this.actionData.quality = this.actionParam.quality;
		this.actionData.boxId = this.actionParam.boxId;
		this.actionData.cardOfBoxId = this.actionParam.cardOfBoxId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
