import AbstractDisplayNextQuestionAction from "../../../gen/multiplechoice/actions/AbstractDisplayNextQuestionAction";

class DisplayNextQuestionAction extends AbstractDisplayNextQuestionAction {

    captureActionParam() {
    }

    initActionData() {
		this.actionData.multipleChoiceId = this.actionParam.multipleChoiceId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
