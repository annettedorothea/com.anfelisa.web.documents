import AbstractEditCategoryCommand from "../../../gen/author/commands/AbstractEditCategoryCommand";

export default class EditCategoryCommand extends AbstractEditCategoryCommand {
    execute() {
        this.commandData.categoryId = this.commandParam.categoryId;
        this.commandData.index = this.commandParam.index;
        this.commandData.name = this.commandParam.name;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
