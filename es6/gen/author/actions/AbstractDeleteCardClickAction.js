import Action from "../../ace/SynchronousAction";
import DeleteCardClickCommand from "../../../src/author/commands/DeleteCardClickCommand";

export default class AbstractDeleteCardClickAction extends Action {

    constructor() {
        super({}, 'author.DeleteCardClickAction');
    }
    
	getCommand() {
		return new DeleteCardClickCommand(this.actionData);
	}


}

/*       S.D.G.       */
