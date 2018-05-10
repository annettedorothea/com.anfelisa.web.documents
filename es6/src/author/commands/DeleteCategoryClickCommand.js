import AbstractDeleteCategoryClickCommand from "../../../gen/author/commands/AbstractDeleteCategoryClickCommand";

export default class DeleteCategoryClickCommand extends AbstractDeleteCategoryClickCommand {
    execute() {
        this.commandData.categoryId = this.commandParam.categoryId;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
