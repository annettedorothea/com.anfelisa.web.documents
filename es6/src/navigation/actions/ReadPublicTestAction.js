import AbstractReadPublicTestAction from "../../../gen/navigation/actions/AbstractReadPublicTestAction";

export default class ReadPublicTestAction extends AbstractReadPublicTestAction {

    initActionData() {
		this.actionData.testId = this.actionParam.testId;
    }

}

/*       S.D.G.       */
