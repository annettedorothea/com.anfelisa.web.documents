import AbstractMoveCardsCommand from "../../../gen/card/commands/AbstractMoveCardsCommand";
import {getAppState} from "../../app/App";

export default class MoveCardsCommand extends AbstractMoveCardsCommand {

    initCommandData() {
        const data = getAppState().data;
        this.commandData.cardIdList = data.movedCardIds;
        this.commandData.categoryId = data.dropTargetCategoryId;
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
