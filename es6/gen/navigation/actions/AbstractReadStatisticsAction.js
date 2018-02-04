import Action from "../../ace/Action";
import ReadStatisticsCommand from "../../../src/navigation/commands/ReadStatisticsCommand";

export default class AbstractReadStatisticsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'navigation.ReadStatisticsAction', false);
    }

	getCommand() {
		return new ReadStatisticsCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
