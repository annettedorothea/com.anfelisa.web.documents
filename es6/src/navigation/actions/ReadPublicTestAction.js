import AbstractReadPublicTestAction from "../../../gen/navigation/actions/AbstractReadPublicTestAction";

export default class ReadPublicTestAction extends AbstractReadPublicTestAction {

    captureActionParam() {
    }

    initActionData() {
		this.actionData.testId = this.actionParam.testId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
