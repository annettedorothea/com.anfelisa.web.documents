import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import FillBoxWithCardsAction from "../../../src/profile/actions/FillBoxWithCardsAction";

export default class AbstractSaveBoxConfigCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.SaveBoxConfigCommand");
        this.saved = "saved";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.saved:
			promises.push(new TriggerAction(new FillBoxWithCardsAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('SaveBoxConfigCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
