import Action from "../../ace/SynchronousAction";
import CancelEditCategoryCommand from "../../../src/author/commands/CancelEditCategoryCommand";

export default class AbstractCancelEditCategoryAction extends Action {

    constructor() {
        super({}, 'author.CancelEditCategoryAction');
    }

	getCommand() {
		return new CancelEditCategoryCommand(this.actionData);
	}


}

/*       S.D.G.       */
