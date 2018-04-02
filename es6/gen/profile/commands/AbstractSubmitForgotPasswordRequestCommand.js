import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import SubmitForgotPasswordRequestDataInvalidEvent from "../../../src/profile/events/SubmitForgotPasswordRequestDataInvalidEvent";
import SubmitForgotPasswordRequestOkEvent from "../../../src/profile/events/SubmitForgotPasswordRequestOkEvent";

export default class AbstractSubmitForgotPasswordRequestCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.SubmitForgotPasswordRequestCommand");
        this.dataInvalid = "dataInvalid";
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.dataInvalid:
			promises.push(new SubmitForgotPasswordRequestDataInvalidEvent(this.commandData).publish());
			break;
		case this.ok:
			promises.push(new SubmitForgotPasswordRequestOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('SubmitForgotPasswordRequestCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
