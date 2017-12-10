import AbstractIsTestFinishedAction from "../../../gen/vocabulary/actions/AbstractIsTestFinishedAction";

export default class IsTestFinishedAction extends AbstractIsTestFinishedAction {

    captureActionParam() {
    }

    initActionData() {
		this.actionData.strikeCount = this.actionParam.strikeCount;
		this.actionData.points = this.actionParam.points;
		this.actionData.wordCount = this.actionParam.wordCount;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
