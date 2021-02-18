import AbstractDeleteCategoryClickCommand from "../../../gen/category/commands/AbstractDeleteCategoryClickCommand";

export default class DeleteCategoryClickCommand extends AbstractDeleteCategoryClickCommand {
    execute() {
        this.commandData.deleteCategoryDialog = {
            display: true,
        };
    	this.addOkOutcome();
    }
}

/*       S.D.G.       */
