import AbstractToggelUseDictionaryCommand from "../../../gen/author/commands/AbstractToggelUseDictionaryCommand";

export default class ToggelUseDictionaryCommand extends AbstractToggelUseDictionaryCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
