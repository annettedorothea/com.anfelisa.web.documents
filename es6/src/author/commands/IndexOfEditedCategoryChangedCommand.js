import AbstractIndexOfEditedCategoryChangedCommand from "../../../gen/author/commands/AbstractIndexOfEditedCategoryChangedCommand";

export default class IndexOfEditedCategoryChangedCommand extends AbstractIndexOfEditedCategoryChangedCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.index = this.commandParam.index;
            this.commandData.outcome = this.ok;
            resolve();
        });
    }
}

/*       S.D.G.       */
