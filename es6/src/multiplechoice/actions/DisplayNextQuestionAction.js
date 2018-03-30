import AbstractDisplayNextQuestionAction from "../../../gen/multiplechoice/actions/AbstractDisplayNextQuestionAction";

export default class DisplayNextQuestionAction extends AbstractDisplayNextQuestionAction {

    initActionData() {
		this.actionData.multipleChoiceId = this.actionParam.multipleChoiceId;
    }

}

/*       S.D.G.       */
