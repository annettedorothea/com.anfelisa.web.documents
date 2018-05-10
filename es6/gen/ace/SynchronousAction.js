import ACEController from "./ACEController";
import Action from "./Action";
import AppUtils from "../../src/app/AppUtils";

export default class SynchronousAction extends Action {

    constructor(actionParam, actionName, isInitAction) {
    	super(actionParam, actionName, isInitAction);
        this.asynchronous = false;
    }

    applyAction() {
        if (ACEController.execution === ACEController.LIVE) {
            this.actionData.uuid = AppUtils.createUUID();
        }
        if (ACEController.execution === ACEController.LIVE) {
            this.captureActionParam();
        } else {
            this.releaseActionParam();
        }
        this.initActionData();
        ACEController.addItemToTimeLine({action: this});
        let command = this.getCommand();
        if (command) {
            command.executeCommand();
        }
    }
}

/*       S.D.G.       */

