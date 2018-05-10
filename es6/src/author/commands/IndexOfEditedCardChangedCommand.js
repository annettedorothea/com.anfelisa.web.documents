import AbstractIndexOfEditedCardChangedCommand
    from "../../../gen/author/commands/AbstractIndexOfEditedCardChangedCommand";

export default class IndexOfEditedCardChangedCommand extends AbstractIndexOfEditedCardChangedCommand {
    execute() {
        this.commandData.index = this.commandParam.index;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
