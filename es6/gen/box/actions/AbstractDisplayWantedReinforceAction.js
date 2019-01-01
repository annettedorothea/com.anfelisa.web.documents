import Action from "../../ace/SynchronousAction";
import DisplayWantedReinforceCommand from "../../../src/box/commands/DisplayWantedReinforceCommand";

export default class AbstractDisplayWantedReinforceAction extends Action {

    constructor() {
        super({}, 'box.DisplayWantedReinforceAction');
    }

	getCommand() {
		return new DisplayWantedReinforceCommand(this.actionData);
	}


}

/*       S.D.G.       */
