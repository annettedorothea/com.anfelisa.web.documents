import Action from "../../ace/SynchronousAction";
import EditCategoryCommand from "../../../src/author/commands/EditCategoryCommand";

export default class AbstractEditCategoryAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.EditCategoryAction', false);
    }

	getCommand() {
		return new EditCategoryCommand(this.actionData);
	}


}

/*       S.D.G.       */