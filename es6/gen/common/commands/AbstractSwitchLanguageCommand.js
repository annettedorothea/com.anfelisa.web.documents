import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import SwitchLanguageOkEvent from "../../../src/common/events/SwitchLanguageOkEvent";
import InitAction from "../../../src/common/actions/InitAction";

export default class AbstractSwitchLanguageCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.SwitchLanguageCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new SwitchLanguageOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new InitAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('SwitchLanguageCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
