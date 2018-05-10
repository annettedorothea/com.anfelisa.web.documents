import ACEController from "./ACEController";
import AppUtils from "../../src/app/AppUtils";

export default class Action {
    constructor(actionParam, actionName, isInitAction) {
        this.actionName = actionName;
        if (actionParam === undefined) {
            actionParam = {};
        }
        this.actionParam = AppUtils.deepCopy(actionParam);
        this.actionData = {};
        this.isInitAction = isInitAction === true;
    }

    captureActionParam() {
    }

    releaseActionParam() {
    }

    initActionData() {
    }

    getCommand() {
        throw "no command defined for " + this.actionName;
    }

    apply() {
        ACEController.addActionToQueue(this);
    }
}

/*       S.D.G.       */

