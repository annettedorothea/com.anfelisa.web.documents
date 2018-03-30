import AbstractReadPublicCoursesAction from "../../../gen/navigation/actions/AbstractReadPublicCoursesAction";

export default class ReadPublicCoursesAction extends AbstractReadPublicCoursesAction {

    initActionData() {
        this.actionData.courseId = this.actionParam.courseId;
    }

}

/*       S.D.G.       */
