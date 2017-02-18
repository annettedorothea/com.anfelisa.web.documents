'use strict';

class ReadPublicTestAction extends AbstractReadPublicTestAction {

    captureActionParam() {
    }

    initActionData() {
		this.actionData.testId = this.actionParam.testId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
