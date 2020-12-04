import AbstractUpdateCategoryCommand from "../../../gen/category/commands/AbstractUpdateCategoryCommand";

export default class UpdateCategoryCommand extends AbstractUpdateCategoryCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.addOkOutcome();
        this.commandData.displayEditCategory = false;
        resolve();
    }
    handleError(resolve) {
        this.addErrorOutcome();
        this.commandData.displayEditCategory = false;
        resolve();
    }
}

/*       S.D.G.       */
