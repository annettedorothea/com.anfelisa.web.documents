import AbstractDisplayNextQuestionAction from "../../../gen/multiplechoice/actions/AbstractDisplayNextQuestionAction";

export default class DisplayNextQuestionAction extends AbstractDisplayNextQuestionAction {

    captureActionParam() {
    }

    initActionData() {
		this.actionData.multipleChoiceId = this.actionParam.multipleChoiceId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
