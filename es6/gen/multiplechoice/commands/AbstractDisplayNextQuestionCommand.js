import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DisplayNextQuestionGoEvent from "../../../src/multiplechoice/events/DisplayNextQuestionGoEvent";

export default class AbstractDisplayNextQuestionCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "multiplechoice.DisplayNextQuestionCommand");
        this.go = "go";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.go:
			promises.push(new DisplayNextQuestionGoEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('DisplayNextQuestionCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
