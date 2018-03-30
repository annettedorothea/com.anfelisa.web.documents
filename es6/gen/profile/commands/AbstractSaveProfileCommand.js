import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import SaveProfileDataInvalidEvent from "../../../src/profile/events/SaveProfileDataInvalidEvent";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractSaveProfileCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.SaveProfileCommand");
        this.saved = "saved";
        this.dataInvalid = "dataInvalid";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.saved:
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		case this.dataInvalid:
			promises.push(new SaveProfileDataInvalidEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('SaveProfileCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
