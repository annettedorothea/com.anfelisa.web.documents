import AbstractReadPublicTestsAction from "../../../gen/navigation/actions/AbstractReadPublicTestsAction";

class ReadPublicTestsAction extends AbstractReadPublicTestsAction {

    captureActionParam() {
    }

    initActionData() {
		this.actionData.lessonId = this.actionParam.lessonId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */