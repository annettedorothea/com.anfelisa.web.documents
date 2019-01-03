import Action from "../../ace/SynchronousAction";
import DictionaryLookupChangedCommand from "../../../src/category/commands/DictionaryLookupChangedCommand";

export default class AbstractDictionaryLookupChangedAction extends Action {

    constructor() {
        super({}, 'category.DictionaryLookupChangedAction');
    }
    
	getCommand() {
		return new DictionaryLookupChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
