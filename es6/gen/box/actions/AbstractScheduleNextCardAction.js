import Action from "../../ace/AsynchronousAction";
import ScheduleNextCardCommand from "../../../src/box/commands/ScheduleNextCardCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractScheduleNextCardAction extends Action {

    constructor() {
        super({}, 'box.ScheduleNextCardAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new ScheduleNextCardCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
