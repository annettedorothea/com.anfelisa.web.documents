import Action from "../../ace/SynchronousAction";
import DisplayWantedCommand from "../../../src/box/commands/DisplayWantedCommand";

export default class AbstractDisplayWantedAction extends Action {

    constructor( wantedItemsLength, index, hasImage) {
        super({wantedItemsLength, index, hasImage}, 'box.DisplayWantedAction');
    }
    
	getCommand() {
		return new DisplayWantedCommand(this.actionData);
	}


}

/*       S.D.G.       */
