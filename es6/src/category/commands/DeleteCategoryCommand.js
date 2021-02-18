import AbstractDeleteCategoryCommand from "../../../gen/category/commands/AbstractDeleteCategoryCommand";

export default class DeleteCategoryCommand extends AbstractDeleteCategoryCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.deleteCategoryDialog = {
            display: false,
        };
        this.addOkOutcome();
    	resolve();
    }
    handleError(resolve, reject) {
        reject(this.commandData.message);
    }
}

/*       S.D.G.       */
