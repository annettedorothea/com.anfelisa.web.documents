import Action from "../../ace/SynchronousAction";
import LoadBoxStatisticsCommand from "../../../src/box/commands/LoadBoxStatisticsCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadBoxStatisticsAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.LoadBoxStatisticsAction');
    }

	getCommand() {
		return new LoadBoxStatisticsCommand(this.actionData);
	}


}

/*       S.D.G.       */
