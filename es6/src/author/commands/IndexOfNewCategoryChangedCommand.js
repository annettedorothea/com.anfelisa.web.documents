import AbstractIndexOfNewCategoryChangedCommand from "../../../gen/author/commands/AbstractIndexOfNewCategoryChangedCommand";

export default class IndexOfNewCategoryChangedCommand extends AbstractIndexOfNewCategoryChangedCommand {
    execute() {
        return new Promise((resolve, reject) => {
            this.commandData.index = this.commandParam.index;
            this.commandData.outcome = this.ok;
            resolve();
        });
    }
}

/*       S.D.G.       */
