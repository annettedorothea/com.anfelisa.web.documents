import AbstractShowFalseMultipleChoiceAction from "../../../gen/multiplechoice/actions/AbstractShowFalseMultipleChoiceAction";

export default class ShowFalseMultipleChoiceAction extends AbstractShowFalseMultipleChoiceAction {

    captureActionParam() {
    }

    initActionData() {
		this.actionData.itemId = this.actionParam.itemId;
		this.actionData.last = this.actionParam.last;
		this.actionData.multipleChoiceId = this.actionParam.multipleChoiceId;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
