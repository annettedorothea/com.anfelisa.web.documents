import Action from "../../ace/SynchronousAction";
import DeselectTreeItemCommand from "../../../src/category/commands/DeselectTreeItemCommand";

export default class AbstractDeselectTreeItemAction extends Action {

    constructor() {
        super({}, 'category.DeselectTreeItemAction');
    }
    
	getCommand() {
		return new DeselectTreeItemCommand(this.actionData);
	}


}

/*       S.D.G.       */
