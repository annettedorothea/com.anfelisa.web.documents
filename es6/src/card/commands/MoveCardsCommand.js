import AbstractMoveCardsCommand from "../../../gen/card/commands/AbstractMoveCardsCommand";

export default class MoveCardsCommand extends AbstractMoveCardsCommand {

    validateCommandData() {
        this.commandData.cardIdList = this.commandData.movedCardIds;
        this.commandData.categoryId = this.commandData.dropTargetCategoryId;
    	return true;
    }

    handleResponse(resolve) {
        this.commandData.movedCardIds = undefined;
        this.commandData.selectedCategoryId = this.commandData.categoryId;
        this.commandData.rootCategoryId = this.commandData.rootCategory ? this.commandData.rootCategory.categoryId : "";
    	this.addOkOutcome();
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.message);
    }
}

/*       S.D.G.       */
