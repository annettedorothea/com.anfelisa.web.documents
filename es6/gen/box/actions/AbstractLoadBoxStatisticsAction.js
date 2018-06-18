import Action from "../../ace/AsynchronousAction";
import LoadBoxStatisticsCommand from "../../../src/box/commands/LoadBoxStatisticsCommand";

export default class AbstractLoadBoxStatisticsAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.LoadBoxStatisticsAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new LoadBoxStatisticsCommand(this.actionData);
	}

		preUpdateUI() {
		}
	
		postUpdateUI() {
		}

}

/*       S.D.G.       */
