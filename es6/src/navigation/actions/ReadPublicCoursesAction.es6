'use strict';

class ReadPublicCoursesAction extends AbstractReadPublicCoursesAction {

    captureActionParam() {
    }

    initActionData() {
        this.actionData.courseId = this.actionParam.courseId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
