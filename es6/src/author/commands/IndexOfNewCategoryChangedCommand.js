import AbstractIndexOfNewCategoryChangedCommand
    from "../../../gen/author/commands/AbstractIndexOfNewCategoryChangedCommand";

export default class IndexOfNewCategoryChangedCommand extends AbstractIndexOfNewCategoryChangedCommand {
    execute() {
        this.commandData.index = this.commandParam.index;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
