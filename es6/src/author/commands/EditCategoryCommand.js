import AbstractEditCategoryCommand from "../../../gen/author/commands/AbstractEditCategoryCommand";

export default class EditCategoryCommand extends AbstractEditCategoryCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.categoryId = this.commandParam.categoryId;
            this.commandData.index = this.commandParam.index;
            this.commandData.name = this.commandParam.name;
            this.commandData.outcome = this.ok;
            resolve();
        });
    }
}

/*       S.D.G.       */
