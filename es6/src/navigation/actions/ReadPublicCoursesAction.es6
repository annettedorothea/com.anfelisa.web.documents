'use strict';

class ReadPublicCoursesAction extends AbstractReadPublicCoursesAction {

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
