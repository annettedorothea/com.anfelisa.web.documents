import Action from "../../ace/AsynchronousAction";
import ScheduleSelectedCardsCommand from "../../../src/card/commands/ScheduleSelectedCardsCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractScheduleSelectedCardsAction extends Action {

    constructor() {
        super({}, 'card.ScheduleSelectedCardsAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new ScheduleSelectedCardsCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
