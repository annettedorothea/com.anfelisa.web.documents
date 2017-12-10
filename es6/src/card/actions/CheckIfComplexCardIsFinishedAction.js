import AbstractCheckIfComplexCardIsFinishedAction from "../../../gen/card/actions/AbstractCheckIfComplexCardIsFinishedAction";

export default class CheckIfComplexCardIsFinishedAction extends AbstractCheckIfComplexCardIsFinishedAction {

    captureActionParam() {
    }

    initActionData() {
		this.actionData.isFinished = !$(".word").hasClass("hiddenWord");
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
