'use strict';

class ReadPublicTestsAction extends AbstractReadPublicTestsAction {

    captureActionParam() {
        this.actionParam.schema = localStorage.schema;
    }

    initActionData() {
   		this.actionData.schema = this.actionParam.schema;
		this.actionData.lessonId = this.actionParam.lessonId;
    }

    releaseActionParam() {
   		localStorage.schema = this.actionParam.schema;
    }
}

/*       S.D.G.       */
