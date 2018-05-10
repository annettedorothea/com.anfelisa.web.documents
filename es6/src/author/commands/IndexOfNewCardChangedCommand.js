import AbstractIndexOfNewCardChangedCommand from "../../../gen/author/commands/AbstractIndexOfNewCardChangedCommand";

export default class IndexOfNewCardChangedCommand extends AbstractIndexOfNewCardChangedCommand {
    execute() {
        this.commandData.index = this.commandParam.index;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
