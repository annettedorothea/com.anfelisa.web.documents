import AbstractIndexOfEditedCategoryChangedCommand
    from "../../../gen/author/commands/AbstractIndexOfEditedCategoryChangedCommand";

export default class IndexOfEditedCategoryChangedCommand extends AbstractIndexOfEditedCategoryChangedCommand {
    execute() {
        this.commandData.index = this.commandParam.index;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
