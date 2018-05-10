import Action from "../../ace/SynchronousAction";
import IndexOfNewCategoryChangedCommand from "../../../src/author/commands/IndexOfNewCategoryChangedCommand";

export default class AbstractIndexOfNewCategoryChangedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.IndexOfNewCategoryChangedAction', false);
    }

	getCommand() {
		return new IndexOfNewCategoryChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
