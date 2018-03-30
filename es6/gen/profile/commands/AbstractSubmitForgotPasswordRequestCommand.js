import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import SubmitForgotPasswordRequestDataInvalidEvent from "../../../src/profile/events/SubmitForgotPasswordRequestDataInvalidEvent";
import SubmitForgotPasswordRequestMismatchEvent from "../../../src/profile/events/SubmitForgotPasswordRequestMismatchEvent";
import SubmitForgotPasswordRequestSavedEvent from "../../../src/profile/events/SubmitForgotPasswordRequestSavedEvent";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractSubmitForgotPasswordRequestCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.SubmitForgotPasswordRequestCommand");
        this.dataInvalid = "dataInvalid";
        this.mismatch = "mismatch";
        this.saved = "saved";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.dataInvalid:
			promises.push(new SubmitForgotPasswordRequestDataInvalidEvent(this.commandData).publish());
			break;
		case this.mismatch:
			promises.push(new SubmitForgotPasswordRequestMismatchEvent(this.commandData).publish());
			break;
		case this.saved:
			promises.push(new SubmitForgotPasswordRequestSavedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('SubmitForgotPasswordRequestCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
