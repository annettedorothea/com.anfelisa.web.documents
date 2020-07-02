import AbstractCancelEditCategoryCommand from "../../../gen/category/commands/AbstractCancelEditCategoryCommand";

export default class CancelEditCategoryCommand extends AbstractCancelEditCategoryCommand {
    execute() {
        this.commandData.categoryName = "";
        this.commandData.displayEditCategory = false;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
