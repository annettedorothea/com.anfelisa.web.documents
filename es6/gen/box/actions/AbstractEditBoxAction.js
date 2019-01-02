import Action from "../../ace/SynchronousAction";
import EditBoxCommand from "../../../src/box/commands/EditBoxCommand";

export default class AbstractEditBoxAction extends Action {

    constructor( maxInterval) {
        super({maxInterval}, 'box.EditBoxAction');
    }
    
	getCommand() {
		return new EditBoxCommand(this.actionData);
	}


}

/*       S.D.G.       */
