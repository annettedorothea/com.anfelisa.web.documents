/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import AbstractSynchronousCommand from "../../../gen/ace/AbstractSynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import * as AppState from "../../ace/AppState";
import ToggleSaveInLocalStorageOkEvent from "../../../gen/login/events/ToggleSaveInLocalStorageOkEvent";

export default class AbstractToggleSaveInLocalStorageCommand extends AbstractSynchronousCommand {
    constructor(commandData) {
        super(commandData, "login.ToggleSaveInLocalStorageCommand");
        this.ok = "ok";
        this.commandData.saveInLocalStorage = AppState.get_loginView_saveInLocalStorage();
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new ToggleSaveInLocalStorageOkEvent(this.commandData).publish();
			break;
		default:
			throw 'ToggleSaveInLocalStorageCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



