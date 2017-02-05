'use strict';

class ReadPublicCoursesAction extends AbstractReadPublicCoursesAction {

    captureActionParam() {
        this.actionParam.schema = localStorage.schema;
    }

    initActionData() {
   		this.actionData.schema = this.actionParam.schema;
        this.actionData.courseId = this.actionParam.courseId;
    }

    releaseActionParam() {
   		localStorage.schema = this.actionParam.schema;
    }
}

/*       S.D.G.       */
