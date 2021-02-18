import AbstractUpdateCategoryCommand from "../../../gen/category/commands/AbstractUpdateCategoryCommand";

export default class UpdateCategoryCommand extends AbstractUpdateCategoryCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.addOkOutcome();
        this.commandData.categoryDialog = null;
        resolve();
    }
    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */
