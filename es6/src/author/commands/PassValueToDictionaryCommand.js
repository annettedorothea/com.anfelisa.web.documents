import AbstractPassValueToDictionaryCommand from "../../../gen/author/commands/AbstractPassValueToDictionaryCommand";

export default class PassValueToDictionaryCommand extends AbstractPassValueToDictionaryCommand {
    execute() {
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
