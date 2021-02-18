import AbstractCreateCategoryCommand from "../../../gen/category/commands/AbstractCreateCategoryCommand";

export default class CreateCategoryCommand extends AbstractCreateCategoryCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.addOkOutcome();
        this.commandData.displayNewCategory = false;
        this.commandData.selectedCategoryId = this.commandData.parentCategoryId;
        this.commandData.categoryIdToBeExpanded = this.commandData.parentCategoryId;
        this.commandData.categoryDialog = null;
        resolve();
    }

    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */
