import AbstractShowCorrectMultipleChoiceAction from "../../../gen/multiplechoice/actions/AbstractShowCorrectMultipleChoiceAction";

export default class ShowCorrectMultipleChoiceAction extends AbstractShowCorrectMultipleChoiceAction {

    initActionData() {
		this.actionData.itemId = this.actionParam.itemId;
		this.actionData.last = this.actionParam.last;
		this.actionData.multipleChoiceId = this.actionParam.multipleChoiceId;
    }

}

/*       S.D.G.       */
