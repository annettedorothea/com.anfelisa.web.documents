import Action from "../../ace/SynchronousAction";
import ScheduleSelectedCardsCommand from "../../../src/author/commands/ScheduleSelectedCardsCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractScheduleSelectedCardsAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.ScheduleSelectedCardsAction');
    }

	getCommand() {
		return new ScheduleSelectedCardsCommand(this.actionData);
	}


}

/*       S.D.G.       */
