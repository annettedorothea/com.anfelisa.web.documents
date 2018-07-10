import Action from "../../ace/AsynchronousAction";
import LoadBoxStatisticsCommand from "../../../src/box/commands/LoadBoxStatisticsCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadBoxStatisticsAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.LoadBoxStatisticsAction', false, false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new LoadBoxStatisticsCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
