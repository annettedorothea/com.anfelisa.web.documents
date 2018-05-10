import Action from "../../ace/SynchronousAction";
import IndexOfEditedCategoryChangedCommand from "../../../src/author/commands/IndexOfEditedCategoryChangedCommand";

export default class AbstractIndexOfEditedCategoryChangedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.IndexOfEditedCategoryChangedAction', false);
    }

	getCommand() {
		return new IndexOfEditedCategoryChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
