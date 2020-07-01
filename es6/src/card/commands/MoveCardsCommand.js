import AbstractMoveCardsCommand from "../../../gen/card/commands/AbstractMoveCardsCommand";

export default class MoveCardsCommand extends AbstractMoveCardsCommand {

    validateCommandData() {
        this.commandData.cardIdList = this.commandData.movedCardIds;
        this.commandData.categoryId = this.commandData.dropTargetCategoryId;
    	return true;
    }

    handleResponse(resolve) {
        this.commandData.selectedCategoryId = this.commandData.categoryId;
        this.commandData.rootCategoryId = this.commandData.rootCategory ? this.commandData.rootCategory.categoryId : "";
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
