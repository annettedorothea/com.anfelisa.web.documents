import Action from "../../ace/AsynchronousAction";
import ScheduleNextCardCommand from "../../../src/box/commands/ScheduleNextCardCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractScheduleNextCardAction extends Action {

    constructor() {
        super({}, 'box.ScheduleNextCardAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new ScheduleNextCardCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
