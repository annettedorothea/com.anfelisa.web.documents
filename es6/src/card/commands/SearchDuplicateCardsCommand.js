import AbstractSearchDuplicateCardsCommand from "../../../gen/card/commands/AbstractSearchDuplicateCardsCommand";
import {getState} from "../../../gen/ace/ReadAppState";

export default class SearchDuplicateCardsCommand extends AbstractSearchDuplicateCardsCommand {

    initCommandData() {
        const data = getState().data;
        this.commandData.given = data.cardView.newCard.given;
        this.commandData.wanted = data.cardView.newCard.wanted;
        this.commandData.naturalInputOrder = data.cardView.naturalInputOrder;
        this.commandData.categoryId = data.categoryTree.selectedCategory.categoryId;
        return true;
    }

    handleResponse(resolve, reject) {
        this.commandData.cardDuplicates = this.commandData.cardList;
        this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
