import AbstractCreateCategoryCommand from "../../../gen/category/commands/AbstractCreateCategoryCommand";

export default class CreateCategoryCommand extends AbstractCreateCategoryCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.outcome = this.ok;
        this.commandData.displayNewCategory = false;
        this.commandData.selectedCategoryId = this.commandData.uuid;
        resolve();
    }

    handleError(resolve) {
        this.commandData.outcome = this.error;
        this.commandData.displayNewCategory = false;
        resolve();
    }
}

/*       S.D.G.       */
