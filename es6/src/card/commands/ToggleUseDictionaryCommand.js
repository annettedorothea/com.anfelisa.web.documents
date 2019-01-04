import AbstractToggleUseDictionaryCommand from "../../../gen/card/commands/AbstractToggleUseDictionaryCommand";
import {getAppState} from "../../app/App";

export default class ToggleUseDictionaryCommand extends AbstractToggleUseDictionaryCommand {
    execute() {
        const data = getAppState().data;
    	this.commandData.useDictionary = !data.useDictionary;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
