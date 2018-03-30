import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ValidateRequiredFieldFieldEmptyEvent from "../../../src/common/events/ValidateRequiredFieldFieldEmptyEvent";
import ValidateRequiredFieldFieldNotEmptyEvent from "../../../src/common/events/ValidateRequiredFieldFieldNotEmptyEvent";

export default class AbstractValidateRequiredFieldCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.ValidateRequiredFieldCommand");
        this.fieldEmpty = "fieldEmpty";
        this.fieldNotEmpty = "fieldNotEmpty";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.fieldEmpty:
			promises.push(new ValidateRequiredFieldFieldEmptyEvent(this.commandData).publish());
			break;
		case this.fieldNotEmpty:
			promises.push(new ValidateRequiredFieldFieldNotEmptyEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ValidateRequiredFieldCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
