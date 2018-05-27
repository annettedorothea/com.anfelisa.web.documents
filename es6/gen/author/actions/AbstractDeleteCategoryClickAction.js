import Action from "../../ace/SynchronousAction";
import DeleteCategoryClickCommand from "../../../src/author/commands/DeleteCategoryClickCommand";

export default class AbstractDeleteCategoryClickAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.DeleteCategoryClickAction', false);
    }

	getCommand() {
		return new DeleteCategoryClickCommand(this.actionData);
	}


}

/*       S.D.G.       */
