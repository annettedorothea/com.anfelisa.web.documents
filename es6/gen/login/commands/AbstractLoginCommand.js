import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoginSaveInLocalStorageEvent from "../../../gen/login/events/LoginSaveInLocalStorageEvent";
import LoginDoNotSaveInLocalStorageEvent from "../../../gen/login/events/LoginDoNotSaveInLocalStorageEvent";
import GetRoleAction from "../../../src/login/actions/GetRoleAction";

export default class AbstractLoginCommand extends Command {
    constructor(commandData) {
        super(commandData, "login.LoginCommand");
        this.saveInLocalStorage = "saveInLocalStorage";
        this.doNotSaveInLocalStorage = "doNotSaveInLocalStorage";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.saveInLocalStorage:
			new LoginSaveInLocalStorageEvent(this.commandData).publish();
			new TriggerAction(new GetRoleAction()).publish();
			break;
		case this.doNotSaveInLocalStorage:
			new LoginDoNotSaveInLocalStorageEvent(this.commandData).publish();
			new TriggerAction(new GetRoleAction()).publish();
			break;
		default:
			throw 'LoginCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
