import Action from "../../ace/SynchronousAction";
import DisplayWantedCommand from "../../../src/box/commands/DisplayWantedCommand";

export default class AbstractDisplayWantedAction extends Action {

    constructor() {
        super({}, 'box.DisplayWantedAction');
    }

	getCommand() {
		return new DisplayWantedCommand(this.actionData);
	}


}

/*       S.D.G.       */
