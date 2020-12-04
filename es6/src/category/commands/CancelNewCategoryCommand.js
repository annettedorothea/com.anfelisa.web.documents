import AbstractCancelNewCategoryCommand from "../../../gen/category/commands/AbstractCancelNewCategoryCommand";

export default class CancelNewCategoryCommand extends AbstractCancelNewCategoryCommand {
    execute() {
        this.commandData.categoryName = "";
        this.commandData.displayNewCategory = false;
    	this.addOkOutcome();
    }
}

/*       S.D.G.       */
