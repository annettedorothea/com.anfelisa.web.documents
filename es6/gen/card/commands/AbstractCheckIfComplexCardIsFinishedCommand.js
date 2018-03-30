import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CheckIfComplexCardIsFinishedComplexCardIsFinishedEvent from "../../../src/card/events/CheckIfComplexCardIsFinishedComplexCardIsFinishedEvent";

export default class AbstractCheckIfComplexCardIsFinishedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "card.CheckIfComplexCardIsFinishedCommand");
        this.complexCardIsFinished = "complexCardIsFinished";
        this.complexCardIsNotFinished = "complexCardIsNotFinished";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.complexCardIsFinished:
			promises.push(new CheckIfComplexCardIsFinishedComplexCardIsFinishedEvent(this.commandData).publish());
			break;
		case this.complexCardIsNotFinished:
			break;
		default:
			return new Promise((resolve, reject) => {reject('CheckIfComplexCardIsFinishedCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
