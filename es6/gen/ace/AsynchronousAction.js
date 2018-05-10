import ACEController from "./ACEController";
import Action from "./Action";
import AppUtils from "../../src/app/AppUtils";

export default class AsynchronousAction extends Action {

    constructor(actionParam, actionName, isInitAction) {
    	super(actionParam, actionName, isInitAction);
        this.asynchronous = true;
    }
	
    applyAction() {
        return new Promise((resolve, reject) => {
            this.preUpdateUI();
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
                command.executeCommand().then(
                    () => {
                        this.postUpdateUI();
                        resolve();
                    },
                    (error) => {
                        this.postUpdateUI();
                        reject(error + "\n" + command.commandName);
                    }
                );
            } else {
                this.postUpdateUI();
                resolve();
            }
        });
    }

}

/*       S.D.G.       */

