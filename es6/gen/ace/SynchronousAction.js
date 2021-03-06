/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import ACEController from "./ACEController";
import Action from "./Action";
import AppUtils from "../../src/app/AppUtils";

export default class SynchronousAction extends Action {

    constructor(actionData, actionName) {
    	super(actionData, actionName);
    	this.asynchronous = false;
    }

    applyAction() {
	    ACEController.addItemToTimeLine({action: this});
        this.initActionData();
	    let command = this.getCommand();
	    command.executeCommand();
	    AppUtils.renderNewState();
    }
}




/******* S.D.G. *******/




