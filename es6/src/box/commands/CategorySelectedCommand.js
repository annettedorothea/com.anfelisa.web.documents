import AbstractCategorySelectedCommand from "../../../gen/box/commands/AbstractCategorySelectedCommand";

export default class CategorySelectedCommand extends AbstractCategorySelectedCommand {
    execute() {
        this.commandData.selectedCategoryId = this.commandParam.selectedCategoryId;
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
