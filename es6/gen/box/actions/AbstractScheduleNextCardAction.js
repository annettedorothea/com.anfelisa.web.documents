import Action from "../../ace/AsynchronousAction";
import ScheduleNextCardCommand from "../../../src/box/commands/ScheduleNextCardCommand";

export default class AbstractScheduleNextCardAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.ScheduleNextCardAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new ScheduleNextCardCommand(this.actionData);
	}

		preUpdateUI() {
		}
	
		postUpdateUI() {
		}

}

/*       S.D.G.       */
