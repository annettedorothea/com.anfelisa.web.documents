import Action from "../../ace/SynchronousAction";
import NameOfNewCategoryChangedCommand from "../../../src/author/commands/NameOfNewCategoryChangedCommand";

export default class AbstractNameOfNewCategoryChangedAction extends Action {

    constructor() {
        super({}, 'author.NameOfNewCategoryChangedAction');
    }

	getCommand() {
		return new NameOfNewCategoryChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
