'use strict';

class ReadPublicTestAction extends AbstractReadPublicTestAction {

    captureActionParam() {
        this.actionParam.schema = localStorage.schema;
    }

    initActionData() {
   		this.actionData.schema = this.actionParam.schema;
		this.actionData.testId = this.actionParam.testId;
    }

    releaseActionParam() {
   		localStorage.schema = this.actionParam.schema;
    }
}

/*       S.D.G.       */
