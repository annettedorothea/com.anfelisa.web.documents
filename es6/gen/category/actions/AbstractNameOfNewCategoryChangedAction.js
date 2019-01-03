import Action from "../../ace/SynchronousAction";
import NameOfNewCategoryChangedCommand from "../../../src/category/commands/NameOfNewCategoryChangedCommand";

export default class AbstractNameOfNewCategoryChangedAction extends Action {

    constructor( newCategoryName) {
        super({newCategoryName}, 'category.NameOfNewCategoryChangedAction');
    }
    
	getCommand() {
		return new NameOfNewCategoryChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
