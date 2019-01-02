import Action from "../../ace/SynchronousAction";
import CancelNewCategoryCommand from "../../../src/author/commands/CancelNewCategoryCommand";

export default class AbstractCancelNewCategoryAction extends Action {

    constructor() {
        super({}, 'author.CancelNewCategoryAction');
    }
    
	getCommand() {
		return new CancelNewCategoryCommand(this.actionData);
	}


}

/*       S.D.G.       */
