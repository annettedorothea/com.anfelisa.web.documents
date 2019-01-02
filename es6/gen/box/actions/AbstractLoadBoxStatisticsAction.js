import Action from "../../ace/AsynchronousAction";
import LoadBoxStatisticsCommand from "../../../src/box/commands/LoadBoxStatisticsCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadBoxStatisticsAction extends Action {

    constructor( boxId) {
        super({boxId}, 'box.LoadBoxStatisticsAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new LoadBoxStatisticsCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
