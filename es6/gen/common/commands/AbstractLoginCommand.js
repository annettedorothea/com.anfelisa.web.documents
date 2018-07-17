import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoginSaveInLocalStorageEvent from "../../../src/common/events/LoginSaveInLocalStorageEvent";
import LoginDoNotSaveInLocalStorageEvent from "../../../src/common/events/LoginDoNotSaveInLocalStorageEvent";
import LoginUnauthorizedEvent from "../../../src/common/events/LoginUnauthorizedEvent";
import RouteAction from "../../../src/common/actions/RouteAction";
import ClearToastAction from "../../../src/common/actions/ClearToastAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractLoginCommand extends Command {
    constructor(commandData) {
        super(commandData, "common.LoginCommand");
        this.saveInLocalStorage = "saveInLocalStorage";
        this.doNotSaveInLocalStorage = "doNotSaveInLocalStorage";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.saveInLocalStorage:
			promises.push(new LoginSaveInLocalStorageEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		case this.doNotSaveInLocalStorage:
			promises.push(new LoginDoNotSaveInLocalStorageEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		case this.unauthorized:
			promises.push(new LoginUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ClearToastAction(this.commandData)).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoginCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
