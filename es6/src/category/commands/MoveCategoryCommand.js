import AbstractMoveCategoryCommand from "../../../gen/category/commands/AbstractMoveCategoryCommand";

export default class MoveCategoryCommand extends AbstractMoveCategoryCommand {

    validateCommandData() {
    	return true;
    }

    handleResponse(resolve) {
        this.commandData.selectedCategoryId = this.commandData.targetCategoryId;
        this.commandData.movedCategory = [];
        this.addOkOutcome();

    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
