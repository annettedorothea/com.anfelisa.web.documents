import AbstractDictionaryLookupChangedCommand from "../../../gen/category/commands/AbstractDictionaryLookupChangedCommand";
import {getAppState} from "../../app/App";

export default class DictionaryLookupChangedCommand extends AbstractDictionaryLookupChangedCommand {
    execute() {
        const appState = getAppState();
        this.commandData.dictionaryLookup = !appState.data.dictionaryLookup;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
