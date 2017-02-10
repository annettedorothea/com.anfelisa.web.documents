'use strict';

class ReadPublicTestsAction extends AbstractReadPublicTestsAction {

    captureActionParam() {
        this.actionParam.schema = CommonView.getSchema();
    }

    initActionData() {
   		this.actionData.schema = this.actionParam.schema;
		this.actionData.lessonId = this.actionParam.lessonId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
