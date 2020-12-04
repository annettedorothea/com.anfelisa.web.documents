import AbstractDeleteCategoryCommand from "../../../gen/category/commands/AbstractDeleteCategoryCommand";

export default class DeleteCategoryCommand extends AbstractDeleteCategoryCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.displayDeleteCategory = false;
        this.addOkOutcome();
    	resolve();
    }
    handleError(resolve) {
        this.addErrorOutcome();
        this.commandData.displayDeleteCategory = false;
        resolve();
    }
}

/*       S.D.G.       */
