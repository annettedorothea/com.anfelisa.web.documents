import AbstractReadPublicLessonsAction from "../../../gen/navigation/actions/AbstractReadPublicLessonsAction";

export default class ReadPublicLessonsAction extends AbstractReadPublicLessonsAction {

    captureActionParam() {
    }

    initActionData() {
    	this.actionData.courseId = this.actionParam.courseId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
