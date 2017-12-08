import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DisplayNextQuestionEvent from "../../../src/multiplechoice/events/DisplayNextQuestionEvent";

export default class AbstractDisplayNextQuestionCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "multiplechoice.DisplayNextQuestionCommand");
        this.go = "go";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.go:
        	promises.push(new DisplayNextQuestionEvent(this.commandData).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
