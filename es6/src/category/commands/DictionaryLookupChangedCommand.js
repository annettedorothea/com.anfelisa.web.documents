import AbstractDictionaryLookupChangedCommand
    from "../../../gen/category/commands/AbstractDictionaryLookupChangedCommand";
import {getState} from "../../../gen/ace/AppState";

export default class DictionaryLookupChangedCommand extends AbstractDictionaryLookupChangedCommand {
    execute() {
        this.commandData.dictionaryLookup = !getState().data.categoryTree.dictionaryLookup;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
