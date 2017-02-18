'use strict';

class ReadPublicTestsAction extends AbstractReadPublicTestsAction {

    captureActionParam() {
    }

    initActionData() {
		this.actionData.lessonId = this.actionParam.lessonId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
