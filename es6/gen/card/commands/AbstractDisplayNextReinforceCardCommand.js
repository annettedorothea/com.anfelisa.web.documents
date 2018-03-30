import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DisplayNextReinforceCardNextEvent from "../../../src/card/events/DisplayNextReinforceCardNextEvent";
import DisplayNextReinforceCardFinishedEvent from "../../../src/card/events/DisplayNextReinforceCardFinishedEvent";

export default class AbstractDisplayNextReinforceCardCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "card.DisplayNextReinforceCardCommand");
        this.next = "next";
        this.finished = "finished";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.next:
			promises.push(new DisplayNextReinforceCardNextEvent(this.commandData).publish());
			break;
		case this.finished:
			promises.push(new DisplayNextReinforceCardFinishedEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('DisplayNextReinforceCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
