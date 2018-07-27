import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import GetAllUsersOkEvent from "../../../gen/admin/events/GetAllUsersOkEvent";

export default class AbstractGetAllUsersCommand extends Command {
    constructor(commandData) {
        super(commandData, "admin.GetAllUsersCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new GetAllUsersOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('GetAllUsersCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
