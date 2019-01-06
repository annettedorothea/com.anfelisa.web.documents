import Action from "../../ace/SynchronousAction";
import ItemDroppedCommand from "../../../src/category/commands/ItemDroppedCommand";

export default class AbstractItemDroppedAction extends Action {

    constructor() {
        super({}, 'category.ItemDroppedAction');
    }
    
	getCommand() {
		return new ItemDroppedCommand(this.actionData);
	}


}

/*       S.D.G.       */