import AbstractReadPublicTestsAction from "../../../gen/navigation/actions/AbstractReadPublicTestsAction";

export default class ReadPublicTestsAction extends AbstractReadPublicTestsAction {

    initActionData() {
		this.actionData.lessonId = this.actionParam.lessonId;
    }

}

/*       S.D.G.       */
