import AbstractSearchDuplicateCardsCommand from "../../../gen/card/commands/AbstractSearchDuplicateCardsCommand";
import {getAppState} from "../../app/App";

export default class SearchDuplicateCardsCommand extends AbstractSearchDuplicateCardsCommand {

    initCommandData() {
        const data = getAppState().data;
        this.commandData.given = data.newCard.given;
        this.commandData.wanted = data.newCard.wanted;
        this.commandData.naturalInputOrder = data.naturalInputOrder;
        this.commandData.categoryId = data.selectedCategory.categoryId;
        return true;
    }

    handleResponse(resolve, reject) {
        this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
