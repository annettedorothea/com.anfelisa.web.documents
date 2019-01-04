import AbstractSearchDuplicateCardsCommand from "../../../gen/card/commands/AbstractSearchDuplicateCardsCommand";

export default class SearchDuplicateCardsCommand extends AbstractSearchDuplicateCardsCommand {

    initCommandData() {
        return true;
    }

    handleResponse(resolve, reject) {
    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
