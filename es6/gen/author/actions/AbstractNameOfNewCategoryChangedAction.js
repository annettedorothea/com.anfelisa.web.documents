import Action from "../../ace/SynchronousAction";
import NameOfNewCategoryChangedCommand from "../../../src/author/commands/NameOfNewCategoryChangedCommand";

export default class AbstractNameOfNewCategoryChangedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.NameOfNewCategoryChangedAction', false);
    }

	getCommand() {
		return new NameOfNewCategoryChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
