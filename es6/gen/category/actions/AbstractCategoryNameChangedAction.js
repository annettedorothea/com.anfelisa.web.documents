import Action from "../../ace/SynchronousAction";
import CategoryNameChangedCommand from "../../../src/category/commands/CategoryNameChangedCommand";

export default class AbstractCategoryNameChangedAction extends Action {

    constructor( categoryName) {
        super({categoryName}, 'category.CategoryNameChangedAction');
    }
    
	getCommand() {
		return new CategoryNameChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */