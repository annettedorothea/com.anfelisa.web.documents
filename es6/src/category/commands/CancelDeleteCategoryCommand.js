import AbstractCancelDeleteCategoryCommand from "../../../gen/category/commands/AbstractCancelDeleteCategoryCommand";

export default class CancelDeleteCategoryCommand extends AbstractCancelDeleteCategoryCommand {
    execute() {
        this.commandData.deleteCategoryDialog = {
            display: false,
        };
    	this.addOkOutcome();
    }
}

/*       S.D.G.       */
