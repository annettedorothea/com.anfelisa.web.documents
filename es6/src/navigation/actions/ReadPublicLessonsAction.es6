'use strict';

class ReadPublicLessonsAction extends AbstractReadPublicLessonsAction {

    captureActionParam() {
        this.actionParam.schema = CommonView.getSchema();
    }

    initActionData() {
   		this.actionData.schema = this.actionParam.schema;
    	this.actionData.courseId = this.actionParam.courseId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
