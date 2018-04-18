import Action from "../../ace/Action";
import LoadDashboardCommand from "../../../src/common/commands/LoadDashboardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadDashboardAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.LoadDashboardAction', false);
    }

	getCommand() {
		return new LoadDashboardCommand(this.actionData);
	}

	preUpdateUI() {
		CommonView.displaySpinner(this.actionParam);
	}

	postUpdateUI() {
		CommonView.hideSpinner(this.actionParam);
	}

}

/*       S.D.G.       */
