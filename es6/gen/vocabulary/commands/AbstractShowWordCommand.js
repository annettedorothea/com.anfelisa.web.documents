import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ShowWordEvent from "../../../src/vocabulary/events/ShowWordEvent";

export default class AbstractShowWordCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "vocabulary.ShowWordCommand");
        this.showWord = "showWord";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.showWord:
			promises.push(new ShowWordEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ShowWordCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
