import ACEController from "./ACEController";
import AppUtils from "../../src/app/AppUtils";

export default class Action {
    constructor(actionData, actionName, isInitAction, isRouteAction) {
        this.actionName = actionName;
        if (actionData === undefined) {
            actionData = {};
        }
        this.actionData = AppUtils.deepCopy(actionData);
        this.isInitAction = isInitAction === true;
        this.isRouteAction = isRouteAction === true;
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

