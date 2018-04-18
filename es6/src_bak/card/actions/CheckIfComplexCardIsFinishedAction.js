import AbstractCheckIfComplexCardIsFinishedAction from "../../../gen/card/actions/AbstractCheckIfComplexCardIsFinishedAction";

export default class CheckIfComplexCardIsFinishedAction extends AbstractCheckIfComplexCardIsFinishedAction {

    initActionData() {
		this.actionData.isFinished = !$(".word").hasClass("hiddenWord");
    }
}

/*       S.D.G.       */
