import AbstractMoveCardsCommand from "../../../gen/card/commands/AbstractMoveCardsCommand";
import {getState} from "../../../gen/ace/AppState";

export default class MoveCardsCommand extends AbstractMoveCardsCommand {

    initCommandData() {
        const data = getState().data;
        this.commandData.cardIdList = data.cardView.movedCardIds;
        this.commandData.categoryId = data.categoryTree.dropTargetCategoryId;
    	return true;
    }

    handleResponse(resolve, reject) {
        this.commandData.selectedCategoryId = this.commandData.categoryId;
    	this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
