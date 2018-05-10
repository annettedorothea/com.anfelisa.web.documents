import Action from "../../ace/SynchronousAction";
import NameOfEditedCategoryChangedCommand from "../../../src/author/commands/NameOfEditedCategoryChangedCommand";

export default class AbstractNameOfEditedCategoryChangedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.NameOfEditedCategoryChangedAction', false);
    }

	getCommand() {
		return new NameOfEditedCategoryChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
