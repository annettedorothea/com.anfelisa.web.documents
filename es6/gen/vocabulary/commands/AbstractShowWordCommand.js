import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ShowWordShowWordEvent from "../../../src/vocabulary/events/ShowWordShowWordEvent";

export default class AbstractShowWordCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "vocabulary.ShowWordCommand");
        this.showWord = "showWord";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.showWord:
			promises.push(new ShowWordShowWordEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ShowWordCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
