import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadCardsOkEvent from "../../../src/author/events/LoadCardsOkEvent";
import LoadCardsUnauthorizedEvent from "../../../src/author/events/LoadCardsUnauthorizedEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractLoadCardsCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.LoadCardsCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadCardsOkEvent(this.commandData).publish());
			break;
		case this.unauthorized:
			promises.push(new LoadCardsUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadCardsCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
