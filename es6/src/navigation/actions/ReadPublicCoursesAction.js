import AbstractReadPublicCoursesAction from "../../../gen/navigation/actions/AbstractReadPublicCoursesAction";

export default class ReadPublicCoursesAction extends AbstractReadPublicCoursesAction {

    captureActionParam() {
    }

    initActionData() {
        this.actionData.courseId = this.actionParam.courseId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
