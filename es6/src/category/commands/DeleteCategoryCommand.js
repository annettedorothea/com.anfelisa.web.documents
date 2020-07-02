import AbstractDeleteCategoryCommand from "../../../gen/category/commands/AbstractDeleteCategoryCommand";

export default class DeleteCategoryCommand extends AbstractDeleteCategoryCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.displayDeleteCategory = false;
        this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve) {
        this.commandData.outcome = this.error;
        this.commandData.displayDeleteCategory = false;
        resolve();
    }
}

/*       S.D.G.       */
