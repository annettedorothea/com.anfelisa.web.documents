import AbstractToggleUseDictionaryCommand from "../../../gen/card/commands/AbstractToggleUseDictionaryCommand";

export default class ToggleUseDictionaryCommand extends AbstractToggleUseDictionaryCommand {
    execute() {
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
