import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractRepeatComplexCardCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "vocabulary.RepeatComplexCardCommand");
        this.go = "go";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.go:
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('RepeatComplexCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
