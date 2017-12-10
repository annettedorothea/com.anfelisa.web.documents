import AbstractStartTestAction from "../../../gen/vocabulary/actions/AbstractStartTestAction";

export default class StartTestAction extends AbstractStartTestAction {

    captureActionParam() {
    }

    initActionData() {
		this.actionData.wordCount = (jQuery(".vocabulary")).length;
		this.actionData.testMode = this.actionParam.testMode;
    }

    releaseActionParam() {
    }
}

/*       S.D.G.       */
