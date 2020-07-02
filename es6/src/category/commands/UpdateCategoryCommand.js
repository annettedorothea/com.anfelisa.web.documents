import AbstractUpdateCategoryCommand from "../../../gen/category/commands/AbstractUpdateCategoryCommand";

export default class UpdateCategoryCommand extends AbstractUpdateCategoryCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.outcome = this.ok;
        this.commandData.displayEditCategory = false;
        resolve();
    }
    handleError(resolve) {
        this.commandData.outcome = this.error;
        this.commandData.displayEditCategory = false;
        resolve();
    }
}

/*       S.D.G.       */
