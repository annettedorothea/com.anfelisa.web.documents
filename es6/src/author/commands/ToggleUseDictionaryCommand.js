import AbstractToggleUseDictionaryCommand from "../../../gen/author/commands/AbstractToggleUseDictionaryCommand";

export default class ToggleUseDictionaryCommand extends AbstractToggleUseDictionaryCommand {
    execute() {
        this.commandData.useDictionary = !this.commandData.useDictionary;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
