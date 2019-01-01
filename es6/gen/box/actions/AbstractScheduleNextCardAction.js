import Action from "../../ace/SynchronousAction";
import ScheduleNextCardCommand from "../../../src/box/commands/ScheduleNextCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractScheduleNextCardAction extends Action {

    constructor() {
        super({}, 'box.ScheduleNextCardAction');
    }

	getCommand() {
		return new ScheduleNextCardCommand(this.actionData);
	}


}

/*       S.D.G.       */
