import AbstractCancelDeleteCategoryCommand from "../../../gen/category/commands/AbstractCancelDeleteCategoryCommand";

export default class CancelDeleteCategoryCommand extends AbstractCancelDeleteCategoryCommand {
    execute() {
        this.commandData.displayDeleteCategory = false;
    	this.addOkOutcome();
    }
}

/*       S.D.G.       */
