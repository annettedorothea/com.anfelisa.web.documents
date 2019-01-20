import AbstractToggleUseDictionaryCommand from "../../../gen/card/commands/AbstractToggleUseDictionaryCommand";
import {getState} from "../../../gen/ace/AppState";

export default class ToggleUseDictionaryCommand extends AbstractToggleUseDictionaryCommand {
    execute() {
        const data = getState().data.cardView;
    	this.commandData.useDictionary = !data.useDictionary;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
