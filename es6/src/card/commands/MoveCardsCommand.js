import AbstractMoveCardsCommand from "../../../gen/card/commands/AbstractMoveCardsCommand";
import {getState} from "../../../gen/ace/ReadAppState";

export default class MoveCardsCommand extends AbstractMoveCardsCommand {

    validateCommandData() {
        const data = getState().data;
        this.commandData.cardIdList = data.cardView.movedCardIds;
        this.commandData.categoryId = data.categoryTree.dropTargetCategoryId;
    	return true;
    }

    handleResponse(resolve) {
        this.commandData.selectedCategoryId = this.commandData.categoryId;
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
