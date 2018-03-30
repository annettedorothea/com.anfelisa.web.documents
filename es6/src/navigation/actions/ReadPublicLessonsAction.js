import AbstractReadPublicLessonsAction from "../../../gen/navigation/actions/AbstractReadPublicLessonsAction";

export default class ReadPublicLessonsAction extends AbstractReadPublicLessonsAction {

    initActionData() {
    	this.actionData.courseId = this.actionParam.courseId;
    }

}

/*       S.D.G.       */
