import Action from "../../ace/AsynchronousAction";
import ScheduleNextCardCommand from "../../../src/box/commands/ScheduleNextCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractScheduleNextCardAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.ScheduleNextCardAction', false, false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new ScheduleNextCardCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
