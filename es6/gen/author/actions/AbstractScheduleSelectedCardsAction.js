import Action from "../../ace/AsynchronousAction";
import ScheduleSelectedCardsCommand from "../../../src/author/commands/ScheduleSelectedCardsCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractScheduleSelectedCardsAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.ScheduleSelectedCardsAction');
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new ScheduleSelectedCardsCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
