import AbstractSearchDuplicateCardsCommand from "../../../gen/card/commands/AbstractSearchDuplicateCardsCommand";

export default class SearchDuplicateCardsCommand extends AbstractSearchDuplicateCardsCommand {

    validateCommandData() {
        return true;
    }

    handleResponse(resolve) {
        this.commandData.cardDuplicates = this.commandData.cardList;
        this.addOkOutcome();
        resolve();
    }
    handleError(resolve, reject) {
        reject(this.commandData.error);
    }
}

/*       S.D.G.       */
