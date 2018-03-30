import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";

export default class AbstractInitCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.InitCommand");
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		default:
			return new Promise((resolve, reject) => {reject('InitCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
