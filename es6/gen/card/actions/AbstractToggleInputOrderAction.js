import Action from "../../ace/SynchronousAction";
import ToggleInputOrderCommand from "../../../src/card/commands/ToggleInputOrderCommand";

export default class AbstractToggleInputOrderAction extends Action {

    constructor( naturalInputOrder) {
        super({naturalInputOrder}, 'card.ToggleInputOrderAction');
    }
    
	getCommand() {
		return new ToggleInputOrderCommand(this.actionData);
	}


}

/*       S.D.G.       */
