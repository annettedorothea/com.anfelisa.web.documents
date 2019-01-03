import AbstractDeleteCategoryClickCommand from "../../../gen/category/commands/AbstractDeleteCategoryClickCommand";

export default class DeleteCategoryClickCommand extends AbstractDeleteCategoryClickCommand {
    execute() {
        this.commandData.displayDeleteCategory = true;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
