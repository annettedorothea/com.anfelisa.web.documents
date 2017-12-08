import AbstractReadPublicCoursesAction from "../../../gen/navigation/actions/AbstractReadPublicCoursesAction";

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
