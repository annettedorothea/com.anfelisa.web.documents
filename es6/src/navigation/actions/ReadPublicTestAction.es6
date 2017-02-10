'use strict';

class ReadPublicTestAction extends AbstractReadPublicTestAction {

    captureActionParam() {
        this.actionParam.schema = CommonView.getSchema();
    }

    initActionData() {
   		this.actionData.schema = this.actionParam.schema;
		this.actionData.testId = this.actionParam.testId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
