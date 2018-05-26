import AbstractCategorySelectedCommand from "../../../gen/box/commands/AbstractCategorySelectedCommand";

export default class CategorySelectedCommand extends AbstractCategorySelectedCommand {
    execute() {
        this.commandData.categoryId = this.commandParam.categoryId;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
